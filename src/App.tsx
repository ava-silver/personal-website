import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import { ChakraProvider, extendTheme, defineStyleConfig, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};


const theme = extendTheme({
  fonts: {
    body: "Comfortaa, system-ui, sans-serif",
    heading: "Comfortaa, system-ui, sans-serif",
  },
  colors: {
    bg: {
      1: '#17002a',
      2: '#2a004d'
    },
    text: '#efddff'
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.5rem",
    xl: "3rem",
    "2xl": "3.5rem",
    "3xl": "4rem",
    "4xl": "4.5rem",
    "5xl": "5rem",
    "6xl": "5.5rem",
    "7xl": "6rem",
    "8xl": "6.5rem",
    "9xl": "7rem",
  },
  // components: {
  //   Card: defineStyleConfig({
  //     baseStyle: {
  //       display: 'flex',
  //       flexDirection: 'column',
  //       background: '#2a004d',
  //       color: '#efddff',
  //       alignItems: 'center',
  //       gap: 6,
  //     },
  //   })
  // },
  styles: {
    global: {
      body: {
        color: 'text',
        bg: 'bg.1',
      },
      '.trans': {
        background: `linear-gradient(
          90deg,
          #55cdfc 0%,
          #55cdfc 12%,
          #f7a8b8 22%,
          #f7a8b8 35%,
          #ffffff 45%,
          #ffffff 55%,
          #f7a8b8 65%,
          #f7a8b8 77%,
          #55cdfc 87%,
          #55cdfc 100%
        )`,
        'font-weight': 600,
        '-webkit-background-clip': 'text',
        'background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
      },
      a: {
        'text-decoration': 'none'
      }
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Header /> */}
      <Content />
    </ChakraProvider>
  );
}

export default App;
