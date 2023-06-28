const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
const numArr = [1,2,3,4,5,6,7,8];

function isEven(val){
    return val % 2 === 0;
  }
  
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  
const names = ['Elie', 'Colt', 'Tim', 'Matt'];

function extractValue(arr, key){;
    return arr.reduce(function(valueArray, currentPerson){
        const keyValue = currentPerson[key]
        valueArray.push(keyValue)
        return valueArray;
    }, [])
}

function vowelCount(string){
    string = string.toLowerCase();
    const arr = string.split("");
    return arr.reduce(function(accumulator, currentValue){
        const vowels = "aeiou";
        if (vowels.includes(currentValue)){
            if (accumulator[currentValue]){
                accumulator[currentValue] += 1;
            }
            else {
                accumulator[currentValue] = 1;
            }
        }
        return accumulator;
    }, {})
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, currentValue){
        currentValue[key] = value;
        accumulator.push(currentValue);
        return accumulator;
    }, [])
}

function partition(arr, callback){
    return arr.reduce(function(accumulator, currentValue){
        if (callback(currentValue)){
            accumulator[0].push(currentValue);
        }
        else {
            accumulator[1].push(currentValue);
        }
        return accumulator;
    }, [[], []])
}
