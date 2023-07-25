def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    word_list = phrase.split(" ")
    
    new_phrase = ""
    
    for word in word_list:
        new_phrase += word.capitalize() + " "
        
    return new_phrase

