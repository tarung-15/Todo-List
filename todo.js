// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;

//     let delBtn =document.createElement("button");
//     delBtn.innerText="delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
// });
// ul.addEventListener("click",function (event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem =event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// });
 

// let delBtns =document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

const btn = document.querySelector("#addTaskBtn");
const ul = document.querySelector("#taskList");
const inp = document.querySelector("#taskInput");

btn.addEventListener("click", function () {
  const task = inp.value.trim();
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const item = document.createElement("li");
  item.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    const listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted:", listItem.textContent);
  }
});







