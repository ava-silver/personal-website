import { Stack } from '@chakra-ui/react';
import { ComponentProps } from 'react';

export function Column({ children }: ComponentProps<'div'>) {
  return (
    <Stack alignItems="center" m={[3, 8]} gap="1rem">
      {children}
    </Stack>
  );
}

