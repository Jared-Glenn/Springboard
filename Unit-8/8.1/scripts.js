const numArr = [2, 3, 4, 5];
const strArr = ["first", "second", "third", "last"]
const objArr = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ]

const nameArr = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]

const catArr = [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function doubleValues(arr) {
    const newArray = [];
    arr.forEach(function(value){
        value *= 2;
        newArray.push(value)
    })
    return newArray;
}

function onlyEvenValues(arr) {
    const newArray = [];
    arr.forEach(function(value){
        if (value % 2 === 0){
            newArray.push(value);
        }
    })
    return newArray;
}

function showFirstAndLast(arr){
    const newArray = [];
    arr.forEach(function(value){
        const first = value[0];
        const last = value[value.length-1];
        newArray.push(first + last)
    })
    return newArray;
}

function addKeyAndValue(arr, key, value){
    const newArray = [];
    arr.forEach(function(indValue){
        const newObj = indValue;
        newObj[key] = value;
        newArray.push(newObj);
    })
    return newArray;
}

function vowelCount(string){
    const newObject = {a: 0, e: 0, i: 0, o: 0, u: 0};
    const keysArray = Object.keys(newObject);
    const stringArray = string.split("");
    stringArray.forEach(function(letter){
        letter = letter.toLowerCase();
        if (keysArray.indexOf(letter) != -1){
            newObject[letter]++;
        }
    })
    return newObject;
}

function doubleValuesWithMap(arr){
    return arr.map (function(value){
        return value * 2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(value, i){
        return value * i;
    })
}

function extractKey(arr, key){
    return arr.map(function(obj){
        return obj[key]
    })
}

function extractFullName(arr){
    return arr.map(function(obj){
        const first = obj["first"];
        const last = obj["last"];
        return first + " " + last;
    })
}

function filterByValue(arr, key){
    return arr.filter(function(obj){
        return obj[key];
    })
}

function find(arr, value){
    const newArr = arr.filter(function(indValue){
        return indValue === value;
    })

    if (newArr.length !== 0){
        return value;
    }
    else {
        return undefined;
    }
}

function findInObj(arr, key, value){
    const newArr = arr.filter(function(obj){
        return obj[key] === value;
    })
    return newArr[0];
}

function removeVowels(string){
    string = string.toLowerCase();
    stringArr = string.split("");
    const vowels = "aeiou";
    const newStringArr = stringArr.filter(function(letter){
        return !vowels.includes(letter);
    })

    let newString = "";
    for (letter of newStringArr){
        newString += letter;
    }
    return newString;
    
}

function doubleOddNumbers(arr){
    const newArr = arr.filter(function(value){
        return !(value % 2 === 0);
    })

    return newArr.map(function(value){
        return value * 2;
    })
}