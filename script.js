document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const container = document.querySelector(".container");
    const wordListContainer = document.createElement("div");
    const storyContainer = document.createElement("div");
    const inputListContainer = document.createElement("div"); // New container for displaying inputs
  
    wordListContainer.classList.add("word-list");
    storyContainer.classList.add("story-container");
    inputListContainer.classList.add("input-list"); // Styling for the list
  
    container.appendChild(wordListContainer);
    container.appendChild(inputListContainer); // Add this container for the list
    container.appendChild(storyContainer);
  
    const nouns = [];
    const verbs = [];
    const adjectives = [];
  
    const prompts = [
      { type: "noun", category: "a singular common noun" },
      { type: "noun", category: "a singular common noun" },
      { type: "noun", category: "a plural common noun" },
      { type: "noun", category: "a plural common noun" },
      { type: "noun", category: "a proper noun" },
      { type: "verb", category: "a present tense verb ending in -s" },
      { type: "verb", category: "a present tense verb ending in -s" },
      { type: "verb", category: "a past tense verb ending in -ed" },
      { type: "verb", category: "a past tense verb ending in -ed" },
      { type: "verb", category: "a verb ending in -ing" },
      { type: "verb", category: "a verb ending in -ing" },
      { type: "verb", category: "a verb ending in -ing" },
      { type: "adjective", category: "a color adjective" },
      { type: "adjective", category: "an adjective ending in -ing" },
      { type: "adjective", category: "an adjective ending in -y" },
      { type: "adjective", category: "an adjective ending in -y" }
    ];
  
    let index = 0;
  
    function askNextWord() {
      if (index < prompts.length) {
        const { type, category } = prompts[index];
        const word = prompt(`Enter ${type} (${category}):`);
        
        if (word) {
          if (type === "noun") nouns.push(word);
          if (type === "verb") verbs.push(word);
          if (type === "adjective") adjectives.push(word);
          
          const wordEntry = document.createElement("p");
          wordEntry.textContent = `${type} (${category}): ${word}`;
          wordListContainer.appendChild(wordEntry);
  
          const inputEntry = document.createElement("p"); // Create a paragraph for the list
          inputEntry.textContent = `${word}`;
          inputListContainer.appendChild(inputEntry); // Add input word to the list
  
          index++;
          askNextWord();
        }
      } else {
        generateMadLib();
      }
    }
  
    function generateMadLib() {
      const madLib = `One day, a ${adjectives[0]} ${nouns[0]} and a ${adjectives[1]} ${nouns[1]} decided to ${verbs[0]} and ${verbs[1]} all around town. Meanwhile, a ${adjectives[2]} ${nouns[2]} were ${verbs[2]} near some ${nouns[3]}. Everyone was amazed when the ${adjectives[3]} ${nouns[4]} suddenly started to ${verbs[3]}, ${verbs[4]}, and ${verbs[5]}! It was the goofiest thing anyone had ever seen!`;
      
      storyContainer.innerHTML = `<h3>Your Goofy Mad Lib:</h3><p>${madLib}</p>`;
    }
  
    submitButton.addEventListener("click", () => {
      wordListContainer.innerHTML = "";
      storyContainer.innerHTML = "";
      inputListContainer.innerHTML = ""; // Clear the input list container
      nouns.length = 0;
      verbs.length = 0;
      adjectives.length = 0;
      index = 0;
      askNextWord();
    });
  });
  