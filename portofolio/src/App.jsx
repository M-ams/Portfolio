import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Mams from './components/Mams'

function App() {

  const [showMams, setShowMams] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowMams(true)
    }, 3000)
  }, [])

  return (
    <>
    {showMams ? (
      <div className='flex flex-col h-screen fade-in'>
        <Navbar />
      </div>
    ) : (
< Mams />
    )}
      
    </>
  )
}

export default App
