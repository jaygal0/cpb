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

export default function Home({ books }: { books: any }) {
  const [randomTitle, setRandomTitle] = useState<string>('')
  const [randomAuthor, setRandomAuthor] = useState<string>('')
  const [randomHighlight, setRandomHighlight] = useState<string>('')
  const [didClick, setDidClick] = useState<boolean>(true)

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

    setRandomTitle(theTitle)
    setRandomAuthor(theAuthor)
    setRandomHighlight(theHighlight)
  }, [didClick])

  // a function to allow the useEffect to listen to the onClick
  function handleClick() {
    setDidClick(!didClick)
  }

  return (
    <>
      <Head>
        <title>Commonplacebook</title>
      </Head>
      <IndexMainContainer>
        <Logo />
        <Highlight text={randomHighlight} count={randomHighlight.length} />
        <Author text={randomAuthor} />
        <Book text={randomTitle} />
        <IndexFooterContainer>
          <IndexIconsContainer>
            <Button onClick={handleClick} tabIndex={1}>
              <Image src="/shuffle.svg" width={64} height={64} alt="" />
            </Button>
            <Link href="/books">
              <Image src="/book-list.svg" width={64} height={64} alt="" />
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
