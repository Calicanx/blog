import Link from "next/link";
import Image from "next/image";
import shriProperty from "public/logos/shriProperty.png";
import a2infinite from "public/logos/a2infinite.png";
import tap from "public/logos/tapico.png";
import Badge from "./components/Badge";
import ArrowIcon from "./components/ArrowIcon";
import wt from "public/logos/wt.png";

export default function Page() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tight font-["monospace"]'>
				Sup, I'm Ayush Chugh 👋
			</h1>

			<p className="prose prose-neutral dark:prose-invert">
				I’m a Full Stack Web Developer from Mohali, India, trying to make the
				internet a bit cooler one website at a time.
			</p>

			<br />

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Work Life</strong>
					<br />
					My job is to create user-friendly digital experiences, and I’ve worked
					on various projects that showcase my technical skills and creativity.
					Currently, I work as a <strong>Consultant</strong> at
					<span className="not-prose">
						<Badge href="https://tapinvest.io">
							<Image
								src={tap}
								alt="Tap Invest"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Tap Invest
						</Badge>
					</span>
					, where I contribute to creating seamless digital solutions.
					Alongside, I also work as a <strong>Freelance Developer</strong> with
					<span className="not-prose">
						<Badge href="https://worldtravels.com">
							<Image
								src={wt}
								alt="Worldtravels"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							Worldtravels
						</Badge>
					</span>
					. In my free time, I contribute to open-source projects, keeping
					myself engaged in innovative collaborations.
				</p>
				<p>
					One of my proudest achievements is creating
					<span className="not-prose">
						<Badge href="https://shriproperty.com">
							<Image
								src={shriProperty}
								alt="shriProperty"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							ShriProperty
						</Badge>
					</span>
					, a real estate website that simplifies finding a dream home. I also
					built
					<span className="not-prose">
						<Badge href="https://www.a2infinite.com/">
							<Image
								src={a2infinite}
								alt="A2INFINITE"
								height={16}
								width={16}
								className={"pr-1"}
							/>
							A2INFINITE
						</Badge>
					</span>
					, a platform for educational worksheets, making learning more
					accessible.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Leadership and Community Involvement:</strong>
					<br />
					As the Team Lead at the Innovation Club of{" "}
					<a href="https://ccetdiploma.edu.in/" target="_blank">
						CCET
					</a>{" "}
					College, I’ve learned how to lead a team and stay organized. I also
					assist in{" "}
					<a href="https://chdtechnicaleducation.gov.in/" target="_blank">
						ICT
					</a>{" "}
					training sessions, where I teach government employees how to use
					computers effectively. Additionally, I help organize the{" "}
					<i>Talent Hunt</i>
					cultural program and serve as the student coordinator for{" "}
					<i>Jhalak</i>, our college’s digital newsletter.
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					<strong>Personal Interests:</strong>
					<br />
					When I’m not working on code, I’m either exploring my interest in
					Vedic astrology or spending time with friends. I also enjoy playing
					the guitar, which helps me unwind after a long day. I’m currently
					pursuing a diploma in Computer Science Engineering (CSE)
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<p>
					I’ve also been trying my hand at <Link href="/blog">writing</Link>{" "}
					articles that aim to help people become better engineers, regardless
					of their career paths. Stay tuned for more content!
				</p>
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<article className={"text-xs sm:hidden lg:block"}>
					Press ⌘+K to navigate with your keyboard.
				</article>
			</div>

			<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
				<li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://twitter.com/ayushchugh2006"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Follow me</p>
					</a>
				</li>
				{/* <li>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
						rel="noopener noreferrer"
						target="_blank"
						href="https://ArpitChugh.substack.com"
					>
						<ArrowIcon />
						<p className="h-7 ml-2">Get email updates</p>
					</a>
				</li> */}
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
						hey@ayushchugh.com
					</p>
				</a>
			</div>
		</section>
	);
}
