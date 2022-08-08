import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import {
  IndexMainBookContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexButton,
  IndexSearch,
  IndexSelect,
} from '../styles'
import IconCircle from '../components/IconCircle'
import BuiltBy from '../components/BuiltBy'
import Logo from '../components/Logo'
import Link from 'next/link'

export default function bookList({ docs }: { docs: any }) {
  const { data } = docs
  const [sortValue, setSortValue] = useState('title')
  const [filterValue, setFilterValue] = useState('')

  return (
    <>
      <IndexMainBookContainer>
        <Logo color="green" books />
        <IndexSearch
          onChange={(e) => {
            setFilterValue(e.target.value)
          }}
          placeholder={
            sortValue == 'title' ? 'Search by title...' : 'Search by author...'
          }
        />
        <IndexSelect
          onChange={(e) => {
            setSortValue(e.target.value)
          }}
        >
          <option value="title">title</option>
          <option value="author">author</option>
        </IndexSelect>
        <BookList data={data} sortBy={sortValue} filter={filterValue} />
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
