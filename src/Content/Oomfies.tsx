import { useMemo } from 'react';
import { Section } from './common';
import { Flex, Image } from '@chakra-ui/react';
import badges from './88x31s.json';

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
    <a href={href}>
      <Image
        src={'/badges/' + src}
        alt={alt}
        height="31px"
        width="88px"
        sx={{ imageRendering: 'pixelated' }}
      />
    </a>
  );
}

export default function Oomfies() {
  const useAlt = useMemo(() => Math.random() < 0.1, []);
  return (
    <Section>
      <Flex wrap="wrap" gap="1rem" justifyContent="center" alignItems="center">
        {badges.map(({ name, image, url, alt }) => (
          <EightyEightThirtyOne
            src={(useAlt && alt) || image}
            href={url}
            alt={name}
            key={name}
          />
        ))}
      </Flex>
    </Section>
  );
}
