  //Määritellään vakiot
  const VAARIN = "Vastauksesi on väärin, oikea vastaus on: ";
  const OIKEIN = "Vastauksesi on oikein!";
  const TYHJA = "Et vastannut kysymykseen..";
  const DOGGO = '<img alt="dog" src="images/doggo.jpg">';
  const CATTO = '<img alt="cat" src="images/catto.jpg">';
  const BEARLY = '<img alt="bear" src="images/bearly.jpg">';

  //Kun painetaan "seuraava" -nappia, seuraava kysymys tulee esiin, ja pistelaskuriin lisätään aina yksi piste jos vastaus on oikein.
  //https://stackoverflow.com/questions/28535226/javascript-how-to-show-the-next-div-and-hide-the-previous-one
  var questionNumber=0;
  var questions=document.querySelectorAll('.question');
  var score = 0;
    function next(){
      questionNumber++;
      if(questions.length>questionNumber){
        document.querySelector('.active').classList.remove('active');
        questions[questionNumber].classList.add('active');
      }
    }

  //kysymys yksi, tarkistetaan mitä käyttäjä vastasi ja otetaan napit pois käytöstä kysymyksen vaihtamisen estämiseksi ja annetaan palaute.
  function f01() {
    //https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript
    if(document.getElementById("talviuni1").checked) {
      document.getElementById("tulos").innerHTML= OIKEIN;
      score=score+1;
    }
    else if (document.getElementById("talviuni2").checked || document.getElementById("talviuni3").checked) {
      document.getElementById("tulos").innerHTML= VAARIN + "6 kuukautta, talvella karhut nukkuvat Suomessa talviunta, joka kestää vähän alle puoli vuotta.";
    }else {
      document.getElementById("tulos").innerHTML = TYHJA;
    }
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_disabled2
    document.getElementById("talviuni1").disabled = true;
    document.getElementById("talviuni2").disabled = true;
    document.getElementById("talviuni3").disabled = true;
  }
  //kysymys kaksi, tarkistetaan mitä käyttäjä vastasi ja otetaan napit pois käytöstä kysymyksen vaihtamisen estämiseksi.
  function f02() {
    if(document.getElementById("lintu3").checked) {
      document.getElementById("tulos2").innerHTML= OIKEIN;
      score=score+1;
    }
    else if (document.getElementById("lintu1").checked || document.getElementById("lintu2").checked) {
      document.getElementById("tulos2").innerHTML= VAARIN + "Merikotka, sen siipiväli on suurempi kuin millään muulla Suomessa elävällä linnulla.";
    }else {
      document.getElementById("tulos2").innerHTML = TYHJA;
    }
    document.getElementById("lintu1").disabled = true;
    document.getElementById("lintu2").disabled = true;
    document.getElementById("lintu3").disabled = true;
  }
  //kysymys kolme, tarkistetaan mitä käyttäjä vastasi ja otetaan napit pois käytöstä kysymyksen vaihtamisen estämiseksi.
  function f03(){
    if(document.getElementById("tappavin3").checked) {
      document.getElementById("tulos3").innerHTML= OIKEIN;
      score=score+1;
    }
    else if (document.getElementById("tappavin2").checked || document.getElementById("tappavin1").checked) {
      document.getElementById("tulos3").innerHTML= VAARIN + "Ampiainen. Ampiaisen hyökkäykset ovat Suomessa tilastollisesti eläinkunnan tappavimpia.";
    }else {
      document.getElementById("tulos3").innerHTML = TYHJA;
    }
    document.getElementById("tappavin1").disabled = true;
    document.getElementById("tappavin2").disabled = true;
    document.getElementById("tappavin3").disabled = true;  
  }
  //kysymys neljä, tarkistetaan mitä käyttäjä vastasi ja otetaan napit pois käytöstä kysymyksen vaihtamisen estämiseksi.
  function f04() {
    if(document.getElementById("puulaji1").checked) {
      document.getElementById("tulos4").innerHTML= OIKEIN;
      score=score+1;
    }
    else if (document.getElementById("puulaji2").checked || document.getElementById("puulaji3").checked) {
      document.getElementById("tulos4").innerHTML= VAARIN + "Mänty, sen levinneisyys yltää aina Pohjois-Lappiin asti";
    }else {
      document.getElementById("tulos4").innerHTML = TYHJA;
    }
    document.getElementById("puulaji1").disabled = true;
    document.getElementById("puulaji2").disabled = true;
    document.getElementById("puulaji3").disabled = true;
  }
  //kysymys viisi, tarkistetaan mitä käyttäjä vastasi ja otetaan napit pois käytöstä kysymyksen vaihtamisen estämiseksi.
  function f05() {   
    if(document.getElementById("pituus2").checked) {
      document.getElementById("tulos5").innerHTML= OIKEIN;
      score=score+1;
    }
    else if (document.getElementById("pituus1").checked || document.getElementById("pituus3").checked) {
      document.getElementById("tulos5").innerHTML= VAARIN + "1150km";
    }else {
      document.getElementById("tulos5").innerHTML = TYHJA;
    }
    document.getElementById("pituus1").disabled = true;
    document.getElementById("pituus2").disabled = true;
    document.getElementById("pituus3").disabled = true;
  }
  //Tarkistetaan montako pistettä käyttäjä sai ja annetaan sitä vastaava teksti- ja kuvapalaute.
  function f06() {
    document.getElementById("kokonaispisteet").innerHTML = score + "/5";
    if(score <= 2){
      document.getElementById("palaute").innerHTML = "Heikosti meni, kokeile uudestaan :)" + "<br>" + DOGGO;
    }else if(score <= 4){
      document.getElementById("palaute").innerHTML = "Hienosti meni, mutta vielä pitäisi petrata." + "<br>" + CATTO;
    }else {
      document.getElementById("palaute").innerHTML = "Olet oikea luontotietäjä!" + "<br>" + BEARLY;
  }
}

