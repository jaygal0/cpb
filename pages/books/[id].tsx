import React from 'react'
import HighlightList from '../../components/HighlightList'
import Logo from '../../components/Logo'
import {
  IndexMainContainer,
  IndexFooterContainer,
  IndexIconsContainer,
  IndexButton,
} from '../../styles'
import IconCircle from '../../components/IconCircle'
import BuiltBy from '../../components/BuiltBy'
import Link from 'next/link'

const index = ({ docs }: { docs: any }) => {
  const { data } = docs

  return (
    <>
      <IndexMainContainer>
        <Logo color="green" />
        <HighlightList data={data} />
      </IndexMainContainer>
      <IndexFooterContainer className="book-list">
        <IndexIconsContainer>
          <Link href="/books">
            <IndexButton tabIndex={1}>
              <IconCircle back color="green" />
            </IndexButton>
          </Link>
        </IndexIconsContainer>
        <BuiltBy />
      </IndexFooterContainer>
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
