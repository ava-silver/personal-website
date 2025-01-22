import { AccordionRoot, AccordionSection } from '../../components/ui/accordion';
import { Link } from '../../components/ui/link';
import musicSvg from '../icons/music.svg';
import vinylSvg from '../icons/vinyl.svg';
import heartSvg from '../icons/heart.svg';

export default function Hobbies() {
  return (
    <AccordionRoot collapsible variant="enclosed">
      <AccordionSection name="playing music" icon={musicSvg}>
        I can sing, as well as play the piano, trombone, and a bit of guitar. I
        love to play music and sing along with friends -- it's something that
        always brings me joy. I usually end up playing whatever I've been
        listening to in the moment, whether it be electronic music, pop, hip
        hop, or even classic rock.
      </AccordionSection>
      <AccordionSection name="celeste" icon="/logos/celeste.ico">
        I love playing the game{' '}
        <Link href="https://www.celestegame.com/">celeste</Link>, particularly
        speedrunning the game. My current any% (the category I usually play) PB
        is 46 mins and 27.49 seconds. While I played it the most from 2022-2023,
        these days I still hop on to get in a few runs every now and then!
      </AccordionSection>
      <AccordionSection name="vinyl" icon={vinylSvg}>
        I've started collecting records, as I finally got a record player when I
        moved to somerville, MA, with my girlfriend{' '}
        <Link href="https://breq.dev/" color="brooke.pink">
          Brooke
        </Link>
        . I really enjoy owning my favorite albums in a physical medium, and
        having a more intentional listening experience, especially since my
        preferred way to listen to music is to sit down and listen to an album
        front to back.
      </AccordionSection>
      <AccordionSection name="friends & loved ones" icon={heartSvg}>
        I love spending time with my friends and girlfriends (
        <Link href="https://breq.dev/" color="brooke.pink">
          Brooke
        </Link>
        , <Link href="https://miakizz.quest/">Mia</Link>, and{' '}
        <Link href="https://izzy.horse/">Izzy</Link>
        ), whether it be watching good shows, playing games, or just talking. I
        really appreciate a good deep conversation, and I always love to learn
        more about the people I care about.
        <br />
        <br />
        Make sure to check out my friends' websites via the 88x31 buttons at the
        end of the page!
      </AccordionSection>
    </AccordionRoot>
  );
}
