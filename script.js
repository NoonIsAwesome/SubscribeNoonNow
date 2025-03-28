// script.js
let stage = 0;
const maxStage = 9;

const rejectTexts = [
  "不要",
  "你認真的嗎?",
  "再想一想?",
  "不准選這個!",
  "可是我會很傷心...",
  "不行:(",
  "不行:(",
  "不行:(",
  "不行:(",
  ""
];

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const image = document.getElementById("main-image");

noBtn.addEventListener("click", () => {
  if (stage < maxStage) {
    stage++;
    image.src = `images/stage${stage}.png`;
    noBtn.textContent = rejectTexts[stage];
    const scale = 1 + stage * 0.1;
    yesBtn.style.transform = `scale(${scale})`;
  }
});

yesBtn.addEventListener("click", () => {
  image.src = "images/stage9.png";
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
  yesBtn.textContent = "耶～謝謝你！";
});
