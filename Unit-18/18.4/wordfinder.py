from random import randint, seed


class WordFinder:
    """Word Finder: finds random words from a dictionary.
    
    >>> finder = WordFinder("words.txt")
    235886 words read
    
    >>> seed(1)
    
    >>> finder.random()
    choler
    
    >>> finder.random()
    pneumodynamics
    
    >>> finder.random()
    unrulableness
    
    >>> special = WordFinder("special_words.txt")
    235888 words read
    
    >>> print(special.word_list[1])
    <BLANKLINE>
    
    >>> print(special.word_list[4])
    # aa
    
    """
    def __init__(self, text_file):
        self.word_list = self.convert_textfile(text_file)
        self.num_of_words = None
        self.read_words()
    
    def convert_textfile(self, text_file):
        file_path = "/home/jared/Springboard/Unit-18/18.4/" + text_file
        word_list = []
        
        with open(file_path, "r") as file:
            for word in file:
                word_list.append(word.strip())
                
        return word_list
    
    def read_words(self):
        self.num_of_words = len(self.word_list)
        
        print(f"{self.num_of_words} words read")
    
    def random(self):
        index = randint(0, (self.num_of_words - 1))
        print(self.word_list[index])
    