import Image from "next/image";
import { User } from "lucide-react";
import LottieBackground from "../components/lottieanimations";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-black relative">

			<div className="relative">
				<header className="w-full py-8 px-16">
					<div className="w-full mx-auto flex py-1 px-8 items-center justify-between bg-[#ffffff10] border-2 border-black rounded-xl shadow-[0px_0px_5px_rgba(255,255,255,0.33)]">
						<div className="flex items-center gap-3">
							<Image
								className="w-24 h-auto"
								src="/logo.png"
								alt="logo"
								width={100}
								height={52.5}
								priority={false}
							/>
						</div>
						<nav className="hidden sm:flex items-center justify-around gap-12 text-xl text-white font-inky-body">
							<a className="hover:text-red-600">Home</a>
							<a className="hover:text-red-600">About</a>
							<a className="hover:text-red-600">Products</a>
							<a className="hover:text-red-600">Services</a>
							<a className="hover:text-red-600">Publishing</a>
						</nav>
						<div className="hidden sm:flex items-center">
							<button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors">
								<User className="w-5 h-5 text-white" />
							</button>
						</div>
					</div>
				</header>

				<main className="flex-1 w-full max-w-7xl mx-auto py-16 px-6">
					<LottieBackground opacity={1} className="-z-10" />
				</main>
			</div>
		</div>
	);
}