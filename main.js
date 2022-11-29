/* Header Stuff */

const header = document.querySelector("header");
const hambugerMenu = document.querySelector(".hamburger-menu");

hambugerMenu.addEventListener("click", () => {
  header.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? header.classList.add("sticky")
    : header.classList.remove("sticky");
});

// Input animation

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/* QUIZZES */

// const quizData = [
//   {
//     question: "Which language runs in a web browser?",
//     a: "Java",
//     b: "C",
//     c: "Python",
//     d: "javascript",
//     correct: "d",
//   },
//   {
//     question: "What does CSS stand for?",
//     a: "Central Style Sheets",
//     b: "Cascading Style Sheets",
//     c: "Cascading Simple Sheets",
//     d: "Cars SUVs Sailboats",
//     correct: "b",
//   },
//   {
//     question: "What does HTML stand for?",
//     a: "Hypertext Markup Language",
//     b: "Hypertext Markdown Language",
//     c: "Hyperloop Machine Language",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "a",
//   },
//   {
//     question: "What year was JavaScript launched?",
//     a: "1996",
//     b: "1995",
//     c: "1994",
//     d: "none of the above",
//     correct: "b",
//   },
// ];

// const quiz = document.querySelector(".quiz-header");
// const box = document.querySelectorAll(".box");
// box.forEach((e) => {
//   e.addEventListener("click", () => {
//     quiz.style.display = "block";
//   });
// });

// const answerEls = document.querySelectorAll(".answer");
// const questionEl = document.getElementById("question");
// const a_text = document.getElementById("a_text");
// const b_text = document.getElementById("b_text");
// const c_text = document.getElementById("c_text");
// const d_text = document.getElementById("d_text");
// const submitBtn = document.getElementById("submit");

// let currentQuiz = 0;
// let score = 0;

// function deselectAnswers() {
//   answerEls.forEach((answerEl) => (answerEl.checked = false));
// }

// const loadQuiz = () => {
//   deselectAnswers();
//   console.log(currentQuiz);
//   const currentQuizData = obj[currentQuiz];
//   questionEl.innerText = currentQuizData.question;
//   a_text.innerText = currentQuizData.a;
//   b_text.innerText = currentQuizData.b;
//   c_text.innerText = currentQuizData.c;
//   d_text.innerText = currentQuizData.d;
// };

// loadQuiz(quizData);

// function getSelected() {
//   let answer;
//   answerEls.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id;
//     }
//   });
//   return answer;
// }

// submitBtn.addEventListener("click", () => {
//   const answer = getSelected();
//   if (answer) {
//     if (answer === quizData[currentQuiz].correct) {
//       score++;
//     }
//     currentQuiz++;
//     if (currentQuiz < quizData.length) {
//       loadQuiz();
//     } else {
//       quiz.innerHTML = `
//            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//            <button onclick="location.reload()">Try Again</button>
//            `;
//     }
//   }
// });

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "javascript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.querySelector(".quiz-header");
const box = document.querySelectorAll(".box");

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

for (ind = 0; ind < box.length; ind++) {
  box[ind].id = "" + ind;
}
box.forEach((e) => {
  e.addEventListener("click", () => {
    quiz.style.display = "block";
    currentQuiz = parseInt(e.id);
    deselectAnswers();
    console.log(currentQuiz);
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  });
});

let currentQuiz = 0;
let score = 0;

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
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
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Try Again</button>
           `;
    }
  }
});
