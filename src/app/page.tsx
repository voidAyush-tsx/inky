"use client"

import Image from "next/image";
import { User } from "lucide-react";
import LottieBackground from "../components/finger_scan";
import {motion} from "motion/react"

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
					<div className="relative w-full h-96 flex items-center justify-center">
						{/* blurred background */}
						<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
							<div className="w-[600px] h-[600px] rounded-full bg-[#972323] opacity-20 blur-3xl transform" />
							<div className="absolute w-[600px] h-[600px] rounded-full  bg-[#ffffff05] transform" />
						</div>

						{/* Upper-Line */}
						<span>
							<svg 
							width="281" 
							height="83" 
							viewBox="0 0 281 83" 
							fill="none" 
							className="absolute right-1/12 top-1/4"
							>
								<motion.path 
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								transition={{
									duration: 1.25,
									ease: "easeInOut",
								}}
								d="M0 0.476562H159.052L189.529 60.0019H259.53" 
								stroke="#777777" 
								stroke-width="0.952405"
								/>
								<g filter="url(#filter0_f_12_182)">
									<motion.circle 
									initial={{ scale: 0, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									transition={{
										duration: 1.25,
										ease: "easeInOut",
										delay: 0.5
									}}
									cx="258.103" 
									cy="59.5257" 
									r="8.57165" 
									fill="white"/>
								</g>
								<motion.circle 
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 1.25,
									ease: "easeInOut",
									delay: 0.5
								}}
								cx="258.104" 
								cy="59.5262" 
								r="6.66684" 
								fill="#D9D9D9"/>
								<defs>
									<filter id="filter0_f_12_182" x="235.245" y="36.668" width="45.7167" height="45.7157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feGaussianBlur stdDeviation="7.14304" result="effect1_foregroundBlur_12_182"/>
									</filter>
								</defs>
							</svg>
							<span>
								<motion.span
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.25 }}
									className="absolute right-8 top-1/3 text-white font-inky-header text-3xl font-bold"
								>
									<motion.span
										transition={{ duration: 2, delay: 1.5 }}
										onViewportEnter={() => {
											const element = document.getElementById('counter-1');
											if (element) {
												setTimeout(() => {
													let count = 0;
													const interval = setInterval(() => {
														if (count <= 150) {
															element.textContent = count.toString();
															count++;
														} else {
															clearInterval(interval);
														}
													}, 10);
												}, 1250);
											}
										}}
									>
										<span id="counter-1">0</span>
									</motion.span>
									+
								</motion.span>
							</span>
						</span>

						{/* Lower-Line */}
						<span>
							<svg 
							width="318" 
							height="83" 
							viewBox="0 0 318 83" 
							fill="none" 
							className="absolute right-1/12 bottom-1/5"
							>
								<motion.path 
								initial={{ pathLength: 0 }}
								whileInView={{ pathLength: 1 }}
								transition={{
									duration: 1.25,
									ease: "easeInOut",
								}}
								d="M0 81.9082H195.719L226.196 22.3829H296.198" 
								stroke="#777777" 
								stroke-width="0.952405"
								/>
								<g filter="url(#filter0_f_12_185)">
									<motion.circle 
									initial={{ scale: 0, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									transition={{
										duration: 1.25,
										ease: "easeInOut",
										delay: 0.5
									}}
									cx="294.77" 
									cy="22.858" 
									r="8.57165" 
									fill="white"/>
								</g>
								<motion.circle 
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{
									duration: 1.25,
									ease: "easeInOut",
									delay: 0.5
								}}
								cx="294.77" 
								cy="22.858" 
								r="6.66684" 
								fill="#D9D9D9"/>
								<defs>
									<filter id="filter0_f_12_185" x="271.913" y="0" width="45.7167" height="45.7157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix"/>
										<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
										<feGaussianBlur stdDeviation="7.14304" result="effect1_foregroundBlur_12_185"/>
									</filter>
								</defs>
							</svg>
							<span>
								<motion.span
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 1.25 }}
									className="absolute right-10 bottom-1/3 text-white font-inky-header text-3xl font-bold"
								>
									<motion.span
										transition={{ duration: 2, delay: 1.5 }}
										onViewportEnter={() => {
											const element = document.getElementById('counter-2');
											if (element) {
												setTimeout(() => {
													let count = 0;
													const interval = setInterval(() => {
														if (count <= 50) {
															element.textContent = count.toString();
															count++;
														} else {
															clearInterval(interval);
														}
													}, 10);
												}, 1250);
											}
										}}
									>
										<span id="counter-2">0</span>
									</motion.span>
									+
								</motion.span>
							</span>
						</span>


						{/* lottie animation above the blur */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<LottieBackground opacity={0.8} />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}