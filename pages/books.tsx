import React from 'react'
import BookList from '../components/BookList'

export default function bookList({ docs }: { docs: any }) {
  const { data } = docs
  return <BookList data={data} />
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
