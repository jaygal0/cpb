import React from 'react'
import styled from 'styled-components'
import { IndexMainBookContainer } from '../styles'

const TextContainer = styled.div`
  font-size: ${({ theme }) => theme.type.size.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.green.primary};
  padding: 1.2rem 2.4rem;
  width: 65vw;
`

const Highlight = styled.p`
  font-size: ${({ theme }) => theme.type.size.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.tall};
  color: ${({ theme }) => theme.color.green.primary};
  margin: 0 0 0.8rem 0;
`

const Page = styled.p`
  font-size: ${({ theme }) => theme.type.size.sm};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  color: ${({ theme }) => theme.color.green.secondary};
`

const BookList = ({ data }: { data: any }) => {
  return (
    <IndexMainBookContainer>
      {data[0].highlights.map((e: any) => (
        <TextContainer>
          <Highlight key={e.text}>{e.text}</Highlight>
          <Page key={e.location.value}>Page {e.location.value}</Page>
        </TextContainer>
      ))}
    </IndexMainBookContainer>
  )
}

export default BookList
