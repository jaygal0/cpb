import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import {
  IndexMainContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexBuiltByContainer,
} from '../styles'
import Highlight from '../components/Highlight'
import Book from '../components/Book'
import Author from '../components/Author'
import Logo from '../components/Logo'

export default function Home({ books }: { books: any }) {
  const [randomBook, setRandomBook] = useState<number>(0)
  const [randomHighlight, setRandomHighlight] = useState<number>(0)

  // deconstructing the prop from the database
  let { data } = books

  let book = data[randomBook].title
  let highlight = data[randomBook].highlights[randomHighlight].text
  let author = data[randomBook].authors

  console.log(data)

  function shuffle() {
    // FIXME: Figure out why it's crashing on certain places
    // Do I create a promise async? To give it time to 'breath'?
    setRandomBook(Math.floor(Math.random() * data.length))
    setRandomHighlight(
      Math.floor(Math.random() * data[randomBook].highlights.length)
    )
    console.log(randomBook)
    console.log(randomHighlight)
  }

  return (
    <>
      <Head>
        <title>Commonplacebook</title>
      </Head>
      <IndexMainContainer>
        <Logo />
        <Highlight
          text={highlight ? highlight : 'reshuffle'}
          count={highlight.length}
        />
        <Author text={author} />
        <Book text={book} />
        <IndexFooterContainer>
          <IndexIconsContainer>
            <Image
              src="/shuffle.svg"
              width={64}
              height={64}
              alt=""
              onClick={shuffle}
              className="hover"
            />
            <Image src="/book-list.svg" width={64} height={64} alt="" />
          </IndexIconsContainer>
          <IndexBuiltByContainer>
            built by joshua galinato
          </IndexBuiltByContainer>
        </IndexFooterContainer>
        {/* <Footer /> */}
        {/* FIXME: figure out how I'm going to pass this prop */}
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
