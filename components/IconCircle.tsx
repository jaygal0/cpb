import React from 'react'

const Icon = ({
  color,
  shuffle,
  list,
}: {
  color: string
  shuffle: boolean
  list: boolean
}) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32"
        cy="32"
        r="32"
        fill={
          color == 'green'
            ? '#C3F4EE'
            : color == 'yellow'
            ? '#DBF0FF'
            : color == 'purple'
            ? '#FEFBFC'
            : color == 'orange'
            ? '#DEEFF7'
            : color == 'red'
            ? '#E8E8E8'
            : '#198A7B'
        }
      />

      {shuffle && (
        <path
          d="M28.2337 30.1L22.2671 24.1333C22.0226 23.8889 21.9004 23.5778 21.9004 23.2C21.9004 22.8222 22.0226 22.5111 22.2671 22.2666C22.5115 22.0222 22.8226 21.9 23.2004 21.9C23.5782 21.9 23.8893 22.0222 24.1337 22.2666L30.1004 28.2333L28.2337 30.1ZM36.0004 42.6666C35.6226 42.6666 35.3062 42.5386 35.0511 42.2826C34.7951 42.0275 34.6671 41.7111 34.6671 41.3333C34.6671 40.9555 34.7951 40.6391 35.0511 40.384C35.3062 40.128 35.6226 40 36.0004 40H38.1337L33.8671 35.7333L35.7671 33.8333L40.0004 38.0666V36C40.0004 35.6222 40.1284 35.3053 40.3844 35.0493C40.6395 34.7942 40.9559 34.6666 41.3337 34.6666C41.7115 34.6666 42.0279 34.7942 42.2831 35.0493C42.5391 35.3053 42.6671 35.6222 42.6671 36V41.3333C42.6671 41.7111 42.5391 42.0275 42.2831 42.2826C42.0279 42.5386 41.7115 42.6666 41.3337 42.6666H36.0004ZM22.2671 41.7333C22.0226 41.4889 21.9004 41.1778 21.9004 40.8C21.9004 40.4222 22.0226 40.1111 22.2671 39.8666L38.1337 24H36.0004C35.6226 24 35.3062 23.8724 35.0511 23.6173C34.7951 23.3613 34.6671 23.0444 34.6671 22.6666C34.6671 22.2889 34.7951 21.972 35.0511 21.716C35.3062 21.4609 35.6226 21.3333 36.0004 21.3333H41.3337C41.7115 21.3333 42.0279 21.4609 42.2831 21.716C42.5391 21.972 42.6671 22.2889 42.6671 22.6666V28C42.6671 28.3778 42.5391 28.6942 42.2831 28.9493C42.0279 29.2053 41.7115 29.3333 41.3337 29.3333C40.9559 29.3333 40.6395 29.2053 40.3844 28.9493C40.1284 28.6942 40.0004 28.3778 40.0004 28V25.8666L24.1337 41.7333C23.8893 41.9778 23.5782 42.1 23.2004 42.1C22.8226 42.1 22.5115 41.9778 22.2671 41.7333Z"
          fill={
            color == 'green'
              ? '#198A7B'
              : color == 'yellow'
              ? '#0089EB'
              : color == 'purple'
              ? '#2D3047'
              : color == 'orange'
              ? '#29779E'
              : color == 'red'
              ? '#4A4A4A'
              : '#198A7B'
          }
        />
      )}

      {list && (
        <path
          d="M29.3337 30.6667H40.0003V28H29.3337V30.6667ZM29.3337 34.6667H34.667V32H29.3337V34.6667ZM29.3337 26.6667H40.0003V24H29.3337V26.6667ZM26.667 40C25.9337 40 25.3061 39.7391 24.7843 39.2174C24.2617 38.6947 24.0003 38.0667 24.0003 37.3334V21.3334C24.0003 20.6 24.2617 19.972 24.7843 19.4494C25.3061 18.9276 25.9337 18.6667 26.667 18.6667H42.667C43.4003 18.6667 44.0283 18.9276 44.551 19.4494C45.0728 19.972 45.3337 20.6 45.3337 21.3334V37.3334C45.3337 38.0667 45.0728 38.6947 44.551 39.2174C44.0283 39.7391 43.4003 40 42.667 40H26.667ZM26.667 37.3334H42.667V21.3334H26.667V37.3334ZM26.667 21.3334V37.3334V21.3334ZM21.3337 45.3334C20.6003 45.3334 19.9728 45.0725 19.451 44.5507C18.9283 44.028 18.667 43.4 18.667 42.6667V24H21.3337V42.6667H40.0003V45.3334H21.3337Z"
          fill={
            color == 'green'
              ? '#198A7B'
              : color == 'yellow'
              ? '#0089EB'
              : color == 'purple'
              ? '#2D3047'
              : color == 'orange'
              ? '#29779E'
              : color == 'red'
              ? '#4A4A4A'
              : '#198A7B'
          }
        />
      )}
    </svg>
  )
}

export default Icon
