import type { Metadata } from "next";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import VolunteeringItem from "../components/volunteer-item";

export const metadata: Metadata = {
	title: "Resume",
	description:
		"A summary of Yitzhak Rabin’s corporate contributions, skills, and experience as a Full-Stack Developer, including work with Tap Invest, Shri Property, and A2INFINITE.",
	openGraph: {
		type: "article",
		url: `https://rabinty.vercel.app/`,
		title: "Yitzhak Rabin’s Resume",
		siteName: "Yitzhak Rabin's Portfolio",
		description:
			"Detailed resume of Yitzhak Rabin, Full-Stack Developer, with work experience, projects, and educational background.",
		images: [
			{
				url: `https://cdn.ayushchugh.com/open-graph/resume.png`,
				width: 1200,
				height: 630,
				alt: "Yitzhak Rabin's Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "YItzhak Rabin's Resume",
		description:
			"Check out Yitzhak Rabin’s Full-Stack Developer resume, showcasing professional contributions and achievements.",
		images: ["https://cdn.ayushchugh.com/open-graph/resume.png"],
		creator: "@aayushchugh_x",
		creatorId: "@aayushchugh_x",
		site: "@aayushchugh_x",
		siteId: "@aayushchugh_x",
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Senderstack Inc",
			logo: "https://cdn.ayushchugh.com/logos/keizer.svg",
			role: "SDE",
			period: "June 2024 - Present",
			location: "US",
			workType: "Staff Engineer",
			website: "https://www.senderstack.com/",
			technologies: [
				"NextJS",
				"TypeScript",
				"Tailwind CSS",
				"Laravel",
				"PHP",
				"Sentry",
				"Docker",
				"Stripe",
				"OpenAI",
				"Plasmo",
				"Gmail API",
				"MySQL",
				"DevOps",
			],
			responsibilities: [
				"Led the development and implementation of key features for SenderStack, an AI-powered email assistant designed to help users manage, summarize, and reply to emails while composing new ones.",
				"Spearheaded the creation of features that enhanced user productivity, driving a 80% improvement in inbox management efficiency and boosting user engagement by 90%.",
				"Orchestrated cloud-based deployment strategies and implemented robust CI/CD pipelines, ensuring seamless updates, scalability, and high system availability.",
				"Managed a cross-functional team using Agile methodologies, fostering collaboration, prioritizing deliverables, and ensuring timely delivery of key milestones while maintaining high-quality standards.",
				"Optimized backend data processing algorithms such as OpenAI API, reducing email analysis time by 35% and enhancing overall system performance.",
				"Collaborated with UI/UX designers to revamp the user interface, significantly elevating the user experience and increasing positive feedback by 50%.",
				"Implemented continuous performance monitoring and proactive system analytics to identify bottlenecks and optimize resource allocation, enhancing operational efficiency.",
			],
		},
		{
			company: "Reduzer Technologies",
			logo: "https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg",
			role: "Junior Software Developer",
			period: "June 2022 - June 2024",
			location: "Nairobi",
			workType: "Staff Engineer",
			website: "https://reduzer.tech/",
			technologies: ["NextJS", "Redux", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "Docker", "DevOps", "OpenAI", "Zoho", "Zapier", "Django", "FastAPI", "Python"],
			responsibilities: [
				"Contributed to the development and implementation of features for multiple projects at Reduzer Technologies, focusing on delivering high-quality, scalable solutions",
				"Worked in Agile teams, participating in sprint planning, code reviews, and daily stand-ups to meet project deadlines and maintain team productivity",
				"Assisted in developing and optimizing back-end systems using PHP and Python while collaborating with senior engineers to integrate React-based front-end features, ensuring high performance, reliability, and seamless user experiences.",
				"Gained hands-on experience with cloud-based deployments and CI/CD pipelines, supporting efficient development workflows and maintaining system uptime.",
				"Troubleshot and resolved software issues promptly, contributing to improved system stability and enhanced user satisfaction.",
				"Developed and maintained comprehensive technical documentation, streamlining onboarding processes and facilitating effective knowledge sharing.",
				"Contributed to performance tuning and optimization efforts, ensuring that applications consistently met or exceeded performance benchmarks.",
			],
		},
		{
			company: "PonyeaIndia",
			logo: "https://cdn.ayushchugh.com/logos/tapico.png",
			role: "Website developer and automations expert",
			period: "Nov 2021 - June 2022",
			location: "Nairobi",
			website: "https://ponyeaindia.com/",
			technologies: ["Wordpress", "Zoho", "HTML", "CSS3", "PHP"],
			responsibilities: [
				"Developed and implemented innovative website features using PHP, and Wordpress, delivering scalable and high-quality digital solutions.",
				"Automated patient treatment workflows across India by leveraging Zoho platforms, enabling efficient cross-border healthcare coordination from Kenya and significantly improving treatment response times",
				"Collaborated in Agile teams through sprint planning, code reviews, and daily stand-ups to ensure timely project delivery and maintain high team productivity.",
				"Engineered robust back-end integrations and managed cloud-based deployments to optimize system performance and ensure high availability.",
				"Proactively troubleshot and resolved technical issues, enhancing system reliability and boosting user satisfaction",
				"Authored detailed technical documentation to streamline onboarding processes and facilitate effective knowledge sharing across the team.",
				"Optimized system performance by automating repetitive tasks and fine-tuning backend processes, ensuring adherence to stringent performance benchmarks.",
				"Integrated advanced automation tools and testing practices to reduce error rates and support continuous improvement in development cycles.",
			],
		},
	],
	education: [
		{
			institution:
				"University of Nairobi (UoN)",
			logo: "https://cdn.ayushchugh.com/logos/ccet.png",
			degree: "Bsc. Mathematics",
			period: "2017 - 2021",
			location: "Nairobi, Kenya",
		},
	],
	volunteering: [
		{
			organization: "SmartAcademy, ICT Authority",
			logo: "https://cdn.ayushchugh.com/logos/innovationclub.png",
			role: "Trainer & Consultant",
			period: "Oct 2023 - Present",
			location: "Nairobi, Kenya",
			responsibilities: [
				"Part of the team teaching and training other trainers to train farmers.",
				"Providing hands-on skills training to farmers in the field equiping them with digital and government skills that aid in farming.",
			],
		},
	],
};

export default function WorkPage() {
	return (
		<section>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					My Resume 📝
				</h1>
			</div>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<WorkExperienceItem key={index} job={job} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<EducationItem key={index} edu={edu} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Volunteering Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Volunteering</h2>
				{resumeData.volunteering.map((volunteer, index) => (
					<VolunteeringItem key={index} volunteer={volunteer} />
				))}
			</div>
		</section>
	);
}
