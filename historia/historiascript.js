/* Tähän väliin tulee Historia osion Java-script  */

const ekaPalaute = "Hyvin vedetty!";
const tokaPalaute = "Nerokasta!";
const kolmasPalaute = "You go Einstein!";
const neljäsPalaute = "Fiksu muksu!";
const viidesPalaute = "Älyköiden aatelia!";

function pelivastaus() {
let ensimmainenKysymys = document.getElementById("ensimmainenKysymys").value ;
let toinenKysymys = document.getElementById("toinenKysymys").value ;
let kolmasKysymys = document.getElementById("kolmasKysymys").value ;
let neljasKysymys = document.getElementById("neljasKysymys").value ;
let viidesKysymys = document.getElementById("viidesKysymys").value ;
let oikein= 0;

if (ensimmainenKysymys ==) {
  oikein++
}

if (toinenKysymys ==) {
  oikein++
}

if (kolmasKysymys ==) {
  oikein++
}
if (neljasKysymys ==) {
  oikein++
}
if (viidesKysymys ==) {
  oikein++
}

var palaute = ["You go Einstein!", "Fiksu muksu, mutta pystyt parempaan", "Kaipaa hiomista!" ]
var kuvat = [];

let pisteytys;

if (oikein < 1) {
  pisteytys = 2;
}  

if ( oikein > 0 && correct < 3) {
  pisteytys = 1;
}  

if ( oikein > 2) {
  pisteytys = 0;
} 

document.getElementById("vastauksenJalkeen").style.visibility = "visible"
document.getElementById("numeroOikein").innerHTML = "Vastaus on oikein" + oikein;
document.getElementById("palaute").innerHTML= palaute [pisteytys]}
document.getElementById("pisteetOikein").innerHTML = "Pisteet" + oikein ;
document.getElementById("kuva").src = kuvat [pistetytys]; 


/* Tähän väliin tulee Historia osion Java-script  */
