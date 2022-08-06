import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.ul`
  padding: 2.4rem 2.4rem;
  margin: 0;
  width: 70vw;
`
const WrapperList = styled.li`
  list-style: none;
  margin-bottom: 4rem;

  &:hover {
    cursor: pointer;
  }
`

const Title = styled.div`
  font-size: ${({ theme }) => theme.type.size.heading02};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.md};
  color: ${({ theme }) => theme.color.green.primary};
  margin-bottom: 0.8rem;
`

const Author = styled.div`
  font-size: ${({ theme }) => theme.type.size.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.green.secondary};
`

const BookList = ({ data }: { data: any }) => {
  return (
    <>
      <Container>
        {data.map((book: any) => (
          <Link key={book.asin} href={`/books/${book.asin}`}>
            <WrapperList>
              <Title>{book.title}</Title>
              <Author>{book.authors}</Author>
            </WrapperList>
          </Link>
        ))}
      </Container>
    </>
  )
}

export default BookList
