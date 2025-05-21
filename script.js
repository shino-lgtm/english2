const questions = [
  {
    question: "May I take your order?",
    options: ["Yes, I'll have the steak.", "No, I already paid.", "I'm going to the airport."],
    answer: "Yes, I'll have the steak."
  },
  {
    question: "Would you like something to drink?",
    options: ["A glass of water, please.", "I’m checking out.", "This is my passport."],
    answer: "A glass of water, please."
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  const questionDiv = document.getElementById("question");
  const optionsDiv = document.getElementById("options");
  const feedbackDiv = document.getElementById("feedback");

  questionDiv.textContent = q.question;
  optionsDiv.innerHTML = "";
  feedbackDiv.textContent = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option";
    btn.onclick = () => checkAnswer(option, q.answer);
    btn.addEventListener("click", () => speak(option)); // クリックで読み上げ
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "✅ 正解です！";
    feedback.style.color = "green";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(showQuestion, 1000);
    } else {
      setTimeout(() => {
        document.getElementById("question").textContent = "🎉 全問正解です！";
        document.getElementById("options").innerHTML = "";
        feedback.textContent = "";
      }, 1000);
    }
  } else {
    feedback.textContent = "❌ 不正解です。もう一度試してください。";
    feedback.style.color = "red";
  }
}

function speak(text) {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
}

showQuestion();
