const quizData = [
    {
        question: "When did JavaScript first appeared?",
        a: "1992",
        b: "1995",
        c: "2000",
        d: "2003",
        correct: "b"
    },
    {
        question: "Who is the creator of JavaScript?",
        a: "James Gosling",
        b: "Guido van Rossum",
        c: "Bjarne Stroustrup",
        d: "Brendan Eich",
        correct: "d"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<javascript>",
        c: "<script>",
        d: "<js>",
        correct: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "EJS",
        correct: "c"
    },
    {
        question: "JavaScript file has an extension of?",
        a: ".js",
        b: ".java",
        c: ".javascript",
        d: ".xml",
        correct: "a"
    }
];

const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if(answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++; 

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your score is: ${score}/${quizData.length}</h2>
            <button onclick = "location.reload()">Try again!</button>`;
        }
    } 
});