import './Content.css';
import Link from './Link';
import resume_svg from './icons/resume-content.svg';
import github_svg from './icons/github-content.svg';
import linkedin_svg from './icons/linkedin-content.svg';

function Content() {
	return (
		<div className='content'>
			<div className='text'>
				<Intro />
				<Goals />
				<Work />
			</div>
			<Resources />
			<Footer />
		</div>
	);
}

function Intro() {
	return (
		<p>
			Hi there! I'm Ava Silver (
			<Link href='https://pronoun.is/she?or=they'>
				<span className='trans'>she/they</span>
			</Link>
			), and I'm a third-year student at Northeastern University studying
			Computer Science and Software Engineering.
		</p>
	);
}

function Goals() {
	return (
		<p>
			Through my work, I aim to increase diversity and inclusion in tech, and
			improve peoples' lives by creating better applications.
		</p>
	);
}

function Work() {
	return (
		<p>
			I'm currently a Software Engineering Intern at{' '}
			<Link href='https://www.datadoghq.com/' plain>
				Datadog
			</Link>{' '}
			on the Azure Integrations working primarily with Python. Previously, I
			have worked as a Lead Teaching Assistant for Fundamentals of Computer
			Science 1 Accelerated at Northeastern University, as well as a previous a
			Co-op/Internship at{' '}
			<Link href='https://www.bose.com/' plain>
				Bose
			</Link>{' '}
			doing software engineering in the Automotive Systems Division working with{' '}
			<Link
				href='https://source.android.com/devices/automotive/start/what_automotive'
				plain>
				Android Automotive
			</Link>
			.
		</p>
	);
}

function Resources() {
	return (
		<div className='resources'>
			<Resume />
			<LinkedIn />
			<GitHub />
		</div>
	);
}

function Resume() {
	return (
		<Link href='Resume.pdf'>
			<div className='resource'>
				<span>Resume</span>
				<img src={resume_svg} className='image' alt='Resume' />
			</div>
		</Link>
	);
}

function LinkedIn() {
	return (
		<Link href='https://www.linkedin.com/in/ava-silver/'>
			<div className='resource'>
				<span>LinkedIn</span>
				<img src={linkedin_svg} className='image' alt='LinkedIn' />
			</div>
		</Link>
	);
}

function GitHub() {
	return (
		<Link href='https://github.com/ava-silver'>
			<div className='resource'>
				<span>Github</span>
				<img src={github_svg} className='image' alt='LinkedIn' />
			</div>
		</Link>
	);
}

function Footer() {
	return (
		<div className='footer'>
			<span>Ava Silver 2022</span>
			<span>
				<Link href='mailto:avapsilver@gmail.com' plain>
					avapsilver@gmail.com
				</Link>
			</span>
		</div>
	);
}

/*
function Paragraph3() {
  return (
    <p>
      <span>
        I'm primarily interested in Application and Web Development, although
        I'm open to all kinds of software development work. See my{" "}
      </span>
      <Link href="https://www.linkedin.com/in/ava-silver/">Linkedin</Link>
      <span>, </span>
      <Link href="Resume.pdf">Resume</Link>
      <span>, or </span>
      <Link href="https://github.com/ava-silver">GitHub</Link>
      <span> for more information on my experience.</span>
    </p>
  );
}
*/

export default Content;
