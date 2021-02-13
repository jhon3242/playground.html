const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const imfoForm = document.querySelector(".js-imfoForm");
const survey = document.querySelector(".survey_class")
const submitButton = document.querySelector("#submitButton")
const findImfo = document.querySelector(".find");



//submit누르면 정보 저장하기
function submit() {
    const submit_name = document.querySelector("#user_name");
    const submit_age = document.querySelector("#user_age");
    const submit_gender = document.querySelector("#user_gender");
    const username = {
        name: submit_name.value,
        age: submit_age.value,
        gender: submit_gender.value
    }
    if (submit_name.value===null){
        alert("Please enter name")
    }else if(submit_age.value===null){
        alert("Please enter age")
    }else if(submit_gender.value===null){
        alert("Please enter gender")
    }else{
        localStorage.setItem(submit_name.value, JSON.stringify(username));//로컬에 저장
        alert("Save");
    }
    
    form.classList.add("showing");
    survey.classList.remove("showing");
}

//작성지 보여주기
function askimfo() {
    survey.classList.add("showing");
    submitButton.addEventListener("click", submit)
}

//처음 검색창 사라지게 하기
function search(event) {
    event.preventDefault();
    const imfo = input.value;
    const find = localStorage.getItem(imfo);
    

    //정보를 찾으면 보여주는 함수
    function findFn(){
        const parsedOj = JSON.parse(find);
        findImfo.innerText=`Name : ${parsedOj.name}
        Age : ${parsedOj.age}
        Gender : ${parsedOj.gender}`;
        form.classList.remove("showing");
    }
    if (find === null) {
        alert("I have no imformation about that. Please let me know")
        askimfo(); //작성하는 함수
        form.classList.remove("showing");
    } else {
        alert("I find it");//정보 보여주기
        findFn();      
        findImfo.classList.add("showing");
    }
    input.value = "";





}
function f1() {
    form.classList.add("showing");
    input.classList.add("showing");
    form.addEventListener("submit", search);
}

f1();