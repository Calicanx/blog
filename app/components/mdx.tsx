import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { TweetComponent } from "./tweet";
import { highlight } from "sugar-high";
import React from "react";
import remarkGfm from "remark-gfm";

function Table({ data }) {
	let headers = (data?.headers || []).map((header, index) => (
		<th
			key={index}
			className="px-6 py-4 font-semibold text-neutral-900 dark:text-neutral-100"
		>
			{header}
		</th>
	));
	let rows = (data?.rows || []).map((row, index) => (
		<tr
			key={index}
			className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors"
		>
			{(row || []).map((cell, cellIndex) => (
				<td
					key={cellIndex}
					className={`px-6 py-4 text-neutral-600 dark:text-neutral-400 ${cellIndex === 0 ? "font-medium text-neutral-900 dark:text-neutral-100" : ""
						}`}
				>
					{cell}
				</td>
			))}
		</tr>
	));

	return (
		<div className="my-8 w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-xl">
			<div className="overflow-x-auto">
				<table className="w-full min-w-full text-sm text-left border-collapse">
					<thead>
						<tr className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
							{headers}
						</tr>
					</thead>
					<tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
						{rows}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function Comparison({ results }) {
	return (
		<div className="flex flex-col gap-4 my-8">
			{(results || []).map((result, i) => (
				<div
					key={i}
					className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm"
				>
					<div className="flex flex-col">
						<span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
							Approach
						</span>
						<span className="font-semibold text-neutral-900 dark:text-neutral-100">
							{result.approach}
						</span>
					</div>
					<div className="flex gap-8 mt-4 md:mt-0">
						<div className="flex flex-col">
							<span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
								Time
							</span>
							<code
								className={`text-sm font-mono px-2 py-0.5 rounded ${result.time === "O(n)"
									? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
									: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
									}`}
							>
								{result.time}
							</code>
						</div>
						<div className="flex flex-col">
							<span className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
								Space
							</span>
							<code
								className={`text-sm font-mono px-2 py-0.5 rounded ${result.space === "O(1)"
									? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
									: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
									}`}
							>
								{result.space}
							</code>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

function CustomLink(props) {
	let href = props.href;

	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith("#")) {
		return <a {...props} />;
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
	if (!props.src) return null;
	return (
		<Image
			alt={props.alt || ""}
			className="rounded-lg"
			width={props.width || 1200}
			height={props.height || 630}
			{...props}
		/>
	);
}

function Callout(props) {
	return (
		<div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
			<div className="flex items-center w-4 mr-4">{props.emoji}</div>
			<div className="w-full callout">{props.children}</div>
		</div>
	);
}

function ProsCard({ title, pros }) {
	const items = Array.isArray(pros) ? pros : (typeof pros === 'string' ? [pros] : []);
	return (
		<div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
			<span className="font-semibold text-emerald-900 dark:text-emerald-100">{`You might use ${title} if...`}</span>
			<div className="mt-4">
				{items.map((pro, i) => (
					<div key={i} className="flex font-medium items-baseline mb-2 text-neutral-700 dark:text-neutral-300">
						<div className="h-4 w-4 mr-2 flex-shrink-0">
							<svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
								<g
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
									<path d="M22 4L12 14.01l-3-3" />
								</g>
							</svg>
						</div>
						<span>{pro}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function ConsCard({ title, cons }) {
	const items = Array.isArray(cons) ? cons : (typeof cons === 'string' ? [cons] : []);
	return (
		<div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
			<span className="font-semibold text-red-900 dark:text-red-100">{`You might not use ${title} if...`}</span>
			<div className="mt-4">
				{items.map((con, i) => (
					<div key={i} className="flex font-medium items-baseline mb-2 text-neutral-700 dark:text-neutral-300">
						<div className="h-4 w-4 mr-2 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-4 w-4 text-red-500"
							>
								<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
							</svg>
						</div>
						<span>{con}</span>
					</div>
				))}
			</div>
		</div>
	);
}

function Code({ children, ...props }) {
	let codeHTML = highlight(children);
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
		.replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
	return ({ children }) => {
		let slug = slugify(children);
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement("a", {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: "anchor",
				}),
			],
			children
		);
	};
}

const components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	Callout,
	ProsCard,
	ConsCard,
	StaticTweet: TweetComponent,
	code: Code,
	Table,
	table: ({ children }) => (
		<div className="my-8 w-full overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded-xl">
			<div className="overflow-x-auto">
				<table className="w-full min-w-full text-sm text-left border-collapse">
					{children}
				</table>
			</div>
		</div>
	),
	thead: ({ children }) => (
		<thead className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
			{children}
		</thead>
	),
	tr: ({ children }) => (
		<tr className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 transition-colors">
			{children}
		</tr>
	),
	th: ({ children }) => (
		<th className="px-6 py-4 font-semibold text-neutral-900 dark:text-neutral-100">
			{children}
		</th>
	),
	td: ({ children }) => (
		<td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">
			{children}
		</td>
	),
	Comparison,
};

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
			options={{
				mdxOptions: {
					remarkPlugins: [remarkGfm],
				},
			}}
		/>
	);
}
