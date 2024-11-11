import Content from './Content';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    body: 'Comfortaa, system-ui, sans-serif',
    heading: 'Comfortaa, system-ui, sans-serif',
  },
  colors: {
    bg: {
      1: '#17002a',
      2: '#2a004d',
    },
    textColor: '#efddff',
  },
  fontSizes: {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3rem',
    '2xl': '3.5rem',
    '3xl': '4rem',
    '4xl': '4.5rem',
    '5xl': '5rem',
    '6xl': '5.5rem',
    '7xl': '6rem',
    '8xl': '6.5rem',
    '9xl': '7rem',
  },
  styles: {
    global: {
      body: {
        color: 'textColor',
        fontWeight: 600,
        bg: 'bg.1',
      },
      '.pronouns': {
        background: `linear-gradient(
          90deg,
          #efddff 0%,
          #efddff 49.9%,
          #55cdfc 50%,
          #55cdfc 56%,
          #f7a8b8 61%,
          #f7a8b8 67.5%,
          #ffffff 72.5%,
          #ffffff 77.5%,
          #f7a8b8 82.5%,
          #f7a8b8 88.5%,
          #55cdfc 93.5%,
          #55cdfc 100%
        )`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200% 100%',
        transition: 'background-position 1s ease-in-out',
      },
      '.pronouns:hover': {
        backgroundPosition: '100%',
      },
      a: {
        textDecoration: 'none',
      },
      '.clickable': {
        padding: '5px',
        display: 'inline-block',
        position: 'relative',
        transition: 'transform 0.4s ease-in-out',
      },
      '.clickable:hover': {
        transform: 'scale(1.05)',
        backgroundColor:
          'rgba(255, 255, 255, 0.1)' /* Adjust the opacity (0.5) as desired */,
        borderRadius: '10px' /* Add rounded corners if needed */,
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Content />
    </ChakraProvider>
  );
}

export default App;
