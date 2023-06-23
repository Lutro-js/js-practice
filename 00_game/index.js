let randomNumber = Math.floor(Math.random() * 100) + 1;
        const guesses = document.querySelector('.guesses');
        const lastResult = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');
        const guessSubmit = document.querySelector('.guessSubmit');
        const guessField = document.querySelector('.guessField');
        let guessCount = 1;
        let resetButton;

        function checkGuess() {
        const userGuess = Number(guessField.value);
        if (guessCount === 1) {
            guesses.textContent = '前回の予想: ';
        }

        guesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
            lastResult.textContent = 'おめでとう！好きな人と結婚できます！';
            lastResult.style.backgroundColor = 'pink';
            lowOrHi.textContent = '';
            setGameOver();
        } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
            lowOrHi.textContent = '';
            setGameOver();
        } else {
            lastResult.textContent = '間違いです✖';
            lastResult.style.backgroundColor = 'red';
            if(userGuess < randomNumber) {
            lowOrHi.textContent = '今の予想は小さすぎです💦' ;
            } else if(userGuess > randomNumber) {
            lowOrHi.textContent = '今の予想は大きすぎです💦';
            }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus();
        }

        guessSubmit.addEventListener('click', checkGuess);

        function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = '新しいゲームを始める';
        resetButton.style.backgroundColor = 'lightblue';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
        }

        function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for (const resetPara of resetParas) {
            resetPara.textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
        }