let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasOddNumber(arr){
    return arr.some(function(value){
        return !(value % 2 === 0);
    })
}

function hasAZero(float){
    let stringNum = float.toString();
    const stringNumArr = stringNum.split("");
    return stringNumArr.some(function(number){
        return number === "0";
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(number){
        return !(number % 2 === 0);
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(value, ind, array){
        for (val of array){
            if (val === value && array.indexOf(val) !== ind){
                return false;
            }
            return true;
        }
    })
}

function hasCertainKey(arr, key){
    return arr.every(function(obj){
        return obj[key];
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(obj){
        return obj[key] === value;
    })
}
