import {
  Heading,
  Card,
  CardBody,
  Text,
  Image,
  Center,
  AccordionItem,
  AccordionButton,
  Spacer,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { ComponentProps } from 'react';

export function Section(props: ComponentProps<'div'>) {
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

export function BodyText({ children }: ComponentProps<'p'>) {
  return <Text sx={{ fontSize: '1.25rem' }}>{children}</Text>;
}

export function MinorHeading({ children }: ComponentProps<'h2'>) {
  return <Heading sx={{ fontSize: '2rem' }}>{children}</Heading>;
}

export function Resource({
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

interface AccordionSectionProps {
  name: string;
  icon: string;
  titleSize?: string;
}

export function AccordionSection({
  name,
  icon,
  titleSize = '0.75em',
  children,
}: ComponentProps<'div'> & AccordionSectionProps) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Center flexDir="row" gap="1rem" fontSize={titleSize}>
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
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
}
