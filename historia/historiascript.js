/* Tähän väliin tulee Historia osion Java-script  */
/*Java-script tiedoston toteuttamiseen lainattu osittain seuraavaa koodia:*/
/* Kevin Birggs 2016. Youtube-video. Javascript Tutioral: Make a quiz. Hakupäivä:22.4.2022. https://www.youtube.com/watch?v=C7NsIRhoWuE  */ 

/*Pelin runko*/

/* Tähän määritelty viestit */

const palauteYks= "Vastaathan kysymyksiin, ennen visan palauttamista";
const palauteKaks= "Pystyt parempaan!";
const palauteKolme= "Ihan ok, mutta pystytkö parempaan?";
const palauteNelja= "Hienoa!";
const palauteViis = "Loisto suoritus!";

/*Gif-imaget palautteissa*/ 

const palauteKuvaYks = "../historia/images/odotan.gif";
const palauteKuvaKaks = "../historia/images/fail.gif";
const palauteKuvaKolme = "../historia/images/ok.gif";
const palauteKuvaNelja = "../historia/images/bravo.gif";
const palauteKuvaViis = "../historia/images/goodjob.gif";

/*Tähän määritelty palautteet oikeista ja vääristä vastauksista*/ 

const empty = "Et vastannut tähän kysymykseen"

const feedback1 = "Väärin. Oikea vastaus on Turku."
const feedback2 = "Väärin. Oikea vastaus on Markka."
const feedback3 = "Väärin. Oikea vastaus on Tuntematon Sotilas."
const feedback4 = "Väärin. Oikea vastaus on Pehr Evind Svinhufvud."
const feedback5 = "Väärin. Oikea vastaus on 1917."

const correct1 = "Oikein. Turku toimi Suomen epävirallisena pääkaupunkina ennen Helsinkiä. "
const correct2 = "Oikein. Ennen euroa Suomessa toimi valuuttana Markka."
const correct3 = "Oikein. Tuntemattoman sotilas ilmesty vuonna 1954. "
const correct4 = "Oikein. Svinhufvud toimi kolmantena presidenttinä vuosina: 1931–1937. "
const correct5 = "Oikein. Suomi itsenäistyi vuonna 1917. "

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
		document.getElementById("feedback1").innerHTML = correct1;
		correct++;	
	}
		else if (question1 == "") {document.getElementById("feedback1").innerHTML = empty;
		}
		else  { document.getElementById("feedback1").innerHTML = feedback1;
		}
		

	if (question2 == "markka") {
		correct++;
		document.getElementById("feedback2").innerHTML = correct2;
	}	
		else if (question1 == "") {document.getElementById("feedback2").innerHTML = empty;
		}	
		else { document.getElementById("feedback2").innerHTML = feedback2;
		}

		
	if (question3 == "tuntematon") {
		correct++;
		document.getElementById("feedback3").innerHTML = correct3;
	}
		else if (question1 == "") {document.getElementById("feedback3").innerHTML = empty;
		}
		else { document.getElementById("feedback3").innerHTML = feedback3;
		}


	if (question4 == "svinhufvud") {
		correct++;
		document.getElementById("feedback4").innerHTML = correct4;
		}
		else if (question1 == "") {document.getElementById("feedback4").innerHTML = empty;
		}
		else { document.getElementById("feedback4").innerHTML = feedback4;
		}
		
		
	if (question5 == "vuosi") {
		correct++;
		document.getElementById("feedback5").innerHTML = correct5;
	}
		else if (question1 == "") {document.getElementById("feedback5").innerHTML = empty;
		}
		else { document.getElementById("feedback5").innerHTML = feedback5;
		}	

//Progress-bar

progresbar= [question1, question2, question3, question4, question5]
answers=[]
for (i=0; i<progresbar.lenght; i++) {
	let j=5-i
	var questionsleft= '[' + j + 'kysymyksiä jäljellä]';
	answers.push(promt(progresbar[i] + " " + questionsleft));
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
