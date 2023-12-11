document.addEventListener("DOMContentLoaded", function () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    function RandomLetter() {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      return alphabet[randomIndex];
    }
    let secretLetter = RandomLetter();
    const keyboardEventsList = document.getElementById("keyboardEventsList");
    document.body.addEventListener("keydown", function (event) {
      if (event.key.toLowerCase() === secretLetter) {
        const secretKeyPressedTag = document.createElement("span");
        secretKeyPressedTag.textContent = `Secret letter is: ${secretLetter}`;
        document.body.appendChild(secretKeyPressedTag);
  
        secretLetter = RandomLetter();
      }
    });
  });
  