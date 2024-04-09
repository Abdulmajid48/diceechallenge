let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let image1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", image1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let image2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "player 1 Wins🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "player 2 Wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
