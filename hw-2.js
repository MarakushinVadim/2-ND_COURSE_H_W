let a = 10;
alert(a);
a = 20;
alert(a)

const dataIphone = 2007;
alert(`год выпуска первого iPhone - ${dataIphone}`)

const nameCreator = 'Brendan Eich';
alert(`имя создателя языка JavaScript -  ${nameCreator}`)

let digitOne = 10;
let digitTwo = 2;
alert(`сумма - ${digitOne + digitTwo}, разность - ${digitOne - digitTwo}, произведение - ${digitOne * digitTwo}, частное - ${digitOne / digitTwo} `)

let result = 2 ** 5;
alert(`2 в 5-ой степени = ${result}`)

a = 9;
let b = 2;
result = a % b;
alert(`остаток от деления = ${result}`)

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

let age = null;
age = Number(prompt("Сколько вам лет?"));
alert(`Вам ${age} лет`)

let user = {
    name: 'Вадим',
    age: 29,
    isAdmin: true
};
console.log(user["city of residence"] = 'Белореченск');
console.log(user.age = 30);
console.log(delete user["city of residence"]);
let info = '';
console.log(info = prompt("Какую информацию хотите узнать о пользователе?"));
console.log(alert(user[`${info}`]));

user.name = prompt('Как вас зовут?');
alert(`Привет, ${user.name}!`);