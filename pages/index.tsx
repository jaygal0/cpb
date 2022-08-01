import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import useTypingGame from 'react-typing-game-hook'
import data from '../data/'
import { IndexMainContainer, IndexInputContainer } from '../styles'
import EnglishPhrase from '../components/EnglishPhrase'
import Footer from '../components/Footer'

export default function Home({ phrase }: { phrase: any }) {
  console.log(phrase)

  const [showPhrase, setShowPhrase] = useState<boolean>(false)
  const [randomArray, setRandomArray] = useState<number[]>([])
  const [random, setRandom] = useState<number>(0)
  const textInput = useRef<HTMLInputElement>(null)

  const swedishPhrase = data[random].swe
  const englishPhrase = data[random].eng

  useEffect(() => {
    // Need this to allow textInput to equal to null in TS
    if (textInput.current != null) {
      textInput.current.focus()
    }
  }, [])

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

  return (
    <>
      <Head>
        <title>Typ_ | Add one liner here</title>
      </Head>
      <IndexMainContainer>
        <EnglishPhrase text={englishPhrase} />
        <IndexInputContainer>
          <div
            className={phase === 2 ? 'correctInput' : 'textWrapperBackground'}
          >
            <h1 onKeyDown={handleKeyDown} tabIndex={1} ref={textInput}>
              {chars.split('').map((char, index) => {
                let state = charsState[index]
                let color =
                  state === 0 ? 'hide' : state === 1 ? 'correct' : 'hide'
                return (
                  <span
                    key={char + index}
                    className={
                      !showPhrase && currIndex + 1 == index
                        ? 'cursor'
                        : currIndex + 1 == index
                        ? 'hint'
                        : color
                    }
                  >
                    {char}
                  </span>
                )
              })}
            </h1>
            {phase === 2 && <Image src="/tick.svg" width={32} height={32} />}
          </div>
        </IndexInputContainer>
      </IndexMainContainer>

      {showPhrase ? (
        <Footer text="remove clue" />
      ) : phase === 2 ? (
        <Footer text="continue" />
      ) : (
        <Footer text="show clue" />
      )}
    </>
  )
}

export async function getStaticProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/phrase/`)
  const phrase = await res.json()

  if (!phrase) {
    return {
      notfound: true,
    }
  }

  return {
    props: { phrase },
  }
}
