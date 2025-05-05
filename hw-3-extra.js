let userNumber = prompt('Пожалуйста, введите любое число');

let userNumberCheck = Number(userNumber);

if (Number(userNumber)) {
    console.log("Введено числовое значение")
    if (Number(userNumber) % 2 != 0) {
        console.log(alert('Число нечетное'))
    } else {
        console.log(alert('Число четное'))
    }
}  else {
    console.log("Введено не числовое значение")
}

let clientOS;

let currentOS = navigator.platform;


if (currentOS == 'Android') {
    console.log(clientOS = 1)
    aleret('Установите версию приложения для Android по ссылке')
}  else if (currentOS == 'iOS') {
    console.log(clientOS = 0)
    alert('Установите версию приложения для iOS по ссылке')
}  else {
    console.log('Вы зашли не с телефона')
}
    
console.log(navigator)