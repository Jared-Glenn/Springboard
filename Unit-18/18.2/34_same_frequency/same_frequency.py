def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    num_dict_1 = create_num_dict(str(num1))
    num_dict_2 = create_num_dict(str(num2))
    
    if num_dict_1 == num_dict_2:
        return True
    else:
        return False

# Create a dictionary for each digit for easy comparison.
def create_num_dict(num_string):
    num_dict = {"0": 0, "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 0, "9": 0}
    
    for num in num_string:
        if num in num_dict:
            num_dict[num] += 1
        else:
            return False
    
    return num_dict

