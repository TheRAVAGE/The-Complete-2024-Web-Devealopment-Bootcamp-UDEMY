document.querySelector("footer").style.color="red";

 var rng_1=Math.random();
 var rng_2=Math.random();
 rng_1=Math.floor(rng_1*6);
 rng_2=Math.floor(rng_2*6);
 rng_1=rng_1+1;
 rng_2=rng_2+1;
 var firstDice= ("./images/dice" + rng_1 + ".png");
 var secondDice= ("./images/dice" + rng_2 + ".png");

if (rng_1 > rng_2) {
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if (rng_1 < rng_2) {
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").innerHTML="🎲 Draw !! 🎲";
}

document.querySelectorAll("img")[0].setAttribute("src", firstDice);
document.querySelectorAll("img")[1].setAttribute("src", secondDice);
