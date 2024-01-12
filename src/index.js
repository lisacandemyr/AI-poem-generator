function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Poem will show here",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let poemElement = document.querySelector("#poem-generator-form");
poemElement.addEventListener("submit", generatePoem);
