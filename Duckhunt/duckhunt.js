//Duck Hunt.
//01-12-2020

var stage = document.getElementById('stageButton');//De manupilatie voor de stage.
var duck = document.getElementById('duckGif');//De manupilatie voor de duck button.
var directions = ["north","south","east","west"];//Array voor de richtingen.
var posTop = 250;//Variabele met daarin een number die zich als pixels bevind. Zodat de Gif van zijn standaard positie veranders zodra er iets bij komt of eraf.
var posRight = 500;//Zie regel 7!.

function fly(direction){//De code voor de fly functie.
    var random = Math.floor(Math.random() * 4);//Pakt een nummer tussen 0 en 4.
    var direction = directions[random];//Pakt een random index waarde uit de array.
    console.log(direction);//Laat in de console log zien welk index waarde heeft gepakt.

    if(direction == "north"){
        if(posTop > 0){
            posTop = posTop - 50;
        }
        else {
            posTop = 250;
        }
        duck.style.top = posTop + "px";
    }

    if(direction  == "south"){
        if(posTop < 600){
            posTop = posTop + 50;
        }
        else {
            posTop = 250;
        }
        duck.style.top = posTop + "px";
    }

};

//Roept de (fly) functie aan.
//var timer = setInterval(fly,1000);


