import { Center, Text } from '@chakra-ui/react';
import { Resource } from '../components/ui/resource';
import github_svg from './icons/github-content.svg';

export default function Footer() {
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
