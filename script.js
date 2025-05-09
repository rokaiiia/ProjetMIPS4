let currentUser = null;

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Inscription réussie (simulation)");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const type = document.querySelector("#registerForm select").value;
  currentUser = type;
  alert("Connexion réussie (simulation)");

  if (type === "enseignant") {
    document.getElementById("examCreation").classList.remove("hidden");
  } else {
    document.getElementById("studentExam").classList.remove("hidden");
    startTimer();
  }
});

document.getElementById("examForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Examen créé (simulation)");
});

let currentQuestion = 0;
const questions = [
  { question: "2 + 2 = ?", answer: "4" },
  { question: "Capital of France?", answer: "Paris" }
];
let score = 0;

document.getElementById("nextQuestion").addEventListener("click", () => {
  const input = document.getElementById("answer").value.trim();
  if (input.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
    score += 50;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("questionText").textContent = "Question " + (currentQuestion + 1) + ": " + questions[currentQuestion].question;
    document.getElementById("answer").value = "";
  } else {
    document.getElementById("studentExam").classList.add("hidden");
    document.getElementById("scoreSection").classList.remove("hidden");
    document.getElementById("scoreValue").textContent = score + "/100";
  }
});

function startTimer() {
  console.log("Timer démarré...");
}