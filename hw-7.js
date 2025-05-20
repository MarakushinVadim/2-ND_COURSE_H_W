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