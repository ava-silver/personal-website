import { ComponentProps } from 'react';
import { Text, Heading } from '@chakra-ui/react';

export function BodyText({ children }: ComponentProps<'p'>) {
  return <Text fontSize="1.25rem">{children}</Text>;
}

export function MinorHeading({ children }: ComponentProps<'h2'>) {
  return <Heading fontSize="2rem">{children}</Heading>;
}
