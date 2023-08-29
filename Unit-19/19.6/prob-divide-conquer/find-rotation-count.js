function findRotationCount(arr) {
    let top = arr.length - 1;
    let bottom = 0;
    let res = 0

    while (top >= bottom){
        if (arr[bottom] < arr[top]) {
            if (arr[res] > arr[bottom]){
                res = bottom;
            }
            break;
        }

        let mid = Math.floor((top + bottom)/2);
        if (arr[res] > arr[mid]){
            res = mid;
        }

        // Bottom portion:
        if (arr[mid] >= arr[bottom]){
            if (arr[mid] > arr[top]){
                bottom = mid + 1;
            }
            else {
                top = mid - 1;
            }
        }
        // Top portion:
        else {
            top = mid - 1;
        }
    }
    return res;
}

module.exports = findRotationCount