const container = document.querySelector(".radioInput");
const radioInput = container.querySelector("input");
const planet = container.querySelector(".planet");
const defaultAnimationOptions = " 1.5s forwards ease-in-out";

const toggle = () => {
  if (planet.classList.contains("moon")) {
    planet.style.animation = "moonToSun" + defaultAnimationOptions;
    container.style.animation = "moonToSunContainer" + defaultAnimationOptions;
  } else {
    planet.style.animation = "sunToMoon" + defaultAnimationOptions;
    container.style.animation = "sunToMoonContainer" + defaultAnimationOptions;
  }
  planet.classList.toggle("moon");
}

const initToggle = () => {
  radioInput.onclick = toggle;
};

initToggle();

