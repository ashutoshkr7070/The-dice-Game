var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "./images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "./images/" + "dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
    
}


