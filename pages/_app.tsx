import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SSRProvider} from '@react-aria/ssr';
import { Container, createTheme, NextUIProvider, StyledContainer } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
   const darkTheme = createTheme({
      type: 'dark',
    })
    
  return <>
      <SSRProvider>
        <NextThemesProvider defaultTheme="dark" attribute="class" value={{ dark: darkTheme.className }}>
         <NextUIProvider>
         	<StyledContainer>
          	<Component {...pageProps} />
          </StyledContainer>
        </NextUIProvider>
      </NextThemesProvider>
    </SSRProvider>
  </>
   
   
}

export default MyApp
