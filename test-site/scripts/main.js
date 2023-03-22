/*获取标题的引用，并把它存在myHeading变量中*/
/*
let myHeading=document.querySelector('h1');
myHeading.textContent='hello world';
*/
let myImage=document.querySelector('img');

myImage.onclick=function () {
    let mySrc=myImage.getAttribute('src');
    if(mySrc === 'images/yuntianming.jpg'){
        myImage.setAttribute('src','images/givestar.jpg');
    }else{
        myImage.setAttribute('src','images/yuntianming.jpg');
    }
}
/*
function multiply(num1,num2){
    let result=num1*num2;
    return result;
}
*/
document.querySelector("html").addEventListener("click",function () {
    alert("别戳我");
})

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUserName() {
    let myName=prompt('请输入你的名字');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla cool'+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla cool'+storedName;
}
myButton.onclick=function () {
    setUserName();
}