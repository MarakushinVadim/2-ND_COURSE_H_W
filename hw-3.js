let password = 'пароль';

let user = {
    password: ''
};
let msg;

console.log(user.password = String(prompt("Введите пароль")))

msg = user.password === password ? alert("Пароль введен верно") : alert("Пароль введен неправильно");

let c = Number(0);

console.log(msg = c > 0 && c < 10 ? alert("Верно") : alert("Неверно"));
console.log(c = Number(10));
console.log(msg = c > 0 && c < 10 ? alert("Верно") : alert("Неверно"));
console.log(c = Number(-3));
console.log(msg = c > 0 && c < 10 ? alert("Верно") : alert("Неверно"));
console.log(c = Number(2));
console.log(msg = c > 0 && c < 10 ? alert("Верно") : alert("Неверно"));

let d;
let e;

console.log(d = Number(132));
console.log(e = Number(78));

console.log(msg = d > 100 || e > 100 ? alert("Верно") : alert("Неверно"));


let a = '2';
let b = '3';

console.log(alert(Number(a) + Number(b)));