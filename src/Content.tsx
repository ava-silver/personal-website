import logo from './icons/logo-header.svg';
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
} from '@chakra-ui/react';
import { ComponentProps, useMemo } from 'react';

function Section(props: ComponentProps<'div'>) {
  return (
    <Card
      sx={{
        bg: 'bg.2',
        color: 'text',
        width: ['100%', '45rem'],
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
  return (
    <Stack alignItems="center" m={[3, 8]} gap="1rem">
      <Box paddingY="1rem">
        <Section>
          <Center gap="1rem">
            <Image src={logo} />
            <Heading>ava</Heading>
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
        i'm ava silver (
        <a href="https://pronoun.is/she">
          <span className="trans">she/her</span>
        </a>
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
            <Image
              src={icon}
              alt={`${name} Icon`}
              height="40px"
              width="40px"
              sx={{
                borderRadius: '10px',
                verticalAlign: 'middle',
              }}
            />
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
        <WorkExperience
          name="Datadog"
          icon="https://imgix.datadoghq.com/img/dd_logo_n_70x75.png"
        >
          I'm currently a Software Engineer at{' '}
          <a href="https://www.datadoghq.com/" target="_blank">
            Datadog
          </a>{' '}
          on the Azure Integrations team. I worked here as my second co-op
          (2022), as well as part time during my last semester at Northeastern
          University. I work primarily as a backend developer using Python,
          Kubernetes, and large scale microservice architecture.
        </WorkExperience>
        <WorkExperience
          name="Azure"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/260px-Microsoft_Azure.svg.png"
        >
          During my third co-op, I worked at{' '}
          <a href="https://azure.microsoft.com" target="_blank">
            Microsoft Azure
          </a>{' '}
          on the Software Load Balancer (SLB) Buildout team of Azure Core. Here
          I worked primarily with C# and helped develop internal tooling for
          core Azure infrastructure.
        </WorkExperience>
        <WorkExperience
          name="Bose"
          icon="https://static.bose.com/etc/designs/bose/consumer-products-2016/design/images/bose_logo.png"
        >
          During my first co-op, I worked at{' '}
          <a href="https://www.bose.com/" target="_blank">
            Bose
          </a>{' '}
          in the Automotive Systems Division working on Android app development
          and OS extensions for{' '}
          <a
            href="https://source.android.com/devices/automotive/start/what_automotive"
            target="_blank"
          >
            Android Automotive
          </a>
          .
        </WorkExperience>
        <WorkExperience
          name="NEU"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Northeastern_seal.svg/1200px-Northeastern_seal.svg.png"
        >
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
    <a href={href} target="_blank">
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
        <Resource name="Resume" href="Resume.pdf" src={resume_svg} />
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
    <a href={href} target="_blank">
      <Image src={src} alt={alt} height="31px" width="88px" />
    </a>
  );
}

function Oomfies() {
  return (
    <Section>
      <Flex wrap="wrap" gap="1rem" justifyContent="center" alignItems="center">
        {badges.map(({ name, image, url }) => (
          <EightyEightThirtyOne src={image} href={url} alt={name} />
        ))}
      </Flex>
    </Section>
  );
}

function Footer() {
  return (
    <Center gap="2rem">
      <Text>Ava Silver {new Date().getFullYear()}</Text>
      <a href="mailto:ava@avasilver.dev" target="_blank">
        ava@avasilver.dev
      </a>
    </Center>
  );
}

export default Content;
