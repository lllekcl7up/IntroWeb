//Задача 2: Получить от пользователя два числа и 
// вывести в диалоговое окно сумму значений, которые ввел
//  пользователь, вывод должен выглядеть так (пример): 
//Результат сложения чисел 5 и 2 равен 7.
 
// const number1 = +prompt("Введите первое число:");
// const number2 = +prompt("Введите первое число:");
// alert(`Результат сложения чисел ${number1} и ${number2} равно: ${sum(number1, number2)}`);

// function sum(a, b) {
//    return a + b;
// }
 
// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением 
// “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением 
// “Ну вы держитесь там!”. if confirm()
// if (confirm("Вам хорошо живется?")) {
// alert("Тогда мы идем к вам!");
// } else {
// alert("Ну вы держитесь там!");
// }
// confirm("Вам хорошо живется?") 
// ? alert("Тогда мы идем к вам!") 
// : alert("Ну вы держитесь там!");
// 
// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
//  
{/* <script> */ }
{/* let product = "Бананы"; */ }
{/*  */ }
{/* if (product == "Мандарины") { */ }
//   alert('Мандарины стоят 100 руб/кг.');
{/* } else if (product == "Бананы") { */ }
//   alert('Бананы и груши стоят 70 руб/кг.');
{/* } else if (product == "Груши") { */ }
//   alert('Бананы и груши стоят 70 руб/кг.');
{/* } else { */ }
//   alert('Нет такого продукта.');
{/* } */ }
{/* </script> */ }
// const product = prompt("Введите фрукт: ").toLowerCase();
// switch (product) {
// case "мандарины":
// alert('Мандарины стоят 100 руб/кг.');
// break;
// case "бананы":
// case "груши":
// alert('Бананы и груши стоят 70 руб/кг.');
// break;
// default:
// alert('Нет такого продукта.');
// }
 
// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
// function getMaxEvenElement(arr) {
// let max = 0;
// for (let index = 2; index < arr.length; index += 2) {
// if (arr[index] > arr[max]) { 
// max = index; 
// }
// }
// return arr[max];
// }
// 
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
// console.log(getMaxEvenElement([-44, -12, -29, -76, -31, -92, -50])); // 31
 
/*
Задача с реального собеседования.
 
Один покупатель старинных уникальных часов хочет приобрести для музея 
двое часов. В магазине у хозяйки есть n разных часов с соответствующими 
ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой 
бюджет. Необходимо выяснить получится ли это.
*/
// function f(clockArr, money) {
//     for (let i = 0; i < clockArr.length; i++) {
//         for (let j = i + 1; j < clockArr.length; j++) {
//             if (Math.floor((clockArr[i] + clockArr[j]) * 100) / 100 == money) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
 
// console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); // false
// console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
// console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true