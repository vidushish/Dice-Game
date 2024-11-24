var randomNumber1=Math.floor(Math.random()*6)+1;
var randDiceImage="dice"+randomNumber1+".png";
var randImageSource="./"+randDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randDiceImage2="./dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randDiceImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎉 Player 1  Won!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2  Won! 🎉";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}