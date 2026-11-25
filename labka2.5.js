const contacts = [
    {name: 'Kamyshek', phone: '+38067676767'},
    {name: 'Jane', phone: '+38011111111'},
    {name: 'Invoker', phone: '+38023232323'},
    {name: 'абрязября', phone: '+3805265362536'},
]
const findPhoneByName = name =>{
    for(const obj of contacts) {
        if(obj.name === name){
            return obj.phone;
        }
    }
};
console.log('Phone:', findPhoneByName('абрязября'));
    const phoneBook = {
    Lina: '+3806837642',
    Doom: '+3809298736',
    Macan: '+3802387648',
}
const findPhoneByNameInHash = name => phoneBook[name];
console.log('Phone:', findPhoneByNameInHash('Lina'));