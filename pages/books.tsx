import React from 'react'
import Link from 'next/link'
// import BookList from '../components/BookList'

export default function bookList({ docs }: { docs: any }) {
  const { data } = docs
  return (
    <>
      <ul>
        {data.map((book: any) => (
          <li key={`${book.id}-${book.title}`}>
            <Link
              href={`/books/${book.asin}`}
            >{`${book.title} by ${book.authors}`}</Link>
          </li>
        ))}
      </ul>
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
