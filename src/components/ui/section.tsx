import { Card } from '@chakra-ui/react';
import { ComponentProps } from 'react';

export function Section(props: ComponentProps<'div'>) {
  return (
    <Card.Root
      bg="bg.2"
      color="textColor"
      width={['100%', '90%', '40rem']}
      height="auto"
      border="none"
    >
      <Card.Body height="auto" minHeight="5rem">
        {props.children}
      </Card.Body>
    </Card.Root>
  );
}
