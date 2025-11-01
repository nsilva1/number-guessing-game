import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { generateRandomNumber } from '../utils/helper_functions'

const GameCard = () => {
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')

    const [secretNumber] = useState<number>(generateRandomNumber)
    const [numberInput, setNumberInput] = useState('')
    const [attemptsLeft, setAttemptsLeft] = useState<number>(10);
    const [previousGuesses, setPreviousGuesses] = useState<number[]>([]);

const handleRestart = () => {
    setGameStatus('playing');
    setPreviousGuesses([]);
  };

    const checkNumber = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // validate input
        const guess = parseInt(numberInput)

        if (isNaN(guess)) {
      toast('Please enter a valid number.');
      return;
    }
    if (guess < 1 || guess > 100) {
      toast(`Your guess must be between 1 and 100.`);
      return;
    }
    if (previousGuesses.includes(guess)) {
      toast('You already guessed that number!');
      return;
    }

    const newPreviousGuesses = [...previousGuesses, guess];
    setPreviousGuesses(newPreviousGuesses);

    // Decrement attempts
    const newAttemptsLeft = attemptsLeft - 1;
    setAttemptsLeft(newAttemptsLeft);

    if (guess === secretNumber) {
      setGameStatus('won');
      toast.success(`Correct! The number was ${secretNumber}. You win! 🎉`);
    } else if (newAttemptsLeft === 0) {
      setGameStatus('lost');
      toast.error(`Out of attempts! The secret number was ${secretNumber}. 😥`);
    } else {
      // Give feedback
      toast.info(guess < secretNumber ? 'Too low, Try again!' : 'Too high, Try again!');
    } 
    
    
    setNumberInput('');
    
    }

  return (
    <div className='p-4 border border-gray-300 rounded-lg'>
        <h2 className='text-2xl font-bold text-center'>Number Guessing Game</h2>
            <p className='text-center text-gray-600'>Try to guess the number between 1 and 100!</p>
        {
            gameStatus === 'playing' ? (
                <div className='flex flex-col gap-6'>
            
            <form className='space-y-8' onSubmit={checkNumber}>
                <label>Enter your guess:</label>
                <input value={numberInput} onChange={(e) => setNumberInput(e.target.value)} type='number' className='border border-gray-300 p-3 w-full focus:outline-0 focus:ring-offset-0' />
                <button type='submit' className='bg-blue-400 hover:bg-blue-600 cursor-pointer p-2 w-full'>
                    Submit
                </button>
            </form>
        </div>
            ) : (
                <div className="">
          <button onClick={handleRestart}>Play Again</button>
        </div>
            )
        }

        {previousGuesses.length > 0 && (
        <div className="mt-4">
          <h3>Previous Guesses:</h3>
          <p className='bg-red-200 text-red-600 p-3 rounded-lg'>{previousGuesses.join(', ')}</p>
        </div>
      )}
        
    </div>
  )
}

export { GameCard }