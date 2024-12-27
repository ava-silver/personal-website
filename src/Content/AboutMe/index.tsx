import { Accordion } from '@chakra-ui/react';
import { AccordionSection, Section } from '../common';
import Work from './Work';
import workSvg from '../icons/work.svg';
import Hobbies from './Hobbies';
import smileSvg from '../icons/smile-sticker.svg';

export default function AboutMe() {
  return (
    <Section>
      <Accordion allowToggle allowMultiple variant="outline">
        <AccordionSection name="work experience" icon={workSvg} titleSize="1em">
          <Work />
        </AccordionSection>
        <AccordionSection name="hobbies & fun" icon={smileSvg} titleSize="1em">
          <Hobbies />
        </AccordionSection>
      </Accordion>
    </Section>
  );
}
