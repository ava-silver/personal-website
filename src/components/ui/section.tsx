import { Card } from '@chakra-ui/react';

export function Section(props: Card.RootProps) {
  return (
    <Card.Root
      bg="bg.2"
      color="textColor"
      width={['100%', '90%', '40rem']}
      height="auto"
      border="none"
      {...props}
    >
      <Card.Body height="auto" minHeight="5rem">
        {props.children}
      </Card.Body>
    </Card.Root>
  );
}
