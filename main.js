const people = [
    { name: 'Paul', year: 2 },
    { name: 'George', year: 2 },
    { name: 'Lucas', year: 2 },
    { name: 'Marco', year: 2 },
    { name: 'Peter', year: 2 },
    { name: 'Carl', year: 2 },
    { name: 'Simon', year: 2 },
    { name: 'Mark', year: 2 },
    { name: 'Sandra', year: 2 },
    { name: 'Alice', year: 2 }
];

// returns a random number betweem min and max
// for example, getRandomNumber(1, 3) will return either 1, 2 or 3, randomly.
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

class Student extends Person {
    constructor(name, year) {
        super(name);
        this._year = year;
        this._grade = 0;
    }

    get year() {
        return this._year;
    }

    get grade() {
        return this._grade;
    }

    set year(newYear) {
        this._year = newYear;
    }

    set grade(newGrade) {
        this._grade = newGrade;
    }
}

const students = people.map(person => new Student(person.name, person.year));

//console.log(students);

class Academy {
    static exam(students){
        students.forEach((student) => {
            let newGrade = getRandomNumber(1,10);
            student.grade = newGrade;
        })
    }

    static graduate(students){
        return students.filter(student => student.grade >= 6);
    }

    static studentLevels(students){
        return students.map((student) => {
            if (student.grade < 5) {
                console.log("Failed");
            } else if (student.grade < 7) {
                console.log("Average");
            } else if (student.grade < 8) {
                console.log("Above Average");
            } else {
                console.log("Great");
            }
        })
    }

    static studentInfo(students) {
        return students.map((student) => {
            return `${student.name} of ${student.year}, has a grade of ${student.grade}`;
        })
    }

    static printStudents(students, callbackFc) {
        for(let student of students);
        callbackFc(student);
    }

    static averageGrade(students) {
        return new Promise((resolve, reject) => {
            if (students.length < 3) {
                reject("Too few students!")
            }

            setTimeout(() => {
                let sum = students.reduce((total, currentGrade) => total + currentGrade);
                let average = sum / students.length;
                resolve(average);
            }, 2000);
        })
    }
}

function callbackFunction1(student) {
    console.log(student);
}

let jsonS = JSON.stringify(students);
console.log(jsonS);
let regular = JSON.parse(jsonS);
console.log(regular);

let graduated = Academy.graduate(students);
console.log(graduated);

let levelled = Academy.studentLevels(students);
console.log(levelled);

let information = Academy.studentInfo(students);
console.log(information);

Academy.averageGrade(students) 
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });



