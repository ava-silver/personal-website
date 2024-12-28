import { chakra } from '@chakra-ui/react';

export const Link = chakra('a', {
  base: {
    color: 'cyan.500',
    _hover: {
      textDecoration: 'underline',
    },
  },
});
