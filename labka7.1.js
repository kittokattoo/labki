const removeElement = (array, item) => {
  const index = array.indexOf(item);
  if (index !== -1) array.splice(index, 1);
};
const cities = ['Kiev', 'Beijing', 'Lima', 'New York'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin'); // нічого не робить
console.log(cities);