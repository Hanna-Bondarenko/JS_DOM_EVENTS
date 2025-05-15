// 1. Знаходимо всі <li class="item"> всередині <ul id="categories">
const categoriesList = document.querySelectorAll("#categories .item");

// 2. Виводимо загальну кількість категорій
console.log(`Number of categories: ${categoriesList.length}`);

// 3. Перебираємо кожен елемент категорії
categoriesList.forEach((item) => {
  // Знаходимо заголовок категорії — <h2>
  const categoryName = item.querySelector("h2").textContent;

  // Знаходимо всі <li> всередині вкладеного <ul>
  const elementsCount = item.querySelectorAll("ul li").length;

  // Виводимо дані в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
