import { Accordion } from '@chakra-ui/react';
import { AccordionSection } from '../common';
import musicSvg from '../icons/music.svg';
import vinylSvg from '../icons/vinyl.svg';
import heartSvg from '../icons/heart.svg';

export default function Hobbies() {
  return (
    <Accordion allowToggle>
      <AccordionSection name="playing music" icon={musicSvg}>
        I can sing & play the piano, and I know a bit of guitar. I love to play
        music and sing along with friends -- it's something that always brings
        me joy. I usually end up playing whatever I've been listening to in the
        moment, whether it be electronic music, to pop, to hip hop, to classic
        rock.
      </AccordionSection>
      <AccordionSection name="celeste" icon="/logos/celeste.ico">
        I love playing the game{' '}
        <a href="https://www.celestegame.com/">celeste</a>, particularly
        speedrunning the game. My current any% (the category I usually play) PB
        is 47 mins and 01.48 seconds. While I played it the most from 2022-2023,
        these days I still hop on to get in a few runs every now and then!
      </AccordionSection>
      <AccordionSection name="vinyl" icon={vinylSvg}>
        I've started collecting records, as I finally got a record player when I
        moved to somerville, MA, with my girlfriend{' '}
        <a href="https://breq.dev/">Brooke</a>. I really enjoy owning my
        favorite albums in a physical medium, and having a more intentional
        listening experience, especially since my preferred way to listen to
        music is to sit down and listen to an album front to back.
      </AccordionSection>
      <AccordionSection name="friends & loved ones" icon={heartSvg}>
        I love spending time with my friends and girlfriends (
        <a href="https://breq.dev/">Brooke</a>,{' '}
        <a href="https://miakizz.quest/">Mia</a>, and{' '}
        <a href="https://izzy.horse/">Izzy</a>), whether it be watching movies,
        playing games, or just talking. I really appreciate a good deep
        conversation, and I always love to learn more about the people I care
        about.
        <br />
        <br />
        Make sure to check out my friends' websites via the 88x31 buttons at the
        end of the page!
      </AccordionSection>
    </Accordion>
  );
}
