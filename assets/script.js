const $body = document.querySelector("body");
const $keysWrapper = document.querySelector(".js-keys-wrapper");

function playSoundOnKeyDown(e) {
  const audio = document.querySelector(`[data-key-sound="${e.keyCode}"]`);
  const key = document.querySelector(`[data-key="${e.keyCode}"`);
  if (audio) {
    audio.currentTime = 0.3;
    audio.play();
    toggleActiveKeyColor(key);
  }
}

function playSoundOnClick(e) {
  const $key = e.target;
  const keyCode = $key.getAttribute("data-key");
  if (keyCode) {
    const audio = document.querySelector(`[data-key-sound="${keyCode}"]`);
    audio.currentTime = 0.3;
    audio.play();
    toggleActiveKeyColor($key);
  }
}

function toggleActiveKeyColor(key) {
  key.classList.remove("bg-white");
  key.classList.add("bg-emerald-300");
  setTimeout(function () {
    key.classList.remove("bg-emerald-300");
    key.classList.add("bg-white");
  }, 3 * 100);
}

window.addEventListener("keydown", playSoundOnKeyDown);
$keysWrapper.addEventListener("click", playSoundOnClick);
