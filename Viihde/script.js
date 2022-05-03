//Kysymykset alkaa
let questions = [
    {
        question: "Minkä niminen ilves esiintyi elokuvassa Poika ja ilves?",
        optionA: "Simo",
        optionB: "Milo",
        optionC: "Leevi",
        optionD: "Simba",
        correctOption: "optionC"
    },

    {
        question: "Mikä eläin oli pääosassa elokuvassa Tunteellinen Niko - Lentäjän poika?",
        optionA: "Karhu",
        optionB: "Poro",
        optionC: "Jänis",
        optionD: "Hirvi",
        correctOption: "optionB"
    },

    {
        question: "Minkä nimiset sisarukset näyttelevät Sinikka- ja Tiina Nopolan kirjaan perustuvassa elokuvassa?",
        optionA: "Lotta ja Suvi",
        optionB: "Rautahanhi ja Ruohosipuli",
        optionC: "Sinikka ja Tiina",
        optionD: "Heinähattu ja Vilttitossu",
        correctOption: "optionD"
    },

    {
        question: "Keneltä Onneli ja Anneli ostavat talon ensimmäisessä elokuvassa?",
        optionA: "Tingelstiina",
        optionB: "Rouva Rosina Rusina",
        optionC: "Rouva Ruusupuu",
        optionD: "Tangelstiina",
        correctOption: "optionC"
    },

    {
        question: "Minkä tyylinen elokuva on vuonna 2015 ensi-iltansa saanut elokuva Hevisaurus?",
        optionA: "Komedia",
        optionB: "Romanttinen",
        optionC: "Musikaali",
        optionD: "Seikkailu",
        correctOption: "optionD"
    }
]

let changeQuestions = [] //Määritetään tyhjä muuttuja vaihtuville kysymyksille

function myQuestions() { 
    //funktio viidelle kysymykselle
    while (changeQuestions.length <= 4) {
        let random = questions[Math.floor(Math.random() * questions.length)]
        if (!changeQuestions.includes(random)) {
            changeQuestions.push(random)
        }
    }
}


let questionNumber = 1 //kysymys numero
let playerScore = 0  //pelaajan pisteet
let wrongAttempt = 0 //väärien vastauksien määrä
let indexNumber = 0 //seuraava kysymys

//funktion seuraavan kysymyksen suorittamiseksi
function myNextQuestion(index) {
    myQuestions()
    let currentQuestion = changeQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function answerCheck() {
    let currentQuestion = changeQuestions[indexNumber] 
    let currentQuestionAnswer = currentQuestion.correctOption 
    let options = document.getElementsByName("option");
    let correctOption = "";

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //oikea radio input ja oikea vastaus
            correctOption = option.labels[0].id
        }
    })

    //vastausvaihtoehto valittu
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //onko radiobutton sama kuin oikea vastaus
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            let wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //lisää väärän vastauksen
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handlemyNextQuestion() {
    answerCheck() //oikea vai väärä vastaus
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 4) {
            myNextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    let options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    let options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

//funktio kun kaikkiin kysymyksiin on vastattu
function handleEndGame() {
    let remark = "";
    let remarkColor = "";

    // kun pelaaja saa tietyn määrän pisteitä tulostetaan teksti
    if (playerScore <= 1) {
        remark = "Sinulla on vielä elokuvia katseltavana!"
        remarkColor = "red"
    }
    else if (playerScore >= 1 && playerScore < 4) {
        remark = "Olet nähnyt enemmän kuin yhden elokuvan!"
        remarkColor = "blue"
    }
    else if (playerScore >= 4) {
        remark = "Olet Suomi elokuvien superosaaja!"
        remarkColor = "green"
    }
    let playerGrade = (playerScore / 5) * 100
    
//pistetaulukon dataa
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//sulkee pistetaulun ja aloittaa alusta
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    changeQuestions = []
    myNextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
//koodi tehty DEV community-sivustoa apuna käyttäen https://dev.to/sulaimonolaniran