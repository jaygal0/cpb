import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2.4rem 2.4rem;
  color: ${({ theme }) => theme.color.green.secondary};
  font-size: ${({ theme }) => theme.type.md};
  position: absolute;
  bottom: 0;

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const Book = ({ text }: { text: string }) => {
  return <Container>{text}</Container>
}

export default Book
