// 1.(Map)
// Користувач вводить слово англійською, а йому у відповідь українське.
// Використовувати Map і діалогові вікна.
// Якщо користувач вводить слово, котрого не існує,
// йому пропонується доповнити словник, і юзер додає нове слово з перекладом в Map.
// Далі програма повторно запитує слово для перекладу і так по колу.
// Для завершення програми юзер має ввести команду: #exit
// const dictionary = new Map([
//   ["hello", "привіт"],
//   ["home", "дім"],
//   ["sky", "небо"],
// ]);
// function translate() {
//   let word;
//   while (true) {
//     word = prompt(
//       "Введіть слово на англійській мові для перекладу або #exit для виходу"
//     );
//     word = word.toLowerCase();
//     if (word === "#exit") {
//       alert("Вихід");
//       break;
//     }
//     if (dictionary.has(word)) {
//       alert(`Переклад ${word} - ${dictionary.get(word)}`);
//     } else {
//       let errorTranslate = prompt(
//         `Слово ${word} немає у словнику. Введіть перклад цього слова українською: `
//       );
//       errorTranslate = errorTranslate.toLowerCase();
//       dictionary.set(word, errorTranslate);
//       alert(
//         `Слово ${word} було додано до словника з перекладом - ${errorTranslate}`
//       );
//     }
//   }
// }
// translate();
// 2.(Set)
// У вас є два масиви з числами. Необхідно знайти всі числа, які є одночасно в обох масивах.
// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [4, 5, 6, 7, 1, 9];
// const set1 = new Set(array1);
// const set2 = new Set(array2);
// const same = [...set1].filter((elemet) => set2.has(elemet));
// console.log(same);
// 3.(Set)
// Дано рядок, що може містити повторювані символи.
// Необхідно перевірити, чи складається цей рядок лише з унікальних символів.
// const str = "abcdefg";
// function findLetter(string) {
//   let unique;
//   const setStr = new Set(string);
//   if (setStr.size === string.length) {
//     unique = true;
//   } else {
//     unique = false;
//   }
//   return unique;
// }
// console.log(findLetter(str));
// 4.(Function constuctor)
// Створіть функцію-конструктор Car, яка створює об'єкти з наступними властивостями:
// марка (brand),
// модель (model),
// рік випуску (year).
// Додайте до об'єктів метод getCarInfo(),
// який буде повертати рядок з інформацією про автомобіль у форматі:
// "Марка: Toyota, Модель: Corolla, Рік випуску: 2020".
// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.getCarInfo = function () {
//     return `Марка: ${this.brand}, Модель: ${this.model}, Рік випуску: ${this.year}`;
//   };
// }
// const newMap = new Car("Audi", "Q8", "2023");
// console.log(newMap.getCarInfo());
// 5.(Function constuctor)
// Створіть функцію-конструктор User, яка приймає ім'я користувача (name) та його вік (age).
// Додайте метод canVote(), який буде повертати true, якщо користувач старше 18 років,
// і false – якщо молодше.
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.canVote = function () {
//     let older;
//     if (this.age > 18) {
//       older = true;
//     } else {
//       older = false;
//     }
//     return older;
//   };
// }
// const newUser = new User("Микола", 19);
// console.log(newUser.canVote());
// 6.(Function constuctor)
// Створіть функцію-конструктор BankAccount, яка створює банківський рахунок
// з початковим балансом (balance). Додайте методи:
// deposit(amount), який додає до балансу зазначену суму.
// withdraw(amount), який знімає кошти з рахунку, якщо баланс достатній,
// інакше виводить повідомлення про недостатній баланс.
// getBalance(), який повертає поточний баланс.
// function BankAccount(balance) {
//   this.balance = balance;
//   this.deposit = function (amount) {
//     this.balance += amount;
//     return console.log(this.balance);
//   };
//   this.withdraw = function (amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       return console.log(this.balance);
//     }
//     if (amount > this.balance) {
//       return console.log(
//         `Недостатньо коштів, на вашому рахунку ${this.balance}`
//       );
//     }
//   };
// }
// const newUser = new BankAccount(2000);
// newUser.deposit(300);
// newUser.withdraw(2400);
