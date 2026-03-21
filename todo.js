// let btn=document.createElement("button");
// let body=document.querySelector("body");
// body.appendChild(btn);
// btn.innerText="Click ME!!?";
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="lightgreen"
// });


// let input=document.querySelector("input");
// input.addEventListener("input",function(){
//     let h2=document.querySelector("h2");
//     h2.innerText=input.value
// });



let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="remove";
    delBtn.classList.add("del");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click",function(event){
    console.log(event)
    if(event.target.nodeName=="BUTTON"){
         let listPar=event.target.parentElement;
         listPar.remove();
    };
    
});

// let delBtns=document.querySelectorAll(".del");
// for(delBt of delBtns ){
//     delBt.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// };




