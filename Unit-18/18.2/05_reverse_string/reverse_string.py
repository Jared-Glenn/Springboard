def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """

    phrase_list = list(phrase)
    phrase_list.reverse()
    
    res = ""
    
    for letter in phrase_list:
        res += letter
    
    return res
