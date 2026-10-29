// Builds assets/commits.svg: commits per year since the account was created,
// private repos included. Needs a personal token in GITHUB_TOKEN; the default
// Actions token cannot see your private contributions.
import { writeFile, mkdir } from "node:fs/promises";

const token = process.env.GITHUB_TOKEN;
if (!token) {
  console.error("GITHUB_TOKEN is not set");
  process.exit(1);
}

async function gql(query, variables = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? json));
  return json.data;
}

const { viewer } = await gql("{ viewer { login createdAt } }");
const firstYear = new Date(viewer.createdAt).getUTCFullYear();
const thisYear = new Date().getUTCFullYear();

// contributionsCollection spans at most one year, so ask year by year.
// total + restricted matches the number on the profile page: restricted holds
// private commits only when the token cannot see the repo, so nothing is counted twice.
const years = [];
for (let year = firstYear; year <= thisYear; year++) {
  const { viewer: v } = await gql(
    `query($from: DateTime!, $to: DateTime!) {
      viewer { contributionsCollection(from: $from, to: $to) {
        totalCommitContributions restrictedContributionsCount
      } }
    }`,
    { from: `${year}-01-01T00:00:00Z`, to: `${year}-12-31T23:59:59Z` },
  );
  const c = v.contributionsCollection;
  years.push({ year, count: c.totalCommitContributions + c.restrictedContributionsCount });
}

const total = years.reduce((sum, y) => sum + y.count, 0);
const max = Math.max(...years.map((y) => y.count), 1);

const W = 840, H = 300, padX = 40, top = 78, bottom = 44;
const plotH = H - top - bottom;
const slot = (W - padX * 2) / years.length;
const barW = Math.min(56, slot * 0.6);

const bars = years.map((y, i) => {
  const h = Math.max(2, (y.count / max) * plotH);
  const x = padX + slot * i + (slot - barW) / 2;
  const yTop = top + plotH - h;
  return `
    <rect class="bar" x="${x.toFixed(1)}" y="${yTop.toFixed(1)}" width="${barW.toFixed(1)}" height="${h.toFixed(1)}" rx="3"/>
    <text class="value" x="${(x + barW / 2).toFixed(1)}" y="${(yTop - 8).toFixed(1)}">${y.count}</text>
    <text class="year" x="${(x + barW / 2).toFixed(1)}" y="${H - bottom + 22}">${y.year}</text>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${total} commits since ${firstYear}">
  <style>
    text { font-family: "Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace; fill: #1f2328; }
    .title { font-size: 18px; font-weight: 600; fill: #ee0022; }
    .total { font-size: 13px; opacity: .7; }
    .value { font-size: 12px; text-anchor: middle; }
    .year { font-size: 12px; text-anchor: middle; opacity: .7; }
    .bar { fill: #ee0022; }
    .axis { stroke: #1f2328; stroke-opacity: .2; }
    @media (prefers-color-scheme: dark) {
      text { fill: #c9d1d9; }
      .title { fill: #ee0022; }
      .axis { stroke: #c9d1d9; }
    }
  </style>
  <text class="title" x="${padX}" y="32">Commits since ${firstYear}</text>
  <text class="total" x="${padX}" y="54">${total.toLocaleString("en-US")} total · ${new Date().toISOString().slice(0, 10)}</text>
  <line class="axis" x1="${padX}" x2="${W - padX}" y1="${top + plotH}" y2="${top + plotH}"/>${bars}
</svg>
`;

await mkdir("assets", { recursive: true });
await writeFile("assets/commits.svg", svg);
console.log(`${viewer.login}: ${total} commits`, years);
