import React from 'react'
import styled from 'styled-components'
import { IndexMainBookContainer } from '../styles'
import moment from 'moment'

const Title = styled.h2`
  font-size: ${({ theme }) => theme.type.size.heading03};
  font-weight: ${({ theme }) => theme.type.weight.bold};
  line-height: ${({ theme }) => theme.type.height.lg};
  color: ${({ theme }) => theme.color.green.primary};
  padding: 1.2rem 0 0.8rem 2.4rem;
  width: 65vw;
`
const Summary = styled.p`
  font-size: ${({ theme }) => theme.type.size.md};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.lg};
  color: ${({ theme }) => theme.color.green.primary};
  margin: 0 0 0.8rem 0;
  padding: 0 0 1.2rem 2.4rem;
  width: 65vw;
`
const ContainerMeta = styled.div`
  display: flex;
  padding-left: 2.4rem;
  gap: 0.8rem;
`
const Meta = styled.p`
  font-size: ${({ theme }) => theme.type.size.sm};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.sm};
  color: ${({ theme }) => theme.color.green.secondary};
`
const Seperator = styled.div`
  color: ${({ theme }) => theme.color.green.secondary};
`
const Text = styled.p`
  font-size: ${({ theme }) => theme.type.size.sm};
  font-weight: ${({ theme }) => theme.type.weight.normal};
  line-height: ${({ theme }) => theme.type.height.lg};
  color: ${({ theme }) => theme.color.green.secondary};
  margin: 0 0 0.8rem 0;
  padding: 1.2rem 2.4rem;
  width: 65vw;
`
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
  const summary = data[0].summary
  const purchased = data[0].purchased
  const rating = data[0].rating

  return (
    <>
      <Title>{data[0].title}</Title>
      {summary && <Summary>{data[0].summary}</Summary>}
      <ContainerMeta>
        {rating && <Meta>{`Rating: ${data[0].rating}/5`}</Meta>}
        {purchased && <Seperator>&#9679;</Seperator>}
        {purchased && (
          <Meta>{`Purchased on: ${moment(data[0].purchased).format(
            'MMMM Do YYYY'
          )}`}</Meta>
        )}
      </ContainerMeta>
      <hr />
      <IndexMainBookContainer>
        <Text>Highlights taken from the book</Text>
        {data[0].highlights.map((e: any) => (
          <TextContainer key={e.text}>
            <Highlight>{e.text}</Highlight>
            <Page key={e.location.value}>Location {e.location.value}</Page>
          </TextContainer>
        ))}
      </IndexMainBookContainer>
    </>
  )
}

export default BookList
