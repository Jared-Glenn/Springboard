from wordfinder import WordFinder

class SpecialWordFinder(WordFinder):
    '''Allows WordFinder to ignore comments and empty lines.
    
    >>> special = SpecialWordFinder("special_words.txt")
    235888 words read
    
    >>> print(special.word_list[1])
    a
    
    >>> print(special.word_list[4])
    aalii
    
    '''
    def __init__(self, text_file):
        super().__init__(text_file)
        self.remove_blanks()
        
    def remove_blanks(self):
        for i, word in enumerate(self.word_list):
            if word.startswith('#') or word == "":
                del self.word_list[i]

