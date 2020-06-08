### Module 2 Assessment: Word Guessing Game
In this folder are all the required files to run my JavaScript word guessing game. The game is run through the main index.html file, and then the assets folder contains supporting styling files, images, and sounds.

When the player opens the game, they are brought to a homescreen, created using bootstrap, that prompts them to type any letter to begin. 
A list of words is stored that are all related to the theme, and the game selects one at random for each new game. The player begins by typing letters to guess if they are contained in the mystery word. If the letter is not in the word, they have one fewer guesses remaining. If the letter is in the word, it populates to the correct location. The player continues to guess until either they get all of the letters filled in, or they run out of guesses.
If they guess correctly, the game plays a winning noise and then resets for another round, keeping track of how many wins the player has so far. If they run out of guesses, the game plays a losing noise and resets for another round and does not add a counter to the tally of wins.
