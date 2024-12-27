import resume_svg from './icons/resume-content.svg';
import github_svg from './icons/github-content.svg';
import linkedin_svg from './icons/linkedin-content.svg';
import badges from './88x31s.json';
import {
  Center,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Card,
  CardBody,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Spacer,
  AccordionIcon,
  useMediaQuery,
} from '@chakra-ui/react';
import { ComponentProps, useMemo } from 'react';

function Section(props: ComponentProps<'div'>) {
  return (
    <Card
      sx={{
        bg: 'bg.2',
        color: 'textColor',
        width: ['100%', '90%', '40rem'],
        height: 'auto',
      }}
    >
      <CardBody sx={{ height: 'auto', minHeight: '5rem' }}>
        {props.children}
      </CardBody>
    </Card>
  );
}

function Content() {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
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
      <Work />
      <Resources />
      <Oomfies />
      <Spacer />
      <Footer />
    </Stack>
  );
}

function BodyText({ children }: ComponentProps<'p'>) {
  return <Text sx={{ fontSize: '1.25rem' }}>{children}</Text>;
}

function MinorHeading({ children }: ComponentProps<'h2'>) {
  return <Heading sx={{ fontSize: '2rem' }}>{children}</Heading>;
}

function Greeting() {
  const cat = useMemo(() => (Math.random() < 0.4 ? ':3' : ''), []);
  return (
    <Section>
      <MinorHeading>hiya there!</MinorHeading>
      <BodyText>
        i'm ava silver (<span className="pronouns">she/her</span>
        ). welcome to my corner of the internet! {cat}
      </BodyText>
    </Section>
  );
}

function WorkExperience({
  name,
  icon,
  children,
}: {
  name: string;
  icon: string;
  squareIcon?: boolean;
} & ComponentProps<'div'>) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Center flexDir="row" gap="1rem">
            <Center
              width="45px"
              height="45px"
              borderRadius="5px"
              backgroundColor="white"
            >
              <Image src={icon} alt={`${name} Icon`} maxW="40px" maxH="40px" />
            </Center>
            {name}
          </Center>
          <Spacer />
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
}

function Work() {
  return (
    <Section>
      <MinorHeading>work experience:</MinorHeading>
      <Accordion allowToggle marginTop="1rem">
        <WorkExperience name="Datadog" icon="/logos/datadog.png">
          I'm currently a Software Engineer II at{' '}
          <a href="https://www.datadoghq.com/">Datadog</a>, where I started as
          an intern in 2022 and 2023 during my time at Northeastern University.
          I work full-stack using Python, Go, Typescript/React, and Kubernetes,
          and work day-to-day on a large scale microservice architecture.
        </WorkExperience>
        <WorkExperience name="Azure" icon="/logos/azure.png">
          During my third co-op, I worked at{' '}
          <a href="https://azure.microsoft.com">Microsoft Azure</a> on the
          Software Load Balancer (SLB) Buildout team of Azure Core. Here I
          worked primarily with C# and helped develop internal tooling for core
          Azure infrastructure.
        </WorkExperience>
        <WorkExperience name="Bose" icon="/logos/bose.png">
          During my first co-op, I worked at{' '}
          <a href="https://www.bose.com/">Bose</a> in the Automotive Systems
          Division working on Android app development and OS extensions for{' '}
          <a href="https://source.android.com/devices/automotive/start/what_automotive">
            Android Automotive
          </a>
          .
        </WorkExperience>
        <WorkExperience name="Northeastern" icon="/logos/northeastern.webp">
          During my time at Northeastern Univeristy studing computer science, I
          was a Teaching Assistant for Algorithms & Data Structures, and
          Fundamentals of Computer Science 1 Accelerated (where I also worked a
          second semester as a Head TA).
        </WorkExperience>
      </Accordion>
    </Section>
  );
}

function Resource({
  name,
  src,
  href,
}: {
  name: string;
  src: string;
  href: string;
}) {
  return (
    <a href={href} className="clickable">
      <Center flexDir="column">
        <Text>{name}</Text>
        <Image src={src} alt={name} />
      </Center>
    </a>
  );
}

function Resources() {
  return (
    <Section>
      <Center gap="2rem">
        <Resource name="Resume" href="resume.pdf" src={resume_svg} />
        <Resource
          name="LinkedIn"
          href="https://www.linkedin.com/in/ava-silver/"
          src={linkedin_svg}
        />
        <Resource
          name="Github"
          href="https://github.com/ava-silver"
          src={github_svg}
        />
      </Center>
    </Section>
  );
}

function EightyEightThirtyOne({
  src,
  href,
  alt,
}: {
  src: string;
  href: string;
  alt: string;
}) {
  return (
    <a href={href}>
      <Image
        src={'/badges/' + src}
        alt={alt}
        height="31px"
        width="88px"
        sx={{ imageRendering: 'pixelated' }}
      />
    </a>
  );
}

function Oomfies() {
  const useAlt = useMemo(() => Math.random() < 0.1, []);
  return (
    <Section>
      <Flex wrap="wrap" gap="1rem" justifyContent="center" alignItems="center">
        {badges.map(({ name, image, url, alt }) => (
          <EightyEightThirtyOne
            src={(useAlt && alt) || image}
            href={url}
            alt={name}
            key={name}
          />
        ))}
      </Flex>
    </Section>
  );
}

function Footer() {
  return (
    <Center gap="2rem">
      <Text>Ava Silver {new Date().getFullYear()}</Text>
      <a href="mailto:ava@avasilver.dev" className="clickable">
        ava@avasilver.dev
      </a>
      <Resource
        name="source code"
        href="https://github.com/ava-silver/personal-website/"
        src={github_svg}
      />
    </Center>
  );
}

export default Content;
