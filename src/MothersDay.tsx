import {
  Card,
  CardBody,
  CardHeader,
  Center,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
const theme = extendTheme({
  fonts: {
    body: 'Comfortaa, system-ui, sans-serif',
    heading: 'Comfortaa, system-ui, sans-serif',
  },
  colors: {
    bg: {
      1: '#f7d2f7',
      2: '#2a004d',
    },
    text: '#3b353b',
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

function Photos() {
  return (
    <Flex wrap="wrap" justifyContent="center">
      {Array.from(Array(5).keys()).map((i) => (
        <Card m={5} maxW="20rem" backgroundColor="#bea5cc">
          <CardBody>
            <Image src={`/momPhotos/${i}.jpg`} borderRadius={10} />
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
}

function Note() {
  return (
    <Card mx="10" maxW="40rem">
      <CardBody>
        <p>
          Because a physical card probably wouldn't have arrived in time,
          instead I opted for a digital approach!
        </p>
        <br />
        <p>
          With everything going on in the world, I'm so thankful I have such a
          wonderful and supportive mom I can always count on. ❤️❤️
        </p>
        <p>
          Thanks for being there for me through it all, through the hard times,
          the fun times, and all the times in between.
        </p>
        <br />
        <p>
          I cherish all the memories we've made together -- adventures on
          icelandic glaciers, wine tastings, getting our nails done together,
          going shopping for clothes (especially early on in my transition),
          family dinners with artichoke, coffee treats -- And I can't wait for
          all the memories we've yet to make! 🥰
        </p>
        <br />
        <p>
          Finally, I wanted to share some memories from the past couple years
          that I'll never forget! ❤️
        </p>
      </CardBody>
    </Card>
  );
}

function MothersDay() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Center m={10}>
          <Heading textAlign="center">Happy Mothers Day!!</Heading>
        </Center>
        <Note />
        <Photos />
        <Center mb={5} textAlign="center">
          All the Love, <br /> Your Daughter Ava ❤️
        </Center>
      </VStack>
    </ChakraProvider>
  );
}

export default MothersDay;
