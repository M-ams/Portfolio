'use client'

import { useState, useEffect} from 'react'
import Image from 'next/image'
import Mams from './pages/Mams'
import Homepage from './pages/Homepage'

export default function Home() {

  const [showMams, setShowMams] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowMams(true)
    }, 4000)
  }, [])

  return (
    <>
    {showMams ? (
      
        <Homepage />
      
    ) : (
< Mams />
    )}
      
    </>
  )
}
