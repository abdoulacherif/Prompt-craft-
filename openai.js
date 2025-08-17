let freeAttempts = 2; // Compteur d'essais gratuits

async function generatePrompt() {
  const promptInput = document.getElementById("promptInput").value;
  const resultDiv = document.getElementById("result");
  const generatedPrompt = document.getElementById("generatedPrompt");

  if (freeAttempts <= 0) {
    document.getElementById("premiumPopup").classList.remove("hidden");
    return;
  }

  if (!promptInput) {
    alert("Veuillez entrer une requête.");
    return;
  }

  // Simulation d'appel API (remplacez par un vrai appel Firebase Cloud Functions)
  generatedPrompt.textContent = "Génération en cours...";
  resultDiv.classList.remove("hidden");

  setTimeout(() => {
    generatedPrompt.textContent = `"${promptInput}"\n\nOptimisé : \n"Créez un ${promptInput} en utilisant un ton [spécifique], avec des exemples concrets et une structure claire."`;
    freeAttempts--;
    updateAttemptsCounter();
  }, 1500);
}

function updateAttemptsCounter() {
  const counter = document.getElementById("attemptsCounter");
  if (counter) counter.textContent = `${freeAttempts} essais restants`;
}