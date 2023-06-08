const randomNumber = Math.floor(Math.random() * 100)+1;
let msg1=document.getElementById("message1");
let msg2=document.getElementById("message2")
let guesses=0;
let guessed_nums=[];

 function checkGuess() {
            let userGuess=document.getElementById('guess').value;
            if (userGuess>100 || userGuess<0){
                alert("Please enter valid number");
            }
            else{
                guesses++;
                guessed_nums.push(userGuess);
            }

            if (userGuess == randomNumber) {
                setMessage('Congratulations! You guessed the correct number!');
            } else if (userGuess < randomNumber) {
                setMessage('Too low! Try again.');
                msg1.textContent = "No. of Guesses: " + guesses; 
                msg2.textContent = "Guessed numbers are: " + guessed_nums;
            } else {
                setMessage('Too high! Try again.');
                guesses++;
                msg1.innerHTML = "No. of Guesses: " + guesses; 
                msg2.textContent = "Guessed numbers are: " + guessed_nums;
            }
        }

        function setMessage(msg) {
            document.getElementById('message').innerHTML = msg;
        }

    