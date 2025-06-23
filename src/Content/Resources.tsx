import { Center } from '@chakra-ui/react';
import { Resource } from '../components/ui/resource';
import { Section } from '../components/ui/section';
import resumeSvg from './icons/resume-content.svg';
import githubSvg from './icons/github-content.svg';
import linkedinSvg from './icons/linkedin-content.svg';
import blogSvg from './icons/blog.svg';

export default function Resources() {
  return (
    <Section>
      <Center gap="2rem">
        <Resource name="Resume" href="resume.pdf" src={resumeSvg} />
        <Resource
          name="LinkedIn"
          href="https://www.linkedin.com/in/ava-silver/"
          src={linkedinSvg}
        />
        <Resource
          name="Github"
          href="https://github.com/ava-silver"
          src={githubSvg}
        />
        <Resource
          name="Blog"
          href="/blog"
          src={blogSvg}
        />
      </Center>
    </Section>
  );
}
