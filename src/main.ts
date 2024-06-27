import { Value } from 'sass'
import './style.scss'

// ! DZ 2 Задание Вам необходимо самостоятельно решить, для какого задания какой оператор ветвления лучше использовать: if, switch или тернарный.
// 1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
{
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
// 2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!,2–@, 3–# и т. д).
{
    let num = 3
    let arr = [')', '!', '@', '#', '$', '%', '^', '&', '*', '(']
    console.log(arr[num])
}
// 3.Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
{
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
// 4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100
{
    let yearVis = 2024
    let resVis = (yearVis % 4 ? "Обычный год" : 'Високосный год')
    console.log(resVis)
}
// 5.Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
{
    let num = 1441
    function polindrom(num0: number) {
        let num2 = 0
        num2 = +num.toString().split('').reverse().join('')
        return num0 == num2 ? 'палиндромом' : 'непалиндромом'
    }
    console.log(polindrom(num))
    // let num = 1441
    // function polindrom(num0:number){
    //     let num2 = 0
    //     num2 = +num.toString().split('').reverse().join('')
    //     return num0 == num2 ? 'палиндромом' : 'непалиндромом'
    // }
    // console.log(polindrom(num))

}
// 6.Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
{
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
// 7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
{
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
// 8.Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
{
    let userKrug = 25 //круг
    let userKvad = 50 //кмадрат
    let resKrugKvad = userKrug / 2 / 3.14159 < userKvad / 4 / 2 ? 'Окружность может поместиться в указанный квадрат' : 'Окружность не может поместиться в указанный квадрат'
    console.log(resKrugKvad)
}
// 9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
{

}
// 10.Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
{

}
// ! DZ 3 Задание Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE или FOR.
// 1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
{
    let userNum1 = 23
    let userNum2 = 35
    let userRes = userNum1
    for (let i = userNum1; i < userNum2; i++) {
        userRes += userNum2
    }
    console.log(userRes)
}
// 2.Запросить 2 числа и найти только наибольший общий делитель.
{
    let numUser = 15
    let numUser2 = 75
    let res = 0
    let min = numUser < numUser2 ? numUser : numUser2
    for (let i = 0; i <= min; i++) {
        if (numUser % i == 0 && numUser2 % i == 0) {
            res = i
            console.log(res)
        }
    }
    console.log(res)
}
// 3.Запросить у пользователя число и вывести все делители этого числа.
{
    let numUser = 4454
    let text = ''
    for (let i = 0; i < numUser; i++) {
        if (numUser % i == 0) {
            text += i + '_'
        }
    }
    text += numUser
    console.log(text)
}
// 4.Определить количество цифр в введенном числе.
{
    let num = 1236456532168351683
    function colNum(num: number) {
        return num.toString().split('').length
    }
    console.log(colNum(num))
}
// 5.Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
{
    let numArr = ['1', '-4', '34', '-3', '3', '67', '84', '90', '23', '44']
    function result(num: any) {
        // let chet = num
    }
    console.log(result(numArr))

}
// 6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
{

}
// 7.Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
{
    let num = 1234567
    let numInput = 3
    function sdvig(num: number, numInput: number) {
        // num.toString().replace(0,1,)
        let numb = num.toString().split('').splice(0, numInput)
        console.log(num)
        console.log(numb)
        // num = num.toString().split('')

        console.log(num)
    }
    console.log(sdvig(num, numInput))

}
// 8.Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
{

}
// 9.Вывести таблицу умножения для всех чисел от 2 до 9 Каждое число необходимо умножить на числа от 1 до 10
{

}
// 10.Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50 Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100 И так до тех пор, пока пользователь не выберет == N.
{

}

// ! DZ 5

// ? Модуль 2 #######################################################################################################################

// ! DZ 1 
// Задание 1.Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.
// 1.Функция для вывода на экран информации об автомобиле.
// 2.Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
{

}
// Задание 2.Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1.Функция сложения 2-х объектов-дробей.
// 2.Функция вычитания 2-х объектов-дробей.
// 3.Функция умножения 2-х объектов-дробей.
// 4.Функция деления 2-х объектов-дробей.
// 5.Функция сокращения объекта-дроби.
{

}
// Задание 3.Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1.Функция вывода времени на экран.
// 2.Функция изменения времени на переданное количество секунд.
// 3.Функция изменения времени на переданное количество минут.
// 4.Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
{

}
// ! DZ 2
// Задание 1.Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// 1.Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
{

}
// 2.Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
{

}
// 3.Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
{

}
// Задание 2.Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
// 1.Распечатка чека на экран.
{

}
// 2.Подсчет общей суммы покупки.
{

}
// 3.Получение самой дорогой покупки в чеке.
{

}
// 4.Подсчет средней стоимости одного товара в чеке.
{

}
// Задание 3.Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
{

}
// Задание 4.Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.
// 1.Вывод на экран всех аудиторий.
{

}
// 2.Вывод на экран аудиторий для указанного факультета.
{

}
// 3.Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета.
{

}
// 4.Функция сортировки аудиторий по количеству мест.
{

}
// 5.Функция сортировки аудиторий по названию (по алфавиту).
{

}
// ! DZ 3

// ! DZ 4
// Задание 1.Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// ■ поле, хранящее радиус окружности;
// ■ get-свойство, возвращающее радиус окружности;
// ■ set-свойство, устанавливающее радиус окружности;
// ■ get-свойство, возвращающее диаметр окружности;
// ■ метод, вычисляющий площадь окружности;
// ■ метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.
{

}
// Задание 2.Реализовать класс, описывающий html элемент.
// Класс HtmlElement должен содержать внутри себя:
// ■ название тега;
// ■ самозакрывающийся тег или нет;
// ■ текстовое содержимое;
// ■ массив атрибутов;
// ■ массив стилей;
// ■ массив вложенных таких же тегов;
// ■ метод для установки атрибута;
// ■ метод для установки стиля;
// ■ метод для добавления вложенного элемента в конец текущего элемента;
// ■ метод для добавления вложенного элемента в начало текущего элемента;
// ■ метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов. С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().
// Обратите внимание. Чтобы получить весь этот html в виде строки должно быть достаточно вызвать метод getHtml только у тега с идентификатором wrapper.
{

}
// Задание 3.Реализовать класс, который описывает css класс. Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде строки.
{

}
// Задание 4.Реализовать класс, описывающий блок html документ. Класс HtmlBlock должен содержать внутри себя:
// ■ коллекцию стилей, описанных с помощью класса CssClass;
// ■ корневой элемент, описанный с помощью класса HtmlElement;
// ■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом все html содержимое из корневого тега и его вложенных элементов). С помощью написанных классов реализовать следующий блок(см. рис. 2) и добавить его на страницу с помощьюdocument.write().
// ! DZ 5

// ! DZ 6





// ! DZ 

//? 1.Написать функцию, которая принимает строку и выводит статистику о ней: количество букв, количество цифр и количество других знаков.
{
    let str = '5Lorem ips)(um dolor sit amet2  consec.tet5ur adipisicing .e6lit. Elige/ndi p8laceat cumque qu/ib0usdam fugiat iusto0 porr/o soluta ul/2lam dese/runt 23mo/lestias quisq5uam ipsam36 laborum3 aper7iam vo8luptatem9 nisi am et   9  at re4p5rehe45nderit, repellendus aspernatur?'
    function schot(str: string) {

        let num = str.split('').join(' ').replaceAll(/[a-z,A-z,!-/ , :-@]/g, '').replaceAll(' ', '')
        let char = str.split('').join(' ').replaceAll(/[0-9, !-/ , :-@]/g, '').replaceAll(' ', '')
        let symv = str.split('').join(' ').replaceAll(/[a-z,A-z,0-9]/g, '').replaceAll(' ', '')
        return `Количество букв = ${char.length}, Количество цифр = ${num.length}, Количество других знаков = ${symv.length}`
    }

    console.log(schot(str))
}
//? 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде. Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
{
    function propis(num: number) {
        let str1 = 'ноль один два три четыре пять шесть семь восемь девять десять'.split(' ')
        let str2 = ' одиннадцать двенадцать тринадцать четырнадцать пятнадцать шестнадцать семнадцать восемнадцать девятнадцать'.split(' ')
        let str3 = '  двадцать тридцать сорок пятьдесят шестьдесят семьдесят восемьдесят девяносто'.split(' ')
        if (num >= 0 && num <= 10) {
            return str1[num]
        }
        if (num % 10 == 0) {
            return str3[num / 10]
        }
        if (num > 10 && num <= 19) {
            return str2[num - 10]
        }
        if (num >= 20 && num <= 99) {
            return str3[(Math.trunc(num / 10))] + ' ' + str1[num % 10]
        }
    }
    console.log(propis(66))

}
//? 3.Написать функцию, которая заменяет в полученной строке большие буквы на маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
{
    let str = '5Lorem ips )( um dolor sit amet 2  Consec.tet5ur adipisicing 6'// .e6lit. Elige/ndi p8laceat cumque qu/ib0usdam fugiat iusto0 porr/o soluta ul/2lam dese/runt 23mo/lestias quisq5uam ipsam36 laborum3 aper7iam vo8luptatem9 nisi am et   9  at re4p5rehe45nderit, repellendus aspernatur?'
    function dontUn(str: string) {
        let str2 = str.split('')
        let str3 = str.replaceAll(/0-9/g, ' ')
        for (let el in str2) {
            console.log(str3[el])
            if (+str3[el]) {
                str3[el].replaceAll(/0-9/g, '_')
                console.log(str3[el])
            }
            console.log(str3[el])
        }
        // return str = str.toLowerCase() + str.slice(1).toUpperCase()

        return str3
    }
    console.log(dontUn(str))
}

// ? 4 Написать функцию, которая преобразует названия css-стилей с дефисом в название в СamelСase стиле: font-size в fontSize, background-color в backgroundColor, text-align в textAlign.

// ? 5 Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру. Например: cascading style sheets в CSS, объектно-ориентированное программирование в ООП.

// ? 6 Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и возвращает ее.
{
    function cancat(...str: string[]) {
        let arr = str[0].split('')
        str[0] = arr[0].toUpperCase() + arr.slice(1).join()
        console.log(str)
        return str.join(' ')
    }
    console.log(cancat('hello', 'Piter'))
}

// ? 7 Написать функцию – калькулятор. Функция принимает строку с примером, определяет, какое действие необходимо выполнить (+ - * /), переводит операнды в числа, решает пример и возвращает результат.
{
    function calculator(str: string) {

        str = str.replace(' ', '')
        if (str.includes('+')) {
            const arr = str.split('+')
            return +arr[0] + (+arr[1])
        } else if (str.includes('-')) {
            const arr = str.split('-')
            return +arr[0] - (+arr[1])

        } else if (str.includes('*')) {

            const arr = str.split('*')
            return +arr[0] * (+arr[1])
        } else if (str.includes('/')) {

            const arr = str.split('/')
            return +arr[0] / (+arr[1])
        }
    }
    console.log(calculator('1+3'))
    console.log(calculator('12/2'))
    console.log(calculator('3*20'))
    console.log(calculator('13-3'))
}

//? 8 Написать функцию, которая получает url и выводит подробную информацию о нем. Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен: itstep.org, путь: /ua/about”.

// ?9 Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок, разбитых с помощью указанного разделителя. Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”. Выполняя задание, не используйте функцию split().

//? 10 Написать функцию вывода текста по заданному шаблону. Функция принимает первым параметром шаблон, в тексте которого может использоваться %, после символа % ука зывается индекс входного параметра. При выводе вместо %индекс необходимо вывести значение соответствующего входного параметра. Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести “Today is Monday 10.8.2020”.

// ! ПРАКТИКА

// ? 1 Написать функцию, которая принимает 2 строки и сравнивает их длину. Функция возвращает 1, если в первой строке больше символов, чем во второй; -1 – если во второй больше символов, чем в первой; или 0 – если строки одинаковой длины.
{
    let str = 'hello'
    let string = 'world'
    function lengthWord(str1: string, str2: string) {
        if (str1.length > str2.length) return 1
        if (str1.length < str2.length) return -1
        if (str1.length == str2.length) return 0
    }
    console.log(lengthWord(str, string))
}
//? 2 Написать функцию, которая переводит в верхний регистр первый символ переданной строки.
{
    function upFirstWord(str: string) {
        return str = str[0].toUpperCase() + str.slice(1)

    }
    console.log(upFirstWord('ishkhan'))
}
// ? 3 Написать функцию, которая считает количество гласных букв в переданной строке.
{
    let str = 'hello saafdsA '
    function allGlasChar(str: string) {
        const gl = 'AaEeYyUuIiOo'.split('')
        let str1 = str.split('')
        let stt = 0
        for (let el in gl) {
            for (let el2 in str1) {
                if (str[el2] == gl[el]) {
                    stt++
                }
            }
        }
        return stt
    }
    console.log(allGlasChar(str))





    str = 'widget with id'
    console.log(str.indexOf('Widget'))
    console.log(str.indexOf('widget'))
    console.log(str.indexOf('w', 1))
    console.log("Midget".startsWith("id"))

}
//? 4 Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. Функция должна быть нечувствительна к регистру.
{
    let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat cumque quibusdam fugiat iusto porro soluta ullam deserunt molestias quisquam ipsam laborum aperiam voluptatem nisi amet at reprehenderit, repellendus aspernatur?'
    let num = 2
    str.split('')


}
//? 5 Написать функцию сокращения строки. Функция принимает строку и ее максимальную длину. Если длина строки больше, чем максимальная, то необходимо отбросить лишние символы, добавив вместо них троеточие. Например: truncate(“Hello, world!”, 8) должна вернуть “Hello...”.

//? 6 Написать функцию, которая проверяет, является ли переданная строка палиндромом.

//? 7 Написать функцию, которая считает количество слов в предложении.

//? 8 Написать функцию, которая возвращает самое длинное слово из предложения.

//? 9 Написать функцию, которая считает среднюю длину слова в предложении.

//  10 Написать функцию, которая принимает строку и символ и выводит индексы, по которым находится этот символ в строке. Также вывести, сколько всего раз встречается этот символ в строке.

// ДЗ

// 1
// Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
// 2
// Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
// 3
// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.


{

    // 1.1.  Написать функцию возвращающюю массив целых чисел от 0 до 10
    function getArrNumber(start = 0, end = start + 10) {
        const arr = []
        for (let i = 0; i < end - start; i++) {
            arr[i] = i + start
            // arr[i] = Math.trunc(Math.random() * 10)        
        }
        return arr
    }

    console.log(getArrNumber())

    // 1.2.  Добавить в функцию параметры опциональные параметры начального и конечного значения массива
    //     (если конечный элемент массива не передат, то он больше нечального на 10) . Вызвать функцию несаколько раз

    console.log(getArrNumber(10))
    console.log(getArrNumber(10))
    console.log(getArrNumber(0, 23))
    console.log(getArrNumber(0, 23))
    console.log(getArrNumber(45, 5))
    console.log(getArrNumber(45, 5))
    console.log(getArrNumber(10, 20))
    console.log(getArrNumber(10, 20))


    // 1.3*. Написать функцию возвращающюю массив случайных целых чисел. Функция принимает 1 параметр, количество элементов в будущем массиве

    function getRandArrNumber(num = 10, min = 0, max = 10) {
        const arr = []
        for (let i = 0; i < num; i++) {
            arr[i] = Math.trunc(Math.random() * (max - min) + min)
        }
        return arr
    }
    const arr = [...getArrNumber(10, 34)]
    console.log(getRandArrNumber(1))
    console.log(getRandArrNumber(10, 45, 50))
    console.log(getRandArrNumber(10, 45, 50))
    console.log(getRandArrNumber(10, 45, 50))
    console.log(getRandArrNumber(10, 45, 50))
    console.log(arr)

    // 2.1. В файле html создать пустой div с произвольным id
    // 2.2. Получить объект div'а в js при помощи метода document.getElementById(ваш id) as HTMLDivElement
    const divHello = document.getElementById('newDiv') as HTMLDivElement


    // 2.3. Вывесли в полученный div текст, "Привет, пользователь"
    divHello.innerHTML = "Привет, пользователь"
    // 2.4. Написать функцию, которая возвращает текст "Привет, пользователь" или "Привет, <имяПользователя>" в зависимости от переданных параметров и использовать её в задании 2.3.
    function hello(name = "пользователь") {
        divHello.innerHTML = `Привет, ${name}`
    }
    hello()
    hello('zemlianin')
    hello('***zemlianin***')




    type ClassRoom = {
        name: string,
        department: string,
        salary: number
    }

    // Есть массив объектов
    const employees: ClassRoom[] = [
        { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
        { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
        { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
        { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
        { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
        { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
        { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
        { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
    ]



    // Все функции вызывать несколько раз с разными параметрами
    // 3.1. Создать функцию, принимающую массив работников, и возвращающую массив уникальных отделов (department)
    function getDepart(arr: ClassRoom[]) {
        for (let el of arr) {
            // return { el department }

        }


    }
    getDepart(employees)

    // 3.2. Написать функцию, принимающую массив работников и ключ объекта, по которому сделать сортировку массива
    // Учесть, что строковые параметры сортируются при помощи метода localeCompare, а числовые,- вычитанием

    {
        const myArr = [1, 3, 4, 1, 5, 6, 7, 9, 8, 34, 21]
        console.log(myArr)
        myArr.sort((a, b) => a - b)
        console.log(myArr)

        const myArr2 = ['1', '4', '6', '2']
        console.log(myArr2)
        myArr2.sort((a, b) => a.localeCompare(b))
        console.log(myArr2)


    }





    // function sortArrJob(arr: ClassRoom[], key: string) {
    //     // arr.key.sort()
    //     arr[0].name.sort()
    // }
    // console.log(employees[0].name)
    // sortArrJob(employees, 'name')

    // 3.3. Написать функцию, аналогичную описанной в задании 2.2., но сортирующую в обратном порядке


    // 3.4. Написать функцию, принимающую массив работников и имя, и возвращающую объект сотрудника или undefined

    // 3.5. Написать функцию, принимающую массив работников и название отдела, и возвращающую новый массив, содержащий только сотрудников переданного отдела

    // 3.6. Написать функцию, принимающую массив работников и возвращающую сумму зарплат. Вызвать функцию по каждому отделу и по общему массиву

    // 3.7. В HTML создать div для кнопок, задать ему id и получить объект div'a в js, аналогично заданию 2.2.
    // 3.8. Так же как в 3.7 создать ul (as HTMLUListElement) для вывода списка и div для вывода суммы зарплат

    // 3.9. Используя массив, полученный в 3.1. Вывести кнопки с названиями отделов + кнопку "Все отделы"
    //      использовать data-атрибут (data-dep), в который поместить название отдела. Для кнопки "Все отделы" data-dep="all"
    // 3.10. Используя div, полученный в задании 3.7
    // div37.addEventListener('click', function (e) {
    //   const target = e.target as HTMLElement
    //   if (target.tagName == 'BUTTON' && target.dataset.dep) {
    //      в зависимости от значения dep выводить в список (ul 3.8) тех сотрудников, которые работают в данном отделе, либо всех, если target.dataset.dep=='all'. Используем логическое ветвление и уже написанные функции
    //      в div (3.8) выводить сумму зарплат
    //   }
    // })
}

{

    type ClassRoom = {
        name: string,
        department: string,
        salary: number
    }

    // Есть массив объектов
    const employees: ClassRoom[] = [
        { name: 'Федотова Арина Глебовна', department: 'ads', salary: 2100 },
        { name: 'Голикова Мария Филипповна', department: 'prog', salary: 3500 },
        { name: 'Панин Александр Германович', department: 'ads', salary: 2100 },
        { name: 'Романов Эмиль Макарович', department: 'prog', salary: 3100 },
        { name: 'Смирнов Никита Александрович', department: 'prog', salary: 3800 },
        { name: 'Александрова Майя Вячеславовна', department: 'prog', salary: 4500 },
        { name: 'Крылов Богдан Максимович', department: 'disign', salary: 2100 },
        { name: 'Мухина Айша Константиновна', department: 'disign', salary: 2100 },
    ]

    const toListDiv = document.getElementById('toList') as HTMLOListElement

    function renderBuyList(arr: ClassRoom) {
        let html = ''
        for (let el = 0; el < arr.name.length; el++) {

            html += `<li style="color:red"> ${arr.name} ${arr.department} ${arr.salary} </li>`

        }
        // for (let el of arr) {
        //     if (el.isBuyed) {
        //         html += `<li style="color:green"> ${el.name} ${el.count} </li>`
        //     }
        // }
        toListDiv.innerHTML = html
    }





    let a = 'hello'
    console.log(a.toLocaleUpperCase())
    console.log(a.toLowerCase())
    //@ts-ignore
    console.log(a.indexOf())

    let b = 'world'
    console.log(b.endsWith('2'))

    let c = 1.23445
    console.log(c.toFixed(2))

    let c2 = 1.23465
    console.log(c2.toFixed(2))

    let d = 1_343_544
    console.log(d)

    let d2 = 9999999999999999 //после 15 (9) уже не точно 
    console.log(d2)

    let pi = Math.PI
    console.log(pi)

}
{
    //строки
    console.log('a'.length)
    console.log('sad'.length)
    console.log('sad'[0])
    console.log('sad'.codePointAt(1))
    //@ts-ignore
    console.log('sad'.at(1))
    console.log('sad'['sad'.length - 1])

    console.log(String.fromCodePoint(5))
    console.log('a'.localeCompare('A'))
    console.log('a'.repeat(5))
    console.log(' a '.trim())
    console.log(' a '.trimStart())
    console.log(' a '.trimEnd())

    let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat cumque quibusdam fugiat iusto porro soluta ullam deserunt molestias quisquam ipsam laborum aperiam voluptatem nisi amet at reprehenderit, repellendus aspernatur?`
    console.log(str)
    console.log(str.trim())
    console.log(str.replace(/L/g, 'B'))
    console.log(str.replace(/a/g, '😂'))
    console.log(str.replace(/ /g, '🤦‍♂️'))

    console.log((str + '\n').repeat(5))


    str = 'hello'
    // console.log(str = str.toUpperCase())
    console.log(str = str[0].toLowerCase() + str.slice(1))
    function upFirstWord(str: string) {
        str = str[0].toUpperCase() + str.slice(1)
        return str
    }

    console.log(upFirstWord('hello'))
    console.log(upFirstWord('hello, world'))
    // console.log(str.)
    let str1 = '1 To be or not to be, that\'s the question. 2 Worthy of 3 To accept the blows of fate, 4 Or it is necessary to resist 5 And in mortal combat with a whole sea of troubles 60 End them? 61 Die. 77 Forget yourself.'

    console.log(str1.replace(/[^0-9]/g, ',').replace(/\D/g, ' '))

}


{

    // Продукты
    type product = {
        name: string,
        count: number,
        isBuyed: boolean,
    }

    const toBuyList: product[] = [
        { name: 'картофель', count: 5, isBuyed: false },
        { name: 'лук', count: 1, isBuyed: false },
        { name: 'соль', count: 1, isBuyed: true },
        { name: 'приправа', count: 1, isBuyed: false },
        { name: 'мясо', count: 1, isBuyed: false },
        { name: 'сыр', count: 1, isBuyed: true },
    ]
    // toBuyList:toBuyList {'помидор', 4, false}

    const toBuyListOl = document.getElementById('toBuyList') as HTMLOListElement

    function renderBuyList(arr: product[]) {
        let html = ''
        for (let el of arr) {
            if (!el.isBuyed) {
                html += `<li style="color:red"> ${el.name} ${el.count} </li>`
            }
        }
        for (let el of arr) {
            if (el.isBuyed) {
                html += `<li style="color:green"> ${el.name} ${el.count} </li>`
            }
        }
        toBuyListOl.innerHTML = html
    }

    renderBuyList(toBuyList)

    const productNameInput = document.getElementById('productName') as HTMLInputElement
    const productCountInput = document.getElementById('productCount') as HTMLInputElement
    const addProductButton = document.getElementById('addProduct') as HTMLButtonElement
    const reduceProductButton = document.getElementById('reduceProduct') as HTMLButtonElement

    // добавить

    function addToBuylist(arr: product[], name: string, count: number) {
        let inList = false
        for (let el of arr) {
            if (el.name == name && !el.isBuyed) {
                el.count += count
                inList = true
            }
        }
        if (!inList && name) {
            arr.push({ name, count, isBuyed: false })
        }
        renderBuyList(arr)
    }

    addProductButton.addEventListener('click', function () {
        addToBuylist(toBuyList, productNameInput.value, +productCountInput.value,)
        productNameInput.value = ''
        productCountInput.value = ''
    })

    // удалить

    function reduceToBuylist(arr: product[], name: string, count: number) {
        let inList = false
        for (let el of arr) {
            if (el.name == name) {
                el.count -= count
                inList = true
            }
        }
        // if (!inList) {
        //   arr.push({ name, count, isBuyed: false })
        // }
        renderBuyList(arr)
    }

    reduceProductButton.addEventListener('click', function () {
        reduceToBuylist(toBuyList, productNameInput.value, +productCountInput.value,)
        productNameInput.value = ''
        productCountInput.value = ''
    })


    const setBuyedButton = document.getElementById('setBuyed') as HTMLButtonElement
    const cancBuyedButton = document.getElementById('cancBuyed') as HTMLButtonElement

    // отметить

    function setBuyed(arr: product[], name: string,) {
        for (let el of arr) {
            if (el.name == name) {
                el.isBuyed = true
            }
        }
        renderBuyList(arr)
    }
    setBuyedButton.addEventListener('click', function () {
        setBuyed(toBuyList, productNameInput.value)
        productNameInput.value = ''
        productCountInput.value = ''
    })

    // отменить

    function cancBuyed(arr: product[], name: string,) {
        for (let el of arr) {
            if (el.name == name) {
                el.isBuyed = false
            }
        }
        renderBuyList(arr)
    }
    cancBuyedButton.addEventListener('click', function () {
        cancBuyed(toBuyList, productNameInput.value)
        productNameInput.value = ''
        productCountInput.value = ''
    })
}





{
    // Метрика 
    // google аналитика   page speed
    // вебмастер  


}
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
                break cicl1 // ? отмна первого цикла 
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
    // let o = 5
    // let t = 7
    function getSum(a = 0, b = 0) {
        return a + b

    }
    function getMax(a = 0, b = 0) {
        return a > b ? a : b

    }
    function getMin(a = 0, b = 0) {
        return a < b ? a : b

    }
    function getSumRes(...rest: number[]) {
        let sum = 0
        for (let i = 0; i < arguments.length; i++) {
            sum += rest[i]
        }
        return sum
    }
    console.log(getSumRes(1, 2, 3, 4, 5, 6, 7, 8, 9))
    console.log(getMax(4))
    console.log(getMin(4))
    console.log(getSum(5, 9))

    function funcC(a: number, b: number) {
        console.log('Hello')
        return a + b
    }
    console.log(funcC(4, 8))
    function funcC1(a = 10, b = 4) {
        console.log('Hello')
        return a + b
    }
    console.log(funcC1(486, 14))

}
{//12.03.24.
    const object = {
        a: 345,
        b: 35,
        c: 4,
    }
    console.log(object)
    console.log(object.a)
    console.log(object["a"])
    console.log(object['b'])
    console.log(object[`c`])

    // const newObject = {
    //     a: 1, b: 2, c: 3, d: 'hello'
    // }
    // let h = ' '
    // function myObj(object:object):string{
    //     if(!object){
    //         console.log(object)
    //         return h
    //     }else{
    //         console.log(object)
    //         return h += myObj(object)
    //     }
    // }
    // console.log(myObj(newObject))

    for (let key in object) {
        console.log(key)
    }
}
{//14.03.24.
    type Car = {
        manuf: string,
        brand: string,
        ageString: string
        speedStr: string,
        maxSpeedStr: string,
        age: number,
        speed: number,
        maxSpeed: number,
    }
    const myCar: Car = {
        manuf: 'BMW',
        brand: 'M5',
        ageString: 'Year',
        speedStr: 'Average speed',
        age: 2017,
        maxSpeed: 340,
        maxSpeedStr: 'Max speed',
        speed: 100,
    }

    function getMyCar(car: Car) {
        return car.manuf + ' ' + car.brand + '\n' + car.ageString + ' ' + car.age + '\n' + car['maxSpeedStr'] + ' ' + car['maxSpeed'] + '\n' + car.speedStr + ' ' + car.speed
    }

    console.log(getMyCar(myCar))

    function getHourDist(car: Car, dist: number) {
        let time = dist / car.speed
        let resTime = time % 4 == 0 ? (Math.trunc((dist / car.speed) / 4) - 1) : (Math.trunc((dist / car.speed) / 4))
        return time + resTime
    }
    console.log(getHourDist(myCar, 1900))
}


{ // 21.03.24.
    const myArr = [3, 4, 67, 324, 1, 3, 443, 556, 6, 7, 87, 54]


}

{
    // Практика 6. Задание 1. Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.



    type Rectangle = {
        topLeft: {
            x1: number,
            y1: number,
        },
        bottomRight: {
            x2: number,
            y2: number,
        },
    }

    const myRect: Rectangle = {
        topLeft: {
            x1: 0,
            y1: 0,
        },
        bottomRight: {
            x2: 7,
            y2: 12,
        },


    }



    // 1.Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).
    function getInfo(rect: Rectangle) {


        console.log(rect.topLeft, rect.bottomRight)

    }
    getInfo(myRect)

    // 2.Функция принимает объект-прямоугольник и возвращает его ширину.
    function getRectWhit(rect: Rectangle) {
        return rect.topLeft?.y1 < rect.bottomRight?.y2 ? rect.bottomRight?.y2 - rect.topLeft?.y1 : rect.topLeft?.y1 - rect.bottomRight?.y2
    }
    console.log(getRectWhit(myRect))
    // 3.Функция принимает объект-прямоугольник и возвращает его высоту.
    function getRectHig(rect: Rectangle) {
        return rect.topLeft?.x1 < rect.bottomRight?.x2 ? rect.bottomRight?.x2 - rect.topLeft?.x1 : rect.topLeft?.x1 - rect.bottomRight?.x2
    }
    console.log(getRectHig(myRect))
    // 4.Функция принимает объект-прямоугольник и возвращает его площадь.
    function getRectPloshad(rect: Rectangle) {
        return getRectHig(rect) * getRectWhit(rect)
    }
    console.log(getRectPloshad(myRect))
    // 5.Функция принимает объект-прямоугольник и возвращает его периметр.
    function getRectPerimetr(rect: Rectangle) {
        return (getRectHig(rect) + getRectWhit(rect)) * 2
    }
    console.log(getRectPerimetr(myRect))

    // 6.Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.
    let a = 5
    function chanRect(rect: Rectangle, num: Number) {

    }
    chanRect(myRect, a)
    // 7.Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.

    // 8.Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения для изменения ширины и высоты.

    // 9.Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.

    // 10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.

    // 11. Функция смещения прямоугольника и по оси X и по оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.

    // 12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.

}
{
    // Практика 5. Задание 1. Написать функцию, которая вычисляет факториал заданного числа.

    // function getFact(n: number): number {
    //     let i = 1
    //     if (n <= i) {
    //         console.log(n)
    //         return n
    //     } else {
    //         console.log(n)
    //         return n = n * getFact(n-1)
    //     }
    // }
    function getFact(n: number): number {

        return n <= 1 ? 1 : n = n * getFact(n - 1)
    }
    console.log(getFact(5))
}
{
    // Практика 5. Задание 2. Написать функцию, которая выводит все числа из заданного пользователем диапазона в прямом порядке. И еще одну функцию – для вывода в обратном порядке.

    function getPorydok(min: number, max: number): string {
        let num = ' '
        console.log(min)
        return min - 1 == max ? num : num += min + getPorydok(min + 1, max)
    }

    function getPorydokR(min: number, max: number): string {
        let dev = ' '
        // console.log(max)
        // console.log(num)
        // return min == max ? num : num += (max - getPorydokR(min, max-1))
        if (min - 1 == max) {
            return dev
        } else {
            dev += max + getPorydokR(min, max - 1)
        }

        return dev
    }
    console.log(getPorydokR(4, 15))

    console.log(getPorydok(4, 15))
}
{
    // Практика 5. Задание 3. Написать функцию, которая выводит переданное ей число задом наперед. 
    // Например: число 1234 вывести как 4321
    function getRev(n: number): number {
        if (n <= 9) {
            console.log(n)
            return n
        } else {

            return +((n % 10).toString() + getRev(Math.trunc(n / 10)))
        }
        console.log(n)
    }
    console.log(getRev(1234))
}
{
    // Практика 5. Задание 4. Написать функцию, которая считает сумму цифр числа. 
    // Например: число 1357, сумма 1 + 3 + 5 + 7 = 16

    function getSum(n: number): number {
        if (n < 10) {
            return n
        } else {
            return n % 10 + getSum(Math.trunc(n / 10))
        }
    }
    console.log(getSum(123))
}

{
    // Практика 5. Задание 5.Написать функцию, которая принимает число и выводит соответствующее количество вложенных пар круглых скобок. 
    // Например: число 4 – (((()))).
    let m = ''
    function getScob(n: number) {
        console.log(n)
        if (n == 0) {
            return m
        } else {
            m += '{' + getScob(n - 1) + '}'
            console.log(n)

            return m
        }
    }
    console.log(getScob(5))
}
{
    // Домашнее задание 5. Задание 1. Написать функцию возведения числа в степень.
    function getStepin(x: number, n: number): number {
        if (n == 1) {
            return x;
        } else {
            return x * getStepin(x, n - 1);
        }
    }
    // function getStepin(x: number, n: number):number {
    //     return n == 1 ? x : x * getStepin(x, n - 1)
    // }
    console.log(getStepin(4, 5))
}
{
    // Домашнее задание 5. Задание 2. Написать функцию поиска наибольшего общего делителя.

}
{
    // Домашнее задание 5. Задание 3. Написать функцию для поиска максимальной цифры в числе.
}
{
    // Домашнее задание 5. Задание 4.Написать функцию, которая определяет простое ли переданное число.
}
{
    // Домашнее задание 5. Задание 5.Написать функцию для вывода всех множителей переданного числа в возрастающем порядке. 
    // Например: число 18 – множители 2 * 3 * 3

}
{
    // Домашнее задание 5. Задание 6. Написать функцию, которая возвращает число Фибоначчи по переданному порядковому номеру. Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на том, что каждое число равно сумме двух предыдущих чисел. 
    // Например: порядковый номер 3 – число 2, порядковый номер 6 – число 8

}

{
    // Практика 4. Задание 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них.
    function getMin(a = 0, b = 0) {
        return a < b ? a : b
    }
    console.log(getMin(4))
}
{
    // Практика 4. Задание 2. Написать функцию, которая возводит переданное число в указанную степень.
    function getDegree(a: number, b: number) {
        let mult = a
        for (let i = 0; i < b; i++) {
            mult *= a
        }
        return mult
    }
    console.log(getDegree(2, 3))
}
{
    // Практика 4. Задание 3.Написать функцию, которая принимает 2 числа и знак (+ - * /), считает пример и возвращает результат.
    function getResult(a: number, b: number, c: string) {

        switch (c) {
            case '+': return a + b
                break
            case '-': return a - b
                break
            case '*': return a * b
                break
            case '/': return a / b
                break
            default: return 'Не коректные даные!'
        }
    }
    console.log(getResult(5, 5, ' '))
}
{
    //   // Практика 4. Задание 4.Написать функцию, которая проверяет, является ли переданное ей число простым.
    function getProst(a: number) {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return 'не простое число'
            }
        }
        return 'Простое число'
    }
    console.log(getProst(15))
}
{
    // Практика 4. Задание 5.Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9
    function getResUmn(a: number) {
        let st = ''
        if (a < 10 && a > 1) {

            for (let i = 2; i <= 9; i++) {
                st += ` ${i} * ${a} = ${i * a}; \n`
            }
            return st
        }
        return 'Вы вели не верное число \n Введите число от 2 до 9'
    }
    console.log(getResUmn(1))
    console.log(getResUmn(2))
    console.log(getResUmn(3))
    console.log(getResUmn(4))
    console.log(getResUmn(5))
    console.log(getResUmn(6))
    console.log(getResUmn(7))
    console.log(getResUmn(8))
    console.log(getResUmn(9))
    console.log(getResUmn(10))
}
{
    // Практика 4. Задание 6.Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй.
    //                       В функции использовать только + - * /, оператор % не использовать.
    function getProccent(a: number, b: number) {

        let numD = Math.trunc(a / b)
        // console.log(numD)
        let result = a - b * numD
        // console.log(result)
        if (result)
            return result
        return 'Остатка нет'
    }
    console.log(getProccent(16, 5))
}
{
    // Практика 4. Задание 7.Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.
    function getSumRes(...rest: number[]) {
        let sum = 0
        for (let i = 0; i < arguments.length; i++) {
            sum += rest[i]
        }
        return sum
    }
    console.log(getSumRes(1, 2, 3, 4, 5))
}
{
    // Практика 4. Задание 8. Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.
    function getMaxRes(...rest: number[]) {
        let max = 0
        for (let i = 0; i < arguments.length; i++) {
            if (max < rest[i]) {
                max = rest[i]
            }
        }
        return max
    }
    console.log(getMaxRes(1, 2, 9, 4, 5))
}
{
    // Практика 4. Задание 9.Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).
    //function getChetNo(a:number,b:number,c)
}
{
    // Практика 4. Задание 10.

}
{
    // Домашнее задание 4. Задание 1.
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
    let res = 0
    let min = numUser < numUser2 ? numUser : numUser2
    for (let i = 0; i <= min; i++) {
        if (numUser % i == 0 && numUser2 % i == 0) {
            res = i
            console.log(res)
        }
    }
    console.log(res)

}

{
    // Домашнее задание 3. Задание 3. Запросить у пользователя число и вывести все делители этого числа.
    let numUser = 4454
    let text = ''
    for (let i = 0; i < numUser; i++) {
        if (numUser % i == 0) {
            text += i + '_'
        }
    }
    text += numUser
    console.log(text)
}
{
    // Домашнее задание 3. Задание 4.

}
{
    // Домашнее задание 3. Задание 5.

}
{
    // Домашнее задание 3. Задание 6.

}
{
    // Домашнее задание 3. Задание 7.

}
{
    // Домашнее задание 3. Задание 8.

}
{
    // Домашнее задание 3. Задание 9.

}
{
    // Домашнее задание 3. Задание 10.

}

{// Практика 3. Задание 1.Вывести # столько раз, сколько указал пользователь.
    let numUser77 = 20
    let text = ''
    let i = 0
    for (i = 1; i < numUser77; i++) {
        text += `${i}#` + '_'
    }
    text += `${i}#`
    console.log(text)
}
{
    // Практика 3. Задание 2.Пользователь ввел число, а на экран вывелись все числа от введенного до 0
    let userNum5 = 20
    while (userNum5) {
        userNum5--
        console.log(userNum5 + 1)
    }
    userNum5 = 13
    for (let i = userNum5; i >= 0; --i) {
        console.log(i)

    }
}
{
    // Практика 3. Задание 3.Запросить число и степень. Возвести число в указанную степень и вывести результат.
    let userNum = 13
    let userStp = 6
    let res = 1
    for (let i = 0; i < userStp; i++) {
        res *= userNum
    }
    console.log(res)
}
{
    // Практика 3. Задание 4.Запросить 2 числа и найти все общие делители.
    let numUser1 = 232
    let numUser12 = 544
    let text = '_'
    let min = numUser1 < numUser12 ? numUser1 : numUser12
    let i = 0
    for (i = 1; i <= min; i++) {
        if (numUser1 % i == 0 && numUser12 % i == 0) {
            text += i + '_'
        }
    }
    console.log(text)
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
{
    // // Практика 3. Задание 6.Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.
    // let num = 0
    // do {
    //   let userNum = prompt('Решите пример (2 + 2 * 2)', 'Введите ответ')
    //   num = Number(userNum)
    //   console.log('Не верно')
    // } while (num != 6)
    // console.log(`Верно ответ ${num} `)
}
{
    // Практика 3. Задание 7.Делить число 1000 на 2 до тех пор, пока не получится число меньше 50 Вывести это число и сколько делений произвели.
    let num1 = 1000
    let num2 = 2
    let r = 0

    while (num1 > 50) {
        r++
        num1 /= num2
    }
    console.log(`Число меньше 50 = ${num1}, а делений произвели ${r} раз`)

}
{
    // Практика 3. Задание 8.Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.
    let numUser = 8
    let res = '_'
    for (let i = 1; i <= 100; i++) {
        if (i % numUser == 0) {
            res += i + '_'
        }
    }
    console.log(res)
}
{
    // Практика 3. Задание 9.Вывести каждый 4-й элемент из указанного пользователем диапазона. Пользователь указывает минимальное и максимальное значения диапазона.
    // let numUser1 = 459
    // let numUser2 = 859
    // let i = numUser1 < numUser2 ? numUser1 : numUser2
    // let n = numUser1 < numUser2 ? numUser2 : numUser1
    // for (; i < n; i+4){
    // console.log(i)
    // }
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

// ! ===========================================================================================================================================================================
// ! ===========================================================================================================================================================================

{
    //Class
    class User {
        name: string
        isAdmin: boolean
        isStudent: boolean
        constructor(name: string) {
            this.name = name
            this.isAdmin = true
            this.isStudent = false
        }
        sayHi() {
            return 'Меня зовут: ' + this.name
        }
        sayBya() {
            return 'Пока ' + this.name
        }


    }
    const userA = [
        new User('Jon'),
        new User('Meg')
    ]
    console.log(userA[1].sayHi())
}


{
    let animals = {
        name: 'animal',
        hello() {
            return this + 'hello'
        }
    }
    console.dir('sdjfl')
    console.dir([1, 3, 4])
    console.log('3w ldsf')
    console.log([1, 3, 4])
}

{
    const pmDiv = document.getElementById('pm') as HTMLDivElement
    class PrintMachine {
        tag: string
        fSize: string
        color: string
        fFamily: string
        constructor(fSize: string, color: string, fFamily: string, tag = 'p') {
            this.tag = tag
            this.fSize = fSize
            this.color = color
            this.fFamily = fFamily
        }
        print(text: string) {
            pmDiv.innerHTML = `<${this.tag} style = "font-size:${this.fSize};font-fFamily:${this.fFamily};color: ${this.color}">${text}</${this.tag}>`
        }
    }
    const red = new PrintMachine('5em', 'blue', 'Arial', 'p')
    red.print('Hello Patric')

}


{
    class HtmlElement {
        tag: string
        isSingle: boolean
        text: string
        atributes = [] as any[]
        styles = [] as any[]
        elements = [] as HtmlElement[]
        constructor(tag: string, text = '') {
            const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
            this.tag = tag
            this.text = text
            this.isSingle = singleArr.includes(tag) ? true : false
        }
        setAtribute(name: string, value: string) {
            this.atributes.push({ name, value })
        }
        setStyle(name: string, value: string) {
            this.styles.push(name, value)
        }
        prepend(el: HtmlElement) {
            this.elements.unshift(el)
        }
        append(el: HtmlElement) {
            this.elements.push(el)
        }
        getHtml(): string {
            const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
            const attrCopy = [...this.atributes]
            if (this.styles.length) {
                attrCopy.push({ name: 'style', value: styles })
            }
            if (this.isSingle) {
                if (this.text) {
                    attrCopy.push({ name: 'area-label', value: this.text })
                }
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>`
            } else {
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
            }
        }
    }

    const wrapper = new HtmlElement('div')
    wrapper.setAtribute('id', 'wrapper')
    wrapper.setStyle('display', 'flex')
    const div = new HtmlElement('div')
    div.setStyle('width', '300px')
    div.setStyle('margin', '10px')
    const h3 = new HtmlElement('h3', 'Lorem')
    const img = new HtmlElement('img')
    img.setStyle('width', '100%')
    img.setAtribute('src', 'vite.svg')
    img.setAtribute('alt', 'Lorem')
    const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
    p.setStyle('text-align', 'justify')
    const a = new HtmlElement('a', 'More...')
    a.setAtribute('href', 'https://www.lipsum.com/')
    a.setAtribute('target', '_blank')
    p.append(a)
    div.append(img)
    div.append(p)
    div.prepend(h3)
    wrapper.append(div)
    wrapper.append(div)

    console.log(wrapper)
}


{

    class HtmlElement {
        tag: string
        isSingle: boolean
        text: string
        atributes = [] as any[]
        styles = [] as any[]
        elements = [] as HtmlElement[]
        constructor(tag: string, text = '') {
            const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
            this.tag = tag
            this.text = text
            this.isSingle = singleArr.includes(tag) ? true : false
        }
        setAtribute(name: string, value: string) {
            this.atributes.push({ name, value })
        }
        setStyle(name: string, value: string) {
            this.styles.push({ name, value })
        }
        prepend(el: HtmlElement) {
            this.elements.unshift(el)
        }
        append(el: HtmlElement) {
            this.elements.push(el)
        }
        getHtml(): string {
            const styles = this.styles.map(el => el.name + ':' + el.value).join(';')
            const attrCopy = [...this.atributes]
            if (this.styles.length) {
                attrCopy.push({ name: 'style', value: styles })
            }
            if (this.isSingle) {
                if (this.text) {
                    attrCopy.push({ name: 'area-label', value: this.text })
                }
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>`
            } else {
                const atributes = attrCopy.map(el => el.name + '="' + el.value + '"').join(' ')
                return `<${this.tag} ${atributes}>${this.text}${this.elements.map(el => el.getHtml()).join('\n')}</${this.tag}>`
            }
        }
    }

    const wrapper = new HtmlElement('div')
    wrapper.setAtribute('id', 'wrapper')
    wrapper.setStyle('display', 'flex')
    const div = new HtmlElement('div')
    div.setStyle('width', '300px')
    div.setStyle('margin', '10px')
    const h3 = new HtmlElement('h3', 'Lorem')
    h3.setStyle('text-aligan', 'center')
    const img = new HtmlElement('img')
    img.setStyle('width', '100%')
    img.setAtribute('src', 'vite.svg')
    img.setAtribute('alt', 'Lorem')
    const p = new HtmlElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla assumenda inventore voluptas natus obcaecati mollitia ad eos adipisci delectus quia odit, earum culpa sunt, molestiae doloribus in explicabo! Illo, harum!')
    p.setStyle('text-align', 'justify')
    const a = new HtmlElement('a', 'More...')
    a.setAtribute('href', 'https://www.lipsum.com/')
    a.setAtribute('target', '_blank')
    p.append(a)
    div.append(img)
    div.append(p)
    div.prepend(h3)
    wrapper.append(div)
    wrapper.append(div)

    const heDiv = document.getElementById('he') as HTMLDivElement
    heDiv.innerHTML = wrapper.getHtml()
}
{
    let new1 = new Date()
    console.log(new1)
    console.log(new1.getTime())
    console.log(new1.getDay().toString().padStart(2, '0'))
    console.log(new1.getTimezoneOffset())
    new1.setFullYear(2024)
    new1.setMonth(4)
    new1.setDate(25)
    console.log(new1)
    console.log(Date.parse('1995'))

    const date = new Date(2012, 1, 20, 3, 12)
    console.log(date.toLocaleString())

    function getWeekDay(date: Date) {

        let day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
        let d = date.getDay()
        return day[d]
    }
    let date1 = new Date(2024, 4, 2)
    console.log(getWeekDay(date1))


    function getWeekDayEU(date: Date) {

        let day = [' ', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
        return day[date.getDay() + 1]
    }
    let dateEU = new Date(2024, 4, 2)
    console.log(getWeekDayEU(dateEU))


    let now = new Date()
    function getDateAgo(date: Date, num: number) {
        let date1 = new Date(date.getTime())
        date1.setDate(date1.getDate() - num)
        return date1.toLocaleString()
    }

    console.log(getDateAgo(now, 2))
    console.log(now.toLocaleString())


    function getLastDayOfMonth(year: number, month: number) {
        let date1 = new Date(year, month)
        date1.setDate(date1.getDate() - 1)
        return date1.getDate()
    }
    console.log(getLastDayOfMonth(2024, 1))


    function getSecondsToday() {
        return (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
    }
    console.log(getSecondsToday())


    function getSecondsToTomorrow() {
        return 24 * 3600 - (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds()
    }
    console.log(getSecondsToTomorrow())

    // function formatDate(date: Date) {

    // }



}
{// 07.05.2024.

    // tag: string
    // isSingle: boolean
    // text: string
    // atributes = [] as any[]
    // styles = [] as any[]
    // elements = [] as HtmlElement[]
    // constructor(tag: string, text = '') {
    //     const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    //     this.tag = tag
    //     this.text = text
    //     this.isSingle = singleArr.includes(tag) ? true : false
    // }
    // constructor(tag: string, text = '') {
    //     const singleArr = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    //     this.tag = tag
    //     this.text = text
    //     this.isSingle = singleArr.includes(tag) ? true : false
    // }

    class Car {
        marka: string
        probeg: number
        age: number
        constructor(marka: string, probeg: number, age: number) {
            this.marka = marka
            this.probeg = probeg
            this.age = age
            this.seeCar()
        }
        seeCar() {
            return `Марка:${this.marka}\n Пробег:${this.probeg.toString().padStart(6, '0').padStart(9, '*').padEnd(12, '*')}\n Год:${this.age.toString()}`
        }

    }

    const bmw1 = new Car('BMW', 3452, 2005)

    console.log(bmw1.seeCar())

}
{
    let time = setTimeout(() => console.log('hello'), 3000)
    // let time1 = setInterval(()=> console.log('hello'), 5000)
}
{
    const dateDiv = document.getElementById('date') as HTMLDivElement
    dateDiv.innerHTML = new Date().toLocaleString()

}
{
    let newDate = new Date().toLocaleString()
    console.log(newDate)
    let goot = 4000
    let time1 = setTimeout(() => console.log(newDate), 2000)
    console.log(time1.toLocaleString())
    console.log(time1)

}
{
    class MyObject {
        static #_id = 0
        #id: number
        constructor() {
            this.#id = MyObject.#_id++
        }
        static getCount() {
            return MyObject.#_id
        }
        getId() {
            return this.#id
        }
    }
    const myObject = [
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
    ]
    const myObject1 = [
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
        new MyObject(),
    ]

    console.log(myObject[2].getId())
    console.log(myObject1[3].getId())
    console.log(MyObject.getCount())
    console.log(MyObject)

}
{
    //свойство узлов



}
{
    // Календарь 
    // const pmDiv = document.getElementById('pm') as HTMLDivElement
    // class PrintMachine {
    //     tag: string
    //     fSize: string
    //     color: string
    //     fFamily: string
    //     constructor(fSize: string, color: string, fFamily: string, tag = 'p') {
    //         this.tag = tag
    //         this.fSize = fSize
    //         this.color = color
    //         this.fFamily = fFamily
    //     }
    //     print(text: string) {
    //         pmDiv.innerHTML = `<${this.tag} style = "font-size:${this.fSize};font-fFamily:${this.fFamily};color: ${this.color}">${text}</${this.tag}>`
    //     }
    // }
    // const red = new PrintMachine('5em', 'blue', 'Arial', 'p')
    // red.print('Hello Patric')

    const calend = document.getElementById('calendar') as HTMLUListElement

    // class PrintTeg {
    //     tag: string
    //     constructor(tag = 'ul') {
    //         this.tag = tag
    //     }
    //     print(text: string) {
    //         calend.innerHTML = `<${this.tag}> ${text}</${this.tag}>`
    //     }
    //     apend(text:string){

    //     }
    // }
    // const ulvDiv = new PrintTeg('li')
    // ulvDiv.print('hello')


    calend.insertAdjacentHTML("afterbegin", `<ul class="ul1"> Животные 
     <li>Млекопитающие 
     <ul class="ul2">
     <li>Коровы</li>
     <li>Ослы</li>
     <li>Собаки</li>
     <li>Тигры</li>
     </li> 
     </ul> 
     <li></li> <li>Всем пока!</li> 
     </ul>`)

    // calend.insertAdjacentHTML('append', '<li>Пока</li>')

    let div1 = document.querySelector('#one') as HTMLDivElement
    div1?.insertAdjacentHTML("afterbegin", `<ul>dasfjakgd</ul>`)

    let div2 = document.querySelector('#two')
    // function addUlLi(text)






}
{
    let data = {
        "Рыбы": {
            "форель": {},
            "лосось": {}
        },

        "Деревья": {
            "Огромные": {
                "секвойя": {},
                "дуб": {}
            },
            "Цветковые": {
                "яблоня": {},
                "магнолия": {}
            }
        }
    } as Record<string, any>

    let conteiner = document.querySelector('#conteiner ul') as HTMLUListElement
    function contFree(conteiner: HTMLUListElement, data: Record<string, any>) {
        for (let key in data) {

            if (Object.keys(data[key]).length) {
                const li = document.createElement('li')
                li.innerHTML = `${key}<ul></ul>`
                conteiner.append(li)
                const ul = li.querySelector('ul') as HTMLUListElement
                contFree(ul, data[key])

            } else {
                conteiner.insertAdjacentHTML('beforeend', `<li>${key}</li>`)
            }
        }
    }
    contFree(conteiner, data)
}
{
    const trs = document.querySelectorAll('#table tbody tr') as NodeListOf<HTMLTableRowElement>
}
// {
//     const tbody = document.querySelector('#table tbody') as HTMLTableSectionElement
//     const thead = document.querySelector('#table thead') as HTMLTableSectionElement
//     const tableData = [
//         { name: 'Ann', lastName: '1dfsd', age: 20 },
//         { name: '2Ann', lastName: '2dfsd', age: 18 },
//         { name: 'zAnn', lastName: '3dfsd', age: 21 },
//         { name: 'WAnn', lastName: 'd4fsd', age: 23 },
//     ]

//     function renderTable(tableData: any[], where: HTMLTableSectionElement) {
//         where.innerHTML = ' '
//         for (let el of tableData) {
//             where.innerHTML += `<tr><td>${el.name}</td><td>${el.lastName}</td><td>${el.age}</td></tr>`
//         }
//     }

//     renderTable(tableData, tbody)

//     function sortTable(tableData: any[], where: HTMLTableSectionElement, field: string, order: boolean) {
//         tableData.sort((a, b) => {
//             if (['name', 'lastName'].includes(field)) {
//                 return a[field].localeCompare(b[field])
//             } else {
//                 return a[field] - b[field]
//             }
//         })
//         if (!order) {
//             tableData.reverse()
//         }
//         renderTable(tableData, where)
//     }

//     thead.addEventListener('click', (e) => {
//         const target = e.target as HTMLElement
//         const field = target.dataset.field as string
//         if (target.dataset.sort == 'true') {
//             sortTable(tableData, tbody, field, true)
//             target.dataset.sort = 'false'
//         } else {
//             sortTable(tableData, tbody, field, false)
//             target.dataset.sort = 'true'
//         }
//     })
//     console.log(5 + 4)
// }
{
    const clickkk = document.querySelector('#clllik') as HTMLDivElement
    const start = document.querySelector('#start') as HTMLButtonElement

    // console.log(document.documentElement.clientHeight)
    // start.innerHTML =this.onclick(window.scrollBy({top:500,left:0,behavior:"smooth"}))

    console.log(start.getBoundingClientRect())



    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    )

    start.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    })

    console.log('Полная высота документа с прокручиваемой частью: ' + scrollHeight)
    console.log(5 + 4)
}
{
    const scrollButton = document.querySelector('#scrol')
}

{
    const fieldDataElement = document.querySelector('#filedData') as HTMLDivElement
    const fieldElement = document.querySelector('#field') as HTMLDivElement
    const fieldStyle = getComputedStyle(fieldElement)
    document.addEventListener('scroll', () => {
        const rect = fieldElement.getBoundingClientRect()
        // fieldDataElement.innerHTML= `1. <p> clientX: (${rect.left},${rect.top}), clintY:,pageX:,pageY:</p>`
        // fieldDataElement.innerHTML= `2. <p> clientX: (${rect.right},${rect.bottom}), clintY:,pageX:,pageY:</p>`
        // fieldDataElement.innerHTML= `3. <p> clientX: (${rect.left+rect.right},${rect.top+rect.bottom}), clintY:,pageX:,pageY:</p>`
        // fieldDataElement.innerHTML= `4. <p> clientX: (${rect.left},${rect.top}), clintY:,pageX:,pageY:</p>`
    })
}
{//! 13.06.2024

    // document.addEventListener('click',(e)=>{
    //     console.log(e)
    // })
    // document.addEventListener('keydown',(e)=>{
    //     console.log(e)
    // })
    // document.addEventListener('mousemove', (e) => {
    //     console.log(e)
    // })

    // const buttonRemuv = document.querySelector('remove-button') as HTMLButtonElement
    // // let del = document.querySelectorAll('pane') as HTMLDivElement
    // function pryat() {
    //     // del.addEventListener(screenX,)
    // }
    // buttonRemuv.addEventListener('click', pryat)



}
{
    const myDiv = document.querySelector('#my_div') as HTMLDivElement
}
{
    //     let cknopka = document.querySelector('#container') as HTMLDivElement
    //     let knopka = document.querySelector('.remove-button') as HTMLButtonElement
    //     // const etarget = e.target.closest('#container') as HTMLElement
    //     // if(!etarget){return }
    //     knopka.onclick('clik', (e) => {
    //         if (!e.target)
    // })
}
{//!20.06.2024.

    const conteiner1 = document.querySelector('#container') as HTMLDivElement

    if (conteiner1)
        conteiner1.addEventListener('mousedown', function (e) {

        })
    conteiner1.addEventListener('click', function (event) {
        const target = event.target as HTMLElement
        const el = target.closest('.remove-button')
        if (el) {
            el.parentElement?.remove()
        }
        if (target.tagName == 'H3') {
            target.style.width += '5px'
            const sibling = target!.nextElementSibling as HTMLElement
            sibling.style.color = 'green'
        }
        if (target.tagName == 'P') {
            target.style.color = 'red'
            const sibling1 = target!.previousElementSibling as HTMLElement
            sibling1.style.color = 'green'
        }
    })

}
{
    // document.addEventListener('contextmenu',(e)=>{
    //     e.preventDefault()
    // })

    // document.addEventListener('click',(e)=>{
    // })

    const conten = document.querySelector('#contents') as HTMLElement
    conten.addEventListener('click', (e) => {
        let target = e.target as HTMLElement
        let el = target.closest('a')
        // let elem = new Event('hi')
        if (!el) return
        if (el) {
            const answ = confirm('move to ' + el.href + '?')
            if (!answ) {
                e.preventDefault()
            }
        }
    })


}


{// ! (1) Нужно ограничить увеличение (2) нужно добавить кнопку для сброса

    const load = document.querySelector('#loading') as HTMLDivElement

    const loadClick = document.querySelector('#loadingClick') as HTMLElement
    loadClick.addEventListener('click', () => {
        if (parseFloat(load.style.width) <= 100) {

            load.style.width = parseFloat(load.style.width) + 10 + '%'
        } if (parseFloat(load.style.width) > 100) {
            load.style.width = 100 + '%'
        }
    })
}
{
    function runOnKeys(fn: Function, ...args: string[]) {
        const keys = {} as Record<string, boolean>
        for (let key of args) {
            keys[key] = false
        }
        document.addEventListener('keydown', (e) => {
            if (e.code in keys) {
                keys[e.code] = true
            }
            const vals = Object.values(keys)
            if (vals.every(el => el)) {
                fn()
                for (let key in keys){
                    keys[key] = false
                }
            }
        })
        document.addEventListener('keyup', (e) => {
            if (e.code in keys) {
                keys[e.code] = false
            }
        })
    }
    runOnKeys(() => alert("Привет!"), "KeyQ", "KeyW")
    runOnKeys(() => alert("Bay!"), "KeyQ", "KeyA")
}
{
    // const combinations = [] as any
    // function runOnKeys(fn: Function, ...args: string[]) {
    //     const keys = {} as Record<string, boolean>
    //     for (let key of args) {
    //         keys[key] = false
    //     }
    //     combinations.append({keys,fn})
    //     document.addEventListener('keydown', (e) => {
    //         if (e.code in keys) {
    //             keys[e.code] = true
    //         }
    //         const vals = Object.values(keys)
    //         if (vals.every(el => el)) {
    //             fn()
    //             for (let key in keys){
    //                 keys[key] = false
    //             }
    //         }
    //     })
    //     document.addEventListener('keyup', (e) => {
    //         if (e.code in keys) {
    //             keys[e.code] = false
    //         }
    //     })
    // }
    // runOnKeys(() => alert("Привет!"), "KeyQ", "KeyW")
    // runOnKeys(() => alert("Bay!"), "KeyQ", "KeyA")
}