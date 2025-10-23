import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-black">
			<header className="w-full py-8 px-6">
				<div className="w-full mx-auto flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Image
							className=""
							src="/nav_logo.png"
							alt="logo"
							width={36}
							height={20}
							priority={false}
						/>
						<span className="font-semibold text-lg text-white">Inky</span>
					</div>
					<nav className="hidden sm:flex gap-6 text-sm">
						<a href="#" className="text-zinc-400">Home</a>
						<a href="#" className="text-zinc-400">Docs</a>
						<a href="#" className="text-zinc-400">About</a>
					</nav>
					<div className="hidden sm:flex items-center gap-2">
						<button className="rounded-full border border-white/20 px-3 py-1 text-sm text-white">Sign in</button>
					</div>
				</div>
			</header>

			<main className="flex-1 w-full max-w-7xl mx-auto py-16 px-6">
			</main>

		</div>
	);
}
