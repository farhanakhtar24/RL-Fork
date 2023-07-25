"use client";
import React from "react";
// import Zoom from "react-reveal/Zoom";
import Oops from "/app/utils/images/Oops.png";
import { nextSlide } from "@/app/utils/constants/slideChange";
import Image, { StaticImageData } from "next/image";
// import { nextSlide } from "/app/utils/constants/slideChange.ts";

type Props = {
	status: string;
	desc: string;
	setShowPopUp: any;
	currentSlide: any;
	slideLength: any;
	setCurrentSlide: any;
};

const GamePopUp = ({
	status,
	desc,
	setShowPopUp,
	currentSlide,
	slideLength,
	setCurrentSlide,
}: Props) => {
	return (
		// <Zoom>
		<div className="bg-white rounded-lg sm:mt-20 xl:mt-24">
			<div>
				<div className="border border-gray-400">
					<Image
						className="mx-auto my-auto w-28 h-32 2xl:w-36 2xl:h-36"
						src={
							status === "Fail" || status === "Stuck"
								? Oops.src
								: "https://media.tenor.com/xYMLEZlJCXcAAAAj/trophy-uno.gif"
						}
						alt="img"
						width={200}
						height={200}
					/>
					<p className="text-2xl text-gray-700">{desc}</p>
					<div className="flex pt-8  text-white">
						{status === "Fail" || status === "Stuck" ? (
							<button
								className="px-3 rounded-sm bg-yellow-400 w-1/2 text-bold py-3 2xl:py-5"
								onClick={() => {
									setShowPopUp(false);
								}}>
								Try again
							</button>
						) : (
							<button
								className="w-1/2 py-4 2xl:py-6 bg-blue-500 text-white text-lg text-bold"
								onClick={() => {
									setShowPopUp(false);
									setCurrentSlide(
										nextSlide(currentSlide, slideLength)
									);
								}}>
								Next
							</button>
						)}
						<button
							className="px-3 rounded-sm bg-red-600 w-1/2 text-bold py-3 2xl:py-5"
							onClick={() => {
								setShowPopUp(false);
							}}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
		// </Zoom>
	);
};

export default GamePopUp;
