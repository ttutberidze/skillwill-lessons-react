
// let company = 'Skillwill';
// company = 'Sweeft';

// console.log(company, typeof company);
// const myAge = -30.87;
// console.log(myAge, typeof myAge);
// console.log(true, typeof true);
// console.log(null, typeof null); // object
// console.log(undefined, typeof undefined);

// const ageNumber = 30;
// const ageString = '30';

// console.log(ageNumber == ageString);
// console.log(null == undefined);

// console.log(calculateSum1('4', '5'));
// console.log(calculateSum2(4, 5));

// function calculateSum1(a, b) {
//     return a + b;
// }

// const calculateSum2 = function(a, b) {
//     return a + b;
// }

if(true) {
    function func() {
        console.log('func')
    }
    
    const age = 5
    console.log(age);
}

func()

let company = 'Skillwill';

function changeCompany(myCompany) {
    
    if(true) {
        function func2() {
            console.log('func')
        }
    }
    func2();
    company = 'Sweeft2'
    myCompany = 'Sweeft';
    console.log('changeCompany', myCompany);
}

1
changeCompany(company);
console.log(company);