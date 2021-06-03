//classList , contains, add , remove , toggle



//button 
const navToggle = document.querySelector(".nav-toggle");


//TO display or not
const links = document.querySelector(".links");


navToggle.addEventListener("click" , ()=>{

    // if( links.classList.contains( "show-links"))
    //     links.classList.remove("show-links");
    // else   
    //     links.classList.add("show-links");

    links.classList.toggle("show-links");

})
