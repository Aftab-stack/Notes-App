let notesContainer= document.querySelector(".notes-container");
let createbtn= document.querySelector(".btn");
let notes= document.querySelector(".input-box");


// Store notes in Local Storage



createbtn.addEventListener("click", function(){
    // create P tag
    let inputBox= document.createElement("p");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");

    // create img tag 
    let img= document.createElement("img");
    img.src= "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})

// To remove the note on clicking the delete icon
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
    }

})
