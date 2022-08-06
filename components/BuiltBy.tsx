import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  font-weight: 300;
`
const BuiltBy = () => {
  return <Container>built by joshua galinato</Container>
}

export default BuiltBy
