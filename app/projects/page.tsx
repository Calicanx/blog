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
		logo: "https://cdn.ayushchugh.com/logos/shriProperty.png",
		description:
			"Agricultural platform offering Africans a wide range of products and services to improve agriculture and income.",
		technologies: ["React", "Redux", "TypeScript", "Tailwind", "Grok"],
		website: "https://beesraniagrihub.vercel.app/",
	},
	{
		project: "Senderstack",
		logo: "https://senderstack.com/images/senderstack-main-logo-2.png",
		description:
			"Combination of a platform and apps that manage and reply to emails using Artificial Intelligence (AI).",
		technologies: ["React", "Laravel", "PHP", "OpenAI", "Tailwind", "NextJs", "Plasmo", "CloudFlare"],
		website: "https://www.senderstack.com",
	},
	{
		project: "Andika.io",
		logo: "https://andika.io/lovable-uploads/b69d02f9-27d5-4248-b7c5-c6c1efdec241.png",
		description:
			"Helps users generate social media content and images using multiple fine‑tuned AI models for underserved communities, at lower cost than mainstream models such as OpenAI and DeepSeek.",
		technologies: ["React", "Laravel", "PHP", "OpenAI", "Tailwind", "NextJs", "Plasmo", "CloudFlare"],
		website: "https://andika.io",
	},
	{
		project: "Ivory Africa",
		logo: "https://ivory-africa.vercel.app/ivory.svg",
		description:
			"A platform to connect and match talent with hiring companies in Africa.",
		technologies: ["NextJS", "shadcn", "TypeScript", "Tailwind"],
		website: "https://ivory-africa.vercel.app/",
	},
	{
		project: "Mansion",
		logo: "A platform to help property managers manage properties and tenants",
		description:
			"A platform for aiding propety managers to manage properties and tenants.",
		technologies: ["React", "Laravel", "Tailwind", "Docker"],
		website: "https://pms-dash-vision.lovable.app/",
	},

	{
		project: "DukaKuu",
		logo: "https://dukakuu.co.ke/assets/dukakuu_logo-Bn7k9deC.png",
		description:
			"A standalone ecommerce platform to sell fashion items and toys.",
		technologies: ["React", "TypeScript", "Remix", "FastAPI", "MySQL", "Python"],
		website: "https://dukakuu.co.ke/",
	},
	{
		project: "CodeWhisperer",
		description:
			"Web Application platform to learn about Data Structures and Algorithms for novices and experts alike. Use it as a practice and knowledge index.",
		technologies: ["NextJS", "TypeScript", "Supabase"],
		website: "https://codewhisperer-three.vercel.app/",
	},

	{
		project: "Sacred Guide AI",
		logo: "https://dukakuu.co.ke/assets/dukakuu_logo-Bn7k9deC.png",
		description:
			"An application to help both users & teachers connect spiritually with the help of AI through daily devotions, asking questions & generating sermon, including chatting on whatsapp with the AI for different religions.",
		technologies: ["NextJS", "TypeScript", "Supabase"],
		website: "https://sacredguideai.pages.dev/",
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
