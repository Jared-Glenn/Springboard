function findFloor(arr, item) {
    let top = arr.length - 1;
    let bottom = 0;

    while (top > bottom) {
        let mid = Math.floor((top + bottom)/2);

        if (arr[top] < item){
            return arr[top];
        }
        if (arr[bottom] > item){
            return -1
        }

        // Above:
        if (arr[mid] > item){
            if (arr[mid - 1] <= item){
                return arr[mid - 1];
            }
            else {
                top = mid - 1;
            }
        }
        else if (arr[mid] === item) {
            if (arr[mid - 1] < item) {
                return arr[mid];
            }
            else {
                top = mid - 1;
            }
        }
        else {
            if (arr[mid + 1] > item) {
                return arr[mid];
            }
            else {
                bottom = mid + 1;
            }
        }
    }
}

module.exports = findFloor