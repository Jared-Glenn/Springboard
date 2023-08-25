

function countZeroes(arr) {
    let top = arr.length - 1;
    let bottom = 0;
    while (top >= bottom) {
        let mid = Math.floor((top - bottom)/2) + bottom;
        if (arr[mid] === 1 && arr[mid+1] === 0){
            return (arr.length - (mid + 1));
        }
        else if (arr[mid] === 1){
            bottom = mid + 1;
        }
        else if (arr[mid] === 0){
            top = mid - 1;
        }
    }
    if (arr[0] === 1){
        return 0;
    }
    else{
        return arr.length;
    }
}

module.exports = countZeroes