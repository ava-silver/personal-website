import { useMemo } from 'react';
import { BodyText, MinorHeading, Section } from './common';

export default function Greeting() {
  const cat = useMemo(() => (Math.random() < 0.4 ? ':3' : ''), []);
  return (
    <Section>
      <MinorHeading>hiya there!</MinorHeading>
      <BodyText>
        i'm ava silver (<span className="pronouns">she/her</span>
        ). welcome to my corner of the internet! {cat}
      </BodyText>
    </Section>
  );
}
