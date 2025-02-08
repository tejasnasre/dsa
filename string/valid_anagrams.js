function validAnagrams(s, t) {
  if (s.length !== t.length) return false;

  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  return sortedS === sortedT;
}

let test1 = validAnagrams("anagram", "nagaram");
let test2 = validAnagrams("rat", "car");

console.log(test1);
console.log(test2);

// time complexity is o(n)
