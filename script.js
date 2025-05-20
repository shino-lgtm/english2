const questions = [
  {
    question: "May I take your order?",
    options: ["Yes, I'll have the steak.", "No, I already paid.", "I'm going to the airport."],
    answer: "Yes, I'll have the steak."
  }
];

let current = 0;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");

function showQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      feedbackEl.textContent = (option === q.answer) ? "⭕ 正解！" : "❌ 不正解…";
    };
    optionsEl.appendChild(btn);
  });
}

showQuestion();
