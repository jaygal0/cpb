import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react'
import useTypingGame, { PhaseType } from 'react-typing-game-hook'
import data from '../data/'

export default function Home() {
  const [showPhrase, setShowPhrase] = useState(false)
  const [randomArray, setRandomArray] = useState([])
  const [random, setRandom] = useState(0)
  const textInput = useRef(null)

  useEffect(() => {
    textInput.current.focus()
  }, [])

  const swedishPhrase = data[random].swe
  const englishPhrase = data[random].eng

  // Callthe useTypingGame packaage
  const {
    states: { chars, charsState, correctChar, phase },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(swedishPhrase, { pauseOnError: true })

  // A function to go through every example in the database, the logic is still a little messy
  function grabRandomPhrase() {
    let randomNo = Math.floor(Math.random() * data.length)

    // FIXME: Need to figure out this logic properly since I may need to hit the button several times before I see a new sentence
    for (let i = 0; i < data.length; i++) {
      if (!randomArray.includes(randomNo)) {
        // Add a new item to the array
        setRandomArray([...randomArray, randomNo])
        setRandom(randomNo)
      } else if (randomArray.length - 1 === data.length - 1) {
        // Reset Array
        setRandomArray([])
        console.log('reset')
      } else {
        // Do nothing
        console.log('do nothing')
      }
    }
  }

  // Select a random entry from the beginning
  useEffect(() => {
    setRandom(Math.floor(Math.random() * data.length))
  }, [])

  // function to handle the onKeyDown in the "input"
  function handleKeyDown(e) {
    const key = e.key

    if (key === 'Enter' && phase === 2) {
      grabRandomPhrase()
    } else if (key === 'Escape') {
      resetTyping()
    } else if (key === 'Backspace') {
      deleteTyping(false)
    } else if (key.length === 1) {
      insertTyping(key)
    } else if (key === 'Enter' && phase != 2) {
      setShowPhrase(!showPhrase)
    }

    if (key !== 'Enter') {
      setShowPhrase(false)
    }
    e.preventDefault()
  }

  // function to hide/show the answer
  function togglePhrase() {
    setShowPhrase(!showPhrase)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{englishPhrase}</h1>
        <h1
          onKeyDown={handleKeyDown}
          className={showPhrase ? 'background' : ''}
          tabIndex={1}
          ref={textInput}
        >
          {chars.split('').map((char, index) => {
            let state = charsState[index]
            let color = state === 0 ? 'white' : state === 1 ? 'green' : 'white'
            return (
              <span key={char + index} className={color}>
                {char}
              </span>
            )
          })}
        </h1>
        <button onClick={togglePhrase} tabIndex={2}>
          show phrase
        </button>
      </main>
    </div>
  )
}
