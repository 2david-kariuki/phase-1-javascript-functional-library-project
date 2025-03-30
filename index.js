// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i], i, collection));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  let accumulator = acc;
  let startIndex = 0;

  if (acc === undefined) {
    accumulator = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    accumulator = callback(accumulator, values[i], collection);
  }
  return accumulator;
}

function myFind(collection, predicate) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const values = Array.isArray(collection)
    ? collection
    : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      result.push(values[i]);
    }
  }
  return result;
}

function mySize(collection) {
  return Array.isArray(collection)
    ? collection.length
    : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  }
  return array.slice(0, n);
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

// Object Functions

function myKeys(object) {
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result;
}

function myValues(object) {
  const result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push(object[key]);
    }
  }
  return result;
}

// Test examples
console.log(myEach([1, 2, 3], console.log)); // logs 1, 2, 3, returns [1, 2, 3]
console.log(myMap([1, 2, 3], (num) => num * 3)); // [3, 6, 9]
console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 10)); // 16
console.log(myFind([1, 2, 3, 4], (num) => num % 2 === 0)); // 2
console.log(myFilter([1, 2, 3, 4], (num) => num % 2 === 0)); // [2, 4]
console.log(mySize({ one: 1, two: 2 })); // 2
console.log(myFirst([5, 4, 3, 2, 1], 3)); // [5, 4, 3]
console.log(myLast([5, 4, 3, 2, 1], 3)); // [3, 2, 1]
console.log(myKeys({ one: 1, two: 2 })); // ["one", "two"]
console.log(myValues({ one: 1, two: 2 })); // [1, 2]
