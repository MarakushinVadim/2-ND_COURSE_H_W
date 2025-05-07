// let minimal = (a, b) => {return a > b ? b : a;}

// console.log(minimal(8, 8))

// let oddNumber = a => {return a % 2 == 0 ? 'Число четное' : 'Число нечетное';}

// console.log(oddNumber(11))

// let squareConsole = a => console.log(a ** 2);

// squareConsole(3)

// let squareNumber = a => a ** 2; 

// console.log(`Результат выполнения функции oddNumber - ${squareNumber(7)}`)

// let greetingsUser = (age = prompt('Сколько тебе лет?')) => {if (age <= 12 && age >= 0) {
//     alert('Привет, друг!')
// } else if (age <= 150 && age >= 13){
//     alert('Добро пожаловать!')
// } else{
//     alert('Вы ввели неправильное значение')
// }}

// // greetingsUser()

// let numberNan = (a, b) => { if (isNaN(a) || isNaN(b)) {
//     return 'Одно или оба значения не являются числом'
// } else {
//     return a * b
// }}

// console.log(numberNan(5, 5))

// let userNumber = (n = prompt('Введите число')) => {return isNaN(n) ? 'Переданный параметр не является числом' : `n в кубе равняется ${n **3}`;}
// console.log(userNumber())

// let circle1 = {
//     radius: 112,
//     getArea() {
//         console.log(`площадь круга = ${3.14 * (this.radius ** 2)}`);
//     },
//     getPerimeter() {
//         console.log(`периметр окружности = ${2 * this.radius * 3.14}`);
//     }
// }

// let circle2 = {
//     radius: 72,
//     getArea() {
//         console.log(`площадь круга = ${3.14 * (this.radius ** 2)}`);
//     },
//     getPerimeter() {
//         console.log(`периметр окружности = ${2 * this.radius * 3.14}`);
//     }

// }

// circle1.getArea();
// circle1.getPerimeter();
// circle2.getArea();
// circle2.getPerimeter();


let fourSeasons = (digit = Number(prompt("Введите числовое значение от 1 до 12"))) => {if (digit === 1 || digit === 2 || digit === 12) {
    return console.log("Введенное время года - Зима")
} else if (digit >= 3 && digit <= 5){
    return console.log("Введенное время года - Весна")
} else if (digit >= 6 && digit <= 8) {
    return console.log("Введенное время года - Лето")
} else if (digit >= 9 && digit <= 11) {
    return console.log("Введенное время года - Осень")
} else {
    return console.log("Введите числовое значение от 1 до 12")
}}

