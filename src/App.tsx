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
    text: '#efddff',
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
        'text-decoration': 'none',
      },
      '.clickable': {
        padding: '5px',
        display: 'inline-block',
        position: 'relative',
        transition: 'transform 0.4s ease-in-out',
      },
      '.clickable:hover': {
        transform: 'scale(1.05)',
        'background-color':
          'rgba(255, 255, 255, 0.1)' /* Adjust the opacity (0.5) as desired */,
        'border-radius': '10px' /* Add rounded corners if needed */,
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
