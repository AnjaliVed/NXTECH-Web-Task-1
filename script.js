let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//10 questions with options and answer array
const quizArray =
[

    {
        id: "0",
        question: "HTML stands for _______ ?",
        options: [
              "HighText Machine Langauge",
              "HyperText and Links Markup Langauge",
              "HyperText Markup Langauge",
              "None of these",
        ],
        correct: "HyperText Markup Langauge",
     },
     
     {
        id: "1",
        question: "What do you understand by HTML?",
        options: [
              "HTML describes the structure of a webpage",
              "HTML is the standard markup language mainly used to create web pages",
              "HTML consists of a set of elements that helps the browser how to view the content",
              "All of the above",
        ],
        correct: "All of the above",
     },
     
     {
        id: "2",
        question: "How many sizes of headers are available in HTML by default?",
        options: [
              "5",
              "1",
              "3",
              "6",
        ],
        correct: "6",
     },
     
     {
        id: "3",
        question: "The correct sequence of HTML tags for starting a webpage is -",
        options: [
              "Head, Title, HTML, body",
              "HTML, Body, Title, Head",
              "HTML, Head, Title, Body",
              "HTML, Head, body, Title",
        ],
        correct: "HTML, Head, Title, Body",
     },
     
     {
        id: "4",
        question: "Which of the following element is responsible for making the text bold in HTML?",
        options: [
              "pre",
              "a",
              "b",
              "br",
        ],
        correct: "b",
     },
     
     {
        id: "5",
        question: "Which of the following tag is used for inserting the largest heading in HTML?",
        options: [
              "h3",
              "h1",
              "h5",
              "h6",
        ],
        correct: "h1",
     },
     
     {
        id: "6",
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: [
              "ul",
              "ol",
              "li",
              "i",
        ],
        correct: "ul",
     },
     
     {
        id: "7",
        question: "Which character is used to represent the closing of a tag in HTML?",
        options: [
              '"\"',
              '"!"',
              '"/"',
              '"."',
        ],
        correct: '"/"',
     },
     
     {
        id: "8",
        question: "which is full form of CSS?",
        options: [
              "Cascading Style Sheet",
              "Create Style Sheet",
              "Custome Style Sheet",
              "None of the above",
        ],
        correct: "Cascading Style Sheet",
     },
     
     {
        id: "9",
        question: "Which of the following element is responsible for making the text italic in HTML?",
        options: [
              "i",
              "italic",
              "it",
              "pre",
        ],
        correct: "i",
     },
];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = () => {
        questionCount += 1;

        if(questionCount == quizArray.length){
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            userScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount;
        }
        else{
            countOfQuestion.innerHTML = questionCount + 1 + " of " +  quizArray.length + " Question ";
            
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

const timerDisplay = () => {
      countdown = setInterval(() => {
            count--;
            timeLeft.innerHTML = `${count}s`;
            if(count == 0){
                  clearInterval(countdown);
                  displayNext();
            }
      },  1000);
};
const quizDisplay = (questionCount) => {
      let quizCards = document.querySelectorAll(".container-mid");

      quizCards.forEach((card) => {
            card.classList.add("hide");
      });
      quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
      quizArray.sort( () => Math.random() - 0.5);

      for(let i of quizArray){
            i.options.sort(() => Math.random() - 0.5);
            let div = document.createElement("div");
            div.classList.add("container-mid", "hide");

            countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

            let question_DIV = document.createElement("p");
            question_DIV.classList.add("question");
            question_DIV.innerHTML = i.question;
            div.appendChild(question_DIV);

            div.innerHTML += 
            `<button class="option-div" onclick="checker(this)"> 
            ${i.options[0]}</button>
            <button class="option-div" onclick="checker(this)"> 
            ${i.options[1]}</button>
            <button class="option-div" onclick="checker(this)"> 
            ${i.options[2]}</button>
            <button class="option-div" onclick="checker(this)"> 
            ${i.options[3]}</button>`;
             
            quizContainer.appendChild(div);
      }
}

function checker(userOption){
      let userSolution = userOption.innerText;
      let question = document.getElementsByClassName
      ("container-mid")[questionCount];
      let options = question.querySelectorAll(".option-div");

      if(userSolution === quizArray[questionCount].correct){
            userOption.classList.add("correct");
            scoreCount++;
      }
      else{
            userOption.classList.add("incorrect");

            options.forEach( (element) => {
                  if((element.innerText == quizArray[questionCount].correct)){
                        element.classList.add("correct");
                  }
            });
      }

      clearInterval(countdown);
      options.forEach((element) => {
            element.disabled = true;
      });
}

function initial(){
      quizContainer.innerHTML = "";
      questionCount = 0;
      scoreCount = 0;
      count = 11;
      clearInterval(countdown);
      timerDisplay();
      quizCreater();
      quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
      startScreen.classList.add("hide");
      displayContainer.classList.remove("hide");
      initial();
});

window.onload = () => {
      startScreen.classList.remove("hide");
      displayContainer.classList.add("hide");
};








