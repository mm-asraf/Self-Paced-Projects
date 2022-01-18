const quizData = [

    {
        question: "what IP stands for ?",
        a: "Internet Protocol",
        b: "Intranet Protocol",
        c: "Intentional Protocol",
        d: "None of these",
        correct: "a"
    },

    {
        question: "who is the creater of javascript:",
        a: "Guido van Rossum",
        b: "James Goosling",
        c: "Brendan Eich",
        d: "Dennis Ritchie",
        correct: "c"
    },

    {
        question: "What is the first name of javascript?",
        a: "TypeScript",
        b: "Mocha",
        c: 'LiveScript',
        d: "javascript",
        correct: "b"
    },

    {

        question: "what is JSON stands for?",
        a: "java object Notation",
        b: "javascript object type Notation",
        c: "javascript object Notation",
        d: "None of these",
        correct: "c"
    }


]


const quiz = document.getElementById("quiz")
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBt");

let currentQuiz = 0;
let score = 0;

quizload()
function quizload() {
    deSelect()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deSelect() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function select() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = select()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            console.log(score)
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            quizload()
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }

    }
})