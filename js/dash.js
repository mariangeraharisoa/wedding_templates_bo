
const creer = document.querySelector(".btn_service_gratuite")
const post = document.querySelector(".service_gratuite")
const sectionPost = document.querySelector(".section_post")
const btn_annuler = document.querySelector(".btn_annuler")
const angle = document.querySelector(".angle_left")
const angle1 = document.querySelector(".angle_right")
const close = document.querySelector(".menu_close")
const line = document.querySelector(".line_dash")
const dash = document.querySelector(".menu_dash")
const menuh4 = document.querySelector(".menu_slide")
// se deconnecter
const tsipika_telo = document.querySelector(".tsipika_telo")
const deconnecter = document.querySelector(".deconnecter")

tsipika_telo.addEventListener("click",()=>{  
    deconnecter.style.display = "block"
})

// edit profil
const section_edit_profil = document.querySelector(".section_edit_profil")
const pdf_active = document.querySelector(".pdf_active")
const times_edit = document.querySelector(".times_edit")
pdf_active.addEventListener("click",()=>{
    console.log(pdf_active);
    section_edit_profil.style.display = "block"
 })
 times_edit.addEventListener("click",()=>{
    section_edit_profil.style.display = "none"
    section_edit_profil.style.transition = "1s"
 })
 section_edit_profil.addEventListener("mouseover",()=>{
    deconnecter.style.display = "none"

 })

//  notification
const section_notif = document.querySelector(".section_notif")
const bell1 = document.querySelector(".bell1")
const bell = document.querySelector(".bell")
const common_dash_board = document.querySelector(".common_dash_board")
bell1.addEventListener("click",()=>{
   section_notif.style.display = "block"
   section_edit_profil.style.display = "none"
   bell1.style.color = "deeppink"
})
common_dash_board.addEventListener("click",()=>{
   section_notif.style.display = "none"
   discussion.style.display ="none"
   comment.style.color ="black"
})
// afaka supprime-na
section_notif.addEventListener("click",()=>{
   section_notif.style.display = "none"
   bell1.style.color = "black"

})
// section
const revenue = document.querySelector(".top_revenue")
revenue.addEventListener("click",()=>{
    deconnecter.style.display = "none"
    bell1.style.color = "black"

})
// commentaire
const comment = document.querySelector(".fa-comment-alt")
const discussion = document.querySelector(".section_message")
const box_message = document.querySelector(".box_message")
const admin_pm = document.querySelector(".admin_pm")
const tuteurh3 = document.querySelector(".tuteurh3")
const utilisateur = document.querySelector(".utilisateur")
const count_mp = document.querySelector(".count_mp")

comment.addEventListener("click",()=>{
    discussion.style.display = "none"
    if(true){
        discussion.style.display = "block"
        comment.style.color = "deeppink"
    }
})
box_message.addEventListener("click",()=>{
    admin_pm.style.display = "block"
    box_message.style.background = "#fa9acd"
})
box_message.addEventListener("click",()=>{

    tuteurh3.textContent = utilisateur.textContent
    console.log(tuteurh3.textContent);
})



// message reply
 const to_delete1 = document.querySelector(".to_delete1")
 to_delete1.addEventListener("click",()=>{
    admin_pm.style.display = "none"
    box_message.style.background = "none"
    count_mp.style.display = "none"
    comment.style.color = "black"
})

// creer post
creer.addEventListener("click",()=>{
    console.log("creer post");
    sectionPost.style.display = "block"
    revenue.style.display = "none"
      
})
btn_annuler.addEventListener("mousedown",()=>{
    sectionPost.style.display = "none"
    revenue.style.display = "block"
})
sectionPost.addEventListener("click",()=>{
    console.log("creer post");
    revenue.style.display = "block"
    deconnecter.style.display = "none"
    discussion.style.display = "none"
    comment.style.color = "black"
})
// menu close
angle.addEventListener("click",()=>{
   console.log("mioitra ilay fleche");
   close.style.display = "block"
   close.style.left = "1vw"
   close.style.top = "5vw"
   line.style.display = "none"
   post.style.display = "none"
   dash.style.boxShadow = "none"
   menuh4.style.width = "4vw"
   menuh4.style.display = "none"
   
   
})
angle1.addEventListener("click",()=>{
    dash.style.display = "block"
    dash.style.transition = "1s"
    close.style.display = "none"
    close.style.top = "5vw"
   line.style.display = "block"
   post.style.display = "block"
   dash.style.boxShadow = "0vw 0vw .5vw rgba(0, 0, 0, 0.813)"
   dash.style.padding = "1vw"
   menuh4.style.width = "20vw"
   menuh4.style.display = "flex"

})