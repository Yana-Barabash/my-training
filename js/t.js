// console.log(Boolean(NaN));
// console.log("NaN === NaN", NaN === NaN);
// console.log("'2' > '12'", "2" > "12");
// console.log("2 > '12'", 2 > "12");
// console.log("'а' > 'a'", "а" > "a");
// console.log("Javascript".charCodeAt(3 + 2));
// console.log("1".charCodeAt());
// console.log("18 >= '17'", 18 >= "17");
// console.log("18 >= '17b'", 18 >= "17b");
// console.log("18 >= 'NaN'", 18 >= NaN);
// console.log("18 < NaN", "18" < "NaN");
// console.log("'18' < '18b'", "18" < "18b");
// console.log("'4' >= [4]", "4" >= [4]);
// console.log("[4]: ", String([4]));
// console.log("'Boolean(-5)", Boolean(-5));
// console.log("'Boolean(0)", Boolean(0));
// console.log("'Boolean('0')", Boolean("0"));
// console.log("'5a' - 5", "5a" - 5);
// console.log("'5' - 5", "5" - 5);
// console.log("'5' - true", "5" - true);
// console.log("3 > 2 > 1", 3 > 2 > 1);
// console.log(3 > 2);
// console.log(true > 1);
// console.log((true && 0 && 2) > 0);
// console.log((true && 1 && 2 && false) |

/*
Напишіть функцію caclculateAverage()
яка приймає довільну кількість
аргументів і повертає їхнє середнє значення.
Додати перевірку, що аргументи це числа.
const arr = [2, 6, 24, 7, 35, 24, "hello", 9, "world"];
*/
//Напишіть функцію getUniqueValues(arr), яка повертає масив,
//якій містить лише унікальні елементи.
// const words = [
//   "HTML",
//   "CSS",
//   "JS",
//   "React",
//   "JS",
//   "CSS",
//   "JS",
//   "Node.js",
//   "JS",
//   "React",
//   "CSS",
//   "React",
//   "HTML",
//   "Node.js",
// ];
//Напишіть ф-цію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//Рядок з назвою каменю.
//Функція повертає загальну вартість каменів
//з ​​таким ім'ям, ціною та кількістю з об'єкта

// Угруповання об'єктів студентів по курсам
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс.
// Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
const students = [
  { name: 'Алиса', age: 20, course: 'Java' },
  { name: 'Боб', age: 22, course: 'Python' },
  { name: 'Карл', age: 21, course: 'Java' },
  { name: 'Джон', age: 23, course: 'JavaScript' },
];

//У нас є об'єкт, у якому зберігатимуться зарплати
//нашої команди
//Напишіть код для сумування всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0
const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом
