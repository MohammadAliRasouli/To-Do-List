let list = document.querySelector("#to-do-list");
let AddInput = document.querySelector("#add-form input");
let SearchInput = document.querySelector("#search-form input");
let AddBtn = document.querySelector("#add-form button");

list.addEventListener("click" , (e)=>{  
    if(e.target.nodeName == "SPAN" && e.target.className == "delete-btn" ){e.target.parentNode.remove()};
    if(list.children.length == 0){ let ListEmptyMsg = document.createElement("div");
ListEmptyMsg.style.textAlign = "center";
ListEmptyMsg.style.color = "red";
ListEmptyMsg.innerText = "Your List Is Empty";
ListEmptyMsg.id = "EmptyMsg" ;
list.appendChild(ListEmptyMsg);
};
       })




       AddBtn.addEventListener("click" , (e)=>{e.preventDefault();
    if(!AddInput.value){return};
    if(document.querySelector("#EmptyMsg")){document.querySelector("#EmptyMsg").remove()};
  

list.appendChild(CreateListItem(AddInput.value))
AddInput.value = "" ;

    })

function CreateListItem(Itemvalue){
    let Item = document.createElement("li");
    let Title = document.createElement("span");
    let Btn = document.createElement("span");
    Item.className = "to-do-item";
    Title.className = "Title";
    Title.innerText = Itemvalue;
    Btn.className = "delete-btn";
    Btn.innerText = "delete";
    
    Item.appendChild(Title);
    Item.appendChild(Btn);
return Item;
};





SearchInput.addEventListener("input" , (e)=>{
    Array.from(list.children).forEach((element)=>{if(document.querySelector("#EmptyMsg")){return; }
if(!element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
element.style.display = "none";
}else{
    element.style.display = "flex";
}
})
     

});