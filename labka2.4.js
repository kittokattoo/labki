const fn = () => {
    const person = {name: 'aboba'};
    let person2 = {name: 'абрязября'};
    person.name = 'invoker';
    person2.name = 'Kartoshka';
    person2 = {name: 'katya'};
    return {person, person2};
};
console.log(fn());
const createUser = (name, city) => ({name, city});
console.log(createUser('Kamyshek', ' Kiev'));