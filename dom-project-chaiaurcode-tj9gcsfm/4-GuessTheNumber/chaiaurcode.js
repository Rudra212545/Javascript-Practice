let randomNumber = parseInt(Math.random() * 100) + 1;
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [ ]
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

const validateGuess = (guess)=>{
  if(isNaN(guess)){
    displayMessage("Invalid Number! Please enter a valid number ")
  } else if(guess < 1){
    displayMessage("Please enter a number greater than 1 ")
  } else  if(guess > 100){
    displayMessage("Please enter a number samller than 100 ")
  }else{
    prevGuess.push(guess)
    if(numGuess >= 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

const checkGuess = (guess)=>{
  if(guess === randomNumber){
    displayMessage(`You guessed it right! You wonn`)
    endGame()
  }else if(guess < randomNumber){
    displayMessage(`Number is TOOO low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is TOOO high`)
  }
}

const displayGuess = (guess)=>{
  userInput.value = ""
  guessSlot.innerHTML += `${guess} ,  `
  numGuess++;
  lastResult.innerHTML = `${11 - numGuess}`
}

const displayMessage = (message)=>{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = ()=>{
  userInput.value = ""
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
  startOver.appendChild(p)
  playGame = false
  newGame()
}

const newGame = ()=>{
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click",(e)=>{
    randomNumber = parseInt(Math.random() * 100) + 1;
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    lastResult.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('Guess Again ')
    playGame = true
  })
}


