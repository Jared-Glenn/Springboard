def multiply_even_numbers(nums):
    """Multiply the even numbers.
    
        >>> multiply_even_numbers([2, 3, 4, 5, 6])
        48
        
        >>> multiply_even_numbers([3, 4, 5])
        4
        
    If there are no even numbers, return 1.
    
        >>> multiply_even_numbers([1, 3, 5])
        1
    """
    evens = 0
    res = None
    
    for num in nums:
        if num%2 == 0:
            evens += 1
            if res:
                res *= num
            else:
                res = num
    
    if evens == 0:
        return 1
    else:
        return res
    
