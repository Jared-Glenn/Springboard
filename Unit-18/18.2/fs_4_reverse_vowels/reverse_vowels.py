def reverse_vowels(s):
    """Reverse vowels in a string.

    Characters which re not vowels do not change position in string, but all
    vowels (y is not a vowel), should reverse their order.

    >>> reverse_vowels("Hello!")
    'Holle!'

    >>> reverse_vowels("Tomatoes")
    'Temotaos'

    >>> reverse_vowels("Reverse Vowels In A String")
    'RivArsI Vewols en e Streng'

    reverse_vowels("aeiou")
    'uoiea'

    reverse_vowels("why try, shy fly?")
    'why try, shy fly?''
    """
    string_list = list(s)
    vowels = "aeiou"
    
    new_list = []
    vowel_list = []
    
    for letter in string_list:
        if letter.lower() in vowels:
            vowel_list.append(letter)
            new_list.append(1)
        else:
            new_list.append(letter)
    
    new_string = ""
    
    for i, letter in enumerate(new_list):
        if letter == 1:
            new_list[i] = vowel_list.pop()
        new_string += new_list[i]

    return new_string
