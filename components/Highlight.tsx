import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 0rem 2.4rem;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.display};

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const Highlight = ({ text, count }: { text: string; count: number }) => {
  return (
    //   {text.length = 5 ? (
    // <Container>{text}</Container>
    //   ): ''}
    <div>
      {text} {count}
    </div>
  )
}

export default Highlight
