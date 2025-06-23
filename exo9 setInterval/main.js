const ball=document.querySelector("div");
let pos=0;

setInterval(()=>{
    if(pos<700){
        ball.style.left=pos+"px";
        pos+=5;
    } else{
        pos=0;
    }
},50);