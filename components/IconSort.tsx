import React from 'react'

const IconSort = ({ sortValue }: { sortValue?: boolean }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {sortValue && (
        <path
          d="M23 39H31M23 9H43H23ZM5 16L13 8L5 16ZM13 8V42V8ZM23 19H39H23ZM23 29H35H23Z"
          stroke="#072723"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {!sortValue && (
        <path
          d="M23 38H31M23 8H43H23ZM14 41L6 33L14 41ZM14 7V41V7ZM23 18H39H23ZM23 28H35H23Z"
          stroke="#072723"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default IconSort
