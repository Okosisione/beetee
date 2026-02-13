const message = "Bukola, from the moment I met you, I realized love isn’t just a word, it’s a feeling that stays in your heart forever. Every smile of yours brightens my darkest days, and every laugh feels like music to my soul. I don’t just love you, I admire the way you make the world better just by being in it. On this Valentine’s Day, I want you to know that you are my safe place, my joy, my forever. ❤️";
let index = 0;

function typeText() {
  if (index < message.length) {
    document.getElementById("typing").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}

typeText();

function sayYes() {
  document.getElementById("typing").innerHTML =
    "Yayyy 🥰❤️ Happy Valentine’s Day my love 💐";
}

function sayNo() {
  document.getElementById("typing").innerHTML =
    "😅 That option is unavailable. Please choose Yes ❤️";
}

function playMusic() {
  document.getElementById("bgMusic").play();

}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);