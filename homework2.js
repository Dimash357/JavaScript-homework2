// // Task 1
// let age = +prompt("Введите ваш возраст: ");
// if(age < 12){
//     alert("Ребенок")
// } 
// else if(age >= 12 && age < 18){
//     alert("Подросток")
// }
// else if(age >= 18 && age < 60){
//     alert("Взрослый")
// }
// else if(age >= 60){
//     alert("Пенсионер")
// }

// // Task 2
// let nine_numbers = +prompt("Введите число от 1 до 9: ");
// switch(nine_numbers){
//     case 1:
//         alert("!")
//         break
//     case 2:
//         alert("@")
//         break
//     case 3:
//         alert("#")
//         break
//     case 4:
//         alert("$")
//         break
//     case 5:
//         alert("%")
//         break
//     case 6:
//         alert("^")
//         break
//     case 7:
//         alert("&")
//         break
//     case 8:
//         alert("*")
//         break
//     case 9:
//         alert("(")
//         break
// }

// // Task 3
// let three_digit_number = +prompt( 'Введите трехзначное число: ');
// let number1 = parseInt(three_digit_number / 100);
// let number2 = parseInt(three_digit_number / 10) % 10;
// let number3 = three_digit_number % 10;
// if(number1 === number2 || number2 === number3 || number1===number3){
//     alert('Найдено совпадение цифр');
// }
// else{
//     alert('Совпадений не найдено');
// }
// let

// // Task 4
// let leap_year = +prompt("Ведите год: ")
// if ((0 == leap_year % 4) && (0 != leap_year % 100) || (0 == leap_year % 400)){
//     alert("Это високосный год")
// }
// else{
//     alert("Это не високосный год")
// }

// // Task 5
// let a = prompt("Введите пятизначное число: ")
// if (!(a.length === 5)) {
//   alert("Вы не ввели пятизначное число");
// } else if (a === a.split('').reverse().join('')) {
//   alert("Это палиндром")
// } else {
//   alert("Это не палиндром")
// }

// // Task 6
// let dollar = +prompt("Введите доллары: ")
// let currency = prompt("Выберите валюту - eur, uah, azn: ")
// const eur = 1;
// const uah = 36.54;
// const azn = 1.70;
// if(currency == "eur"){
//     alert(dollar * eur)
// }
// else if(currency== "uan"){
//     alert(dollar * uah)
// }
// else if(currency == "azn"){
//     alert(dollar * azn)
// }

// Task 7
let amount = prompt('Enter the value of purchase:');
if (amount >=200 && amount < 300)
    alert(amount/100*97 + '$ with 3% discount');
else if (amount >=300 && amount < 500)
    alert(amount/100*95 + '$ with 5% discount');
else if (amount >=500)
    alert(amount/100*93 + '$ with 7% discount');

// Task 9
let capital = prompt('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris');
let currency = prompt('What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB');
let country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');
let score = 0;
if (capital == 1)
    score += 2;
if (currency == 1)
    score += 2;
if (country == 3)
    score += 2;
alert('Your score is ' + score);

// Task 10
let date = prompt('Enter the date - day-month-year ');
date = date.split('-');
let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
oldDate.setDate(oldDate.getDate()+1);
alert(oldDate);