import React from 'react'
import styled from 'styled-components'

interface Theme {
  color: string
}

const Container = styled.div<Theme>`
  padding: 0rem 2.4rem;
  font-size: ${({ theme }) => theme.type.size.lg};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.normal};
  color: ${(props) =>
    props.color == 'green'
      ? '#12635A'
      : props.color == 'yellow'
      ? '#0074C7'
      : props.color == 'purple'
      ? '#F2D4E9'
      : props.color == 'orange'
      ? '#205F7E'
      : props.color == 'red'
      ? '#303030'
      : '#072723'};
  transition: all 0.7s ease-in-out;
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

const Author = ({ text, theme }: { text: string; theme: string }) => {
  return <Container color={theme}>{text}</Container>
}

export default Author
