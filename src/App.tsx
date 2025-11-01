// config imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// page imports
import { IntroPage } from './pages/IntroPage'
import { GamePage } from './pages/GamePage'

function App() {
  

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
