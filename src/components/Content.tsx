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
			<Link href='https://pronoun.is/she'>
				<span className='trans'>she/her</span>
			</Link>
			), and I'm a rising senior at Northeastern University studying
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

function CompanyIcon({ src, alt }: { src: string; alt: string }) {
	return <img src={src} alt={alt} width='40' height='40' style={{ borderRadius: '10px', verticalAlign: 'middle' }} />
}

function CompanyLink({ name, href, iconSrc }: { name: string, href: string, iconSrc: string }) {
	return (
		<Link href={href} plain>
			{/* <div style={{ justifyContent: 'center', alignItems: 'center' }}> */}
			{name + ' '}
			(<CompanyIcon src={iconSrc} alt={`${name} Icon`} />)
			{/* </div> */}
		</Link>
	);
}

function Work() {
	return (
		<p>
			I'm currently a Software Engineering Intern at{' '}
			<CompanyLink name='Microsoft Azure' href='https://azure.microsoft.com' iconSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/260px-Microsoft_Azure.svg.png' />{' '}
			working on the Software Load Balancer (SLB) Buildout team of Azure Core.
			Through this experience, I've been diving into cloud computing and learning
			the ins and outs of cloud infrastructure.<br />
			Ealier this spring, I had my second Co-op at{' '}
			<CompanyLink name='Datadog' href='https://www.datadoghq.com/' iconSrc='https://imgix.datadoghq.com/img/dd_logo_n_70x75.png' />{' '}
			on the Azure Integrations working primarily with Python. <br />
			Previously, I have worked as a Lead Teaching Assistant for Fundamentals of Computer
			Science 1 Accelerated at Northeastern University, as well as my first
			Co-op at{' '}
			<CompanyLink href='https://www.bose.com/' name='Bose' iconSrc='https://static.bose.com/etc/designs/bose/consumer-products-2016/design/images/bose_logo.png' />{' '}
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
		I'm open to all kinds of software development work. See my{' '}
	  </span>
	  <Link href='https://www.linkedin.com/in/ava-silver/'>Linkedin</Link>
	  <span>, </span>
	  <Link href='Resume.pdf'>Resume</Link>
	  <span>, or </span>
	  <Link href='https://github.com/ava-silver'>GitHub</Link>
	  <span> for more information on my experience.</span>
	</p>
  );
}
*/

export default Content;
