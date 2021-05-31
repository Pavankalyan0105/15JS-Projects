
const decrementButton = document.querySelector(".decrease");

const incrementButton = document.querySelector(".increase");

const resetButton = document.querySelector(".reset");

const value = document.querySelector("#value");

var counter = 0;


decrementButton.addEventListener("click",()=>{
    counter--;
    value.innerHTML = counter;
})

incrementButton.addEventListener("click",()=>{
    counter++;
    value.innerHTML = counter;
})

resetButton.addEventListener("click",()=>{
    counter = 0;
    value.innerHTML = counter;
})
