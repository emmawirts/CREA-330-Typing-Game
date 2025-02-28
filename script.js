document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const container = document.querySelector(".container");
  
    submitButton.addEventListener("click", () => {
      const nouns = [];
      const verbs = [];
      const adjectives = [];
      
      for (let i = 0; i < 5; i++) {
        let nounType;
        if (i < 2) {
          nounType = "a singular common noun";
        } else if (i < 4) {
          nounType = "a plural common noun";
        } else {
          nounType = "a proper noun";
        }
        nouns.push(prompt(`Enter noun ${i + 1} (${nounType}):`));
      }
      
      for (let i = 0; i < 7; i++) {
        let verbType;
        if (i < 2) {
          verbType = "a present tense verb ending in -s";
        } else if (i < 4) {
          verbType = "a past tense verb ending in -ed";
        } else {
          verbType = "a verb ending in -ing";
        }
        verbs.push(prompt(`Enter verb ${i + 1} (${verbType}):`));
      }
      
      for (let i = 0; i < 4; i++) {
        let adjectiveType;
        if (i === 0) {
          adjectiveType = "a color adjective";
        } else if (i === 1) {
          adjectiveType = "an adjective ending in -ing";
        } else {
          adjectiveType = "an adjective ending in -y";
        }
        adjectives.push(prompt(`Enter adjective ${i + 1} (${adjectiveType}):`));
      }
  
      if (nouns.every(Boolean) && verbs.every(Boolean) && adjectives.every(Boolean)) {
        const madLib = `One day, a ${adjectives[0]} ${nouns[0]} and a ${adjectives[1]} ${nouns[1]} decided to ${verbs[0]} and ${verbs[1]} all around town. Meanwhile, a ${adjectives[2]} ${nouns[2]} were ${verbs[2]} near some ${nouns[3]}. Everyone was amazed when the ${adjectives[3]} ${nouns[4]} suddenly started to ${verbs[3]}, ${verbs[4]}, and ${verbs[5]}! It was the goofiest thing anyone had ever seen!`;
        
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("word");
        resultDiv.textContent = madLib;
        
        // Remove old results if any
        const oldResult = document.querySelector(".word");
        if (oldResult) {
          oldResult.remove();
        }
        
        container.appendChild(resultDiv);
      } else {
        alert("Please enter all words to generate a Mad Lib!");
      }
    });
  });