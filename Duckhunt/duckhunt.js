//Duck Hunt.
//01-12-2020

var direction = ['N,S,W,E'];//Array voor de richtingen.
var duck = document.getElementById('duck');//Pakt de id van de duck GIF.
var top = 250;
var bottom = 250;

function fly(direction){
    var random = Math.floor(Math.random() * 4);
    var direction = direction[random];
    if(direction == "N"){
        top = top + 50;
        duck.style.top = top + "px";
    } else {
        alert('Hoi');
    }

}

fly();//Functie voor het vliegen.