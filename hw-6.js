const fitstArray = [1, 5, 4, 10, 0, 3];
for (const value of fitstArray) {
    if (Number(value) != 10) {
        console.log(value)
    } else {
        console.log(value)
        break
    }
};

console.log(`Индекс числа 4 - ${fitstArray.indexOf(4)}`);

const secondArray = [1, 3, 5, 10, 20];
console.log(secondArray.join(" "));

const thirdArray = [];
console.log(thirdArray.push([1, 1, 1]));
console.log(thirdArray.push([1, 1, 1]));
console.log(thirdArray.push([1, 1, 1]));
console.log(thirdArray);

const fourthArray = [1, 1, 1];
fourthArray.push(2,2,2);
console.log(fourthArray);

const fifthArray = [9, 8, 7, 'a', 6, 5];
fifthArray.sort();
fifthArray.pop('a');
console.log(fifthArray);

const sixthArray = [9, 8, 7, 6, 5];
let userDigit = Number(prompt('Введите число'));
let result = sixthArray.find(element => element === userDigit);

if (result === undefined) {
    alert('Не угадал')
    console.log(result)
} else {
    alert('Угадал')
    console.log(result)
};

let firstLine = 'abcdef';
const sevenArray = firstLine.split('').reverse();
firstLine = sevenArray.join('');
console.log(firstLine);

const eighthArray = [[1, 2, 3,],[4, 5, 6]];
const nineArray = eighthArray[0].concat(eighthArray[1])
console.log(nineArray)

const tenthArray = [1, 2, 4, 5, 7, 8, 10]
let i = 0;
tenthArray.forEach((el) => {
    i++
    if (tenthArray.length > i) {
        console.log(el + tenthArray[i])
    }
});

const eleventhArray = [1, 2, 3, 4, 5]
const squareArray = eleventhArray.map(el => el ** 2)
console.log(squareArray)

function getLengthWords(anyArray) {
    const newArray = []
    for (const el of anyArray) {
        let objArray = el.length
        newArray.push(objArray)
    }
    return newArray
}
const twelvethArray = ['слово', '', 'слог', 'длинное предложение', 'буква']
console.log(getLengthWords(twelvethArray))

function filterPositive(array) {
    const filterArray = array.filter(el => Number(el) < 0)
    return filterArray
  
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

const thirteenthArray = []
for (let index = 0; index < 10; index++) {
    thirteenthArray.push(Math.floor(Math.random(1, 10) * 10 + 1))
}

const honestArray = thirteenthArray.filter(el => el % 2 === 0)

console.log(thirteenthArray)
console.log(honestArray)


const fourteenthArray = []
for (let index = 0; index < 6; index++) {
    fourteenthArray.push(Math.floor(Math.random(1, 10) * 10 + 1))
}

let arithmeticMean = (fourteenthArray.reduce((total, number) => total + number, 0)) / fourteenthArray.length
console.log(fourteenthArray)
console.log(arithmeticMean)
