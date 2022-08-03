import React from 'react'
import styled from 'styled-components'

const ContainerSmallText = styled.h1`
  padding: 1.2rem 2.4rem;
  max-width: 80vw;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.size.heading03};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.normal};

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const ContainerDefaultText = styled.h2`
  padding: 1.2rem 2.4rem;
  max-width: 80vw;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.size.display};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.normal};

  ::selection {
    background: ${({ theme }) => theme.color.green04};
  }
`

const Highlight = ({ text, count }: { text: string; count: number }) => {
  console.log(count)

  return (
    <>
      {count <= 10 ? (
        <ContainerDefaultText>{text}</ContainerDefaultText>
      ) : (
        <ContainerSmallText>{text}</ContainerSmallText>
      )}
    </>
  )
}

export default Highlight
