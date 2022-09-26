const quizData = [
    {
        question: "Քանի՞ տառ ունի հայոց այբուբենը",
        a: "30",
        b: "29",
        c: "39",
        d: "34",
        correct: "c",
    },
    {
        question: "Ով՞ ՀՀ առաջին նախագահը",
        a: "Սերժ Սարգսյան",
        b: "Լեւոն Տեր-Պետրոսյան",
        c: "Վազգեն Սարգսյան",
        d: "Ռոբերտ Քոչարյան",
        correct: "b",
    },
    {
        question: "Ինչպես է բացվում HTML հապավումը",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Ով է եղել առաջին տիեզերագնացը",
        a: "Վալենտինա Տերեշկովան",
        b: "Տատյանա Կուզնեցովա",
        c: "Իրինա Սոլովյովա",
        d: "Ժաննա Յորկինա",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Դուք ճիշտ պատասղանեցիք ${score}/${quizData.length} հարցին.</h2>
                
                <button onclick="location.reload()">Կրկնել</button>
            `;
        }
    }
});