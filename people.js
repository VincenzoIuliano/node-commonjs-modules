const createName = require('./names.js')
const createHobbies  = require('./hobbies.js')

function getPerson () {
    // const { hobbies } = createHobbies  ('Lego','Star wars')
    const person = {
        ...createName ('Luca','Abete'),
        ...createHobbies ('Lego','Star Wars','Naruto'),
    }

    return person
}

console.log(getPerson());
