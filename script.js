//DOM variables
const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

//Practical Variables
let menu = ["Pizza", "Pasta", "Salad"];

//Functions
function randomItemGenerator() {
  let extraItem = ["Hamburger", "Pasta Salad", "Turkey", "Pork", "Ramen"];

  let random = Math.floor(Math.random() * 4);

  let item = extraItem[random];

  return item;
}

function generateMenuItem() {
  let item = randomItemGenerator();
  menu.push(item);

  for (let i = 0; i < menu.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `${menu[i]}`;

    container.appendChild(li);
  }
}

//Event listener
btn.addEventListener("click", generateMenuItem);
