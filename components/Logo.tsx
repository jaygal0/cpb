import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2.4rem 2.4rem 1.2rem 2.4rem;
  color: ${({ theme }) => theme.color.green.secondary};
  font-size: ${({ theme }) => theme.type.md};
  text-transform: capitalize;

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const Logo = () => {
  return <Container>commonplace book</Container>
}

export default Logo
