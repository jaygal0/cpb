import React from 'react'
import styled from 'styled-components'

interface Theme {
  color: string
}

const ContainerSmallText = styled.h1<Theme>`
  padding: 1.2rem 2.4rem;
  max-width: 80vw;
  font-size: ${({ theme }) => theme.type.size.heading02};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.md};
  color: ${(props) =>
    props.color == 'green'
      ? '#072723'
      : props.color == 'yellow'
      ? '#005491'
      : props.color == 'purple'
      ? '#F0CAE4'
      : props.color == 'orange'
      ? '#143B4E'
      : props.color == 'red'
      ? '#0D0D0D'
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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: 1.2rem 1.6rem;
    max-width: 100vw;
    font-size: ${({ theme }) => theme.type.size.md};
    font-weight: ${({ theme }) => theme.type.weight.bold};
    line-height: ${({ theme }) => theme.type.height.md};
  }
`

const ContainerDefaultText = styled.h1<Theme>`
  padding: 1.2rem 2.4rem;
  max-width: 80vw;
  font-size: ${({ theme }) => theme.type.size.display};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.normal};
  color: ${(props) =>
    props.color == 'green'
      ? '#072723'
      : props.color == 'yellow'
      ? '#005491'
      : props.color == 'purple'
      ? '#F0CAE4'
      : props.color == 'orange'
      ? '#143B4E'
      : props.color == 'red'
      ? '#0D0D0D'
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

  @media screen and (max-width: ${({ theme }) => theme.breakPoint.tablet}) {
    padding: 1.2rem 1.6rem;
    max-width: 100vw;
    font-size: ${({ theme }) => theme.type.size.lg};
    font-weight: ${({ theme }) => theme.type.weight.bold};
    line-height: ${({ theme }) => theme.type.height.md};
  }
`

const Highlight = ({
  text,
  count,
  theme,
}: {
  text: string
  count: number
  theme: string
}) => {
  return (
    <>
      {count <= 70 ? (
        <ContainerDefaultText color={theme}>{text}</ContainerDefaultText>
      ) : (
        <ContainerSmallText color={theme}>{text}</ContainerSmallText>
      )}
    </>
  )
}

export default Highlight
