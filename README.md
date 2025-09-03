<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>AlexandreSJ - README.md</title><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fira+Code:wght@300..700&display=swap" rel="stylesheet">
    <style>
        *, p{
            color: black;
        }
        body {
            margin: 0;
            padding: 0;
            background: linear-gradient(-45deg, #2a202c, #cdb3d4, #afa4af);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Be Vietnam Pro", sans-serif;
            font-weight: 400;
        }
        .card {
            position: relative;
            margin: 10px auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
            text-align: center;
            overflow: hidden;
            max-width: 80%;
        }
        .shiny::before {
            content: "";
            position: absolute;
            top: 0;
            left: -60%;
            width: 60%;
            height: 100%;
            background: linear-gradient(
                120deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0) 25%,
                rgba(255, 255, 255, 0.3) 50%,
                rgba(255, 255, 255, 0) 75%,
                rgba(255, 255, 255, 0) 100%
            );
            transform: skewX(-25deg);
            animation: shinyEffect 12s 3s infinite;
        }
        @keyframes shinyEffect {
            0% { left: -60%; }
            7% { left: 100%; }
            10% { left: 160%; }
            100% { left: 160%; }
        }
        .btn {
            display: flex;
            gap: 8px;
            justify-content: center;
            cursor: pointer;
            align-items: center;
            background-color: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: .25rem;
            box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
            box-sizing: border-box;
            color: rgba(0, 0, 0, 0.85);
            cursor: pointer;
            display: inline-flex;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.25;
            margin: 5px;
            min-height: 3rem;
            padding: 10px 15px;
            position: relative;
            text-decoration: none;
            transition: all 250ms;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: baseline;
            width: 25%;
        }
        .btn:hover, .btn:focus {
            border-color: rgba(0, 0, 0, 0.15);
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            color: rgba(0, 0, 0, 0.65);
        }
        .btn:hover {
            transform: translateY(-1px);
        }
        .btn:active {
            background-color: #F0F0F1;
            border-color: rgba(0, 0, 0, 0.15);
            box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
            color: rgba(0, 0, 0, 0.65);
            transform: translateY(0);
        }
        img{
            width: 1.5em;
        }
        #skillset{
            width:100%;
        }
    </style>
</head>
<body>
    <h1 align="center">Hi, I'm Alexandre</h1> 
    <div align="center" class="card shiny">
        <h3 align="center">Full stack developer</h3>
        <span>I'm a software developer passionate about building clean, scalable, and reliable solutions. </span>
        <br>
        <span>My focus is on backend development, containerized environments, and modern software practices. </span>
    </div>
    <div align="center" id="skillset">
        <a class="btn" href="https://github.com/AlexandreSJ">
        <img src="assets/github.png" />
        Github
        </a>
        <a class="btn" href="https://www.linkedin.com/in/alexandre-da-silva-junior-b51000196/">
        <img src="assets/linkedin.png" />
        Linkedin
        </a>
    </div>
    <h3 align="center">My skillset</h2>
    <div align="center" id="skillset">
        <div>
            <div class="btn" style="width:78%">
                <img src="assets/hat.png" />
                Computational Science - <span style="color:green">Complete</span> (4 years, finish at 2024)
            </div>
            <div class="btn" style="width:78%">
                <img src="assets/light-bulb.png" />
                Solutions Architecture MBA - <span style="color:blue">WIP</span> (1 year, start in 2026)
            </div>
        </div>
        <div>
            <div class="btn">
                <img src="assets/spring-boot.png" />
                SpringBoot
            </div>
            <div class="btn">
                <img src="assets/nodejs.png" />
                NodeJS
            </div>
            <div class="btn">
                <img src="assets/docker.png" />
                Docker
            </div>
        </div>
        <div>
            <div class="btn">
                <img src="assets/angularjs.png" />
                AngularJS
            </div>
            <div class="btn">
                <img src="assets/react.png" />
                React
            </div>
            <div class="btn">
                <img src="assets/ionic.png" />
                Ionic
            </div>
        </div>
        <div>
            <div class="btn">
                <img src="assets/postgresql.png" />
                PostgreSQL
            </div>
            <div class="btn">
                <img src="assets/oracle.png" />
                Oracle
            </div>
            <div class="btn">
                <img src="assets/mongodb.png" />
                MongoDB
            </div>
        </div>
        <div>
            <div class="btn">
                <img src="assets/unreal-engine.png" />
                UnrealEngine
            </div>
            <div class="btn">
                <img src="assets/game-maker.png" />
                GameMaker
            </div>
            <div class="btn">
                <img src="assets/godot.png" />
                Godot
            </div>
        </div>
    </div>
</body>
</html>
