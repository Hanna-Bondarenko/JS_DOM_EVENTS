### 📄 `task-01.md`

````markdown
# 🧠 Завдання 01: Категорії в списку

## 📋 Умова:

HTML містить список категорій `ul#categories`.

```html
<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>
```
````

Напиши скрипт, який:

- Порахує й виведе в консоль кількість категорій в `ul#categories`, тобто елементів `li.item`.
- Для кожного `li.item` у списку знайде й виведе в консоль:

  - текст заголовка елемента (тегу `<h2>`)
  - кількість елементів у категорії (усіх `<li>`, вкладених у нього)

## 🧪 Очікуваний результат у консолі:

```
Number of categories: 3
Category: Animals
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
```

## 📁 Пов'язані файли:

- 💻 Рішення: [`task-1.js`](./task-1.js)

## ✏️ Коментар:

Я почала із того, що знайшла усі елементи `.item` через `querySelectorAll`.
Потім використала `forEach`, щоб обійти кожну категорію й отримати:

- назву з `.querySelector("h2").textContent`
- кількість елементів із `.querySelectorAll("li").length`

Це завдання тренує вміння працювати зі структурою DOM.

```

```
