import { Center, Image, Text } from '@chakra-ui/react';

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
