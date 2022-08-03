import Head from 'next/head'
import React, { useState, useEffect, useRef } from 'react'
import { IndexMainContainer, IndexInputContainer } from '../styles'
import Highlight from '../components/Highlight'
import Book from '../components/Book'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

export default function Home({ books }: { books: any }) {
  const [showPhrase, setShowPhrase] = useState<boolean>(false)
  const [randomBook, setRandomBook] = useState<number>(0)
  const [randomHighlight, setRandomHighlight] = useState<number>(0)

  // deconstructing the prop from the database
  let { data } = books

  function shuffle() {
    setRandomBook(Math.floor(Math.random() * data.length))
    setRandomHighlight(Math.floor(Math.random() * data.length))
  }

  let bookIndex = randomBook
  let highlightIndex = randomHighlight

  let highlight = data[bookIndex].highlights[highlightIndex].text
  let author = data[bookIndex].authors
  let book = data[bookIndex].title

  return (
    <>
      <Head>
        <title>Commonplacebook</title>
      </Head>
      <IndexMainContainer>
        <Logo />
        <Highlight text={highlight} count={highlight.length} />
        <Author text={author} />
        <Book text={book} />
        <Footer />
        {/* FIXME: figure out how I'm going to pass this prop */}
        <button onClick={shuffle}>click me</button>
      </IndexMainContainer>
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
