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
		url: "https://bit.ly/rabinty",
		siteName: "Yitzhak Rabin's Portfolio",
		images: [
			{
				url: "https://cdn.ayushchugh.com/open-graph/home.png",
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
		images: ["https://cdn.ayushchugh.com/open-graph/home.png"],
		creator: "@0x_Sc0rpi0n",
		creatorId: "@0x_Sc0rpi0n",
		site: "@0x_Sc0rpi0n",
		siteId: "@0x_Sc0rpi0n",
	},
};

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
					I specialize in creating user-friendly digital experiences. Currently,
					I work as a <strong>Senior Software Engineer</strong> with{" "}
					<span className="not-prose">
						<Badge href="https://www.senderstack.com">
							<Image
								src={"https://cdn.ayushchugh.com/logos/vibraniumsoft.jpeg"}
								alt="Senderstack"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Senderstack Inc
						</Badge>
					</span>{" "}
					where we are building intelligent AI assistants and{" "}
					<span className="not-prose">
						<Badge href="https://ivory-africa.vercel.app/">
							<Image
								src={"https://cdn.ayushchugh.com/logos/keizer.svg"}
								alt="Ivory Africa"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							 Ivory Africa
						</Badge>
					</span>
					, where I maintain the project and contribute to
					innovative solutions in job searching and matching.
				</p>
				<p>
					One of my most significant achievements is developing{" "}
					<span className="not-prose">
						<Badge href="https://smart-rent-ashen.vercel.app/">
							<Image
								src={"https://cdn.ayushchugh.com/logos/worldtravels.png"}
								alt="Smartrent"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Smartrent
						</Badge>
					</span>
					, a property management software for agencies, landlords and tenants. For more of my
					projects, visit the <Link href="/projects">Projects</Link> page.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Leadership & Community</h2>
				<p>
					As the Team Lead at {" "}
					<a href="https://senderstack.com/" target="_blank">
						Senderstack
					</a>
					, I’ve learned how to lead a team and stay organized. I also assist in{" "}
					<a href="https://www.smartacademy.go.ke/" target="_blank">
						ICT
					</a>{" "}
					training sessions, teaching government employees, farmers and regular citizens essential computer
					skills and cybersecurity. Additionally, I help organize the <i>Talent Hunt</i> cultural
					program.	
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Personal Interests</h2>
				<p>
					Outside of work, I enjoy reading philosophy, fiction, and non-fiction books, riding motorcycles, spending quality time with friends, and advancing my pentesting skills.
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
					href="mailto:hey@ayushchugh.com?subject=Hello Ayush!"
				>
					<p className="h-7">
						<span className="mr-2 text-neutral-600">📧</span>
						tyberiusrabin@gmail.com
					</p>
				</a>
			</div>
		</section>
	);
}
