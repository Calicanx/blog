"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
	House,
	Code,
	FileText,
	EnvelopeSimple,
	PencilCircle
} from "@phosphor-icons/react";

const Cmdk = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();

	// Toggle the menu when ⌘K is pressed
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const navigate = (path: string) => {
		router.push(path);
		setOpen(false);
	};

	return (
		<Command.Dialog
			open={open}
			onOpenChange={setOpen}
			label="Global Command Menu"
			className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/50 backdrop-blur-sm"
			onClick={() => setOpen(false)}
		>
			<div
				className="w-full max-w-xl overflow-hidden bg-white dark:bg-[#111010] border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<Command.Input
					placeholder="Looking for something?"
					className="w-full px-4 py-4 text-lg bg-transparent border-b border-neutral-200 dark:border-neutral-800 outline-none placeholder:text-neutral-500"
				/>

				<Command.List className="max-h-[300px] overflow-y-auto p-2 scroll-py-2">
					<Command.Empty className="px-4 py-8 text-center text-sm text-neutral-500">
						No results found.
					</Command.Empty>

					<Command.Group heading="Navigate" className="px-2 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
						<Item onSelect={() => navigate("/")}>
							<House size={20} className="mr-3" />
							<span>Home</span>
						</Item>
						<Item onSelect={() => navigate("/projects")}>
							<Code size={20} className="mr-3" />
							<span>Projects</span>
						</Item>
						<Item onSelect={() => navigate("/resume")}>
							<FileText size={20} className="mr-3" />
							<span>Resume</span>
						</Item>
						<Item onSelect={() => navigate("/contact")}>
							<EnvelopeSimple size={20} className="mr-3" />
							<span>Contact</span>
						</Item>
						<Item onSelect={() => navigate("/blog")}>
							<PencilCircle size={20} className="mr-3" />
							<span>Blog</span>
						</Item>
					</Command.Group>
				</Command.List>

				<div className="flex items-center justify-between px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-neutral-500 bg-neutral-50/50 dark:bg-neutral-900/50">
					<div className="flex gap-3">
						<span className="flex items-center gap-1">
							<kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-sans">Enter</kbd> to select
						</span>
						<span className="flex items-center gap-1">
							<kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-sans">↑↓</kbd> to navigate
						</span>
					</div>
					<span className="flex items-center gap-1">
						<kbd className="px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-sans">ESC</kbd> to close
					</span>
				</div>
			</div>
		</Command.Dialog>
	);
};

interface ItemProps {
	children?: React.ReactNode;
	onSelect: () => void;
}

function Item({ children, onSelect }: ItemProps) {
	return (
		<Command.Item
			onSelect={onSelect}
			className="flex items-center px-3 py-3 rounded-lg cursor-pointer text-sm text-neutral-700 dark:text-neutral-300 aria-selected:bg-neutral-100 dark:aria-selected:bg-neutral-800 aria-selected:text-neutral-900 dark:aria-selected:text-white transition-colors"
		>
			{children}
		</Command.Item>
	);
}

export default Cmdk;
