/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var randNum1 = Math.floor((Math.random() * 9) + 1);
var randNum2 = Math.floor((Math.random() * 9) + 1);
var randNum3 = Math.floor((Math.random() * 9) + 1);
var randNum4 = Math.floor((Math.random() * 9) + 1);

//dit zijn de verschillende getallen die random gekozen worden door mathrandom van 1 t/m 9

var randomCode = [randNum1, randNum2, randNum3, randNum4]; //maakt een array aan voor de hele code

var msg = "";
var i;

for (i = 0; i < randomCode.length; i++) { //controleert of i kleiner is dan de lengte van de array, zo ja telt hij er 1 bij op en voert hij het uit
    msg += "code:";
    msg += randomCode[i] + " "; 
}

console.log(msg);

//deze loop zorgt ervoor dat het elke variabele uit de array opnoemt

function checkNum1(event){
    event.preventDefault();
	
	var geraden1 = document.getElementById("input1").value; // gefixt na het tentamen
    
 if (randNum1 == geraden1){
    document.getElementById("regel1").textContent = "1. U heeft" + " " + geraden1 + " " + "geraden, dit is goed.";
    
 } 

 if (randNum1 != geraden1 && geraden1 < randNum1){
    document.getElementById("regel1").textContent = "1. U heeft" + " " + geraden1 + " " + "geraden, Het getal is HOGER.";
 } 
    
 if (randNum1 != geraden1 && geraden1 > randNum1){
    document.getElementById("regel1").textContent = "1. U heeft" + " " + geraden1 + " " + "geraden, Het getal is LAGER.";
 }     

}

document.getElementById("form1").addEventListener("submit", checkNum1, false);

//deze code hierboven checkt of het eerste getal klopt, zo nee vertelt het of het getal hoger of lager is

var slotje1 = "zichtbaar";

var afbeelding2 = document.getElementById("slot1");

function laatGetalZien(){
    if (slotje1 == "zichtbaar" && randNum1 == "1" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_1.jpg";
		slotje1 = "nietzichtbaar";
    }
	
    if (slotje1 == "zichtbaar" && randNum1 == "2" && randNum1 == document.getElementById("input1").value){ 
        afbeelding2.src = "images/getal_2.jpg";
		slotje1 = "nietzichtbaar";
    }
	
    if (slotje1 == "zichtbaar" && randNum1 == "3" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_3.jpg";
		slotje1 = "nietzichtbaar";
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "4" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_4.jpg";
		slotje1 = "nietzichtbaar";
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "5" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_5.jpg";
		slotje1 = "nietzichtbaar";
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "6" && randNum1 == document.getElementById("input1").value){  
        afbeelding2.src = "images/getal_6.jpg";
		slotje1 = "nietzichtbaar"; 
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "7" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_7.jpg";
		slotje1 = "nietzichtbaar"; 
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "8" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_8.jpg";
		slotje1 = "nietzichtbaar"; 
    }
	
     if (slotje1 == "zichtbaar" && randNum1 == "9" && randNum1 == document.getElementById("input1").value){
        afbeelding2.src = "images/getal_9.jpg";
		slotje1 = "nietzichtbaar"; 
    }
}

document.getElementById("form1").addEventListener("submit", laatGetalZien, false);

//deze code zorgt ervoor dat wanneer je het eerste getal raad, het eerste slotje veranderd in de juiste afbeelding

function veranderNaarSlotje1(){
	if (slotje1 == "nietzichtbaar" && randNum1 != document.getElementById("input1").value){
		afbeelding2.src = "images/slot1.jpg";
		slotje1 = "zichtbaar";
	}
}

document.getElementById("form1").addEventListener("submit", veranderNaarSlotje1, false);

//deze code zorgt ervoor dat de eerste afbeelding met het cijfer veranderd naar een slotje als je dit getal perongeluk opnieuw raad

function checkNum2(event){
 event.preventDefault();
    
 if (randNum2 == document.getElementById("input2").value){
    document.getElementById("regel2").textContent = "2. U heeft" + " " + document.getElementById('input2').value + " " + "geraden, dit is goed.";
 } 

 if (randNum2 != document.getElementById("input2").value  && document.getElementById("input2").value < randNum2){
    document.getElementById("regel2").textContent = "2. U heeft" + " " + document.getElementById('input2').value + " " + "geraden, het getal is HOGER.";
 } 
     
    
 if (randNum2 != document.getElementById("input2").value && document.getElementById("input2").value > randNum2){
    document.getElementById("regel2").textContent = "2. U heeft" + " " + document.getElementById('input2').value + " " + "geraden, het getal is LAGER.";
 } 

}

document.getElementById("form2").addEventListener("submit", checkNum2, false);

//deze code hierboven checkt of het tweede getal klopt, zo nee vertelt het of het getal hoger of lager is

var slotje2 = "zichtbaar";

var afbeelding3 = document.getElementById("slot2");

function laatGetal2Zien(){
    if (slotje2 == "zichtbaar" && randNum2 == "1" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_1.jpg";
		slotje2 = "nietzichtbaar";
    }
	
    if (slotje2 == "zichtbaar" && randNum2 == "2" && randNum2 == document.getElementById("input2").value){ 
        afbeelding3.src = "images/getal_2.jpg";
		slotje2 = "nietzichtbaar";
    }
	
    if (slotje2 == "zichtbaar" && randNum2 == "3" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_3.jpg";
		slotje2 = "nietzichtbaar";
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "4" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_4.jpg";
		slotje2 = "nietzichtbaar";
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "5" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_5.jpg";
		slotje2 = "nietzichtbaar"; 
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "6" && randNum2 == document.getElementById("input2").value){  
        afbeelding3.src = "images/getal_6.jpg";
		slotje2 = "nietzichtbaar"; 
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "7" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_7.jpg";
		slotje2 = "nietzichtbaar"; 
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "8" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_8.jpg";
		slotje2 = "nietzichtbaar"; 
    }
	
     if (slotje2 == "zichtbaar" && randNum2 == "9" && randNum2 == document.getElementById("input2").value){
        afbeelding3.src = "images/getal_9.jpg";
		slotje2 = "nietzichtbaar"; 
    }
}

document.getElementById("form2").addEventListener("submit", laatGetal2Zien, false);

//deze code zorgt ervoor dat wanneer je het tweede getal raad, het tweede slotje veranderd in de juiste afbeelding

function veranderNaarSlotje2(){
	if (slotje2 == "nietzichtbaar" && randNum2 != document.getElementById("input2").value){
		afbeelding3.src = "images/slot2.jpg";
		slotje2 = "zichtbaar";
	}
}

document.getElementById("form2").addEventListener("submit", veranderNaarSlotje2, false);

//deze code zorgt ervoor dat de tweede afbeelding met het cijfer veranderd naar een slotje als je dit getal perongeluk opnieuw raad

function checkNum3(event){
 event.preventDefault();
    
 if (randNum3 == document.getElementById("input3").value){
    document.getElementById("regel3").textContent = "3. U heeft" + " " + document.getElementById("input3").value + " " + "geraden, dit is goed.";
 } 

 if (randNum3 != document.getElementById("input3").value && document.getElementById("input3").value < randNum3){
    document.getElementById("regel3").textContent = "3. U heeft" + " " + document.getElementById("input3").value + " " + "geraden, het getal is HOGER.";
 } 
    
 if (randNum3 != document.getElementById("input3").value && document.getElementById("input3").value > randNum3){
    document.getElementById("regel3").textContent = "3. U heeft" + " " + document.getElementById("input3").value + " " + "geraden, het getal is LAGER.";
 } 

}

document.getElementById("form3").addEventListener("submit", checkNum3, false);

//deze code hierboven checkt of het derde getal klopt, zo nee vertelt het of het getal hoger of lager is

var slotje3 = "zichtbaar";

var afbeelding4 = document.getElementById("slot3");

function laatGetal3Zien(){
    if (slotje3 == "zichtbaar" && randNum3 == "1" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_1.jpg";
		slotje3 = "nietzichtbaar";
    }
	
    if (slotje3 == "zichtbaar" && randNum3 == "2" && randNum3 == document.getElementById("input3").value){ 
        afbeelding4.src = "images/getal_2.jpg";
		slotje3 = "nietzichtbaar";
    }
	
    if (slotje3 == "zichtbaar" && randNum3 == "3" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_3.jpg";
		slotje3 = "nietzichtbaar";
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "4" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_4.jpg";
		slotje3 = "nietzichtbaar";
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "5" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_5.jpg";
		slotje3 = "nietzichtbaar"; 
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "6" && randNum3 == document.getElementById("input3").value){  
        afbeelding4.src = "images/getal_6.jpg";
		slotje3 = "nietzichtbaar"; 
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "7" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_7.jpg";
		slotje3 = "nietzichtbaar"; 
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "8" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_8.jpg";
		slotje3 = "nietzichtbaar"; 
    }
	
     if (slotje3 == "zichtbaar" && randNum3 == "9" && randNum3 == document.getElementById("input3").value){
        afbeelding4.src = "images/getal_9.jpg";
		slotje3 = "nietzichtbaar"; 
    }
}

document.getElementById("form3").addEventListener("submit", laatGetal3Zien, false);

//deze code zorgt ervoor dat wanneer je het derde getal raad, het derde slotje veranderd in de juiste afbeelding

function veranderNaarSlotje3(){
	if (slotje3 == "nietzichtbaar" && randNum3 != document.getElementById("input3").value){
		afbeelding4.src = "images/slot3.jpg";
		slotje3 = "zichtbaar";
	}
}

document.getElementById("form3").addEventListener("submit", veranderNaarSlotje3, false);

//deze code zorgt ervoor dat de derde afbeelding met het cijfer veranderd naar een slotje als je dit getal perongeluk opnieuw raad

function checkNum4(event){
 event.preventDefault();
    
 if (randNum4 == document.getElementById("input4").value){
    document.getElementById("regel4").textContent = "4. U heeft" + " " + document.getElementById("input4").value + " " + "geraden, dit is goed.";
 } 

 if (randNum4 != document.getElementById("input4").value && document.getElementById("input4").value < randNum4){
    document.getElementById("regel4").textContent = "4. U heeft" + " " + document.getElementById("input4").value + " " + "geraden, het getal is HOGER.";
 } 
    
 if (randNum4 != document.getElementById("input4").value && document.getElementById("input4").value > randNum4){
    document.getElementById("regel4").textContent = "4. U heeft" + " " + document.getElementById("input4").value + " " + "geraden, het getal is LAGER.";
 } 

}

document.getElementById("form4").addEventListener("submit", checkNum4, false);

//deze code hierboven checkt of het vierde getal klopt, zo nee vertelt het of het getal hoger of lager is

var slotje4 = "zichtbaar";

var afbeelding5 = document.getElementById('slot4');

function laatGetal4Zien(){
    if (slotje4 == "zichtbaar" && randNum4 == "1" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_1.jpg";
		slotje4 = "nietzichtbaar";
    }
	
    if (slotje4 == "zichtbaar" && randNum4 == "2" && randNum4 == document.getElementById("input4").value){ 
        afbeelding5.src = "images/getal_2.jpg";
		slotje4 = "nietzichtbaar";
    }
	
    if (slotje4 == "zichtbaar" && randNum4 == "3" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_3.jpg";
		slotje4 = "nietzichtbaar";
    }
	
	 if (slotje4 == "zichtbaar" && randNum4 == "4" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_4.jpg";
		slotje4 = "nietzichtbaar";
    }
	
     if (slotje4 == "zichtbaar" && randNum4 == "5" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_5.jpg";
		slotje4 = "nietzichtbaar";
    }
	
     if (slotje4 == "zichtbaar" && randNum4 == "6" && randNum4 == document.getElementById("input4").value){  
        afbeelding5.src = "images/getal_6.jpg";
		slotje4 = "nietzichtbaar"; 
    }
	
     if (slotje4 == "zichtbaar" && randNum4 == "7" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_7.jpg";
		slotje4 = "nietzichtbaar"; 
    }
	
     if (slotje4 == "zichtbaar" && randNum4 == "8" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_8.jpg";
		slotje4 = "nietzichtbaar"; 
    }
	
     if (slotje4 == "zichtbaar" && randNum4 == "9" && randNum4 == document.getElementById("input4").value){
        afbeelding5.src = "images/getal_9.jpg";
		slotje4 = "nietzichtbaar"; 
    }
}

document.getElementById("form4").addEventListener("submit", laatGetal4Zien, false);

//deze code zorgt ervoor dat wanneer je het vierde getal raad, het vierde slotje veranderd in de juiste afbeelding

function veranderNaarSlotje4(){
	if (slotje4 == "nietzichtbaar" && randNum4 != document.getElementById("input4").value){
		afbeelding5.src = "images/slot4.jpg";
		slotje4 = "zichtbaar";
	}
}

document.getElementById("form4").addEventListener("submit", veranderNaarSlotje4, false);

//deze code zorgt ervoor dat de vierde afbeelding met het cijfer veranderd naar een slotje als je dit getal perongeluk opnieuw raad

var getal = document.getElementById("optellen");

function aantalPogingen(){
	getal = document.getElementById("optellen").innerHTML++ ;   
}

// bron: https://www.youtube.com/watch?v=bRaN42bh-V4&t=0s&index=3&list=FLqN3tk61oaqp81S5aN3GbYA door TheMindSpeaks

document.getElementById("form1").addEventListener("submit", aantalPogingen, false);
document.getElementById("form2").addEventListener("submit", aantalPogingen, false);
document.getElementById("form3").addEventListener("submit", aantalPogingen, false);
document.getElementById("form4").addEventListener("submit", aantalPogingen, false);

// deze code houdt bij hoeveel keer je op "raad" heb geklikt om zo bij te houden hoeveel pogingen je hebt gedaan om de code te raden

function checkHeleCode(){
    if (document.getElementById("regel1").textContent == "1. U heeft" + " " + document.getElementById('input1').value + " " + "geraden, dit is goed." &&            document.getElementById("regel2").textContent == "2. U heeft" + " " + document.getElementById('input2').value + " " + "geraden, dit is goed." &&  document.getElementById("regel3").textContent == "3. U heeft" + " " + document.getElementById('input3').value + " " + "geraden, dit is goed." &&  document.getElementById("regel4").textContent == "4. U heeft" + " " + document.getElementById('input4').value + " " + "geraden, dit is goed."){
        
    document.querySelector("h2").textContent = "U heeft de code geraden! de code was" + " " + randomCode + " " + "Dit heeft u geraden in" + " " + document.getElementById("optellen").innerHTML + " " + "pogingen! Klik op de kluis om te kijken wat er in zit!";
       
    }
    else {
        document.querySelector("h2").textContent = "U heeft de hele code nog niet geraden.";
    }   
}

document.getElementById("form1").addEventListener("submit", checkHeleCode, false);
document.getElementById("form2").addEventListener("submit", checkHeleCode, false);
document.getElementById("form3").addEventListener("submit", checkHeleCode, false);
document.getElementById("form4").addEventListener("submit", checkHeleCode, false);

//deze code hierboven checkt of de hele code klopt, zo ja: felicitatie bericht plus aantal pogingen plus de code, zo nee: code nog niet geraden bericht

var kluis = "zichtbaar";

var afbeelding = document.getElementById("kluis");

function prijs(){
    if (kluis == "zichtbaar" && document.getElementById('regel1').textContent == "1. U heeft" + " " + document.getElementById("input1").value + " " + "geraden, dit is goed." &&  document.getElementById("regel2").textContent == "2. U heeft" + " " + document.getElementById("input2").value + " " + "geraden, dit is goed." &&  document.getElementById("regel3").textContent == "3. U heeft" + " " + document.getElementById("input3").value + " " + "geraden, dit is goed." &&  document.getElementById("regel4").textContent == "4. U heeft" + " " + document.getElementById("input4").value + " " + "geraden, dit is goed."){
        
        document.querySelector("h2").textContent = "Javascript, Javascript Everywhere! Aantal pogingen:" + " " + document.getElementById("optellen").innerHTML;
        afbeelding.src = "images/prijs.jpg";
		kluis = "nietzichtbaar";
    }
    else {
        document.querySelector("h2").textContent = "Je moet eerst de code goed hebben voordat je op de kluis kan klikken!";
     
    }
}

document.getElementById("kluis").addEventListener("click", prijs, false);

/*deze code hierboven zorgt ervoor dat de afbeelding van de kluis veranderd naar de prijs als je de code goed hebt, als je op de kluis klikt zonder dat je de code hebt geraden, staat er dat je eerst de code moet raden*/



//BUGFIXES:

function veranderPrijsNaarKluis1(){
	if (kluis == "nietzichtbaar" && randNum1 != document.getElementById("input1").value){
		afbeelding.src = "images/kluiss.png";
		kluis = "zichtbaar";
	}
}

document.getElementById("form1").addEventListener("submit", veranderPrijsNaarKluis1, false);

//deze code zorgt ervoor wanneer de prijs al in beeld is, maar je veranderd het eerste getal, dat de prijs weer verdwijnt

function veranderPrijsNaarKluis2(){
	if (kluis == "nietzichtbaar" && randNum2 != document.getElementById("input2").value){
		afbeelding.src = "images/kluiss.png";
		kluis = "zichtbaar";
	}
}

document.getElementById("form2").addEventListener("submit", veranderPrijsNaarKluis2, false);

//deze code zorgt ervoor wanneer de prijs al in beeld is, maar je veranderd het tweede getal, dat de prijs weer verdwijnt

function veranderPrijsNaarKluis3(){
	if (kluis == "nietzichtbaar" && randNum3 != document.getElementById("input3").value){
		afbeelding.src = "images/kluiss.png";
		kluis = "zichtbaar";
	}
}

document.getElementById("form3").addEventListener("submit", veranderPrijsNaarKluis3, false);

//deze code zorgt ervoor wanneer de prijs al in beeld is, maar je veranderd het derde getal, dat de prijs weer verdwijnt

function veranderPrijsNaarKluis4(){
	if (kluis == "nietzichtbaar" && randNum4 != document.getElementById("input4").value){
		afbeelding.src = "images/kluiss.png";
		kluis = "zichtbaar";
	}
}

document.getElementById("form4").addEventListener("submit", veranderPrijsNaarKluis4, false);

//deze code zorgt ervoor wanneer de prijs al in beeld is, maar je veranderd het vierde getal, dat de prijs weer verdwijnt



