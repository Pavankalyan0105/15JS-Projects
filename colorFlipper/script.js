document.body.style.background = "";




const colors = ["red" , "green" , "purple" , "yellow"]
var clickCount=0
var n = colors.length;

const btn   = document.querySelector("#button");
const color = document.querySelector(".color-highlight");

color.innerHTML= "#24232A";


btn.addEventListener("click",()=>{
    clickCount++;
    color.innerHTML = colors[clickCount%n]
    document.body.style.background = colors[clickCount%n];
})