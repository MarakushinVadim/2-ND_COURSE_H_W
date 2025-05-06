let i = 0;

while (i < 2) {
    console.log("Привет");
    i++
}

let z = 1;

while (z < 6) {
    console.log(z);
    z++
}

let x = 7;

while (x < 23) {
    console.log(x);
    x++
}

const firstOBJ = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (let key in firstOBJ) {
    console.log(`${key} - зарплата ${firstOBJ[key]} долларов.`)
}

let n = 1000;
let num = 0;
while (n > 50) {
    num++
    n /= 2
}

console.log(n)
console.log(num)

let firstFriday = 2;


for (let currentDay = 1; currentDay <= 31; currentDay++) {
    if (Number(currentDay) === Number(firstFriday) || (Number(currentDay) - Number(firstFriday)) % 7 === 0) {
        console.log(`Сегодня пятница, ${currentDay}-е число. Необходимо подготовить отчет.`)
    }
};
