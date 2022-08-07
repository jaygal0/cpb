import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Theme {
  color?: string
}

const Container = styled.div<Theme>`
  text-transform: capitalize;
  font-weight: 300;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: ${(props) =>
    props.color == 'green'
      ? '#34D7C4'
      : props.color == 'yellow'
      ? '#FFFED4'
      : props.color == 'purple'
      ? '#46485C'
      : props.color == 'orange'
      ? '#FFCEB8'
      : props.color == 'red'
      ? '#FFAEB5'
      : '#34D7C4'};
  color: ${(props) =>
    props.color == 'green'
      ? '#2D3047'
      : props.color == 'yellow'
      ? '#072723'
      : props.color == 'purple'
      ? '#EFF7FB'
      : props.color == 'orange'
      ? '#00538F'
      : props.color == 'red'
      ? '#0B3C37'
      : '#0B3C37'};
  transition: all 0.8s ease-in-out;

  &:hover {
    background: none;
    cursor: pointer;
  }
`
const BuiltBy = ({ color }: { color?: string }) => {
  return (
    <Link href="https://galina.to">
      <Container color={color}>built by joshua galinato</Container>
    </Link>
  )
}

export default BuiltBy
