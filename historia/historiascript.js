/* Tähän väliin tulee Historia osion Java-script  */
/*Java-script tiedoston toteuttamiseen lainattu seuraavaa koodia:*/
/* Kevin Birggs 2016. Youtube-video. Javascript Tutioral: Make a quiz. Hakupäivä:22.4.2022  */ 

/*Pelin runko*/

/* Tähän määritelty palautteet */

const palauteYks= "Vastaathan kysymyksiin, ennen visan palauttamista";
const palauteKaks= "Pystyt parempaan!";
const palauteKolme= "Ihan ok, mutta pystytkö parempaan?";
const palauteNelja= "Hienoa!";
const palauteViis = "Loisto suoritus!";

const palauteKuvaYks = "../historia/images/odotan.gif";
const palauteKuvaKaks = "../historia/images/fail.gif";
const palauteKuvaKolme = "../historia/images/ok.gif";
const palauteKuvaNelja = "../historia/images/bravo.gif";
const palauteKuvaViis = "../historia/images/goodjob.gif";

/* Tässä funktio */ 
/*muuttujat*/

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
  	var question4 = document.quiz.question4.value;
  	var question5 = document.quiz.question4.value;
	var correct = 0;

// Oikeiden vastausten määrittely

if (question1 == "turku") {
	correct++;
}
if (question2 == "markka") {
		correct++;
}	
if (question3 == "tuntematon") {
		correct++;
	}
if (question4 == "svinhufvud") {
		correct++;
}
if (question5 == "vuosi") {
		correct++;
}

// Pistemäärä määrittää saadun, palautetekstin ja kuvan
	
var pictures = [ palauteKuvaYks, palauteKuvaKaks, palauteKuvaKolme, palauteKuvaNelja, palauteKuvaViis ]
var messages = [palauteYks, palauteKaks, palauteKolme, palauteNelja, palauteViis ]
var score;

	 if (correct == 0) {
	score = 0;
	}


	if (correct > 0 && correct < 3 ) {
	score = 1;
	}
  

  	if (correct == 3) {
    score = 2;
	  }

	if (correct == 4) {
		score = 3;
	}  

	if (correct == 5) {
		score == 4; 
}

// Tulostukset yms.
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML =  correct;
	document.getElementById("picture").src = pictures[score];
}
