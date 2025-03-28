// script.js

// ✅ 預載所有圖片
for (let i = 0; i <= 9; i++) {
  const img = new Image();
  img.src = `images/stage${i}.png`;
}

let stage = 0;
const maxStage = 8;

const rejectTexts = [
  "不要",
  "你認真的嗎?",
  "再想一想?",
  "不准選這個!",
  "我會很傷心耶...",
  "不行:(",
  "不行:(",
  "不行:(",
  "不行:(",
  ""
];

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const image = document.getElementById("main-image");

let clickedYes = false;

noBtn.addEventListener("click", () => {
  if (stage < maxStage) {
    stage++;
    image.src = `images/stage${stage}.png`;
    noBtn.textContent = rejectTexts[stage];

    const yesScale = 1 + stage * 0.4;
    const noScale = Math.max(1 - stage * 0.05, 0.5);
    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;
  }
});

yesBtn.addEventListener("click", () => {
  image.src = "images/stage9.png"; // 成功情勒後的開心圖
  noBtn.style.display = "none";
  yesBtn.style.transform = "scale(1.5)";
  yesBtn.textContent = "耶～謝謝你！";

  setTimeout(() => {
    window.open("https://www.youtube.com/@Noon_0606?sub_confirmation=1", "_blank");
  }, 1500); // 1.5秒後自動跳轉
});
