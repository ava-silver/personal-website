import {
  Box,
  Center,
  Heading,
  Stack,
  useMediaQuery,
  Image,
  Spacer,
} from '@chakra-ui/react';
import Greeting from './Greeting';
import { Section } from '../components/ui/section';
import Oomfies from './Oomfies';
import Resources from './Resources';
import Footer from './Footer';
import AboutMe from './AboutMe';

export default function Content() {
  const [isMobile] = useMediaQuery(['(max-width: 768px)'], {
    fallback: [false],
  });
  return (
    <Stack alignItems="center" m={[3, 8]} gap="1rem">
      <Box paddingY="1rem">
        <Section>
          <Center gap="1rem">
            <Image src="/logo.svg" h="5rem" />
            <Heading>ava {!isMobile && 'silver'}</Heading>
          </Center>
        </Section>
      </Box>
      <Greeting />
      <AboutMe />
      <Resources />
      <Oomfies />
      <Spacer />
      <Footer />
    </Stack>
  );
}
