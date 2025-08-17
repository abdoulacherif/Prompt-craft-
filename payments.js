document.getElementById("paypalBtn").addEventListener("click", () => {
  window.open("https://www.paypal.com/paypalme/abdoula13cherif/50000XOF", "_blank");
});

document.getElementById("orangeMoneyBtn").addEventListener("click", () => {
  const form = document.getElementById("orangeMoneyForm");
  form.classList.toggle("hidden");
  form.classList.add("animate__fadeIn");
});