/*function randomNumber(){
var randomNumber1;
randomNumber1 =Math.floor(Math.random()*6+1);

if(randomNumber1==6){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice6.png);
}
else if(randomNumber1==5){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice5.png);
}
else if(randomNumber1==4){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice4.png);
}
else if(randomNumber1==3){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice3.png);
}
else if(randomNumber1==2){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice2.png);
}
else if(randomNumber1==1){
  console.log(C:\Users\parth\OneDrive\Desktop\Web Development\Dicee Challenge - Starting Files\images\dice1.png);
}
}
*/

var randomNumber1 = Math.floor(Math.random()*6+1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";//dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1;// images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);

var randomNumber2 = Math.floor(Math.random()*6+1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";//dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins🚩";
}

else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}

else{
  document.querySelector("h1").innerHTML = "Draw🚩"
}
