// Initialisation Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

// Gestion des tâches
document.getElementById("taskSelector").addEventListener("change", (e) => {
  const labels = {
    rewrite: "Texte à reformuler :",
    translate: "Texte à traduire (FR → EN) :",
    name: "Mots-clés pour le nom :"
  };
  document.getElementById("inputLabel").textContent = labels[e.target.value];
});

document.getElementById("runTaskBtn").addEventListener("click", async () => {
  const task = document.getElementById("taskSelector").value;
  const input = document.getElementById("taskInput").value;
  const outputDiv = document.getElementById("taskOutput");

  if (!input) {
    alert("Veuillez entrer un texte !");
    return;
  }

  // Appel à la Cloud Function
  try {
    const runTask = httpsCallable(functions, "runTask");
    const result = await runTask({ task, input });
    
    document.getElementById("taskResult").classList.remove("hidden");
    outputDiv.textContent = result.data.output;
  } catch (error) {
    console.error("Erreur :", error);
    alert("Une erreur est survenue. Vérifiez votre connexion.");
  }
});