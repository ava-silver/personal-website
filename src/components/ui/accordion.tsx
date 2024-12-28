import {
  Accordion,
  Box,
  Center,
  chakra,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';
import * as React from 'react';
import { LuChevronDown } from 'react-icons/lu';

interface AccordionItemTriggerProps extends Accordion.ItemTriggerProps {
  indicatorPlacement?: 'start' | 'end';
}

export const AccordionItemTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionItemTriggerProps
>(function AccordionItemTrigger(props, ref) {
  const { children, indicatorPlacement = 'end', ...rest } = props;
  return (
    <Accordion.ItemTrigger {...rest} ref={ref}>
      {indicatorPlacement === 'start' && (
        <Accordion.ItemIndicator rotate={{ base: '-90deg', _open: '0deg' }}>
          <LuChevronDown />
        </Accordion.ItemIndicator>
      )}
      <HStack gap="4" flex="1" textAlign="start" width="full">
        {children}
      </HStack>
      {indicatorPlacement === 'end' && (
        <Accordion.ItemIndicator>
          <LuChevronDown />
        </Accordion.ItemIndicator>
      )}
    </Accordion.ItemTrigger>
  );
});

interface AccordionItemContentProps extends Accordion.ItemContentProps {}

export const AccordionItemContent = React.forwardRef<
  HTMLDivElement,
  AccordionItemContentProps
>(function AccordionItemContent(props, ref) {
  return (
    <Accordion.ItemContent>
      <Accordion.ItemBody {...props} ref={ref} />
    </Accordion.ItemContent>
  );
});

export const AccordionRoot = chakra(Accordion.Root, {
  base: {
    margin: 0,
    padding: 0,
  },
});
export const AccordionItem = Accordion.Item;

interface AccordionSectionProps {
  name: string;
  icon: string;
  titleSize?: string;
}

export function AccordionSection({
  name,
  icon,
  titleSize = '0.75em',
  children,
}: React.ComponentProps<'div'> & AccordionSectionProps) {
  return (
    <AccordionItem key={name} value={name} backgroundColor="transparent">
      <Box m={0.5}>
        <AccordionItemTrigger margin={0} padding={0}>
          <Center flexDir="row" gap="1rem" fontSize={titleSize}>
            <Center
              width="45px"
              height="45px"
              borderRadius="5px"
              backgroundColor="white"
            >
              <Image src={icon} alt={`${name} Icon`} maxW="40px" maxH="40px" />
            </Center>
            {name}
          </Center>
          <Spacer />
        </AccordionItemTrigger>
        <Accordion.ItemContent>{children}</Accordion.ItemContent>
      </Box>
    </AccordionItem>
  );
}
