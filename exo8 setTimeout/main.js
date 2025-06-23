const eventListener = (function(e){
    const div=document.querySelector("div");
    div.style.position="absolute";
    div.style.left=e.x-300/2+"px";
    div.style.top=e.y-150/2+"px";
});

document.addEventListener("mousemove",eventListener);

setTimeout(()=>{
    document.removeEventListener("mousemove",eventListener);
    const gameOver=document.createElement("p");
    gameOver.innerText="GAME OVER";
    document.body.appendChild(gameOver);
},5000);