// 𝘜𝘯𝘰𝘳𝘥𝘦𝘳𝘦𝘥 𝘭𝘪𝘴𝘵 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘱𝘭𝘢𝘺𝘦𝘳’𝘴 𝘨𝘶𝘦𝘴𝘴𝘦𝘥 𝘭𝘦𝘵𝘵𝘦𝘳𝘴 𝘸𝘪𝘭𝘭 𝘢𝘱𝘱𝘦𝘢𝘳:
const guessedLettersElement = document.querySelector(".guessed-letters");
// 𝘉𝘶𝘵𝘵𝘰𝘯 𝘸𝘪𝘵𝘩 𝘵𝘩𝘦 𝘵𝘦𝘹𝘵 “𝘎𝘶𝘦𝘴𝘴!” 𝘪𝘯 𝘪𝘵:
const guessLetterButton = document.querySelector(".guess");
// 𝘛𝘦𝘹𝘵 𝘪𝘯𝘱𝘶𝘵 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘱𝘭𝘢𝘺𝘦𝘳 𝘸𝘪𝘭𝘭 𝘨𝘶𝘦𝘴𝘴 𝘢 𝘭𝘦𝘵𝘵𝘦𝘳:
const letterInput = document.querySelector(".letter");
// 𝘌𝘮𝘱𝘵𝘺 𝘱𝘢𝘳𝘢𝘨𝘳𝘢𝘱𝘩 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘸𝘰𝘳𝘥 𝘪𝘯 𝘱𝘳𝘰𝘨𝘳𝘦𝘴𝘴 𝘸𝘪𝘭𝘭 𝘢𝘱𝘱𝘦𝘢𝘳:
const wordInProgress = document.querySelector(".word-in-progress");
// 𝘗𝘢𝘳𝘢𝘨𝘳𝘢𝘱𝘩 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘳𝘦𝘮𝘢𝘪𝘯𝘪𝘯𝘨 𝘨𝘶𝘦𝘴𝘴𝘦𝘴 𝘸𝘪𝘭𝘭 𝘥𝘪𝘴𝘱𝘭𝘢𝘺:
const remainingGuessesElement = document.querySelector(".remaining");
// 𝘚𝘱𝘢𝘯 𝘪𝘯𝘴𝘪𝘥𝘦 𝘵𝘩𝘦 𝘱𝘢𝘳𝘢𝘨𝘳𝘢𝘱𝘩 𝘸𝘩𝘦𝘳𝘦 𝘵𝘩𝘦 𝘳𝘦𝘮𝘢𝘪𝘯𝘪𝘯𝘨 𝘨𝘶𝘦𝘴𝘴𝘦𝘴 𝘸𝘪𝘭𝘭 𝘥𝘪𝘴𝘱𝘭𝘢𝘺:
const remainingGuessesSpan = document.querySelector(".remaining span");
// 𝘌𝘮𝘱𝘵𝘺 𝘱𝘢𝘳𝘢𝘨𝘳𝘢𝘱𝘩 𝘸𝘩𝘦𝘳𝘦 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴 𝘸𝘪𝘭𝘭 𝘢𝘱𝘱𝘦𝘢𝘳 𝘸𝘩𝘦𝘯 𝘵𝘩𝘦 𝘱𝘭𝘢𝘺𝘦𝘳 𝘨𝘶𝘦𝘴𝘴𝘦𝘴 𝘢 𝘭𝘦𝘵𝘵𝘦𝘳:
const message = document.querySelector(".message");
// 𝘏𝘪𝘥𝘥𝘦𝘯 𝘣𝘶𝘵𝘵𝘰𝘯 𝘵𝘩𝘢𝘵 𝘸𝘪𝘭𝘭 𝘢𝘱𝘱𝘦𝘢𝘳 𝘱𝘳𝘰𝘮𝘱𝘵𝘪𝘯𝘨 𝘵𝘩𝘦 𝘱𝘭𝘢𝘺𝘦𝘳 𝘵𝘰 𝘱𝘭𝘢𝘺 𝘢𝘨𝘢𝘪𝘯:
const playAgainButton = document.querySelector(".play-again");

// 𝘚𝘵𝘢𝘳𝘵𝘪𝘯𝘨 𝘸𝘰𝘳𝘥 𝘵𝘰 𝘵𝘦𝘴𝘵 𝘰𝘶𝘵 𝘵𝘩𝘦 𝘨𝘢𝘮𝘦
const word = "magnolia";
// 𝘤𝘳𝘦𝘢𝘵𝘦 𝘢𝘯 𝘢𝘳𝘳𝘢𝘺 𝘵𝘰 𝘤𝘰𝘯𝘵𝘢𝘪𝘯 𝘢𝘭𝘭 𝘵𝘩𝘦 𝘭𝘦𝘵𝘵𝘦𝘳𝘴 𝘨𝘶𝘦𝘴𝘴𝘦𝘥:
const guessedLetters = [];


const placeholder = function(word) {
    const placeholderLetters = [];
    for (letter of word) {
        placeholderLetters.push("●");
        // console.log(letter);
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    // console.log(guess);
    letterInput.value = "";
    const goodGuess = validateInput(guess);
    // console.log(goodGuess);
    if (goodGuess) {
        makeGuess(guess);
    }
});

const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
         return input;
    }
};

const makeGuess = function(guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already entered that letter, silly. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }    
};

const showGuessedLetters = function() {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const listItem = document.createElement("li");
        listItem.innerText = letter;
        guessedLettersElement.append(listItem);
    };
};

const updateWordInProgress = function(guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    checkIfWin();
};

const checkIfWin = function() {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
    }
};