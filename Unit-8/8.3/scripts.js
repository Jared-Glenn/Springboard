const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

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