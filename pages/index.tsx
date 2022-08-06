import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  IndexMainContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexBuiltByContainer,
  Button,
} from '../styles'
import Highlight from '../components/Highlight'
import Book from '../components/Book'
import Author from '../components/Author'
import Logo from '../components/Logo'
import Link from 'next/link'
import IconCircle from '../components/IconCircle'

export default function Home({ books }: { books: any }) {
  const [randomTitle, setRandomTitle] = useState<string>('')
  const [randomAuthor, setRandomAuthor] = useState<string>('')
  const [randomHighlight, setRandomHighlight] = useState<string>('')
  const [randomPage, setRandomPage] = useState<string>('')
  const [didClick, setDidClick] = useState<boolean>(true)
  const [theme, setTheme] = useState<string>('green')
  const themeColors = ['green', 'yellow', 'purple', 'orange', 'red']

  // TODO: Need to update design
  // TODO: Need to clean up database
  // TODO: Upload to Vercel
  // TODO: Connect to Graphql

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
    let thePage =
      theObject.highlights[
        Math.floor(Math.random() * theObject.highlights.length)
      ].location.value

    setRandomTitle(theTitle)
    setRandomAuthor(theAuthor)
    setRandomHighlight(theHighlight)
    setRandomPage(thePage)
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
        <Book text={randomTitle} page={randomPage} theme={theme} />
        <IndexFooterContainer>
          <IndexIconsContainer>
            <Button onClick={handleClick} tabIndex={1}>
              <IconCircle shuffle={true} list={false} color={theme} />
            </Button>
            <Link href="/books">
              <Button>
                <IconCircle shuffle={false} list={true} color={theme} />
              </Button>
            </Link>
          </IndexIconsContainer>
          <IndexBuiltByContainer>
            built by joshua galinato
          </IndexBuiltByContainer>
        </IndexFooterContainer>
      </IndexMainContainer>
    </>
  )
}

export async function getServerSideProps(context: any) {
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
