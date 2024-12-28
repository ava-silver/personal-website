import { AccordionRoot, AccordionSection } from '../../components/ui/accordion';
import { Link } from '../../components/ui/link';

export default function Work() {
  return (
    <AccordionRoot collapsible variant="enclosed">
      <AccordionSection name="Datadog" icon="/logos/datadog.png">
        I'm currently a Software Engineer II at{' '}
        <Link href="https://www.datadoghq.com/">Datadog</Link>, where I started
        as an intern in 2022 and 2023 during my time at Northeastern University.
        I work full-stack using Python, Go, Typescript/React, and Kubernetes,
        and work day-to-day on a large scale microservice architecture.
      </AccordionSection>
      <AccordionSection name="Azure" icon="/logos/azure.png">
        I interned at{' '}
        <Link href="https://azure.microsoft.com">Microsoft Azure</Link> in 2022
        on the Software Load Balancer (SLB) Buildout team of Azure Core. Here I
        worked primarily with C# and helped develop internal tooling for core
        Azure infrastructure.
      </AccordionSection>
      <AccordionSection name="Bose" icon="/logos/bose.png">
        I interned at <Link href="https://www.bose.com/">Bose</Link> in 2021 on
        the Automotive Systems Division working on Android app development and
        OS extensions for{' '}
        <Link href="https://source.android.com/devices/automotive/start/what_automotive">
          Android Automotive
        </Link>
        .
      </AccordionSection>
      <AccordionSection name="Northeastern" icon="/logos/northeastern.webp">
        During my time at{' '}
        <Link href="https://www.northeastern.edu/">
          Northeastern Univeristy
        </Link>{' '}
        studing computer science, I was a Teaching Assistant for Algorithms &
        Data Structures, and Fundamentals of Computer Science 1 Accelerated
        (where I also worked a second semester as a Head TA).
      </AccordionSection>
    </AccordionRoot>
  );
}
