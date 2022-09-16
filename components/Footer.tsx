import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.footer`
  padding: 6.4rem 2.4rem 2.4rem 0;
  max-width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.green.primary};
  font-size: ${({ theme }) => theme.type.md};
  position: absolute;
  right: 0;
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

const ContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
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

const BuiltBy = styled.div`
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.white};
  font-weight: 300;
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

const Footer = ({ theme }: { theme?: string }) => {
  return (
    <Container>
      <ContainerIcons>
        <Image src="/shuffle.svg" width={64} height={64} alt="" />
        <Image src="/book-list.svg" width={64} height={64} alt="" />
      </ContainerIcons>
      <BuiltBy>built by joshua galinato</BuiltBy>
    </Container>
  )
}

export default Footer
