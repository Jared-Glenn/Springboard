import math

def binary_search(arr, item):
    first_length = len(arr)
    top =  first_length - 1
    bottom = 0
    while top < first_length and bottom >= 0 and top >= bottom:
        mid = math.floor((top - bottom)/2) + bottom
        if arr[mid] == item:
            return mid
        elif arr[mid] < item:
            bottom = mid + 1
        elif arr[mid] > item:
            top = mid - 1
    return f'{item} not found.'


print(binary_search([1,2,3,4,5,6,7], 8))