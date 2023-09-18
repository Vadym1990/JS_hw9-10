let test = [
    {
        qst: 'Capital of Ukraine - Kyiv',
        ans: true,
        points: 4
    },
    {
        qst: 'Capital of Great Britain - Mykolaiv',
        ans: false,
        points: 2
    },
    {
        qst: 'Capital of Germany - Odessa',
        ans: false,
        points: 9
    },
    {
        qst: 'Capital of Italy - Rome',
        ans: true,
        points: 3
    },
    {
        qst: 'Capital of USA - Washington',
        ans: true,
        points: 6
    }
];

let totalPoints = 0;
let totalCurPoints = 0;
let totalQst = 0;

for (let i = 0; i < test.length; i++) {
    totalPoints = totalPoints + test[i].points;
    totalQst++;
}

for (let i = 0; i < test.length; i++) {

    let count = i + 1;

    let userQst = confirm(`Question ${count} of ${totalQst}: (Points for question: ${test[i].points})` + '\n' + '\n' +
        test[i].qst + '\n' +
        'Press "OK" if true and "Отмена" or "Esc" if false' + '\n' + '\n' +
        `Total points: ${totalCurPoints} of ${totalPoints}`);

    if (userQst === test[i].ans) {
        totalCurPoints = totalCurPoints + test[i].points;
    }
}
// Перевод в 12-бальную систему

let point12 = totalCurPoints / (totalPoints / 12);
point12 = Math.round(point12);

alert(
    `Your total points is: ${totalCurPoints} of ${totalPoints}` + '\n' +
    `On 12-point system: ${point12}`
);




