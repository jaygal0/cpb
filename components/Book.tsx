import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Theme {
  color: string
}

const Container = styled.div<Theme>`
  margin-top: 5.6rem;
  padding: 2.4rem 2.4rem;
  font-family: Inter, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: ${({ theme }) => theme.type.md};
  color: ${(props) =>
    props.color == 'green'
      ? '#0B3C37'
      : props.color == 'yellow'
      ? '#005FA3'
      : props.color == 'purple'
      ? '#F0CBE4'
      : props.color == 'orange'
      ? '#18465D'
      : props.color == 'red'
      ? '#18465D'
      : '#0B3C37'};
  transition: all 1s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(10%);
  }
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

const Book = ({
  text,
  page,
  theme,
  asin,
}: {
  text: string
  page: string
  theme: string
  asin: string
}) => {
  return (
    <Link href={`/books/${asin}`}>
      <Container color={theme}>{`${text} / Location ${page}`}</Container>
    </Link>
  )
}

export default Book
