import type { Metadata } from "next";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore Yitzhak Rabin's projects, including Afri-Recruit, ProPulse, Teachr, and various open-source contributions.",
	openGraph: {
		title: "Yitzhak Rabin's Projects",
		description:
			"Discover the latest projects built by Yitzhak Rabin, including web development and open-source contributions.",
		url: "https://rabin.work/projects",
		siteName: "Yitzhak Rabin's Portfolio",
		images: [
			{
				url: "/logo.png",
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
		images: ["/logo.png"],
		creator: "@0x_Sc0rpi0n",
		creatorId: "@0x_Sc0rpi0n",
		site: "@0x_Sc0rpi0n",
		siteId: "0x_Sc0rpi0n",
	},
};

const projectsData = [
	{
		project: "Teachr",
		description:
			"Revolutionizing education through AI-powered customized learning experiences.",
		technologies: ["NextJS", "TypeScript", "Tailwind", "OpenAI", "Gemini", "FastAPI", "Docker", "MongoDB", "Nodejs"],
		website: "https://teachr.live/app",
	},
	{
		project: "TrendIQ",
		description:
			"An AI-powered analytics platform that translates market sentiment and data trends into actionable insights for digital growth.",
		technologies: ["NextJS", "TypeScript", "Tailwind", "OpenAI", "FastAPI", "Docker"],
		website: "https://trendiq.io/",
	},
	{
		project: "Senderstack",
		logo: "https://senderstack.com/favicon.ico",
		description:
			"Combination of a platform and apps that manage and reply to emails using Artificial Intelligence (AI).",
		technologies: ["React", "Laravel", "PHP", "OpenAI", "Tailwind", "NextJs", "Plasmo", "CloudFlare"],
		website: "https://www.senderstack.com",
	},
	{
		project: "Fyberpay",
		description:
			"An ISP billing system integrated with bank and M-Pesa, providing seamless payment processing and management for internet service providers.",
		technologies: ["NextJS", "TypeScript", "Tailwind", "Fintech"],
		website: "https://fyberpay.com/",
	},
	{
		project: "Afri-Recruit",
		description:
			"A recruitment platform connecting global companies with top-tier African talent.",
		technologies: ["NextJS", "TypeScript", "Tailwind", "Supabase"],
		website: "https://afri-recruit.pages.dev/",
	},
	{
		project: "ProPulse",
		description:
			"A comprehensive management solution setting the standard for business and property administrative excellence.",
		technologies: ["React", "TypeScript", "Tailwind", "FastAPI", "Docker"],
		website: "https://propulse.pages.dev/",
	},
	{
		project: "Sacred Guide AI",
		logo: "https://sacredguideai.com/favicon.ico",
		description:
			"An AI-powered spiritual companion for daily devotions and faith-based guidance.",
		technologies: ["NextJS", "TypeScript", "Supabase", "React Native"],
		website: "https://sacredguideai.com/",
	},
	{
		project: "MyPhotoAI",
		logo: "https://myphotoai.io/favicon.png",
		description:
			"An AI image generator for creating realistic professional photos and portraits.",
		technologies: ["NextJS", "TypeScript", "Supabase", "Expo", "React-native", "Gemini"],
		website: "https://myphotoai.io/",
	},
	{
		project: "Farmacy",
		description:
			"Agricultural platform offering Africans a wide range of products and services to improve agriculture and income.",
		technologies: ["React", "Redux", "TypeScript", "Tailwind", "Grok"],
		website: "https://beesraniagrihub.vercel.app/",
	},
	{
		project: "Andika.io",
		description:
			"A content and image generator tailored for underserved communities.",
		technologies: ["React", "Vite", "OpenAI", "Tailwind", "NextJs", "CloudFlare"],
		website: "https://andika.io",
		discontinued: true,
	},
];

const openSourceData = [
	{
		project: "Maya",
		logo: "/logos/maya.png",
		description:
			"Maya is a project that helps users manage their pocket money, track expenses, and set savings goals.",
		technologies: ["React", "Node.js", "Express", "TypeScript"],
		website: "https://github.com/maya-manager",
	},
	{
		project: "Multi Email",
		logo: "/logos/multiEmail.png",
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
						discontinued={project.discontinued}
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
