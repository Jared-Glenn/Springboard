def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    
    freq_dict = {}
    
    for num in nums:
        if num in freq_dict:
            freq_dict[num] += 1
        else:
            freq_dict[num] = 1
    
# Adapted from https://www.entechin.com/how-to-find-the-max-value-in-a-dictionary-in-python/?expand_article=1 on 7/24/23
    return max(freq_dict, key=freq_dict.get)

