document.getElementById("yesButton").addEventListener("click", function() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Yes, I will be your Valentine! 💕";
  });
  
  document.getElementById("noButton").addEventListener("click", function() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "No, sorry. Maybe next time!";
  });
  