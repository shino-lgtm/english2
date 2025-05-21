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
  },
  {
    question: "How would you like your steak?",
    options: ["Medium rare, please.", "Window seat, please.", "No, thank you."],
    answer: "Medium rare, please."
  },
  {
    question: "Are you ready to order?",
    options: ["Yes, we’re ready.", "Where’s the baggage claim?", "Just water."],
    answer: "Yes, we’re ready."
  },
  {
    question: "Would you like any dessert?",
    options: ["I'll have the cheesecake.", "Where is my gate?", "I need a taxi."],
    answer: "I'll have the cheesecake."
  },
  {
    question: "Can I get the bill, please?",
    options: ["Sure, here you go.", "This is my boarding pass.", "Turn left at the station."],
    answer: "Sure, here you go."
  },
  {
    question: "Do you have any vegetarian options?",
    options: ["Yes, we have a veggie burger.", "No, I don’t have a suitcase.", "I'm flying to London."],
    answer: "Yes, we have a veggie burger."
  },
  {
    question: "Is everything okay with your meal?",
    options: ["Yes, it's delicious!", "No, I missed my flight.", "I'm going to the restroom."],
    answer: "Yes, it's delicious!"
  },
  {
    question: "Would you like another drink?",
    options: ["Yes, another coffee please.", "No, I don’t need a hotel.", "Where’s the elevator?"],
    answer: "Yes, another coffee please."
  },
  {
    question: "Do you want separate checks?",
    options: ["Yes, please.", "No, my flight is delayed.", "That’s my boarding pass."],
    answer: "Yes, please."
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
        document.getElementById("question").textContent = "🎉 全問正解です！お疲れさま！";
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
