import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import useTypingGame, { PhaseType } from 'react-typing-game-hook'
import data from '../data/'
import EnglishPhrase from '../components/EnglishPhrase'
import styles from '../styles/components/App.module.scss'

export default function Home() {
  const [showPhrase, setShowPhrase] = useState<boolean>(false)
  const [randomArray, setRandomArray] = useState<number[]>([])
  const [random, setRandom] = useState<number>(0)
  const textInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Need this to allow textInput to equal to null in TS
    if (textInput.current != null) {
      textInput.current.focus()
    }
  }, [])

  const swedishPhrase = data[random].swe
  const englishPhrase = data[random].eng

  // Callthe useTypingGame packaage
  const {
    states: { chars, charsState, currIndex, phase },
    actions: { insertTyping, resetTyping, deleteTyping },
  } = useTypingGame(swedishPhrase, {
    pauseOnError: true,
    skipCurrentWordOnSpace: false,
    countErrors: 'everytime',
  })

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
  function handleKeyDown(e: any) {
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
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main-grid">
        <EnglishPhrase text={englishPhrase} />
        <div className={styles.container}>
          <div
            className={
              showPhrase ? styles.textWrapperHint : styles.textWrapperNoHint
            }
          >
            <h1 onKeyDown={handleKeyDown} tabIndex={1} ref={textInput}>
              {chars.split('').map((char, index) => {
                let state = charsState[index]
                let color =
                  state === 0
                    ? styles.hide
                    : state === 1
                    ? styles.correct
                    : styles.hide
                return (
                  <span
                    key={char + index}
                    className={currIndex + 1 == index ? styles.cursor : color}
                  >
                    {char}
                  </span>
                )
              })}
            </h1>
          </div>
        </div>
      </main>
      {/*FIXME: Clean up the padding and color  */}
      <footer className="footer-grid body-md">
        {showPhrase ? 'Hit Enter ↩ to remove clue' : 'Hit Enter ↩ to show clue'}
      </footer>
    </>
  )
}