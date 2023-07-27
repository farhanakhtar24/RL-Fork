"use client";
import React, { useState } from "react";
import RobotImg from "/app/utils/images/robot.png";
import CarGameActivityTwo from "./CarGameActivityTwo";
import { useAppSelector } from "@/app/redux Toolkit/hooks";
import { getRoboGameData } from "@/app/redux Toolkit/slice/RoboGameSlice";

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const newCarGames = useAppSelector(getRoboGameData);

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center">
			<div className="relative overflow-x-hidden overflow-y-hidden w-full h-full">
				<div
					className="flex transition-transform duration-300 h-full"
					style={{
						transform: `translateX(-${currentSlide * 100}%)`,
					}}>
					{newCarGames.map((game, index) => (
						<div
							key={index}
							className="w-full flex-shrink-0 h-full">
							<CarGameActivityTwo
								currentSlide={currentSlide}
								setCurrentSlide={setCurrentSlide}
								buttons={["left", "right", "top", "bottom"]}
								slideLength={14}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
