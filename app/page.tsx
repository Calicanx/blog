import Link from "next/link";
import Image from "next/image";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";

export const metadata: Metadata = {
	title: "Yitzhak Rabin",
	description:
		"Software Development Engineer",
	openGraph: {
		title: "Yitzhak Rabin",
		description:
			"Software Development Engineer",
		url: "https://rabin.work",
		siteName: "Yitzhak Rabin's Portfolio",
		images: [
			{
				url: "/logo.png",
				height: 630,
				alt: "Yitzhak Rabin",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Yitzhak Rabin",
		description:
			"Software Development Engineer",
		images: ["/logo.png"],
		creator: "@0x_Sc0rpi0n",
		creatorId: "@0x_Sc0rpi0n",
		site: "@0x_Sc0rpi0n",
		siteId: "@0x_Sc0rpi0n",
	},
};

/**
 * Renders the personal homepage section with heading, professional summary, leadership/community notes, interests, writing links, social follow link, and contact mailto.
 *
 * @returns The React element tree for the home/about page content.
 */
export default function Page() {
	return (
		<section>
			<header className="mb-6">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					Hello, I'm Yitzhak Rabin 👋
				</h1>
				<p className="text-lg prose prose-neutral dark:prose-invert">
					Software Development Engineer
				</p>
			</header>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Professional Work</h2>
				<p>
					Software Development Engineer building user-first AI products and{" "}
					<span className="not-prose">
						<Badge href="https://myphotoai.io/">
							<Image
								src={"https://myphotoai.io/favicon.png"}
								alt="MyPhotoAI"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							MyPhotoAI
						</Badge>
					</span>{" "}
					(web · iOS · Android) — creator of{" "}
					<span className="not-prose">
						<Badge href="https://afri-recruit.pages.dev/">Afri-Recruit</Badge>
					</span>. Currently at{" "}
					<span className="not-prose">
						<Badge href="https://teachr.live/app">Teachr</Badge>
					</span>
					, previously at{" "}
					<span className="not-prose">
						<Badge href="https://www.senderstack.com">
							<Image
								src={"https://senderstack.com/favicon.ico"}
								alt="Senderstack"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Senderstack Inc
						</Badge>
					</span>.
				</p>
			</div>

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<p>
					I’m driven by building high-impact AI solutions. Beyond MyPhotoAI, I developed{" "}
					<span className="not-prose">
						<Badge href="https://sacredguideai.com/">
							<Image
								src={"https://sacredguideai.com/favicon.ico"}
								alt="Sacred Guide AI"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Sacred Guide AI
						</Badge>
					</span>
					— an AI espiritual companion that bridges technology and faith. I also founded{" "}
					<span className="not-prose">
						<Badge href="https://trendiq.io/">
							TrendIQ
						</Badge>
					</span>
					, a platform dedicated to translating complex market trends into actionable digital strategies. For a deeper dive into my work, check out the <Link href="/projects">Projects</Link> page.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Leadership & Community</h2>
				<p>
					During my tenure as the Team Lead at {" "}
					<a href="https://senderstack.com/" target="_blank">
						Senderstack
					</a>{" "}
					and {" "}
					<a href="https://myphotoai.io/" target="_blank">
						MyPhotoAI
					</a>
					, I learned how to lead a team and stay organized. I also assist in{" "}
					<a href="https://www.smartacademy.go.ke/" target="_blank">
						ICT
					</a>{" "}
					training sessions, teaching government employees, farmers and regular citizens essential computer
					skills and cybersecurity. Additionally, I lead and manage several innovative projects including{" "}
					<span className="not-prose">
						<Badge href="https://afri-recruit.pages.dev/">
							Afri-Recruit
						</Badge>
					</span>,{" "}
					<span className="not-prose">
						<Badge href="https://propulse.pages.dev/">
							ProPulse
						</Badge>
					</span>,{" "}
					<span className="not-prose">
						<Badge href="https://beesraniagrihub.vercel.app/">
							Farmacy
						</Badge>
					</span>, and the various AI platforms highlighted above.
				</p>
			</div>


			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Writing</h2>
				<p>
					I’ve started writing <Link href="/blog">blogs</Link> to help myself and others
					improve engineering skills. And act as a reference for knowledge over the years.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<article className="text-xs sm:hidden lg:block">
					Press ⌘+K to navigate with your keyboard.
				</article>
			</div>

			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://x.com/chainsaww_man"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Follow me</p>
					</a>
				</li>
			</ul>

			<div>
				<a
					className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
					rel="noopener noreferrer"
					target="_blank"
					href="mailto:work@rabin.work?subject=Hello Rabin!"
				>
					<p className="h-7">
						<span className="mr-2 text-neutral-600">📧</span>
						work@rabin.work
					</p>
				</a>
			</div>
		</section>
	);
}