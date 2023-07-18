def print_upper_words(string_list, must_start_with=[]):
    """
    Take a list of strings, converts them to uppercase, and prints each one on a different line.
    
    Optionally, a list of letters can be passed in to limit the printed words to words that start with
    one of the chosen letters.
    """
    
    for string in string_list:
        if must_start_with:
            for letter in must_start_with:
                if string[0].upper == letter[0].upper:
                    print(string.upper())
        else:
            print(string.upper())


print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})

# Complete