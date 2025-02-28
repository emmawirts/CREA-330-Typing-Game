document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const wordListContainer = document.querySelector(".word-list");
    const storyContainer = document.querySelector(".story-container");
    const wordInput = document.getElementById("wordInput");
    const promptText = document.getElementById("promptText");
  
    const nouns = [];
    const verbs = [];
    const adjectives = [];
  
    const prompts = [
      { type: "noun", category: "a singular common noun" },
      { type: "noun", category: "a singular common noun" },
      { type: "noun", category: "a plural common noun" },
      { type: "noun", category: "a plural common noun" },
      { type: "noun", category: "a proper noun" },
      { type: "verb", category: "a present tense verb (e.g., run, jump)" },
      { type: "verb", category: "a present tense verb (e.g., run, jump)" },
      { type: "verb", category: "a past tense verb (e.g., walked, jumped)" },
      { type: "verb", category: "a past tense verb (e.g., walked, jumped)" },
      { type: "verb", category: "a verb ending in -ing (e.g., running, jumping)" },
      { type: "verb", category: "a verb ending in -ing (e.g., running, jumping)" },
      { type: "verb", category: "a verb ending in -ing (e.g., running, jumping)" },
      { type: "adjective", category: "a color adjective (e.g., blue, red)" },
      { type: "adjective", category: "an adjective ending in -ing (e.g., boring, exciting)" },
      { type: "adjective", category: "an adjective ending in -y (e.g., funny, stinky)" },
      { type: "adjective", category: "an adjective ending in -y (e.g., funny, stinky)" }
    ];
  
    let index = 0;
  
    // Start the game and show the first prompt
    submitButton.addEventListener("click", () => {
      submitButton.disabled = true; // Disable the start button after it's clicked
      wordInput.style.display = "inline"; // Show the word input field
      askNextWord();
    });
  
    // Show the next prompt and update the prompt text
    function askNextWord() {
      if (index < prompts.length) {
        const { type, category } = prompts[index];
        promptText.textContent = `Enter ${type} (${category}):`;
      }
    }
  
    // Handle word input and "Enter" key event
    wordInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const word = wordInput.value.trim();
        if (word) {
          // Add the word to the correct array based on the type
          const { type } = prompts[index];
          if (type === "noun") nouns.push(word);
          if (type === "verb") verbs.push(word);
          if (type === "adjective") adjectives.push(word);
  
          // Add the word to the word list display
          const wordEntry = document.createElement("p");
          wordEntry.textContent = word;
          wordListContainer.appendChild(wordEntry);
  
          // Clear the input field and move to the next word prompt
          wordInput.value = "";
          index++;
          askNextWord();
  
          // If all prompts are done, generate the Mad Lib
          if (index === prompts.length) {
            generateMadLib();
          }
        }
      }
    });
  
    // Generate the Mad Lib text
    function generateMadLib() {
      const madLib = `One day, a ${adjectives[0]} ${nouns[0]} and a ${adjectives[1]} ${nouns[1]} decided to ${verbs[0]} and ${verbs[1]} all around town. Meanwhile, a few ${adjectives[2]} ${nouns[2]} were ${verbs[2]} near some ${nouns[3]}. Everyone was amazed when the ${adjectives[3]} ${nouns[4]} suddenly started to ${verbs[3]}, ${verbs[4]}, and ${verbs[5]}! It was the goofiest thing anyone had ever seen!`;
  
      storyContainer.innerHTML = `<p>${madLib}</p>`;
    }
  });
  
  