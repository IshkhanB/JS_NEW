import './style.scss'
console.log('Hello world')
console.log(5+9/2)
for(let i = 0; i<24; i++ )
{
  console.log(i + 1)
}


console.log('Hello world')




// document.write('<div id="main" style="background: lightblue;"> Hello world </div>')

// a = 25

// var a = 0
// console.log(a)
// var a = 2
// console.log(a)

// // cоздание переменной
// let newVar = 5
// newVar = 15

// let noVal
// noVal = 'g'
// console.log(noVal)

// let theValue

// // cоздание константы
// const DAY_IN_WEEK = 7
// // Ошибка не можем изменять константы
// // DAY_IN_WEEK = 8

// const countedSum = a + newVar

// console.log('10 + 5 =', 10+5)
// console.log('10 - 5 =', 10-5)
// console.log('10 * 5 =', 10*5)
// console.log('10 / 5 =', 10/5)
// console.log('10 ** 5 =', 10**5) //возведение в степень
// console.log('10 % 5 =', 10%5)   //остаток от деления
// console.log('3 % 2 =', 3%2)   //остаток от деления

// // let userInput = prompt('Введите число', 10)
// // console.log(userInput)
// // console.log(typeof userInput)
// // userInput = parseInt(userInput)
// // console.log(userInput)
// // console.log(typeof userInput)


// console.log('456')
// console.log(456)

// console.log((5-5%2)/2)

// alert('Вы ввели ' + userInput)



// console.log('Hello world')
// // var a так не делаем
// let userIput = prompt('dd', 23)
// console.log(userIput)
// userIput = parseInt(userIput)
// console.log(userIput)
// let a = 9
// let b = 4
// const noHar = a + b


// // Практика 1. Задание 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.
// let userInput = prompt('Введите число которую хотите возвести во вторую степень.', '0') as string
// let userInt = parseInt(userInput)
// alert('Степень из ' + userInput + ' равна: ' + userInt ** 2)

// // Практика 1. Задание 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.
// let userInt1 = parseInt(prompt('Чтобы узнать среднее арифметическое Ваших двух чисе \n Введите первое число', 0))
// let userInt2 = parseInt(prompt('Введите второе число', 0))
// alert('Среднее арифметическое Ваших чисел равна: ' + (userInt1 + userInt2) / 2)

// // Практика 1. Задание 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.
// let userSid = parseFloat(prompt('Введите длину стороны квадрата и получите площадь квадрата!', 0))
// alert('Площадь квадрата равна: ' + userSid ** 2)

// // Практика 1. Задание 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371
// let userMil = parseFloat(prompt('Введите длину пути в километрах и получите длину в милях!', 0 + ' км'))
// //  let userMil = parseFloat(prompt('Введите длину пути в километрах и получите длину в милях!', placeholder))
// alert('Длина пути равна: ' + userMil * 0.62 + ' мили!')

// // Практика 1. Задание 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
// let userMat1 = parseFloat(prompt('Это экспресс калькулятор! \n Введите первое число.', 0))
// let userMat2 = parseFloat(prompt('Ввудите втрое число.', 0))
// alert('Сложение = ' + (userMat1 + userMat2) + '\nВычетание = ' + (userMat1 - userMat2) + '\nУмножение = ' + (
//   userMat1 * userMat2) + '\nДиление = ' + (userMat1 / userMat2))

// // Практика 1. Задание 6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
// let userA = parseInt(prompt('Для получения "X" Вам нужно \n Ввести переменую "a":', '0') as string)
// let userB = parseInt(prompt(' Введити переменую "b":', '0') as string)
// alert(' "X" равен: ' + (-userB) / userA)

// // Практика 1. Задание 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.
// let userWoth = parseInt(prompt('Введите сколько часов сейчас в формате 24часа ', 0))
// let userMin = parseInt(prompt('Введите сколько минут сейчас в формате 24часа ', 0))
// let uTime = userWoth * 60 + userMin
// let time = 1440 - uTime
// let mTime = time % 60
// let hTime = time - mTime
// alert('Оставшееся время до следующих суток равняется: ' + (hTime / 60) + ':' + mTime)

// // Практика 1. Задание 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
// let userNum = parseInt(prompt('Введите трех значное число: ', 0))
// let userRes1 = userNum % 100
// let userRes2 = userRes1 % 10
// let userRes3 = userRes1 - userRes2
// alert('Второе число: ' + userRes3 / 10)

// // Практика 1. Задание 9. Запросите у пользователя пятизначное число и переме- стите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
// let userNumFive = parseInt(prompt('Введите пяти значное число: ', 0))
// let num1 = userNumFive % 10
// let num2 = (userNumFive - num1) / 10
// let numStr2 = num1.toString()
// alert('Получается: ' + numStr2 + num2)

// // Практика 1. Задание 10.Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.
// let userMani = parseInt(prompt('Введите сумму продаж за месяц: ', 0))
// alert('Вы заработали в этом месяце ' + (250 + userMani / 10) + '$')


// // Домашнее задание 1. Задание 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// let userName = prompt('Введите Ваше имя! ', 'абс')
// alert('Привет, ' + userName + '!')

// // Домашнее задание 1. Задание 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажитев коде как константу.
// let userYear = parseInt(prompt('Введите год рождения: ', 0))
// let userMonth = parseInt(prompt('Введите месяц рождения: ', 0))
// let userDay = parseInt(prompt('Введите день рождения:', 0))
// // if (userYear === null || userMonth === null || userDay === null) {
// //   alert('Вы нечего не ввели!')
// // }
// // //     else if ( isNaN(userYear % 2) || isNaN(userMonth % 2) || isNaN(userDay % 2)){
// // //       alert('Вы ввели не коректно!')
// // // }
// // else {
// // }
// let userYear1 = String(2024 - userYear)
// let userMonth1 = String(12 - userMonth)
// let userDay1 = String(31 - userDay)
// let userDate = (userYear1 + 'лет ' + userMonth1 + 'месяцев ' + userDay1 + 'дней примерно!')
// alert('Ваш возраст на конец года: ' + userDate)

// // Домашнее задание 1. Задание 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// let kub1 = parseInt(prompt('Введите длину квадрата: ', 0))
// alert('Периметр квадрата равен:' + (kub1 * 4))

// // Домашнее задание 1. Задание 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// let radius = parseFloat(prompt('Введите радиус круга: ', 0))
// const pi = 3.14
// alert('Площадь круга равна: ' + (pi * (radius * radius)))

// // Домашнее задание 1. Задание 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// let length = parseInt(prompt('Сколько километров Вам нужно проехать?', 0))
// let lenTime = parseInt(prompt('За сколько часов Вы планируете приехать?', 0))
// alert('Скорость с которой Вам нужно ехать ' + (length / lenTime) + 'км/ч')

// // Домашнее задание 1. Задание 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// const evroK = 0.928
// let dollUser = parseInt(prompt('Введите количество Ваших долларов: ', 0))
// let resEvro = parseFloat(dollUser * evroK)
// alert('У Вас ' + resEvro + '€')
// //как вывести 3 цифры после точки

// // Домашнее задание 1. Задание 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
// let memCap = parseInt(prompt('Введите объем Вашей памяти: ', 0))
// let capRes1 = memCap * 1024
// let capRes3 = capRes1 % 820 // остаток
// let capRes2 = (capRes1 - capRes3) / 820
// alert('Вашей памети достаточно для загрузки ' + capRes2 + ' файлов')

// // Домашнее задание 1. Задание 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
// let cashUser = parseInt(prompt('Введите остаток Вашего кошелька: ', 0))
// let costChoc = parseInt(prompt('Введите цену шоколадки: ', 0))
// let capitRes1 = cashUser % costChoc
// let capitRes2 = (cashUser - capitRes1) / costChoc
// alert('Вы можете купить ' + capitRes2 + ' у Вас останется сдачи ' + capitRes1 + 'руб')

// // Домашнее задание 1. Задание 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// let front = parseInt(prompt('Ведите трех значное число: ', 0))
// let front1 = front % 10
// let front2 = (front % 100 - front1) / 10
// let front3 = (front - (front % 100)) / 100
// alert('Обратный порядок ' + front1 + front2 + front3)

// // Домашнее задание 1. Задание 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch.
// let numnumUser = parseInt(prompt('Введите любое число: ', 0))
// if (numnumUser % 2) alert('Ваше число нечетное')
// else alert('Ваше число четное')

//http://localhost:5173/
