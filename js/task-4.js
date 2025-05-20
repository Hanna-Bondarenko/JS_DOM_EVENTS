// Знаходимо форму за класом
const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  const formElements = event.target.elements;

  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);

  form.reset(); // Очищення форми
});

// Пояснення, що використовувалося в коді:
// event.target — елемент, що викликав подію (форма).

// event.target.elements — колекція всіх полів форми.

// .email.value і .password.value — значення інпутів за name="".

// .trim() — прибирає зайві пробіли.

// .reset() — очищає форму після сабміту.
