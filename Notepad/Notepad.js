
let btn=document.querySelector(".btn");
let container=document.querySelector(".notes-container");
let notes=document.querySelectorAll(".input-box");



btn.addEventListener("click",()=>{
   console.log("yeas");
    let p=document.createElement("p");
    let img=document.createElement("img");
    let buttn=document.createElement("button");
    // buttn.setAttribute("type","save");
    // buttn.innerHTML="Save";
    // buttn.style.color="red";
    p.className="input-box";
    buttn.className="buttn";
    p.setAttribute("contenteditable","true");
    img.src="Images/del.jpg";
    container.appendChild(p).appendChild(img);
    container.appendChild(p).appendChild(buttn);
})


container.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove(); 
        // storeData();
    }else if(e.target.tagName==="P")
    {
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup=function()
            {
                storeData();
            }
        })
    }
})

function storeData(){
    localStorage.setItem("text",container.innerHTML);
}

function showData(){
    container.innerHTML=localStorage.getItem("text");
}
showData();



