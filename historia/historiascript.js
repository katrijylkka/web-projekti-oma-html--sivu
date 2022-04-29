/* Tähän väliin tulee Historia osion Java-script  */
	/*Java-script tiedoston toteuttamiseen kokonaisuudessa mallinnettu osittain seuraavaa koodia:*/
	/* Kevin Birggs 2016. Youtube-video. Javascript Tutioral: Make a quiz. Hakupäivä:22.4.2022. https://www.youtube.com/watch?v=C7NsIRhoWuE  */ 

/*Pelin runko*/

/* Tähän määritelty viestit, jotka tulevat oikeanpuoleiseen sarakkeeseen */

const palauteYks= "Vaatii  petrausta! <br> <h6>GIF= Giphy. Cabin Fever Reaction GIF. <br> giphy.com </h6>";
const palauteKaks= "Pystyt  parempaan! <br> <h6>SpongeBob SquarePants.Fail Patrick Star GIF By SpongeBob SquarePants. <br> giphy.com </h6>";
const palauteKolme= "Ihan ok, mutta pystytkö  parempaan? <br> <h6>Giphy. Meme Reaction GIF. <br> giphy.com</h6>";
const palauteNelja= "Hienoa! <br> <h6>Sky.Harry Potter Lol GIF By Sky . <br> giphy.com</h6>";
const palauteViis = "Loisto suoritus! <br> <h6>Americas Got Talent.Happy Simon Cowell GIF By America's Got Talent . <br> giphy.com</h6>";

/*Gif-imaget palautteissa, gif-kuvien linkit*/ 

const palauteKuvaYks = "../historia/images/odotan.gif";
const palauteKuvaKaks = "../historia/images/fail.gif";
const palauteKuvaKolme = "../historia/images/ok.gif";
const palauteKuvaNelja = "../historia/images/bravo.gif"; 
const palauteKuvaViis = "../historia/images/goodjob.gif";

/*Tähän määritelty palautteet oikeista ja vääristä vastauksista, palautteet tulevat kysymysten alle, kun olet vastannut.*/ 

const empty = "Et vastannut tähän kysymykseen"

const wrong1 = "Väärin. Oikea vastaus on Turku."
const wrong2 = "Väärin. Oikea vastaus on Markka."
const wrong3 = "Väärin. Oikea vastaus on Tuntematon Sotilas."
const wrong4 = "Väärin. Oikea vastaus on Pehr Evind Svinhufvud."
const wrong5 = "Väärin. Oikea vastaus on 1917."

const correct1 = "Oikein. Turku toimi Suomen epävirallisena pääkaupunkina ennen Helsinkiä. "
const correct2 = "Oikein. Ennen euroa Suomessa toimi valuuttana Markka."
const correct3 = "Oikein. Tuntemattoman sotilas ilmesty vuonna 1954. "
const correct4 = "Oikein. Svinhufvud toimi kolmantena presidenttinä vuosina: 1931–1937. "
const correct5 = "Oikein. Suomi itsenäistyi vuonna 1917."



/* Tässä funktio */ 
/*Muuttujat */

function check(){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
	

		// Oikeiden vastausten määrittely

		if (question1 == "turku" ) {
			document.getElementById("feedback1").innerHTML = correct1;
			correct++;	
		}
			else if (question1 == "") {document.getElementById("feedback1").innerHTML = empty;
			}
			else {document.getElementById("feedback1").innerHTML = wrong1;
			}
			
			

		if (question2 == "markka") {
			correct++;
			document.getElementById("feedback2").innerHTML = correct2;
		}	
			else if (question2 == "") {document.getElementById("feedback2").innerHTML = empty;
			}	
			else { document.getElementById("feedback2").innerHTML = wrong2;
			}

			
		if (question3 == "tuntematon") {
			correct++;
			document.getElementById("feedback3").innerHTML = correct3;
		}
		
			else if (question3 == "") {document.getElementById("feedback3").innerHTML = empty;
			}
			else { document.getElementById("feedback3").innerHTML = wrong3;
			}


		if (question4 == "svinhufvud") {
			correct++;
			document.getElementById("feedback4").innerHTML = correct4;
		}
			else if (question4 == "") {document.getElementById("feedback4").innerHTML = empty;
			}
			else { document.getElementById("feedback4").innerHTML = wrong4;
			}
			
			
		if (question5 === "vuosi") {
			correct++;
			document.getElementById("feedback5").innerHTML = correct5
		}
			else if (question5 == "") {document.getElementById("feedback5").innerHTML = empty;
			}
			else { document.getElementById("feedback5").innerHTML = wrong5;
			}

// Kun kysymysten vastaukset on palautettu (inputs), lukitaan kysymykset (inputs[i].disabled = true)
		// Tässä koodin osassa mallinnettu koodia
		// David Thomas. JavaScript-koodi. Hakupäivä 27.4.2022. http://jsfiddle.net/davidThomas/rHfus/.

	var inputs1 = document.getElementsByName('question1');
	var inputs2 = document.getElementsByName('question2');
	var inputs3 = document.getElementsByName('question3');
	var inputs4 = document.getElementsByName('question4');
	var inputs5 = document.getElementsByName('question5');


		for (var i = 0, len = inputs1.length; i<len; i++){
				inputs1[i].disabled = true;
		}

		for (var i = 0, len = inputs2.length; i<len; i++){
				inputs2[i].disabled = true;
		}

		for (var i = 0, len = inputs3.length; i<len; i++){
				inputs3[i].disabled = true;
		}


		for (var i = 0, len = inputs4.length; i<len; i++){
				inputs4[i].disabled = true;
		}

		for (var i = 0, len = inputs5.length; i<len; i++){
				inputs5[i].disabled = true;
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
				score = 4; 
		}



// Tulostukset yms.
	document.getElementById("afterSubmit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("numberCorrect").innerHTML = correct;	
	document.getElementById("picture").src = pictures[score];
}

function check2(){

	
	var progress = 0;
		if (document.getElementById("question1").checked){
			progress++;
		}
		if (document.getElementById("question2").checked){
			progress++;
		}
		if (document.getElementById("question3").checked){
			progress++;
		}
		if (document.getElementById("question4").checked){
			progress++;
		}
		if (document.getElementById("question5").checked){
			progress++;
		}
		
		document.getElementById("progressField").innerHTML= progress;
}		
