const form = document.querySelector(".js-form");
const input = document.querySelector(".js-input")
const userOj = [];

function askimfo(username){
    form.removeChild("input");
    localStorage.setItem("username",userOj)
}

function search(event){
    event.preventDefault();
    const imfo = input.value;
    const Fsearch = localStorage.getItem("imfo")
    
    if(Fsearch===null){
        askimfo(imfo);
        
    }else{
        
    }
}

function f1(){
    
    form.addEventListener("submit",search);
}
f1();
    