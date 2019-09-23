import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId:process.env.FIREBASE_APP_ID
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}

// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childsnapshot) => {
//         expenses.push({
//             id: childsnapshot.key,
//             ...childsnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses').once('value').then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childsnapshot) => {
//         expenses.push({
//             id: childsnapshot.key,
//             ...childsnapshot.val()
//         });
//     });
//     console.log(expenses);
// });



// database.ref('expenses').push({
//     description: 'Coffe',
//     amount: 2999,
//     createAt: 31231
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 4449,
//     createAt: 53231
// })
// database.ref('expenses').push({
//     description: 'Milk',
//     amount: 9999,
//     createAt: 88231
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job} in ${val.location.city}`);
// })

// setTimeout(() => {
//     database.ref('name').set('Pablo')
// }, 3000);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) =>{ 
//     console.log('Error on value',e);
// });

// setTimeout(() => {
//     database.ref('age').set(20)
// }, 3000);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(23)
// }, 10000);



// database.ref('location').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val); 
// }).catch((e) => {
//     console.log('Error',e);
// })

// database.ref().set({
//     name:'Pablo',
//     age: 21,
//     job: 'Software developer',
//     location: {
//         city: 'Caracas',
//         country:'Vnzl'
//     }
// }).then(() => {
//     console.log('Data seved');   
// }).catch((e) => {
//     console.log('Something Wrong :', e); 
// });

// database.ref().update({
//     name:'Moises',
//     job: 'Manager',
//     'location/city': 'guarenas'
// }).then(() => {
//     console.log('Data seved');   
// }).catch((e) => {
//     console.log('Something Wrong :', e); 
// });

// database.ref().remove().then(() => {
//     console.log('Remove Succeded');
// }).catch((e) => {
//     console.log('Remove Error', e);
    
// })