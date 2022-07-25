import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  margin: 0 auto;
  min-height: 12vh;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.green01};
  border-top: 2px solid ${({ theme }) => theme.color.green04};
  font-size: ${({ theme }) => theme.type.bodyMd};
`

const Code = styled.code`
  font-size: ${({ theme }) => theme.type.bodySm};
  background-color: ${({ theme }) => theme.color.gray05};
  margin: 0 8px;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: monospace;
`

const Footer = ({ text }: { text: string }) => {
  return (
    <Container>
      Hit <Code> Enter ⮐ </Code> to {text}
    </Container>
  )
}

export default Footer
