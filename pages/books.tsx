import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import {
  IndexMainBookContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexButton,
} from '../styles'
import IconCircle from '../components/IconCircle'
import BuiltBy from '../components/BuiltBy'
import Logo from '../components/Logo'
import Link from 'next/link'

export default function bookList({ docs }: { docs: any }) {
  const { data } = docs

  return (
    <>
      <IndexMainBookContainer>
        <Logo color="green" books />
        <BookList data={data} />
      </IndexMainBookContainer>
      <IndexFooterContainer className="book-list">
        <IndexIconsContainer>
          <Link href="/">
            <IndexButton tabIndex={1}>
              <IconCircle close color="green" />
            </IndexButton>
          </Link>
        </IndexIconsContainer>
        <BuiltBy />
      </IndexFooterContainer>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books`)
  const docs = await res.json()

  if (!docs) {
    return {
      notfound: true,
    }
  }

  return {
    props: { docs },
  }
}
