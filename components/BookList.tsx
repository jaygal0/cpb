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
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #d8f8f4;
  }
  &:active {
    color: #0b3c37;
  }
`

const Author = styled.div`
  font-size: ${({ theme }) => theme.type.size.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.green.secondary};
`

const BookList = ({
  data,
  sortBy,
  filter,
}: {
  data: any
  sortBy: string
  filter: string
}) => {
  return (
    <>
      <Container>
        {sortBy == 'title' &&
          data
            .sort((a: any, b: any) => {
              if (a.title > b.title) {
                return 1
              } else {
                return -1
              }
            })
            .filter((e: any) => {
              if (e.title.toLowerCase().includes(filter)) return e
            })
            .map((book: any) => (
              <Link key={book.asin} href={`/books/${book.asin}`}>
                <WrapperList>
                  <Title>{book.title}</Title>
                  <Author>{book.authors}</Author>
                </WrapperList>
              </Link>
            ))}
        {sortBy == 'author' &&
          data
            .sort((a: any, b: any) => {
              if (a.authors > b.authors) {
                return 1
              } else {
                return -1
              }
            })
            .filter((e: any) => {
              if (e.authors.toLowerCase().includes(filter)) return e
            })
            .map((book: any) => (
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
