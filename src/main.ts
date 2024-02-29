import './style.scss'
// console.log('Hello world')
// console.log(5+9/2)
// for(let i = 0; i<24; i++ )
// {
//   console.log(i + 1)
// }

// console.log('Hello world')
{
  let n = 3
  for (let i = 0; i < n; i++) {
    console.log('Hello world')
  }

  while (n) {
    console.log('Hello worold')
    n--
  }
  let i = 0
  do {
    console.log('Hello worold')
    i++
  } while (i < 1)

  let arr = [1, 2, 3, 4, 5, 6, 7, 8]

  for (let i = 0; i < 50; i++) {
    arr[i] = (Math.random() * 99) + 1
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] == 5) {
      break
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      continue
    }
    console.log(arr[i])
  }

  cicl1: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      console.log('hello world')
      if (i == 2 && j == 3) {
        break cicl1
      }
    }
  }
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
  console.log(i)
  for (i = 0; i < 20; i++) {
    if (i % 2 == 0) {
    } else {
      console.log(i)

    }
  }
  console.log(i)
  i = 10
  while (i) {
    if (i % 2 == 0) {
    } else {
      console.log(i)
    }

    i--
  }
  i = 10
  while (i) {
    if (i % 2 == 0) {
      console.log(i)
    } else {
    }
    i--

  }
  let o = 5
  let t = 7
}
{
  // Домашнее задание 3. Задание 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
  let userNum1 = 23
  let userNum2 = 35
  let userRes = userNum1
  for (let i = userNum1; i < userNum2; i++) {
    userRes += userNum2
  }
  console.log(userRes)
}
{
// Домашнее задание 3. Задание 2. Запросить 2 числа и найти только наибольший общий делитель.
let numUser = 15
let numUser2 = 75
let text = ' '
let min = numUser < numUser2 ? numUser : numUser2
for(let i = min;i>0;i++)
{

}
}
// Домашнее задание 3. Задание 3. Запросить у пользователя число и вывести все делители этого числа.

// Домашнее задание 3. Задание 4.

// Домашнее задание 3. Задание 5.

// Домашнее задание 3. Задание 6.

// Домашнее задание 3. Задание 7.

// Домашнее задание 3. Задание 8.

// Домашнее задание 3. Задание 9.

// Домашнее задание 3. Задание 10.

// Практика 3. Задание 1.Вывести # столько раз, сколько указал пользователь.
let numUser77 = 77
for (let i = 0; i < numUser77; i++) {
  console.log('#')
}
{
  // Практика 3. Задание 2.Пользователь ввел число, а на экран вывелись все числа от введенного до 0
  let userNum5 = 9
  // userNum5 == userNum5 + 1
  // while (userNum5) {
  //   userNum5--
  //   console.log(userNum5)
  // }
  for (let i = userNum5; i >= 0; i--) {
    console.log(i)
    
  }
}
{
  // Практика 3. Задание 3.Запросить число и степень. Возвести число в указанную степень и вывести результат.
}
{
  // Практика 3. Задание 4.Запросить 2 числа и найти все общие делители.
  let numUser1 = 234
  let numUser12 = 544
  let text = ' '
  let min = numUser1 < numUser12 ? numUser1 : numUser12

}
{
  // Практика 3. Задание 5. Посчитать факториал введенного пользователем числа.
  let numUser1 = 5
  let resFact = 1
  for (let i = 1; i <= numUser1; i++) {
    resFact *= i
  }
  console.log(resFact)
}
// Практика 3. Задание 6.
{
  // Практика 3. Задание 7.Делить число 1000 на 2 до тех пор, пока не получится число меньше 50 Вывести это число и сколько делений произвели.
  let num1 = 1000
  let num2 = 2
  let res = 0
  // while()

}
{
  // Практика 3. Задание 8.Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

}
{
  // Практика 3. Задание 9.Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.

}
{
  // Практика 3. Задание 10. Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

}


{
  // Домашнее задание 2. Задание 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
  let userAge = 30
  if (userAge <= 12) {
    console.log('Ребенок')
  } else if (userAge > 12 && userAge < 18) {
    console.log('Подросток')
  } else if (userAge >= 18 && userAge < 60) {
    console.log('Взрослый')
  } else if (userAge >= 60) {
    console.log('Пенсионер')
  }
}
{
  // Домашнее задание 2. Задание 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
  let front = 345
  let front1 = front % 10
  let front2 = (front % 100 - front1) / 10
  let front3 = (front - (front % 100)) / 100
  //Первый правильный вариант
  // if(front1==front2 || front1==front3 || front2==front3){
  // console.log('Yes')
  // }else{console.log('No')}
  //Второй мой вариант
  if (front3 == front2) {
    console.log(`Повторяется ${front3} число`)
  } else if (front1 == front3) {
    console.log(`Повторяется ${front3} число`)
  } else if (front2 == front1) {
    console.log(`Повторяется ${front2} число`)
  } else { console.log('Совпадений нет') }
}
{
  // Домашнее задание 2. Задание 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100
  let yearVis = 2024
  let resVis = (yearVis % 4 ? "Обычный год" : 'Високосный год')
  console.log(resVis)
}
{
  //Домашнее задание 2. Задание 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
}
{
  // Домашнее задание 2. Задание 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
  const EUR = 100.44 // 1 Евро = 100,44 Российского рубля
  const USD = 92.75 // 1 Доллар США = 92,75 Российского рубля
  const AUD = 60.84 // 1 Австралийский доллар = 60,84 Российского рубля
  const AZN = 54.56 // 1 Азербайджанский манат = 54,56 Российского рубля
  const AMD = 0.22 // 1 Армянский драм = 0,22938 Российского рубля
  const BYN = 28.56 // 1 Белорусский рубль = 28,56 Российского рубля
  const BGN = 51.26 // 1 Болгарский лев = 51,26 Российского рубля
  const BRL = 18.81 // 1 Бразильский реал = 18,81 Российского рубля
  const HUF = 0.25  // 1 Венгерский форинт = 0,259984 Российского рубля
  const HKD = 11.88 // 1 Гонконгский доллар = 11,88 Российского рубля
  let numValu = 98
  let numRub = 3
  switch (numRub) {
    case 1: console.log(`${EUR * numValu} рублей`)
      break;
    case 2: console.log(`${USD * numValu} рублей`)
      break;
    case 3: console.log(`${AUD * numValu} рублей`)
      break;
    case 4: console.log(`${AZN * numValu} рублей`)
      break;
    case 5: console.log(`${AMD * numValu} рублей`)
      break;
    case 6: console.log(`${BYN * numValu} рублей`)
      break;
    case 7: console.log(`${BGN * numValu} рублей`)
      break;
    case 8: console.log(`${BRL * numValu} рублей`)
      break;
    case 9: console.log(`${HUF * numValu} рублей`)
      break;
    case 10: console.log(`${HKD * numValu} рублей`)
      break;
  }
}
{
  // Домашнее задание 2. Задание 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
  let sumUser = 250
  if (sumUser >= 200 && sumUser < 300) {
    console.log(`Сумма со скидкой равна ${sumUser - (sumUser / 100) * 3} руб`)
  }
  if (sumUser >= 300 && sumUser < 500) {
    console.log(`Сумма со скидкой равна ${sumUser - (sumUser / 100) * 5} руб`)
  }
  if (sumUser > 700) {
    console.log(`Сумма со скидкой равна ${sumUser - (sumUser / 100) * 7} руб`)
  }
}
{
  // Домашнее задание 2. Задание 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
  let userKrug = 25 //круг
  let userKvad = 50 //кмадрат
  let resKrugKvad = userKrug / 2 / 3.14159 < userKvad / 4 / 2 ? 'Окружность может поместиться в указанный квадрат' : 'Окружность не может поместиться в указанный квадрат'
  console.log(resKrugKvad)
}
// Домашнее задание 2. Задание 9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.За каждый правильный ответ начисляется 2 балла.После вопросов выведите пользователю количество набранных баллов.
// не знаю пока как решить
// Домашнее задание 2. Задание 10.Запросить дату(день, месяц, год) и вывести следующую за ней дату.Учтите возможность перехода на следующий месяц, год, а также високосный год.
// не знаю пока как решить

{
  // Практика 2. Задание 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.
  let numUserOpred = 0
  if (numUserOpred === 0) {
    console.log('Число равно 0 ')
  } else if (numUserOpred === Math.abs(numUserOpred)) {
    console.log('Число положительное')
  } else {
    console.log('Число отрицательное')
  }
  // let a = 5
  // let b = -5
  // let c = Math.abs(a)
  // console.log(a)
}
{
  // Практика 2. Задание 2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
  let userAge = 30
  if (userAge > 0 && userAge < 18) {
    console.log('Вы еще молодой')
  } else if (userAge >= 18 && userAge < 65) {
    console.log('Вы взрослый')
  } else if (userAge >= 65 && userAge < 120) {
    console.log('Вы пожилой')
  }
}
{
  // Практика 2. Задание 3. Запросить у пользователя число и вывести его модуль (|7| = 7, |-7| = 7).
  let modylUser = -9
  console.log(Math.abs(modylUser))
}
{
  // Практика 2. Задание 4. Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.
  let hourUser = 7
  let minuteUser = 35
  let secondUser = 14
  if ((hourUser >= 0 && hourUser <= 12) && (minuteUser >= 0 && minuteUser <= 60) && (secondUser >= 0 && secondUser <= 60)) {
    console.log('Коректное время')
  } else {
    console.log('Не коректное время')
  }
}



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

// // Практика 1. Задание 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).
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
