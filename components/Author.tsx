import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0rem 2.4rem;
  color: ${({ theme }) => theme.color.green.secondary};
  font-size: ${({ theme }) => theme.type.size.lg};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.normal};

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const Author = ({ text }: { text: string }) => {
  return <Container>{text}</Container>
}

export default Author
