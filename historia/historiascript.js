/* Tähän väliin tulee Historia osion Java-script  */

/*Pelin runko*/

/* Tähän määritelty palautteet */

const palauteYks= "Vastaathan kysymyksiin, ennen visan palauttamista";
const palauteKaks= "Pisteet: 1/5     Vaatii hiomista";
const palauteKolme= "Pisteet: 2/5     Vaatii hiomista";
const palauteNelja= "Pisteet 3/5     Ihan Jees! Pystytkö petraamaan?";
const palauteViis = "Pisteet 4/5     Fiksu Muksu!";
const palauteKuus = "Pisteet 5/5     Todelinen Einstein!";


function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var question5 = document.quiz.question4.value;
	var correct = 0;


	if (question1 == "turku") {
		correct++;
}
	if (question2 == "markka") {
		correct++;
}	
	if (question3 == "svinhufvud ") {
		correct++;
	}
  if (question4 == "tuntematonsotilas") {
		correct++;
	}
  if (question5 == "1917") {
		correct++;
	}
	
	var pictures = [];
	var messages = ["Vastaathan kysymyksiin, ennen visan palauttamista","Pisteet: 1/5     Vaatii hiomista","Pisteet: 2/5     Vaatii hiomista", "Pisteet 3/5     Ihan Jees! Pystytkö petraamaan?", "Pisteet 4/5     Fiksu Muksu!","Pisteet 5/5     Todelinen Einstein!"]
	var score;

	if (correct = 0) {
		score = 0;
	}

	if (correct = 1) {
		score = 1;
	}

	if (correct = 2) {
		score = 2;
  }  

  if (correct = 3) {
    score = 3;
  } 

  if (correct = 4) {
    score = 4;
  }   

  if (correct = 5) {
    score = 5;  
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}
