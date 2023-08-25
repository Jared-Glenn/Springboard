

function countZeroes(arr) {
    let top = arr.length - 1;
    console.log(`top: ${top}`)
    let bottom = 0;
    while (top >= bottom) {
        let mid = Math.floor((top - bottom)/2) + bottom;
        console.log(`mid: ${mid}`)
        console.log(`arr[mid]: ${arr[mid]}`)
        console.log(`top: ${top}`)
        console.log(`bottom: ${bottom}`)
        if (arr[mid] === 1 && arr[mid+1] === 0){
            console.log("Returning")
            return (arr.length - (mid + 1));
        }
        else if (arr[mid] === 1){
            console.log(`is one`)
            bottom = mid + 1;
        }
        else if (arr[mid] === 0){
            console.log(`is zero`)
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