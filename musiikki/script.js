//Koodissa käytetty apuna käyttäjän "WEB HUB" youtubevideota https://youtu.be/2jwdyO_UunE

let question = document.getElementById('question');
let quizContainer = document.getElementById('quiz-container');
let scorecard = document.getElementById('scorecard');

let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');

let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');

let i = 0;
let score = 0;

//Kysymyskenttä
let kysymysPatteri = [
    {
        question : 'Mistä kaupungista artisti Antti Tuisku on alunperin kotoisin?',
        option : ['Oulu','Rovaniemi','Kirkkonummi','Vaasa'],
        answer : 'Rovaniemi'
    },
    {
        question : 'Mikä oli artistin Robin ensimmäinen iso hitti?',
        option : ['Myrsky','Taivas lyö tulta','Melodia','Frontside ollie'],
        answer : 'Frontside ollie'
    },
    {
        question : 'Mikä on JVG:n vuonna 2022 ensi-iltaan tulevan elokuvan nimi?',
        option : ['Päivät ollu pitkii','Kuukaudet ollu raskaita','Vuodet ollu tuulisii','Viikot kuluu nopee'],
        answer : 'Vuodet ollu tuulisii'
    },
    {
        question : 'Mikä oli soittoennätyksiäkin rikkoneen williamin ensimmäinen iso hitti?',
        option : ['Penelope','Pamela','Pauliina','Pirjo'],
        answer : 'Penelope'
    },
    {
        question : 'Minä vuonna artisti SANNI on syntynyt?',
        option : ['1993','1990','1995','1997'],
        answer : '1993'
    },
]
//Näytetään kysymykset
function displayQuestion(){
    for(let a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML=' '+kysymysPatteri[i].question;
    option0.innerHTML= kysymysPatteri[i].option[0];
    option1.innerHTML= kysymysPatteri[i].option[1];
    option2.innerHTML= kysymysPatteri[i].option[2];
    option3.innerHTML= kysymysPatteri[i].option[3];
    stat.innerHTML= "Kysymys"+' '+(i+1)+' '+'/'+' '+kysymysPatteri.length;
}

//Lasketaan oikeat vastaukset
function calcScore(e){
    if(e.innerHTML===kysymysPatteri[i].answer && score<kysymysPatteri.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,1000);
}

//Siirrytään seuraavaan kysymykseen
function nextQuestion(){
    if(i<kysymysPatteri.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ kysymysPatteri.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//Seuraava -nappi
next.addEventListener('click',nextQuestion);

//Takaisin -nappi
function backToQuiz(){
    location.reload();
}

//Tarkastetaan vastaukset
function checkAnswer(){
    let answerBank= document.getElementById('answerBank');
    let answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(let a=0;a<kysymysPatteri.length;a++)
    {
        let list= document.createElement('li');
        list.innerHTML= kysymysPatteri[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();