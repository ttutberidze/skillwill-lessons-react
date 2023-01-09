const user = {
    username: '007',
    age: 30,
    sayHello: function() {
        console.log('Hello');
    },
    address: {
        city: 'Tbilisi',
        country: 'Georgia'
    },
}

const newUser = user;
console.log(user['username'], user['address']['city'], user.address.country);

const company = {
    name: 'Skillwill'
};

function changeCompany(company) {
    company.name = 'Sweeft';
}

changeCompany(company)
console.log(company.name);

console.log(typeof [1, 2, 3]);

const arr = [1, 'Skillwill', {name: 'James Bond'}];
const newArr = arr;
newArr[1] = 'Sweeft';
console.log(arr);

for(const mars of arr) {
    console.log(mars);
}

const user2 = {
    name: 'James',
    age: 30,
    title: 'MR'
}

for(const field in user2) {
    console.log(`${field}: ${user2[field]}`);
    console.log(field + ': ' + user2[field]);
}

function generateRandomNumber() {
    return parseInt(Math.random() * 10) + 1;
}

let randomNumber;
// while(randomNumber !== 7) {
//     randomNumber = generateRandomNumber();
//     console.log(randomNumber);
// }

do {
    randomNumber = generateRandomNumber()
    console.log(randomNumber);
} while(randomNumber !== 7)

const calculator = function (a, b, operation) {
    const allowedOperations = ['+', '-', '*', '/'];
    // if(!allowedOperations.find(function(op) {
    //     return op === operation
    // })) {
    //     return false;
    // }
    if(!allowedOperations.includes(operation)) {
        return false;
    }
    switch(operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
    }
}