import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import useTypingGame from 'react-typing-game-hook'
import { IndexMainContainer, IndexInputContainer } from '../styles'
import Highlight from '../components/Highlight'
import Footer from '../components/Footer'
import Book from '../components/Book'
import Author from '../components/Author'

export default function Home({ books }: { books: any }) {
  const [showPhrase, setShowPhrase] = useState<boolean>(false)
  const [randomArray, setRandomArray] = useState<number[]>([])
  const [random, setRandom] = useState<number>(0)
  const textInput = useRef<HTMLInputElement>(null)

  // deconstructing the prop
  let { success, data } = books

  let bookIndex = 1
  let highlightIndex = 10

  let highlight = data[bookIndex].highlights[highlightIndex].text
  let author = data[bookIndex].authors
  let book = data[bookIndex].title

  return (
    <>
      <Head>
        <title>Commonplacebook</title>
      </Head>
      <p>commonplacebook</p>
      <Highlight text={highlight} />
      <Author text={author} />
      <Book text={book} />
      <p>Built by Joshua Galinato</p>
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
