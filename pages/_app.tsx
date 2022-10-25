import { AppProps } from 'next/app';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import '../styles/globals.css'
import Navbar from '../layouts/Navbar';
import { useState } from 'react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme
        }}
      >
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
