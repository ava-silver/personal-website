import { useMemo } from 'react';
import { Section } from '../components/ui/section';
import { BodyText, MinorHeading } from '../components/ui/text';

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
