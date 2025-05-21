let firstStr = 'js';
firstStr = firstStr.toUpperCase()
console.log(firstStr)



let firstFunc = (firstArray, secondStr) => {const newArray = []; firstArray.forEach(element => {
    if (element.toLowerCase().startsWith(secondStr.toLowerCase())) {
        newArray.push(element)
    }});
return newArray}

console.log(firstFunc(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'))
console.log(firstFunc(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'))
console.log(firstFunc(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'))


let firstDigit = 32.58884
console.log(Math.floor(firstDigit))
console.log(Math.ceil(firstDigit))
console.log(Math.round(firstDigit))

console.log(Math.min(52, 53, 49, 77, 21, 32), (Math.max(52, 53, 49, 77, 21, 32)))
console.log(Math.ceil(Math.random() * 10))

let getRandomArrNumbers = Number => {
    i = 0;
    const numbersArray = []
    while (i < Math.floor(Number / 2)) {
        numbersArray.push(Math.floor(Math.random() * Number + 1))
        i++
    };
    return numbersArray
}

console.log(`Для первого диапазона случайного числа - ${getRandomArrNumbers(7)}`)
console.log(`Для второго диапазона случайного числа - ${getRandomArrNumbers(12)}`)

let getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)+ min);
}

console.log(getRandomInt(2,9))

let nowDate = new Date()
console.log(nowDate)

let currentDate = Date.now();

let dateSeventyThree = 73 * 24 * 60 * 60 * 1000;
let searchDate = currentDate + dateSeventyThree;
let dateFuture = new Date(searchDate)

console.log(dateFuture)

let myDate = newDate => {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];  
    let fullDate = "Дата: " + newDate.getDate() + 
    " " + months[newDate.getMonth()] +
    " " + newDate.getFullYear() + 
    " - это " + days[newDate.getDay()];
    
    let fullTime ="Время: " + newDate.getHours() + ":" +
    newDate.getMinutes() + ":" +
    newDate.getSeconds();
    return `${fullDate} \n${fullTime}`
}
let newDate = new Date(2025, 1, 12, 23, 15, 20)
console.log(myDate(newDate))

const wordsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}








// rememberWords(firstQuestion, secondQuestion)

function rememberWords() {
    shuffle(wordsArray)
    alert(wordsArray)
    let firstQuestion = prompt("Чему равнялся первый элемент массива?")
    let secondQuestion = prompt("Чему равнялся последний элемент массива?") 
    let examinationWords = (firstQuestion, secondQuestion) => {
    if (wordsArray[0].toLowerCase() === firstQuestion.toLowerCase().trim() && wordsArray[wordsArray.length - 1].toLowerCase() === secondQuestion.toLowerCase().trim()) {
        return "Мои поздравления, все угадано верно!"
    } else if (wordsArray[0].toLowerCase() === firstQuestion.toLowerCase().trim() || wordsArray[wordsArray.length - 1].toLowerCase() === secondQuestion.toLowerCase().trim()){
        return "Вы были близки к победе!"
    }else {
        return "Вы ответили неверно!"
    }}
    result = examinationWords(firstQuestion, secondQuestion)
    alert(result)
}