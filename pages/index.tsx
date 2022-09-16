import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import {
  IndexMainContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexButton,
} from '../styles'
import Highlight from '../components/Highlight'
import Book from '../components/Book'
import Author from '../components/Author'
import Logo from '../components/Logo'
import Link from 'next/link'
import IconCircle from '../components/IconCircle'
import BuiltBy from '../components/BuiltBy'

export default function Home({ books }: { books: any }) {
  const [randomTitle, setRandomTitle] = useState<string>('')
  const [randomAuthor, setRandomAuthor] = useState<string>('')
  const [randomHighlight, setRandomHighlight] = useState<string>('')
  const [randomPage, setRandomPage] = useState<string>('')
  const [randomAsin, setRandomAsin] = useState<string>('')
  const [didClick, setDidClick] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>('green')
  const themeColors = ['green', 'yellow', 'purple', 'orange', 'red']

  // deconstructing the prop from the database
  let { data } = books

  // need to use a useEffect in order to affect the states since useStates is a step behind for some reason
  // it listens to the useState 'didClick'
  useEffect(() => {
    let theObject = data[Math.floor(Math.random() * data.length)]
    let theHighlight =
      theObject.highlights[
        Math.floor(Math.random() * theObject.highlights.length)
      ].text
    let theAuthor = theObject.authors
    let theTitle = theObject.title
    let theAsin = theObject.asin
    let thePage =
      theObject.highlights[
        Math.floor(Math.random() * theObject.highlights.length)
      ].location.value

    setRandomTitle(theTitle)
    setRandomAuthor(theAuthor)
    setRandomHighlight(theHighlight)
    setRandomPage(thePage)
    setRandomAsin(theAsin)
  }, [didClick])

  // a function to allow the useEffect to listen to the onClick
  function handleClick() {
    setDidClick(!didClick)
    setTheme(themeColors[Math.floor(Math.random() * themeColors.length)])
  }

  return (
    <>
      <Head>
        <title>Commonplacebook</title>
      </Head>
      <IndexMainContainer theme={theme}>
        <div>
          <Logo color={theme} />
          <Highlight
            text={randomHighlight}
            count={randomHighlight.length}
            theme={theme}
          />
          <Author text={randomAuthor} theme={theme} />
        </div>
        <Book
          text={randomTitle}
          asin={randomAsin}
          page={randomPage}
          theme={theme}
        />
      </IndexMainContainer>
      <IndexFooterContainer background={theme}>
        <IndexIconsContainer>
          <IndexButton onClick={handleClick} tabIndex={1}>
            <IconCircle shuffle color={theme} />
          </IndexButton>
          <Link href="/books">
            <IndexButton>
              <IconCircle list color={theme} />
            </IndexButton>
          </Link>
        </IndexIconsContainer>
        <BuiltBy color={theme} />
      </IndexFooterContainer>
    </>
  )
}

export async function getStaticProps(context: any) {
  let site = process.env.WEB_SITE
  let res = await fetch(`${site}/api/books/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let books = await res.json()

  return {
    props: { books },
  }
}
