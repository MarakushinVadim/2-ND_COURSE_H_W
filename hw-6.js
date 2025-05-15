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
}
