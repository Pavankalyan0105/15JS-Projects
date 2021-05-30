


const colors = ["red" , "green" , "purple" , "yellow"]
var clickCount=0
var n = colors.length;

const btn   = document.querySelector(".btn");
const color = document.querySelector(".color");




btn.addEventListener("click",()=>{
    clickCount++;
    color.innerHTML = colors[clickCount%n];
    document.body.style.background = colors[clickCount%n];

    // document.body.style.background = "green";
})