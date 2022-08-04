import React from 'react'
import HighlightList from '../../components/HighlightList'

const index = ({ docs }: { docs: any }) => {
  const { data } = docs

  return (
    <>
      <HighlightList data={data} />
    </>
  )
}

export default index

export async function getServerSideProps({ query: { id } }: { query: any }) {
  const site = process.env.WEB_SITE

  const res = await fetch(`${site}/api/books/${id}`)
  const docs = await res.json()

  if (!docs) {
    return {
      notFound: true,
    }
  }

  return {
    props: { docs },
  }
}
