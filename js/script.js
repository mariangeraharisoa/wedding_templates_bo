const body = document.querySelector("body")
const angle_up = document.querySelector(".angle_up")
body.addEventListener("click",()=>{    
    setTimeout(()=>{
        angle_up.style.display = "block"
        angle_up.style.color = "aqua"
    },1000)
    setTimeout(()=>{
        angle_up.style.display = "none"
    },5000)
    setTimeout(()=>{
        angle_up.style.display = "block"
    },7000)
    setTimeout(()=>{
        angle_up.style.display = "none"
    },9000)
    setTimeout(()=>{
        angle_up.style.display = "block"
    },10000)
    setTimeout(()=>{
        angle_up.style.display = "none"
    },12000)
})


// S'INSCRIRE
const inscrire = document.querySelector(".inscrire")
const s_inscrire = document.querySelector(".s_inscrire")
const sign = document.querySelector(".section_sign")
const signTimes = document.querySelector(".sign_times")
const timecircle = document.querySelector(".fa-times-circle")
console.log(timecircle);

s_inscrire.addEventListener("click",(e)=>{
    e.preventDefault()
    sign.style.display = "block"
    s_inscrire.style.textdecoration = "underline"
    btnConnecter.style.color = "white"
})
inscrire.addEventListener("click",(e)=>{
    e.preventDefault()
    sign.style.display = "block"
    btnConnecter.style.background = "white"
    btnConnecter.style.color = "deeppink"
    login.style.display = "none"
})
inscrire.addEventListener("mousedown",()=>{
    inscrire.style.background = "deeppink"
    inscrire.style.color = "white"
})
sign.addEventListener("mouseover",()=>{
    signTimes.style.display = "block"
})
sign.addEventListener("mouseout",()=>{
    signTimes.style.display = "none"
})
timecircle.addEventListener("mouseover",()=>{
    timecircle.style.color = "deeppink"
})
timecircle.addEventListener("mouseout",()=>{
    timecircle.style.color = "white"
})
timecircle.addEventListener("mousedown",()=>{
    timecircle.style.color = "red"
})
timecircle.addEventListener("click",()=>{
    sign.style.display = "none"
    inscrire.style.background = "white"
    inscrire.style.color = "deeppink"
})

// SCROLLING
const section2 = document.querySelector(".section2");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
    document.addEventListener("scroll",()=>{
    console.log(window.scrollY);
    // header.style. background = window.scrollY > 50 ? "red" : "none"
    if(window.scrollY < 683){
        header.style. display = "block"
    }else
        if(window.scrollY > 1960) {
        header.style. display = "block"
            }else{
         header.style. display = "none"

            }
 })

// se connecter
const conexTimes = document.querySelector(".connexion_times")
const login = document.querySelector(".section_login")
const times = document.querySelector(".fa-times")
const btnConnecter = document.querySelector(".connecter")

btnConnecter.addEventListener("click",(e)=>{
    e.preventDefault()
    login.style.display = "block"
    inscrire.style.background = "white"
    inscrire.style.color = "deeppink"
    sign.style.display = "none"

})
btnConnecter.addEventListener("mousedown",()=>{
    btnConnecter.style.background = "deeppink"
    btnConnecter.style.color = "white"
})
login.addEventListener("mouseover",()=>{
    conexTimes.style.display = "block"
})
login.addEventListener("mouseout",()=>{
    conexTimes.style.display = "none"
})
times.addEventListener("mouseover",()=>{
    times.style.color = "deeppink"
})
times.addEventListener("mouseout",()=>{
    times.style.color = "white"
})
times.addEventListener("mousedown",()=>{
    times.style.color = "red"
})
times.addEventListener("click",()=>{
    login.style.display = "none"
    btnConnecter.style.background = "white"
    btnConnecter.style.color = "deeppink"
})

// // SECTION1
// const clic_here = document.querySelector(".cliquez_ici")
// const champs_remplir = document.querySelector(".champs_remplir")
// console.log(clic_here);
// clic_here.addEventListener("click",()=>{
// }) 
const Email = document.querySelector("#Email")
const labelEmail = document.querySelector("#labelmail")

Email.addEventListener("input",()=>{
    const regex = /^[a-zA-Z\d]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}$/
    // const regex = /^[\w]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}]$/

    if(Email.value){
        if(regex.test(Email.value)){
            labelEmail.textContent = "email valid"
        }else{
            labelEmail.textContent = " email invalid "
        }
    }else{
        labelEmail.textContent ="Email: "
    }
})


/*
*maj 01
*min 
*nbr 02
*longueur 8
*/
const labelmot = document.querySelector(".labelMdp")
const password = document.querySelector("#password")
password.addEventListener("input",()=>{
    const regex = /^(?=.*?[\d]{2})(?=.*?[#@$&?$]{1})(?=.*?[a-z])(?=.*?[A-Z]{1}).{8}$/
       if (!regex.test(password)) {
            console.log("le mot passe doit contenir au moins 8 caractères,une lettre, deux chiffres et un caractère spécial");
       }else{
        console.log(" mot de passe validé");
       }
    
})






