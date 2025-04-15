let score = 0;
let timeLeft = 30;
let level = 1;
let burgerSpeed = 1000;
let timer;

const burger = document.getElementById("burger");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const levelDisplay = document.getElementById("level");
const gameArea = document.getElementById("game-area");
const bgMusic = document.getElementById("bg-music");
const restartBtn = document.getElementById("restart");

function moveBurger() {
  const maxX = gameArea.clientWidth - 100;
  const maxY = gameArea.clientHeight - 100;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;
  burger.style.left = newX + "px";
  burger.style.top = newY + "px";


  burger.classList.add("fly");
  setTimeout(() => burger.classList.remove("fly"), 300);
}

function startGame() {
  score = 0;
  timeLeft = 30;
  level = 1;
  burgerSpeed = 1000;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  levelDisplay.textContent = level;
  restartBtn.style.display = "none";
  burger.style.display = "block";
  moveBurger();

  bgMusic.volume = 0.4;
  bgMusic.play();

  timer = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      burger.style.display = "none";
      restartBtn.style.display = "inline-block";
      bgMusic.pause();
      alert("⏰ Time's up! Your score: " + score);
    }
  }, 1000);
}

burger.onclick = function () {
  score++;
  scoreDisplay.textContent = score;
  moveBurger();

 
  if (score % 10 === 0) {
    level++;
    levelDisplay.textContent = level;
    burgerSpeed = Math.max(300, burgerSpeed - 100);
  }
};

restartBtn.onclick = function () {
  startGame();
};

window.onload = startGame;


