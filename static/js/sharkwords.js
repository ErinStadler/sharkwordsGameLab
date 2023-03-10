const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  //selecting target region
    const letterDivs = document.querySelectorAll(`.${letter}`)
    
    //looping through all matching classes
    for (const querydivs of letterDivs) {
              // the button ID contains the letter we want to change to
              querydivs.innerHTML = letter
              // change innerHTML to have that letter
      };
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
  //while number < 5
  //update the image on the screen
  //after the while loop when numWrong is >5 
  // if number is 5 than disable all buttons and show element a
//---or----
  //expanding off while loop-
  //while true:
  //if numWrong < 5 -> disable all buttons and show element a
  //
  //else break
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      const letter = button.innerHTML;  
      // can also use evt.target instead of button
      disableLetterButton(button)
    if (word.includes(letter)){
      handleCorrectGuess(letter)
    }else{
      handleWrongGuess()
    }
      // you should disable the button so the letter can't be clicked again
    
      // you should then check if the currently clicked letter is in the word
    
      // done if it is, call `handleCorrectGuess` 
    
      // done if it is not, call `handleWrongGuess`
    });
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
