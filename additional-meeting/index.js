// const a = 5;
// const user = {
//     name: 'Temo',
//     age: {}
// }

// user.username = '007';

// function sum(a, b) {
//     return a - b
// }
// console.log(sum(3, '4'));
// sum('James', 'Bond');
// console.log(user.age);

const user = {
    banks: [
        {address: {city: 'Tbilisi'}},
        {address: {city: 'Batumi'}},
        {address: {city: 'Paris'}},
    ]
}

console.log(user.banks[2].address.city)
const getCity = ({banks: [, { address: {city} }]}) => {
    return city;
}
console.log(getCity(user));

function func(...rest) {
    console.log([...arguments].forEach((value, index) => {

    }), rest);
}
func(1, 2);

const product = [4, 2, 3].reduce((product, num) => {
    console.log(product);
    return product * num;
}, 1);
console.log(product);