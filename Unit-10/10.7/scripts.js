const hasDuplicate = arr => {
    const newSet = new Set();
    for (item of arr){
        newSet.add(item);
    };
    if (newSet.size !== arr.length){
        return true;
    }
    else{
        return false;
    }
}


const vowelCount = string => {
    const countMap = new Map();
    string = string.toLowerCase();
    const stringArr = string.split("");
    const vowels = "aeiou";
    for (letter of stringArr){
        if (vowels.includes(letter)){
            if (countMap[letter]){
                countMap[letter]++;
            }
            else{
                countMap[letter] = 1;
            }
        }
    }
    return countMap;
}
