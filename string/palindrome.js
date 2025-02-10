function isPalindrome(num) {
  return num.toString() === num.toString().split("").reverse().join("");
}

let test1 = isPalindrome(121);
let test2 = isPalindrome(-121);
let test3 = isPalindrome(10);

console.log(test1);
console.log(test2);
console.log(test3);
