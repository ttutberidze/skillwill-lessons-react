
const user = {
    fullName: 'James Bond',
    address: {
        city: 'Berlin'
    }
}

const { fullName: customFullName, address: { city = 'Paris' } = { city: 'Tbilisi' } } = user;
console.log(customFullName, city);

const calculateSum = (num1, ...numbers) => {
    let total = 0;
    for(const num of numbers) {
        total += num;
    }
    return total;
}

console.log(calculateSum(1, 2, 3, 4, 5));

let user1 = {
    fullName: 'Temo',
    age: 30
}

const user2 = {
    fullName: 'Lasha',
    username: '007'
}

const user3 = {
    ...user2,
    ...user1
}

user1 = {
    age: 35,
    ...user1
}

console.log(user1);


const sayHello = function() {
    console.log('sayHello', this);
    return this.name;
}

const person1 = {
    name: 'Temo',
    sayHello: sayHello
}

const person2 = {
    name: 'Lasha',
    sayHello: sayHello
}

console.log(person1.sayHello(), person2.sayHello());

const onClick = function() {
    console.log('onClick', this);
}

document.getElementById('btn').addEventListener('click', onClick);