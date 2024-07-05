var timer = 60; 
var score = 0;
var hit = 0;
function increaseScore(){
    score += 10;
    document.querySelector(".scoreVal").textContent = score;
}
function changeHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector(".hitVal").textContent = hit;
}
function makeBubble(){
    var clutter = " ";
    for(var i=1; i<=133; i++){
        var rn = Math.floor(Math.random()*10); 
        clutter += `<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerint =  setInterval(function(){
        if( timer  > 0 ){
        timer--;
        document.querySelector(".timmerVal").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber == hit){
        increaseScore();
        changeHit();
        makeBubble();
    }
})
runTimer();
makeBubble();
changeHit();