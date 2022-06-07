let board = document.querySelector(".board");
let sizeInput = document.querySelector("#size");
let blackBTN= document.querySelector("#blackBTN");
let redBTN= document.querySelector("#redBTN");
let resetBTN= document.querySelector("#resetBTN");
let sizeBTN = document.querySelector("#sizeBTN");
let eraserBTN = document.querySelector("#eraserBTN");
let infoText=document.querySelector(".info-text");
infoText.textContent="Pen has a no color";
let backColor ="";

sizeBTN.addEventListener("click",()=>{
    if (sizeInput.value>=2  && sizeInput.value <= 60  ){
        populateBoard(sizeInput.value);
    } else{
     infoText.textContent="Wrong size BRO";
    }

})

populateBoard(16);

blackBTN .addEventListener("click",()=>{
 
 
    backColor="black";
    infoText.textContent="Pen has a black color";
 
})
redBTN .addEventListener("click",()=>{

    backColor="red";
    infoText.textContent="Pen has a red color";
})
resetBTN .addEventListener("click",()=>{
  
  let divs = board.querySelectorAll("div");
  divs.forEach((div) => div.remove());
})

eraserBTN.addEventListener("click",()=>{
  backColor="white";
  infoText.textContent="Pen will erase your painting";
})

function populateBoard (size){

    let divs = board.querySelectorAll("div");
    divs.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
let ammount=size*size;

for (let i = 0; i <ammount; i++) {
let div = document.createElement("div");

div.addEventListener("mouseover", (e)=>{
 e.target.style.backgroundColor=`${backColor}`;
 
});
board.appendChild(div);
}





}

