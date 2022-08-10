import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import Router from 'next/router'
import React, { useState, useEffect } from 'react'
import { Skeleton } from '../components/Skeleton'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [])
  return (
    <>
      {loading ? (
        <>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Skeleton />
          </ThemeProvider>
        </>
      ) : (
        <>
          <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </>
      )}
    </>
  )
}
