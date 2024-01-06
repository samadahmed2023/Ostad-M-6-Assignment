
let child1 = document.getElementById("child1");
let child2 = document.getElementById("child2");
let adult1 = document.getElementById("adult1");
let adult2 = document.getElementById("adult2");

let inputValue = document.getElementById("inputValue");

const showImgcard = () => {
    let inputValue = Number(document.getElementById("inputValue").value);
    let card = document.querySelectorAll(".card");

    if(inputValue >= 18){
      adult1.style.display = "inline-block";
      adult2.style.display = "inline-block";
      child1.style.display = "none";
      child2.style.display = "none";
      
    }else if(inputValue < 18){
      adult1.style.display = "none";
      adult2.style.display = "none";
      child1.style.display = "inline-block";
      child2.style.display = "inline-block";
    }

}

inputValue.addEventListener("keyup",showImgcard);
