// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("palindrome-form");
  const input = document.getElementById("text-input");
  const resultEl = document.getElementById("result");

  // Listen for form submit instead of button click
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page refresh

    const value = input.value.trim();

    if (!value) {
      resultEl.textContent = "Please enter a word or phrase.";
      resultEl.className = "fail";
    } else {
      // Clean input: remove non-alphanumeric and lowercase it
      const clean = value.toLowerCase().replace(/[^a-z0-9]/g, "");
      const reversed = clean.split("").reverse().join("");

      if (clean === reversed) {
        resultEl.textContent = `"${value}" is a palindrome ✅`;
        resultEl.className = "success";
      } else {
        resultEl.textContent = `"${value}" is not a palindrome ❌`;
        resultEl.className = "fail";
      }
    }

    // Make result visible
    resultEl.style.opacity = "1";
  });
});
