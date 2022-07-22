const todoclick = document.querySelector(".click i");
const textclick = document.querySelector(".addles");
const todoclick1 = document.querySelector(".click1 i");
const textclick1 = document.querySelector(".addles1");
const todoclick2 = document.querySelector(".click2 i");
const textclick2 = document.querySelector(".addles2");
const todoclick3 = document.querySelector(".click3 i");
const textclick3 = document.querySelector(".addles3");
const todoclick4 = document.querySelector(".click4 i");
const textclick4 = document.querySelector(".addles4");

todoclick.addEventListener("click" , selecttic);
function selecttic(event){
 let todos = event.target ;
 const item = textclick ;
 if(todos.classList[2] == "click1"){
    item.classList.toggle("display1")
}
};
todoclick1.addEventListener("click" , selecttic1);
function selecttic1(event){
 let todos = event.target ;
 const item = textclick1;
 if(todos.classList[2] == "click-2"){
    item.classList.toggle("display1")
}
};
todoclick2.addEventListener("click" , selecttic2);
function selecttic2(event){
 let todos = event.target ;
 const item = textclick2;
 if(todos.classList[2] == "click-3"){
    item.classList.toggle("display1")
}
};
todoclick3.addEventListener("click" , selecttic3);
function selecttic3(event){
 let todos = event.target ;
 const item = textclick3;
 if(todos.classList[2] == "click-4"){
    item.classList.toggle("display1")
}
};
todoclick4.addEventListener("click" , selecttic4);
function selecttic4(event){
 let todos = event.target ;
 const item = textclick4 ;
 if(todos.classList[2] == "click-5"){
    item.classList.toggle("display1")
}
};


