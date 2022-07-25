import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 48rem;
  padding: 4rem 5.6rem;
  background-color: ${({ theme }) => theme.color.green01};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.type.bodyLg};

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const EnglishPhrase = ({ text }: { text: string }) => {
  return <Container>{text}</Container>
}

export default EnglishPhrase
