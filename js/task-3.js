// КРОК 1: Знаходимо елементи в DOM
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const resetButton = document.querySelector("#reset-button");

// КРОК 2: Додаємо обробник події input на поле вводу

nameInput.addEventListener("input", (event) => {
  // КРОК 3: Отримуємо значення з input, обрізаючи пробіли з обох сторін
  const trimmedValue = event.currentTarget.value.trim();

  // КРОК 4: Перевіряємо, чи є текст після обрізання
  // Якщо пусто — виводимо "Anonymous"
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});

// Логіка скидання
resetButton.addEventListener("click", () => {
  nameInput.value = "";
  nameOutput.textContent = "Anonymous";
  nameInput.focus(); // щоб курсор одразу був у полі вводу
});
