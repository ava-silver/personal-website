import {
  Box,
  Center,
  Heading,
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
import { Column } from '../components/ui/column';

export default function Content() {
  const [isMobile] = useMediaQuery(['(max-width: 768px)'], {
    fallback: [false],
  });
  return (
    <Column>
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
    </Column>
  );
}
