const hourlyRate = document.getElementById("hourlyRate");

document.querySelectorAll('input[name="reason"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Hiring") {
      hourlyRate.style.display = "block";
    } else {
      hourlyRate.style.display = "none";
    }
  });
});
