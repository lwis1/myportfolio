import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
    /* --background-color: #000; */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-dark-color: #10121a;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --white-color: #d2dae2;
    --background-light-color: #f1f1f1;
    --font-light-volor: #a4acc4;
    --font-dark-color: #313331;
    --font-dark_color-2: #151515;
    --sidebar-dark-color: #191d2b;
}
    *{
        padding:0;
        margin:0;
        box-sizing:border-box ;
        list-style: none;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
        font-size: 1.15rem;
    }

    body{
        background-color: var(--background-dark-color) ;
        color: var(--font-light-volor);
        overflow-x: hidden;
    }
    a{
        font-family: inherit;
        color: inherit;
        font-size: inherit;
        
    }
    h1{
        font-size: 3.1rem;
        color:'--font-light-volor';
        opacity: 0.9;
        text-shadow: 5px 2px black ;
        letter-spacing: 3px;
        padding-bottom: 0.425rem;
        transition: transform 10s  ease-in-out ;
        margin-left: 230px;
        margin-right: 230px;
        span{
            font-size: 3.1rem;
            text-shadow: 7px 2px black ;
            
        }
        
    }
    
    hr{
        color:var(--border-color);
        margin-right: 20px;
        max-width:40%;
        border-color: var(--border-color) ;
        border-left:none;
        border-right:none;
        border-top:1px solid var(--border-color);
        border-bottom:1.5px solid var(--white-color);
        opacity: 0.1;
        transition: all 4s ease-in-out;
        animation: fadeInX 10s infinite alternate;
        :hover{
            border-color:white;
            transform: 1s inherit;
            opacity: 1;
            transform: scale(1.2) initial;
        }
    }
    .hr-2{
        border-top:none;
        max-width:60%;
        border-bottom:1px solid var(--white-color);
        animation: fadeOutX 10s infinite alternate;
    }
    .lines{
        animation: fadeInY 10s infinite alternate;
        overflow: hidden;
    }
    .anim-p{
        animation: fadeIn 10s infinite alternate;
        padding-left: 2rem;
        padding-right: 0rem;
        padding-bottom:2rem;
        padding-top: 1rem;
        letter-spacing: 1px;
    }
    .title-anim{
        animation: fadeTitle 80s infinite alternate;
        
    }
    /* @-webkit-keyframes move_eye { from { margin-left:-10%; } to { margin-left:10%; }  } */
    @keyframes fadeIn { 
        0% { opacity: 0.001; transform:translateY(-1000%)skewX(10deg) skewX(10deg) rotateX(45deg); filter:blur(10px);} 
        10% { opacity: 0.4; transform:translate(0%)skewX(0deg) skewX(0deg) rotateY(10deg); filter:blur(0.5px);} 
        90% { opacity: 0.7; color: whitesmoke;transform:translate(0%)skewX(0deg) skewX(-10deg) rotateY(10deg); filter:blur(0px);} 
        100% { opacity: 0.85; color: white; transform:translateY(-10%) skewX(10deg) skewX(10deg) rotateX(45deg); filter:blur(0px);} 
    }
    
    @keyframes fadeInX { 
        0% { opacity: 0.001; transform:translate(75%) ;filter:blur(1px);} 
        50% { opacity: 0.4; transform:translate(70%);filter:blur(0px);} 
        75% { opacity: 0.8; color: whitesmoke;transform:translate(80%);filter:blur(0px);} 
        100% { opacity: 0.1 ; color: white; transform:translate(1500%);filter:blur(10px);} 
    }
    @keyframes fadeOutX { 
        0% { opacity: 0.1; transform:translate(1500%);} 
        20% { opacity: 0.1; transform:translate(35%);} 
        75% { opacity: 0.3; color: whitesmoke;transform:translate(35%);filter:blur(0.5px);} 
        100% { opacity:0.2; color: white; transform:translate(20%);filter:blur(4px)} 
    }
    @keyframes fadeInY { 
        0% { opacity: 0.001; transform:translateY(-250%);} 
        25% { opacity: 0.4; transform:translate(0%);} 
        75% { opacity: 0.7; color: whitesmoke;transform:translate(0%);} 
        100% { opacity: 0.85; color: white; transform:translateY(250%);} 
    }
    @keyframes firstIn { 
        0% {  filter:blur(-10px);} 
        5% {  filter:blur(-100px);} 
        10%{filter:blur(-1000px); }
        15%{ filter:blur(100px);}
        20% {  filter:blur(10px);} 
        22% {  filter:blur(0px);} 
        50%{ filter:blur(0px);}
        89% {  filter:blur(0px);} 
        90% {  filter:blur(5px);} 
        91%{ filter:blur(0px);}
        100% { filter:blur(0px);} 
    }
    /* @keyframes fadeImage {
        0%{ opacity:0;filter:blur(100px);transform:scale(0) ;}
        10%{ opacity:0.2;filter:blur(10px);transform:scale(0.05);}
        15%{opacity:0.3;filter:blur(2px);transform:scale(0.3);}
        90%{ opacity:0.5;filter:blur(1px);transform:scale(1.05);}
        100%{ opacity:0.75;filter:blur(0px);transform:scale(1);}
    } */
    @keyframes fadeTitle {
        0%{ opacity:0;filter:blur(100px);}
        1%{ opacity:0.1;filter:blur(10px);}
        3%{ opacity:0.5;filter:blur(1px);}
        5%{ opacity:0.8;filter:blur(0px);}
        /* 8%{ opacity:0.9;filter:blur(0px);} */
        48%{ opacity:0.9;filter:blur(0px);transform:scale(1);}
        49%{ opacity:0.8;filter:blur(2px);transform:scale(1.15);}
        50%{ opacity:0;filter:blur(3px);transform:scale(0);}
        51%{ opacity:0;filter:blur(3px);transform:scale(0);}
        52%{ opacity:0.8;filter:blur(2px);transform:scale(1.15);}
        53%{ opacity:0.9;filter:blur(1px);transform:scale(1);}
        58%{ opacity:0.8;filter:blur(0px);}
        97% { opacity:0.8; filter:blur(0px);} 
        98% { opacity:0.9; filter:blur(1px);} 
        99% { opacity:0.8; filter:blur(10px);} 
        100%{ opacity:0.1;filter:blur(100px);}
        /* 100% { filter:blur(0px);} */
    }

    ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 0px;

}
::-webkit-scrollbar {
  width: 2px;
  display: none ;
}
`;
export default GlobalStyle