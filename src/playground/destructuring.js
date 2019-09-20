// const person = {
//     name: 'Pablo',
//     age: 21,
//     location: {
//         city: 'Caracas',
//         temp: 90
//     }
// };

// const { name: firsName = 'Anonymous', age} = person;

// const { city, temp: temperature } = person.location;

// console.log(`${firsName} is ${age}`);

// if(temperature && city) {
//     console.log(`Is ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Harry Pother',
//     author: 'J.K Rolling',
//     publisher: {
//         name: 'YouNow'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['Venezuela', 'Distrito capital', 'Caracas', '1213'];

const [, , city = 'New Your'] = address;

console.log(`You are in  ${city}`);


