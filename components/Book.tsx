import React from 'react'
import styled from 'styled-components'

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
`

const Book = ({
  text,
  page,
  theme,
}: {
  text: string
  page: string
  theme: string
}) => {
  return <Container color={theme}>{`${text} / Location ${page}`}</Container>
}

export default Book
