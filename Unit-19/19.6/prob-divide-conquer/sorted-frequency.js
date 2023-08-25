function sortedFrequency(arr, item) {
    let startIndex = findIndex(arr, item);
    if (startIndex[0] === -1) {
        return -1
    }

    let bottom = findBottom(arr, item, startIndex[0], startIndex[2]);
    let top = findTop(arr, item, startIndex[0], startIndex[1])

    return (top - bottom + 1)

}

function findIndex(arr, item) {
    let top = arr.length - 1;
    let bottom = 0;
    let mid;
    while (top >= bottom){
        mid = Math.floor((top - bottom)/2) + bottom;
        if (arr[mid] === item){
            return [mid, top, bottom];
        }
        else if (arr[mid] > item) {
            top = mid - 1;
        }
        else if (arr[mid] < item) {
            bottom = mid + 1;
        }
    }
    return [-1];
}

function findBottom(arr, item, middle, bottom){
    let top = middle;
    let bot = bottom;
    while (top >= bot){
        mid = Math.floor((top - bot)/2) + bot;
        if (arr[mid-1] != item && arr[mid] === item){
            return mid;
        }
        else if (arr[mid] === item) {
            top = mid - 1;
        }
        else if (arr[mid] != item) {
            bot = mid + 1;
        }
    }
    return middle
}

function findTop(arr, item, middle, topIndex){
    let top = topIndex;
    let bot = middle;
    while (top >= bot){
        mid = Math.floor((top - bot)/2) + bot;
        if (arr[mid+1] != item && arr[mid] === item){
            return mid;
        }
        else if (arr[mid] === item) {
            bot = mid + 1;
        }
        else if (arr[mid] != item) {
            top = mid - 1;
        }
    }
    return middle
}

module.exports = sortedFrequency