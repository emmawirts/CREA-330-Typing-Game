document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submitButton");
    const container = document.querySelector(".container");
  
    submitButton.addEventListener("click", () => {
      const nouns = [];
      const verbs = [];
      const adjectives = [];
      
      for (let i = 0; i < 5; i++) {
        const nounType = i < 2 ? "a common noun" : "a proper noun";
        nouns.push(prompt(`Enter noun ${i + 1} (${nounType}):`));
      }
      for (let i = 0; i < 7; i++) {
        const tense = i < 3 ? "a present tense verb" : "a past tense verb";
        verbs.push(prompt(`Enter verb ${i + 1} (${tense}):`));
      }
      for (let i = 0; i < 4; i++) {
        const adjectiveType = i < 2 ? "a color adjective" : "an -ing adjective";
        adjectives.push(prompt(`Enter adjective ${i + 1} (${adjectiveType}):`));
      }
  
      if (nouns.every(Boolean) && verbs.every(Boolean) && adjectives.every(Boolean)) {
        const madLib = `One day, a ${adjectives[0]} ${nouns[0]} and a ${adjectives[1]} ${nouns[1]} decided to ${verbs[0]} and ${verbs[1]} all around town. Meanwhile, a ${adjectives[2]} ${nouns[2]} was ${verbs[2]} near a ${nouns[3]}. Everyone was amazed when the ${adjectives[3]} ${nouns[4]} suddenly started to ${verbs[3]}, ${verbs[4]}, and ${verbs[5]}! It was the goofiest thing anyone had ever seen!`;
        
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