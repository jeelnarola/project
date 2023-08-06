// password show
let loadicon=document.querySelector(".fa-eye")
function myfuncton(){
    var a=document.querySelector(".pass")

    if(a.type=="password"){
        a.type="text"
    }
    else{
        a.type="password"
    }
    if( loadicon.classList.contains("fa-eye")){
        loadicon.classList.replace("fa-eye","fa-eye-slash")
    }
    else{
        loadicon.classList.replace("fa-eye-slash","fa-eye")
    }
}
document.querySelector(".fa-eye").addEventListener("click",myfuncton)

// load page



window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector("#loadfrom").style.display="block";
        },
        2000
    )
})

document.getElementById("loadfrom").addEventListener("submit",()=>{
    document.getElementById("loadfrom").style.display="none"
})



// toggle icon




let headericon=document.querySelector(".fa-bars")
// let loadicon=document.querySelector(".fa-eye")
const header=()=>{
    menu.classList.add("menu-show")
}
const headerclose=()=>{
    menu.classList.remove("menu-show")
}
document.querySelector("#toggle , .fa-eye").addEventListener("click",()=>{
    let menu=document.querySelector(".menu-name").value
    console.log(menu);
    if(headericon.classList.contains("fa-bars")){
        headericon.classList.replace("fa-bars","fa-xmark")
        header()
    }
    else{
        headericon.classList.replace("fa-xmark","fa-bars")
        headerclose()
    }
    // if(loadicon.classList.contains("fa-eye")){
    //     loadicon.classList.replace("fa-eye","fa-eye-slash")

    // }
    // else{
    //     loadicon.classList.replace("fa-eye-slash","fa-eye")

    // }
})


            // LOGIN CLICk TO LOGIN FORM OPEN AND CLOSE


document.getElementById("login").addEventListener("click",(e)=>{
    e.preventDefault()
    document.querySelector("#form").style.visibility= "visible"    

})
document.querySelector("#icon").addEventListener("click",()=>{
    document.querySelector("#form").style.visibility= "hidden"

})


            // LOGON FORM CHEACK LOGIC

const post=async()=>{
    let data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
    fetch("http://localhost:8090/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}
document.getElementById("login-form").addEventListener("submit",(e)=>{
e.preventDefault()
    let data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value

    if(username.length==0){
        document.getElementById("p").innerHTML="Plz Enter A User Name !"
    }
    else{
        document.getElementById("p").innerHTML=""
    }
    if(password==0){
        document.getElementById("p2").innerHTML="Plz Enter A Password !"
    }
    else if(password.length<8){
        document.getElementById("p2").innerHTML="Plz Enter A Password 9 Digit !"
    }
    if(username.length!=0&&password.length>8){
        post()

    }
})
const get=async()=>{
    fetch("http://localhost:8090/login")
    .then((res)=>res.then)
    .then((data)=>console.log(data))
}
get()


// SING-UP form logic


document.getElementById("singup").addEventListener("click",()=>{
    document.querySelector(".singup-bg").style.display="block"
})
document.getElementById("singup-close").addEventListener("click",()=>{
    document.querySelector(".singup-bg").style.display="none"
})

const singuppost=async()=>{
    let data={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    fetch("http://localhost:8090/sing-up",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}
document.getElementById("singup-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let singupdata={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
console.log(singupdata);
        let firstname=document.getElementById("firstname").value
        let lastname=document.getElementById("lastname").value
        let email=document.getElementById("email").value
        let password=document.getElementById("password").value
        if(firstname.length==0){
            document.querySelector(".p").innerHTML="enter a first name !"
        }
        else{
            document.querySelector(".p").innerHTML=""

        } 
        if(lastname.length==0){
            document.querySelector(".p2").innerHTML="enter a last name !"
        }
        else {
            document.querySelector(".p2").innerHTML=""

        }
        if(email.length<5 || email.length==0){
            document.querySelector(".p3").innerHTML="not email"
        }
        else{
            document.querySelector(".p3").innerHTML=""
        }
        if(password==0){
            document.querySelector(".p4").innerHTML="Plz Enter A Password !"
        }
        else{
            document.querySelector(".p4").innerHTML=""  
        }
        if(firstname.lastname!=0&&lastname.length!=0&&email.length>5&&email.length!=0&&password.length1!=0){
            singuppost()
        }
})

const loginget=async()=>{
    fetch("http://localhost:8090/sing-up")
    .then((res)=>res.then)
    .then((data)=>console.log(data))
}
loginget()



