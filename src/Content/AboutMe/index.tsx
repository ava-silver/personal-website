import { Section } from '../../components/ui/section';
import { AccordionRoot, AccordionSection } from '../../components/ui/accordion';

import Work from './Work';
import workSvg from '../icons/work.svg';
import Hobbies from './Hobbies';
import smileSvg from '../icons/smile-sticker.svg';
import { Spacer } from '@chakra-ui/react';

export default function AboutMe() {
  return (
    <Section>
      <AccordionRoot multiple variant="subtle">
        <AccordionSection name="work experience" icon={workSvg} titleSize="1em">
          <Work />
        </AccordionSection>
        <Spacer p={1} />
        <AccordionSection name="hobbies & fun" icon={smileSvg} titleSize="1em">
          <Hobbies />
        </AccordionSection>
      </AccordionRoot>
    </Section>
  );
}
