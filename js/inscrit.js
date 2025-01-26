 const cloche = document.querySelector(".fa-bell") ;
 const tasks = document.querySelector(".tasks");
 const user_menu = document.querySelector(".user_menu");
 const section_notif = document.querySelector(".section_notif")
 cloche.addEventListener("click",()=>{
    console.log("misy inona eee");
    section_notif.style.display = "block"
})
tasks.addEventListener("click",(e)=>{
    e.preventDefault();
 console.log("ao ve e eeeee");
 
 
})