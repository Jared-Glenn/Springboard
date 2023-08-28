function findRotatedIndex(arr, item) {
    let top = arr.length - 1;
    let bottom = 0;
    for (let i = 0; i < 10; i++){
        let mid = Math.floor((top + bottom)/2);
        if (arr[mid] === item){
            return mid;
        }

        // Bottom portion:
        if (arr[bottom] <= arr[mid]){
            if (arr[mid] < item || arr[bottom] > item){
                bottom = mid + 1;
            }
            else {
                top = mid - 1;
            }
        }
        // Top portion:
        else {
            if (arr[mid] > item || arr[top] < item){
                top = mid - 1;
            }
            else {
                bottom = mid + 1;
            }
        }
    }
    return -1
}

module.exports = findRotatedIndex