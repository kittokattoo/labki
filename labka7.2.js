const removeElements = (array, ...items) => {
  const toRemove = new Set(items);
  for (let i = array.length - 1; i >= 0; i--) {
    if (toRemove.has(array[i])) array.splice(i, 1);
  }
};
const nums = [1, 2, 3, 4, 5, 6, 7];
removeElements(nums, 5, 1, 6);
console.log(nums);
const cities = ['Kiev', 'Beijing', 'Lima', 'New York'];
removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities); 