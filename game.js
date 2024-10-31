function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber() {
    const minNum = 0;
    const maxNum = 100;
    const secretNum = getRandomNumber(minNum, maxNum);
    let guess;
    let attempt = 3;

    // Arrays for random messages
    const sarcasticMessages = [
        "Better luck next time!",
        "Come back next year!",
        "Ahh, you failed!",
        "Are you slow?",
        "This is too easy, but you failed!"
    ];
    const congratulationMessages = [
        "Congrats, you nailed it!",
        "Well done champ!",
        "Impressive!",
        "You got it right!",
        "Great job!"
    ];

    while (attempt > 0) {
        guess = prompt(`Guess a number between ${minNum} and ${maxNum}. Attempts left: ${attempt}`);

      
        if (guess === null || isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }

        guess = parseInt(guess);
        attempt--;

        if (guess === secretNum) {
            const congratsMessage = congratulationMessages[Math.floor(Math.random() * congratulationMessages.length)];
            alert(`${congratsMessage} You guessed the number ${secretNum} in ${3 - attempt} attempt(s)!`);
            alert("Thank you for playing!");
            break;
        } else {
            if (attempt > 0) {
                const sarcasticMessage = sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
                alert(`${sarcasticMessage} Try again!`);
            } else {
                alert(`The Game is over! The correct number was ${secretNum}.`);
            }
        }
    }
}


guessNumber ();