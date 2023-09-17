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
    }
];

let totalPoints = 0;
let totalCurPoints = 0;

for (let i = 0; i < test.length; i++) {
    totalPoints = totalPoints + test[i].points
}

for (let i = 0; i < test.length; i++) {

    let count = i + 1;
    let totalQst = 4;

    let userQst = confirm(`Question ${count} of ${totalQst}:` + '\n' + '\n' + test[i].qst + '\n' +
        'Press "OK" if true and "Отмена" or "Esc" if false' + '\n' + '\n' +
        `Total points: ${totalCurPoints} of ${totalPoints}`);

    if (userQst === test[i].ans) {
        totalCurPoints = totalCurPoints + test[i].points;
    }
}

alert(`Your total points is: ${totalCurPoints}`)
