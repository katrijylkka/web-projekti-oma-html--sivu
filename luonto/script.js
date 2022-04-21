const vaarin = "Vastauksesi on väärin, oikea vastaus on: ";
const oikein = "Vastauksesi on oikein!";
const tyhja = "Et vastannut kysymykseen..";
const DOGGO = '<img alt="dog" src="images/doggo.jpg">';
const CATTO = '<img alt="cat" src="images/catto.jpg">';
const BEARLY = '<img alt="bear" src="images/bearly.jpg">';

//https://stackoverflow.com/questions/28535226/javascript-how-to-show-the-next-div-and-hide-the-previous-one
var questionNumber=0;
    var questions=document.querySelectorAll('.question');
            function next(){
              questionNumber++;
              if(questions.length>questionNumber)
              {
                    document.querySelector('.active').classList.remove('active');
              		questions[questionNumber].classList.add('active');
              }
            }

var score = 0;

//Tarkistetaan onko vastattu, onko vastaus oikein vai väärin, ja annetaan palaute.
function f01() {
    //kysymys 1
    //https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript
    if(document.getElementById("talviuni1").checked) {
        document.getElementById("tulos").innerHTML= oikein;
        score=score+1;
      }
      else if (document.getElementById("talviuni2").checked || document.getElementById("talviuni3").checked) {
        document.getElementById("tulos").innerHTML= vaarin + "6 kuukautta";
      }else {
          document.getElementById("tulos").innerHTML = tyhja;
      }
        //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_disabled2
        document.getElementById("talviuni1").disabled = true;
        document.getElementById("talviuni2").disabled = true;
        document.getElementById("talviuni3").disabled = true;
    }
function f02() {
      
      //kysymys2
      if(document.getElementById("lintu3").checked) {
        document.getElementById("tulos2").innerHTML= oikein;
        score=score+1;
      }
      else if (document.getElementById("lintu1").checked || document.getElementById("lintu2").checked) {
        document.getElementById("tulos2").innerHTML= vaarin + "Merikotka";
      }else {
          document.getElementById("tulos2").innerHTML = tyhja;
      }
        document.getElementById("lintu1").disabled = true;
        document.getElementById("lintu2").disabled = true;
        document.getElementById("lintu3").disabled = true;
      }

function f03(){
      //kysymys3
      if(document.getElementById("tappavin3").checked) {
        document.getElementById("tulos3").innerHTML= oikein;
        score=score+1;
      }
      else if (document.getElementById("tappavin2").checked || document.getElementById("tappavin3").checked) {
        document.getElementById("tulos3").innerHTML= vaarin + "Ampiainen";
      }else {
          document.getElementById("tulos3").innerHTML = tyhja;
      }
        document.getElementById("tappavin1").disabled = true;
        document.getElementById("tappavin2").disabled = true;
        document.getElementById("tappavin3").disabled = true;  
      }

function f04() {
      //kysymys4
      if(document.getElementById("puulaji1").checked) {
        document.getElementById("tulos4").innerHTML= oikein;
        score=score+1;
      }
      else if (document.getElementById("puulaji2").checked || document.getElementById("puulaji3").checked) {
        document.getElementById("tulos4").innerHTML= vaarin + "Mänty";
      }else {
          document.getElementById("tulos4").innerHTML = tyhja;
      }
        document.getElementById("puulaji1").disabled = true;
        document.getElementById("puulaji2").disabled = true;
        document.getElementById("puulaji3").disabled = true;
    }

 function f05() {   
      //kysymys5
      if(document.getElementById("pituus2").checked) {
        document.getElementById("tulos5").innerHTML= oikein;
        score=score+1;
      }
      else if (document.getElementById("pituus1").checked || document.getElementById("pituus3").checked) {
        document.getElementById("tulos5").innerHTML= vaarin + "1150km";
      }else {
          document.getElementById("tulos5").innerHTML = tyhja;
      }
        document.getElementById("pituus1").disabled = true;
        document.getElementById("pituus2").disabled = true;
        document.getElementById("pituus3").disabled = true;
    }

function f06() {
  document.getElementById("kokonaispisteet").innerHTML = score + "/5";
  if(score <= 2){
    document.getElementById("palaute").innerHTML = "heikosti meni, kokeile uudestaan :)" + "<br>" + DOGGO;
  }else if(score <= 4){
    document.getElementById("palaute").innerHTML = "tosi hyvin, mutta vielä pitäisi petrata." + "<br>" + CATTO;
  }else {
    document.getElementById("palaute").innerHTML = "Olet Suomen luontotietäjä!" + "<br>" + BEARLY;
  }


}

