import React from 'react'
import styled from 'styled-components'
import { IndexMainContainer } from '../styles'

const Container = styled.div`
  padding: 2.4rem;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0rem;
  background: ${(props) =>
    props.theme == 'green'
      ? '#27C3B1'
      : props.theme == 'yellow'
      ? '#FFFD83'
      : props.theme == 'purple'
      ? '#2D3047'
      : props.theme == 'orange'
      ? '#FFB799'
      : props.theme == 'red'
      ? '#FB7C86'
      : '#27C3B1'};
  position: relative;
  transition: all 0.7s ease-in-out;
`

const Div1 = styled.div`
  background: ${({ theme }) => theme.color.green.skeleton};
  height: 4rem;
  width: 10vw;
  border-radius: 0.4rem;
  margin-bottom: 1.2rem;
  background: linear-gradient(0.25turn, transparent, #56f1df, transparent),
    linear-gradient(#3cddca, #3cddca),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#3cddca, #3cddca);
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.7s alternate infinite;
  cursor: progress;

  @keyframes loading {
    to {
      background-position: 0, 100%;
    }
  }

  &.md {
    width: 65vw;
  }

  &.sm {
    width: 45vw;
  }
`
const Div2 = styled.div`
  background: ${({ theme }) => theme.color.green.skeleton};
  height: 3rem;
  width: 50vw;
  border-radius: 0.4rem;
  margin-bottom: 2.4rem;
  background: linear-gradient(0.25turn, transparent, #56f1df, transparent),
    linear-gradient(#3cddca, #3cddca),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#3cddca, #3cddca);
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.7s alternate infinite;
  cursor: progress;

  @keyframes loading {
    to {
      background-position: 0, 100%;
    }
  }
  &.md {
    width: 40vw;
  }

  &.sm {
    width: 50vw;
  }
`

const Div3 = styled.div`
  background: ${({ theme }) => theme.color.green.skeleton};
  height: 3rem;
  width: 20vw;
  border-radius: 0.4rem;
  margin-bottom: 2.4rem;
  background: linear-gradient(0.25turn, transparent, #56f1df, transparent),
    linear-gradient(#3cddca, #3cddca),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
    linear-gradient(#3cddca, #3cddca);
  background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.7s alternate infinite;
  cursor: progress;

  @keyframes loading {
    to {
      background-position: 0, 100%;
    }
  }

  &.md {
    width: 30vw;
  }

  &.sm {
    width: 25vw;
  }
`

export const Skeleton = () => {
  return (
    <Container>
      <Div1 />
      <Div2 />
      <Div3 />
      <Div1 className="md" />
      <Div2 className="md" />
      <Div3 className="sm" />
      <Div1 className="sm" />
      <Div2 className="md" />
      <Div3 />
    </Container>
  )
}
