import React, { useState } from 'react'
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
const ContainerSearch = styled.div`
  margin: 4rem 0.8rem 1.2rem 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60vw;
`
const Search = styled.input`
  font-size: ${({ theme }) => theme.type.size.sm};
  padding: 0.9rem 0.8rem;
  width: 100%;
  background: #d8f8f4;
  outline: none;
  border: none;
  border-right: solid ${({ theme }) => theme.color.green.secondary} 1px;
  border-radius: 0.4rem;
  transition: all 0.3s ease-in-out;
  margin-right: 1.2rem;

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.color.green.secondary}
      inset;
  }
`
const SortButton = styled.button`
  padding: 0;
  background: none;
  outline: none;
  border: none;
`

const BookList = ({ data }: { data: any }) => {
  const [db, setDb] = useState(data)
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState(true)
  const excludeColumns = ['id', 'purchased']

  const filterData = (value: string) => {
    const lowercasedValue = value.toLowerCase().trim()
    if (lowercasedValue === '') setDb(data)
    else {
      const filteredData = data.filter((item: any) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        )
      })
      setDb(filteredData)
    }
  }

  return (
    <>
      <ContainerSearch>
        <Search
          onChange={(e) => {
            setSearchValue(e.target.value)
            filterData(e.target.value)
          }}
          value={searchValue}
          placeholder="Search by title, asin, author or rating"
          type="text"
        />
        <SortButton
          onClick={() => {
            setSortValue(!sortValue)
          }}
        >
          {sortValue && (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 39H31M23 9H43H23ZM5 16L13 8L5 16ZM13 8V42V8ZM23 19H39H23ZM23 29H35H23Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          {!sortValue && (
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 38H31M23 8H43H23ZM14 41L6 33L14 41ZM14 7V41V7ZM23 18H39H23ZM23 28H35H23Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </SortButton>
      </ContainerSearch>
      <Container>
        {sortValue &&
          db
            .sort((a: any, b: any) => {
              if (a.title > b.title) {
                return 1
              } else {
                return -1
              }
            })
            .map((book: any) => (
              <Link key={book.asin} href={`/books/${book.asin}`}>
                <WrapperList>
                  <Title>{book.title}</Title>
                  <Author>{book.authors}</Author>
                </WrapperList>
              </Link>
            ))}
        {!sortValue &&
          db
            .sort((a: any, b: any) => {
              if (a.title < b.title) {
                return 1
              } else {
                return -1
              }
            })
            .map((book: any) => (
              <Link key={book.asin} href={`/books/${book.asin}`}>
                <WrapperList>
                  <Title>{book.title}</Title>
                  <Author>{book.authors}</Author>
                </WrapperList>
              </Link>
            ))}
        {db.length === 0 && (
          <span>Sorry! Can&apos;t find what you&apos;re looking for.</span>
        )}
      </Container>
    </>
  )
}

export default BookList
