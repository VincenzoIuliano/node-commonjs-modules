function createHobbies (hobbyOne, hobbyTwo, hobbyThree) {
    return { 
        'hobbies' : [hobbyOne, hobbyTwo, hobbyThree]
    }
}

console.log(createHobbies('Lego','Naruto','Fifa'));


module.exports = createHobbies


// function createHobbies (...params) {
//     return { 
//         'hobbies' : [...params]
//     }
// }

// console.log(createHobbies('Lego','Naruto'));

// con ...params non do restrizioni al numero dei parametri che ricevo 