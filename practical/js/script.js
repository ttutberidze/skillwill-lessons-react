
const calculatePercentage = (data) => {
    let sum = 0;
    for(const num of data) {
        sum += num;
        // sum = sum + num;
    }
    return data.map(num => ((num / sum) * 100).toFixed(2));
}

// console.log(calculatePercentage([30, 40, 50, 100]));
// console.log((0.2 + 0.1).toFixed(2));

const combineArrays = ([left, right], b) => {
    // const resultArray = [];
    // resultArray.push(left);
    // for(const num of b) {
    //     resultArray.push(num);
    // }
    // resultArray.push(right);
    // return resultArray;
    return [left, ...b, right];
}

// console.log(combineArrays([1, 5], [2, 3, 4]));

const capitalizeWord = (words) => {
    // const result = [];
    // for(const word of words) {
    //     const capitalizedWords = [];
    //     const wordAsArray = word.split('_');
    //     for(const w of wordAsArray) {
    //         capitalizedWords.push(w[0].toUpperCase() + w.slice(1));
    //     }
    //     result.push(capitalizedWords.join(' '));
    // }
    // return result;

    return words
        .map((word) => word
                        .split('_')
                        .map((w) => w[0].toUpperCase() + w.slice(1))
                        .join(' ')
        )
}

// console.log(capitalizeWord(['hello_world', 'james_bond', 'world_cup_2022']))

const person = {
    name: 'Temo',
    address: {
        georgia: {
            tbilisi: {
                pekini: 'Temos address'
            }
        }
    },
    addresses: [
        {georgia: {tbilisi: 'Tbilisi Address'}},
        {georgia: {tbilisi: 'Tbilisi2 Address'}},
    ],
    sayHello: function() {
        return this.name;
    }
}

const deepCloneOld = (obj) => {
    const result = {};
    for(const fieldName in obj) {
        if(typeof obj[fieldName] === 'object') {
            if(Array.isArray(obj[fieldName])) {
                // Array logic
                result[fieldName] = obj[fieldName].map(fieldObj => deepClone(fieldObj))
            } else {
                // Object Logic
                result[fieldName] = deepClone(obj[fieldName]);
            }
        } else {
            result[fieldName] = obj[fieldName];
        }
    }
    return result;
}

const deepClone = obj => {
    const result = {};
    for(const fieldName in obj) {
        if(typeof obj[fieldName] === 'object') {
            if(Array.isArray(obj[fieldName])) {
                // Array logic
                result[fieldName] = obj[fieldName].map(fieldObj => deepClone(fieldObj))
            } else {
                // Object Logic
                result[fieldName] = deepClone(obj[fieldName]);
            }
        } else {
            result[fieldName] = obj[fieldName];
        }
    }
    return result;
  };

// const person2 = deepClone(person);
// person2.name = 'Lasha';
// person2.address.georgia.tbilisi.pekini = 'Lashas Address';
// person2.addresses[0].georgia.tbilisi = 'new Value';
// console.log(person.sayHello(), person2.sayHello());

const person2 = JSON.parse(JSON.stringify(person));
console.log(person, person2);