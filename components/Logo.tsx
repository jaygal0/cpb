import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2.4rem 2.4rem 1.2rem 2.4rem;
  color: ${({ theme }) => theme.color.green.secondary};
  font-size: ${({ theme }) => theme.type.md};
  text-transform: capitalize;
  transition: all 0.7s ease-in-out;
`

const Logo = ({ color }: { color: string }) => {
  return (
    <Container>
      <svg
        width="64"
        height="44"
        viewBox="0 0 64 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1840_3084)">
          <path
            d="M0 15.9683C0 15.9683 0 8.04883 7.91951 8.04883H19.8002C19.8002 8.04883 19.8002 15.9683 11.8807 15.9683V27.849C11.8807 27.849 19.8002 27.849 19.8002 35.7686H7.91951C7.91951 35.7686 0 35.7686 0 27.849V15.9683Z"
            fill={
              color == 'green'
                ? '#198A7B'
                : color == 'yellow'
                ? '#0089EB'
                : color == 'purple'
                ? '#FEFBFC'
                : color == 'orange'
                ? '#205F7E'
                : color == 'red'
                ? '#303030'
                : '#198A7B'
            }
          />
        </g>
        <g clip-path="url(#clip1_1840_3084)">
          <path
            fill={
              color == 'green'
                ? '#198A7B'
                : color == 'yellow'
                ? '#0089EB'
                : color == 'purple'
                ? '#FEFBFC'
                : color == 'orange'
                ? '#205F7E'
                : color == 'red'
                ? '#303030'
                : '#198A7B'
            }
            d="M22.1 43.6881V12.01C22.1 8.04883 26.0584 8.04883 26.0584 8.04883H33.9779C41.8974 8.04883 41.8974 15.9683 41.8974 15.9683V27.849C41.8974 35.7686 33.9779 35.7686 33.9779 35.7686H30.0167C30.0167 35.7686 30.0167 43.6881 22.0972 43.6881"
          />
        </g>
        <g clip-path="url(#clip2_1840_3084)">
          <path
            d="M44.2002 0V31.6781C44.2002 35.6392 48.1614 35.6392 48.1614 35.6392H56.0809C64.0004 35.6392 64.0004 27.7197 64.0004 27.7197V15.839C64.0004 7.91951 56.0809 7.91951 56.0809 7.91951H52.1197C52.1197 7.91951 52.1197 0 44.2002 0Z"
            fill={
              color == 'green'
                ? '#198A7B'
                : color == 'yellow'
                ? '#0089EB'
                : color == 'purple'
                ? '#FEFBFC'
                : color == 'orange'
                ? '#205F7E'
                : color == 'red'
                ? '#303030'
                : '#198A7B'
            }
          />
        </g>
        <defs>
          <clipPath id="clip0_1840_3084">
            <rect
              width="19.8002"
              height="27.7197"
              fill={
                color == 'green'
                  ? '#198A7B'
                  : color == 'yellow'
                  ? '#0089EB'
                  : color == 'purple'
                  ? '#FEFBFC'
                  : color == 'orange'
                  ? '#205F7E'
                  : color == 'red'
                  ? '#303030'
                  : '#198A7B'
              }
              transform="translate(0 8.04883)"
            />
          </clipPath>
          <clipPath id="clip1_1840_3084">
            <rect
              width="19.8002"
              height="35.6392"
              fill={
                color == 'green'
                  ? '#198A7B'
                  : color == 'yellow'
                  ? '#0089EB'
                  : color == 'purple'
                  ? '#FEFBFC'
                  : color == 'orange'
                  ? '#205F7E'
                  : color == 'red'
                  ? '#303030'
                  : '#198A7B'
              }
              transform="translate(22.1001 8.04883)"
            />
          </clipPath>
          <clipPath id="clip2_1840_3084">
            <rect
              width="19.8002"
              height="35.6392"
              fill={
                color == 'green'
                  ? '#198A7B'
                  : color == 'yellow'
                  ? '#0089EB'
                  : color == 'purple'
                  ? '#FEFBFC'
                  : color == 'orange'
                  ? '#205F7E'
                  : color == 'red'
                  ? '#303030'
                  : '#198A7B'
              }
              transform="translate(44.2002)"
            />
          </clipPath>
        </defs>
      </svg>
    </Container>
  )
}

export default Logo
