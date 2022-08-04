import React from 'react'

const index = ({ docs }: { docs: any }) => {
  const { data } = docs
  console.log(docs)

  return (
    <>
      <div>
        <h1>
          {data[0].highlights.map((e: any) => (
            <p key={e.text}>{e.text}</p>
          ))}
        </h1>
      </div>
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
