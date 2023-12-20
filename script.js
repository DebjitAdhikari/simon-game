let playerChoice=[];
let computerChoice=[];
let playerMove = -1;
let highscore = 0;
let score = 0;
const choice=["green","red","yellow","blue"];
let start=false;
let colors = document.querySelectorAll(".btnChoice");

document.querySelector("button").addEventListener("click",function(){
    resetAll();
    document.querySelector("button").innerHTML="New game🕹️";
    document.querySelector("h2").innerHTML="Level: "+(score+1);
    
    document.querySelector("body").classList.remove("wrong");
    setTimeout(function(){
        generateRandom();
    },1000);
    
    
});
activeAllcolor();

function checkAndNew(){
    
    if(playerChoice[playerMove]==computerChoice[playerMove]){

        if(playerChoice.length==computerChoice.length){
            setTimeout(function(){
                score++;
                generateRandom();
                playerChoice=[];
                playerMove=-1;
                document.querySelector("h2").innerHTML="Level: "+(score+1);
            }, 1000);
            
        }
    }else{
        gameOver();
    }
    
}

function gameOver(){
    document.querySelector("body").classList.add("wrong");
    let audio = new Audio("./sounds/gameover.mp3");
    audio.play();
    start=false;
    document.querySelector("h2").innerHTML="Game Over 👎❌";
    if(highscore<score){
        highscore=score;
    }
    document.querySelector("span").innerHTML=highscore;
}
function activeAllcolor(){
    
    for(let i=0;i<colors.length;i++){
        colors[i].addEventListener("click",function(){
            if(start){
                playerChoice.push(colors[i].classList[0]);
                animateTouch(i,"playerTap");
                let audio = new Audio("./sounds/"+colors[i].classList[0]+".mp3");
                audio.play();
                playerMove++;
                checkAndNew();
            }
            
        });


    }
}

function animateTouch(i,theClass){
        colors[i].classList.toggle(theClass);
            setTimeout(function(){
                colors[i].classList.toggle(theClass);
            },500);
}



function generateRandom(){
    let n = Math.random()*4;
    n = Math.floor(n);
    computerChoice.push(choice[n]);
    animateTouch(n,"computerTap");
    let audio = new Audio("./sounds/"+choice[n]+".mp3");
    audio.play();
    console.log(computerChoice);
}

function resetAll(){
    playerChoice=[];
    computerChoice=[];
    score=0;
    start=true;
    playerMove=-1;
}