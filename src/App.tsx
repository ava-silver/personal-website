import Content from './Content';
import Blog from './Blog';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router';

const system = createSystem(defaultConfig, {
  globalCss: {
    html: {
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
  theme: {
    tokens: {
      fonts: {
        body: { value: 'Comfortaa, system-ui, sans-serif' },
        heading: { value: 'Comfortaa, system-ui, sans-serif' },
      },
      colors: {
        bg: {
          1: { value: '#17002a' },
          2: { value: '#2a004d' },
        },
        brooke: {
          pink: { value: '#ff8ac4' },
        },
        textColor: { value: '#efddff' },
      },
      fontSizes: {
        xs: { value: '1rem' },
        sm: { value: '1.5rem' },
        md: { value: '2rem' },
        lg: { value: '2.5rem' },
        xl: { value: '3rem' },
        '2xl': { value: '3.5rem' },
        '3xl': { value: '4rem' },
        '4xl': { value: '4.5rem' },
        '5xl': { value: '5rem' },
        '6xl': { value: '5.5rem' },
        '7xl': { value: '6rem' },
        '8xl': { value: '6.5rem' },
        '9xl': { value: '7rem' },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
