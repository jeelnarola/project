// toggle icon

let headericon=document.querySelector(".fa-bars")
const header=()=>{
    menu.classList.add("menu-show")
}
const headerclose=()=>{
    menu.classList.remove("menu-show")
}
document.querySelector(".toggle").addEventListener("click",()=>{
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
})


            // LOGIN CLICk TO LOGIN FORM OPEN AND CLOSE


document.querySelector("#login").addEventListener("click",(e)=>{
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
        document.getElementById("p2").innerHTML="Plz Enter A Password aa !"
    }
    else{
        post()
    }
})
const get=async()=>{
    fetch("http://localhost:8090/login")
    .then((res)=>res.then)
    .then((data)=>console.log(data))
}
get()