import { Stack, StackProps } from '@chakra-ui/react';

export function Column(props: StackProps) {
  return (
    <Stack alignItems="center" m={[3, 8]} gap="1rem" {...props}>
      {props.children}
    </Stack>
  );
}
