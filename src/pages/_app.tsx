import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/global'

const theme = {
  colors: {
    primary: '#0F172A',
    secondary: '#0070f3',
  },
} as const
export type Theme = typeof theme

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
