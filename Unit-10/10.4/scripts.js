const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


const findMin = (...nums) => nums.reduce((accumulator, curNum) => {
    if (curNum < accumulator){
        return curNum;
    }
    else{
        return accumulator;
    }
});

const mergeObjects = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj;
};

const doubleAndReturnArgs = (arr, ...nums) => {
    const newArr = nums.map(val => val * 2);
    return [...arr, ...newArr];
}

// Slice and Dice Exercise:

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    const ind = Math.floor(Math.random() * items.length);
    items.splice(ind, 1);
    return items;
}

/** Return a new array with every item in array1 and array2. */

const extend= (array1, array2) =>  [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const obj2 = {};
    obj2[key] = val;
    const newObj = {...obj, ...obj2};
    return newObj;
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key]= val;
    return newObj;
}