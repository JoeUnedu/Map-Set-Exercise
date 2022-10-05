//Quick Question #1

//What does the following code return? Set(4) { 1, 2, 3, 4 }

new Set([1, 1, 2, 2, 3, 4]);

//Quick Question #2
//What does the following code return?  ref

[...new Set("referee")].join("");

//Quick Questions #3
//What does the Map m look like after running the following code?
// Map(2) { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);

//hasDuplicate
//Write a function called hasDuplicate which accepts an array and
//returns true or false if that array contains a duplicate

//hasDuplicate([1, 3, 2, 1]); // true
//hasDuplicate([1, 5, -1, 4]); // false

function hasDuplicate(arr) {
  let set = new Set(arr);
  if (set.size !== set.length) {
    return true;
  }
  return false;
}

let hasDuplicateHolder = hasDuplicate([1, 3, 2, 1]);
console.log(hasDuplicateHolder);
//vowelCount
//Write a function called vowelCount which accepts a string and
//returns a map where the keys are numbers and
//the values are the count of the vowels in the string.

function vowelCount(str) {
  let newStr = str.toLowerCase();
  let map = new Map();

  newStr.split("").forEach((e) => {
    if ("aeiou".indexOf(e) !== -1) {
      if (map.has(e)) {
        map.set(e, map.get(e) + 1);
      } else map.set(e, 1);
    }
  });
  for (let [key, value] of map.entries()) {
    if (key !== -1) {
      key = value;
    }
  }
  return map;
}

let vowelCountHolder = vowelCount("awesome");
console.log(vowelCountHolder);
//vowelCount("awesome"); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
//vowelCount("Colt"); // Map { 'o' => 1 }
