const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const imfoForm = document.querySelector(".js-imfoForm");
const survey = document.querySelector(".survey_class")
const submitButton = document.querySelector("#submitButton")


//submit누르면 정보 저장하기
function submit (){
    const submit_name = document.querySelector("#user_name");
    const submit_age = document.querySelector("#user_age");
    const submit_gender = document.querySelector("#user_gender");
    const username = {
        name : submit_name.value,
        age : submit_age.value,
        gender : submit_gender.value
    }
    localStorage.setItem(submit_name.value,JSON.stringify(username));//로컬에 저장
    alert("Save");
}

//작성지 보여주기
function askimfo(){
    survey.classList.add("showing");
    submitButton.addEventListener("click",submit)
}

//처음 검색창 사라지게 하기
function search(event){
    event.preventDefault();
    const imfo = input.value;
    

    const find = localStorage.getItem(imfo);
    if(find===null){
        alert("Please submit this imformation")
        askimfo(); //작성하는 함수
    }else{
        alert("I find it");//정보 보여주기
        const trans = JSON.parse(find);
        document.write(find);
    }


    
    imfo.value = "";
}
function f1(){
    form.classList.add("showing");
    input.classList.add("showing");
    form.addEventListener("submit",search);
}

f1();
