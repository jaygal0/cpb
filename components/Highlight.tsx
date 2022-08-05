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
`

const ContainerDefaultText = styled.h1<Theme>`
  padding: 1.2rem 2.4rem;
  max-width: 80vw;
  font-size: ${({ theme }) => theme.type.size.display};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.normal};
  color: ${(props) =>
    props.theme == 'green'
      ? '#072723'
      : props.theme == 'yellow'
      ? '#FFFD83'
      : props.theme == 'purple'
      ? '#2D3047'
      : props.theme == 'orange'
      ? '#FFB799'
      : props.theme == 'red'
      ? '#FB7C86'
      : '#072723'};
  transition: all 0.7s ease-in-out;
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
