//1

const isDog = true;
console.log(isDog == true ? 'pat, pat': 'find me a dog to pat!');

//2

const speedLimit = 50, yourSpeed = 75;
if (speedLimit > yourSpeed) {
    console.log('You are driving below the speed limit, Oma')
} else {
    console.log('You are going too fast!')
};

// console.log(speedLimit < yourSpeed ? "you're going too fast!" : "You're driving below the speed limit, Oma");

//3

const age = 27;
if (age < 16) {
    console.log('Serve butter beer')
} else {
    console.log('Serve beer')
};


// age > 16? console.log("serve beer"): console.log("serve butter beer");

//4

const isStudent = true;
if (isStudent === true) {
    console.log('Ticket costs €5,00')
} else {
    console.log('Ticket costs €12,00')
};

// console.log(isStudent == true? "Ticket costs €5,00": "Ticket costs €12,00")

//5

const okMarie = 'cake';
if (okMarie === 'cake') {
    console.log('Let them eat cake')
} else {
    console.log('Oh, bother')
};

okMarie == "cake"? console.log("Let them eat cake") : console.log("Oh, bother");

//6

const num1 = 30, num2 = 939, num3 = 40.9;
if (30 % 2 === 0) {
    console.log('30 is even')
} else {
    console.log('31 is odd')
}

if (939 % 2 === 0) {
    console.log('939 is even')
} else {
    console.log('939 is odd')
}

if (40.9 % 2 === 0) {
    console.log('40.9 is even')
} else {
    console.log('40.9 is odd')
}

// let num1 = 30;
// console.log((num1 % 2 === 0) ? `${num1} is even` : `${num1} is odd`);

// let num2 = 939;
// console.log((num2 % 2 === 0) ? `${num2} is even` : `${num2} is odd`);

// let num3 = 40.9;
// console.log((num3 % 2 === 0) ? `${num3} is even` : `${num3} is odd`);