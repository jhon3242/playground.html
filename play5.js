const body= document.querySelector("body");
const count = document.querySelector("#count");
const form = document.querySelector(".new");
const input = form.querySelector("input");
const box=[
    "Alpha","Bravo","Chalie","Delta"
]

//새로운 정보 업로드
function upload(event){
    event.preventDefault();
    const input = form.input;
    box.push(input);
    console.log("hi");
}



//개체를 쓰는 함수
function writeBox(){
    
    for (let i=0;i<box.length ;i++ ){
        const li= document.createElement("li")
        const span = document.createElement("span")
        const ul=document.createElement("ul")
        const ww=box[i];
        span.innerText=`${box[i]}`;
        li.appendChild(span);
        ul.appendChild(li);
        body.appendChild(ul);
        
    }
}

//개체 개수 쓰는 함수
function writeCount(){
    count.innerText=`Count : ${box.length}`;
}

function init(){
    
    writeBox();
    writeCount();
    form.addEventListener("submit", upload);
}

init ();