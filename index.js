const myEach = (collection, callback) => {
    for (const element in collection) {
        callback(collection[element]);
    }
    return collection;
}
const myMap = (collection, callback) => {
    const arr = []
    for (const element in collection) {
        arr.push(callback(collection[element]))
    }
    return arr
}

const myReduce = (collection, callback, acc) => {
    for (const element in collection) {
        if (acc) {
            acc = callback(acc, collection[element], collection) - 0
        } else {
            acc = collection[element]
        }
    }
    return acc
}

function myFind(collection, predicate) {
    for (const element in collection) {
        if (predicate(collection[element])) {
            return collection[element];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let filtredCollection = [];
    for (const element in collection) {
        if (predicate(collection[element])) {
            filtredCollection.push(collection[element]);
        }
    }
    return filtredCollection;
}

function mySize(collection) {
    const size = [];
    for (const element in collection) {
        size.push(element);
    }
    return size.length;
}

function myFirst(array, n = 0) {
    const newArray = [];
    if (n > 0) {
        for (let i = 0; i < n; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    } else return array[n];
}

function myLast(array, n = undefined) {
    const lastIndex = array.length - 1;
    const newArray = [];
    if (n) {
        for (let i = 0; i < n; i++) {
            newArray.push(array[array.length - n + i]);
        }
        return newArray;
    }
    return array[lastIndex];
}

function myKeys(object) {
    const keys = [];
    for (const key in object) {
        keys.push(key);
    }
    return keys;
}

function myValues(object) {
    const keys = [];
    for (const value in object) {
        keys.push(object[value]);
    }
    return keys;
}