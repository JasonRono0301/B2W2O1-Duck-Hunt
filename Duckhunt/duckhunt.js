//Duck Hunt.
//01-12-2020

var stage = document.getElementById('stageButton');//De manupilatie voor de stage.
var duck = document.getElementById('duckGif');//De manupilatie voor de duck button.
var directions = ["north","south","east","west"];//Array voor de richtingen.
var posTop = 450;
var posRight = 1000; 

function fly(direction){
    var random = Math.floor(Math.random() * 4);
    var direction = directions[random];//Pakt een random index waarde uit de array.
    console.log(direction);//Laat in de console log zien welk index waarde heeft gepakt.

    if(direction == "north"){
        posTop = posTop + 50;
        duck.style.top = posTop + "px";
    } 
    else if(direction == "east"){
        posRight = posRight + 100;
        duck.style.left = posRight + "px";

    }

}   

fly();//Roept de (fly) functie aan.

