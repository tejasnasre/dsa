function containsDuplicate(arr) {
  let uniqueSet = new Set();

  for (let num of arr) {
    if (uniqueSet.has(num)) return true;
    uniqueSet.add(num);
  }
  return false;
}

const test1 = containsDuplicate([1, 2, 3, 1]);
const test2 = containsDuplicate([1, 23, 4, 5]);
const test3 = containsDuplicate([
  1, 2, 3, 4, 5, 6, 7, 8, 4, 3, 4, 5, 7, 23, 4, 5,
]);

console.log(test1);
console.log(test2);
console.log(test3);

// the complexity is o(n)
