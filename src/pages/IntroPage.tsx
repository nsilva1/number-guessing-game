
import { useNavigate } from 'react-router-dom'

const IntroPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="container mx-auto p-6">
      <div className="space-y-10 text-center">
        <h1 className='text-center'>Welcome to the Number Guesser!</h1>
        <p className="text-center">
          Can you guess the secret number before you run out of tries?
        </p>

        <h2 className='text-center'>How to Play</h2>
        <ol className="text-center list-decimal list-inside space-y-2">
          <li>
            The computer has selected a secret number between <strong>1 and 100</strong>.
          </li>
          <li>You have a limited number of attempts to guess it.</li>
          <li>Enter your guess into the box and press "Guess".</li>
          <li>
            The game will give you a hint: <strong>"Too high"</strong> or <strong>"Too low"</strong>.
          </li>
          <li>If you guess the correct number, you win! 🥳</li>
          <li>If you run out of attempts, the game is over. 😕</li>
        </ol>

        <button onClick={() => navigate('/game')} className="bg-blue-500 p-3 rounded-lg text-white">
          Start Game
        </button>
      </div>
    </div>
    </div>
  )
}

export { IntroPage }
