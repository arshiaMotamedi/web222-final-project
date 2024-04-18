document.addEventListener("DOMContentLoaded", function () {
  const hiringRadio = document.getElementById("hiring");
  const hourlyRate = document.getElementById("hourlyRate");

  hiringRadio.addEventListener("change", function () {
    if (hiringRadio.checked) {
      hourlyRate.style.display = "block";
    } else {
      hourlyRate.style.display = "none";
    }
  });
});
