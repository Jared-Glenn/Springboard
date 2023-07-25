def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    par_list = list(parens)
    
    count = 0
    
    for paren in par_list:
        if count < 0:
            return False
        
        if paren == "(":
            count += 1
        elif paren == ")":
            count -= 1
        
    if count == 0:
        return True
    else:
        return False
