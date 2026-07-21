const letter = `Dear Nabila,

I don't know if you'll read this till the end.

But if you do...

Thank you.

I know you're hurt.

I know I disappointed you.

And I know saying "I'm sorry" isn't enough to fix everything.

Still...

I wanted to tell you what's been in my heart.

You were never just another person to me.

You became someone I genuinely cared about.

Someone whose smile made my day better.

Someone I never wanted to lose.

If I hurt you,

I'm truly sorry.

Everything I felt for you was real.

Please keep smiling.

❤️`;

const typing = document.getElementById("typing");
const openBtn = document.getElementById("openBtn");
const letterSection = document.getElementById("letter");

let i = 0;

openBtn.onclick = () => {
  letterSection.style.display = "block";
  openBtn.style.display = "none";
  music.play().catch(() => {});
  

  function type() {
    if (i < letter.length) {
      typing.innerHTML += letter.charAt(i);
      i++;
      setTimeout(type, 35);
    }
  }

  type();

  letterSection.scrollIntoView({
    behavior: "smooth"
  });
};

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 1800);
};
const music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

openBtn.addEventListener("click", () => {
  music.play().catch(() => {});
});
