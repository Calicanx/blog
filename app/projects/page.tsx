import type { Metadata } from "next";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore  Yitzhak Rabin's projects, including SmartRent, Senderstack, Ivory Africa, and various open-source contributions.",
	openGraph: {
		title: "Yitzhak Rabin's Projects",
		description:
			"Discover the latest projects built by Yitzhak Rabin, including web development and open-source contributions.",
		url: "https://rabinty.vercel.app//projects",
		siteName: "Yitzhak Rabin's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/projects.png",
				width: 1200,
				height: 630,
				alt: "Yitzhak Rabin's Projects",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Yitzhak Rabin's Projects",
		description:
			"Explore a variety of projects and open-source contributions by Yitzhak Rabin.",
		images: ["https://cdn.ayushchugh.com/open-graph/projects.png"],
		creator: "@0x_Sc0rpi0n",
		creatorId: "@0x_Sc0rpi0n",
		site: "@0x_Sc0rpi0n",
		siteId: "0x_Sc0rpi0n",
	},
};

const projectsData = [
	{
		project: "Beesrani",
		description:
			"Agricultural platform offering African's a wide range of products & services to improve agriculture & income.",
		technologies: ["React", "Redux", "TypeScript", "Tailwind"],
		website: "https://beesraniagrihub.vercel.app/",
	},
	{
		project: "Senderstack",
		logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
		description:
			"Combination of a platform and apps that manage and reply to emails using Artificial Intelligence (AI).",
		technologies: ["React", "Laravel", "OpenAI", "CloudFlare"],
		website: "https://www.senderstack.com",
	},
	{
		project: "Ivory Africa",
		description:
			"A platform to connect and match talent with hiring companies in Africa.",
		technologies: ["NextJS", "shadcn", "TypeScript", "Tailwind"],
		website: "https://ivory-africa.vercel.app/",
	},
	{
		project: "SmartRent",
		description:
			"A platform for aiding propety managers to manage properties and tenants.",
		technologies: ["React", "Laravel", "Tailwind", "Docker"],
		website: "https://smart-rent-ashen.vercel.app/",
	},

	{
		project: "Bazzu",
		logo: "https://cdn.ayushchugh.com/logos/repository-commander.svg",
		description:
			"A standalone ecommerce platform to sell fashion items and toys.",
		technologies: ["React", "TypeScript", "Remix", "Supabase"],
		website: "https://bazzu--eight.vercel.app",
	},

	{
		project: "Safari Travel",
		description:
			"Travel booking website that caters to travellers of all types especially ones travelling to Africa.",
		technologies: ["NextJS", "TypeScript", "Supabase"],
		website: "https://safari-travel-sigma.vercel.app/",
	},
];

const openSourceData = [
	{
		project: "Maya",
		logo: "https://cdn.ayushchugh.com/logos/maya.png",
		description:
			"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
		technologies: ["React", "Node.js", "Express", "TypeScript"],
		website: "https://github.com/maya-manager",
	},
	{
		project: "Multi Email",
		logo: "https://cdn.ayushchugh.com/logos/multiEmail.png",
		description:
			"Multi Email is a platform that allows users to connect and manage multiple email services in one place.",
		technologies: ["React", "Node.js", "Express", "OAuth", "TypeScript"],
		website: "https://github.com/MultiEmail/",
	},
];

export default function ProjectsPage() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.project}
						logo={project.logo}
						description={project.description}
						technologies={project.technologies}
						website={project.website}
					/>
				))}
			</div>

			{/* Open Source Contributions Section */}
			<h2 className="font-medium text-2xl mb-4">Open Source Contributions</h2>
			<p className="prose prose-neutral dark:prose-invert">
				These are various open-source projects maintained by me, as well as
				those to which I have contributed throughout my programming journey.
			</p>
			<div className="prose prose-neutral dark:prose-invert mt-4">
				{openSourceData.map((contribution, index) => (
					<ProjectCard
						key={index}
						title={contribution.project}
						logo={contribution.logo}
						description={contribution.description}
						technologies={contribution.technologies}
						website={contribution.website}
					/>
				))}
			</div>
		</section>
	);
}
