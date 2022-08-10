import React, { useEffect } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import IconSort from './IconSort'

const Container = styled.ul`
  padding: 2.4rem 2.4rem;
  margin: 0;
  width: 70vw;
  animation: loading 0.3s ease-in;
  @keyframes loading {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
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
  padding: 0 0.2rem;
  background: none;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
  &:hover {
    background: #c3f4ee;
    border-radius: 0.2rem;
  }
  &:active {
    filter: brightness(90%);
  }
`
const SearchResults = styled.div`
  padding: 0.8rem 2.4rem;
  font-size: ${({ theme }) => theme.type.size.sm};
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
          <IconSort sortValue={sortValue} />
        </SortButton>
      </ContainerSearch>
      <SearchResults>{`${
        searchValue.length > 0 ? 'Search Results Count' : 'Total Books Read'
      }: ${db.length}`}</SearchResults>
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
