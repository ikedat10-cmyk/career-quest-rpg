const questions = [
  "今の仕事に満足していますか？",
  "自分の強みを活かせていますか？",
  "将来のキャリアが見えていますか？"
];

let current = 0;

function startGame() {
  current = 0;
  showQuestion();
}

function showQuestion() {
  const q = document.getElementById("question");
  const btn = document.getElementById("nextBtn");

  q.textContent = questions[current];
  btn.style.display = "inline-block";
}

function nextQuestion() {
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent =
      "すべての質問が終わりました！";
    document.getElementById("nextBtn").style.display = "none";
  }
}
