"use client";
import React, { Dispatch, useState } from "react";
import GameInstructions from "./GameInstructions";
import DragDropButtonComponent from "./DragDropButtonComponent";
import GameMatrix from "./GameMatrix";
import LogicOutput from "./LogicOutput";
import GamePopUp from "./GamePopUp";
import Build from "/app/utils/images/Build.png";
import Coin from "/app/utils/images/Coin.png";
import Health from "/app/utils/images/Health.png";
import Image from "next/image";
import RobotImg from "/app/utils/images/robot.png";
import { getRoboGameData } from "@/app/redux Toolkit/slice/RoboGameSlice";
import { useAppSelector } from "@/app/redux Toolkit/hooks";

interface Props {
	currentSlide: number;
	setCurrentSlide: Dispatch<React.SetStateAction<number>>;
	buttons: string[];
	slideLength: number;
}

const CarGameActivityTwo = ({
	buttons,
	currentSlide,
	setCurrentSlide,
	slideLength,
}: Props) => {
	const carGameData = useAppSelector(getRoboGameData);
	const carGames = carGameData[currentSlide];
	const {
		row,
		col,
		endPosition,
		batteryPosition,
		carInitialHealth,
		obstaclePosition,
	} = carGames;
	const image = RobotImg;
	const [robotDirection, setRobotDirection] = useState(
		carGames.robotDirection
	);
	const [filterBatteryPosition, setFilterBatteryPosition] = useState(
		carGames.filterBatteryPosition
	);
	const [carPosition, setCarPosition] = useState(carGames.carPosition);
	const [boxSize, setBoxSize] = useState(carGames.boxSize);
	const [carHealth, setCarHealth] = useState(carGames.carHealth);
	const [boxes, setBoxes] = useState(carGames.boxes);
	const [coins, setCoins] = useState(carGames.coins);
	const [rotateCarClockWise, setRotateCarClockWise] = useState(false);
	const [rotateCarAntiClockWise, setRotateCarAntiClockWise] = useState(false);
	const [showPopUp, setShowPopUp] = useState(false);
	const [popUpStatus, setPopUpStatus] = useState("");
	const [popUpDesc, setPopUpDesc] = useState("");

	const handleRotateCarClockWise = () => {
		setRotateCarClockWise(true);
	};
	const handleRotateCarAntiClockWise = () => {
		setRotateCarAntiClockWise(true);
	};

	return (
		<div>
			<div className={`flex h-screen ${showPopUp && ""}`}>
				<div
					className={`w-1/3 overflow-y-auto h-screen hidden sm:block`}>
					<GameInstructions />
				</div>
				<div className="w-full h-screen">
					<div className="w-full h-14 2xl:h-28 bg-blue-950 flex sm:justify-between">
						<div className="flex ">
							<Image
								src={Build.src}
								alt="img"
								className="px-4 py-1"
								width={140}
								height={999}
							/>
							<h1 className="text-white text-lg text-bold pt-3">
								Build
							</h1>
						</div>
						<div className="flex text-white">
							{coins >= 0 && (
								<Image
									width={50}
									height={50}
									src={Coin.src}
									alt="Coin"
									className="object-cover h-full p-3"
								/>
							)}
							{coins >= 0 && (
								<h1 className="mr-2 sm:mr-16 my-auto">
									Coins: {coins}
								</h1>
							)}
							{carHealth >= 0 && (
								<Image
									width={50}
									height={50}
									src={Health.src}
									alt="Health"
									className="object-cover h-full p-3"
								/>
							)}
							{carHealth >= 0 && (
								<h1 className="my-auto mr-2 sm:mr-10">
									Health: {carHealth}
								</h1>
							)}
						</div>
					</div>
					<div
						className={`flex justify-around text-center bg-blue-900 ${
							row > 8 ? "py-0" : "py-5"
						} h-[59%] sm:h-[53%] xl:h-[60%] 2xl:h-[67%]`}>
						<div
							className={`grid gap-0 mx-auto my-auto`}
							style={{
								gridTemplateColumns: `repeat(${col}, minmax(0, 1fr))`,
								// grid-template-columns: repeat(5, minmax(0, 1fr));
							}}>
							<GameMatrix
								row={row}
								col={col}
								carPosition={carPosition}
								rotateCarClockWise={rotateCarClockWise}
								rotateCarAntiClockWise={rotateCarAntiClockWise}
								image={image}
								endPosition={endPosition}
								filterBatteryPosition={filterBatteryPosition}
								obstaclePosition={obstaclePosition}
							/>
						</div>
						{showPopUp && (
							<div className={`fixed w-1/3`}>
								<GamePopUp
									status={popUpStatus}
									desc={popUpDesc}
									setShowPopUp={setShowPopUp}
									currentSlide={currentSlide}
									slideLength={slideLength}
									setCurrentSlide={setCurrentSlide}
								/>
							</div>
						)}
						<div className="bg-blue-950 ml-2 sm:ml-5 md:ml-7 w-1/2 overflow-y-auto mx-auto my-auto h-[90%] 2xl:h-[70%]">
							<LogicOutput robotDirection={robotDirection} />
						</div>
					</div>
					<div className="w-full sticky h-screen">
						<DragDropButtonComponent
							boxes={boxes}
							setRobotDirection={setRobotDirection}
							setBoxes={setBoxes}
							row={row}
							col={col}
							boxSize={boxSize}
							setBoxSize={setBoxSize}
							setCarPosition={setCarPosition}
							buttons={buttons}
							handleRotateCarClockWise={handleRotateCarClockWise}
							handleRotateCarAntiClockWise={
								handleRotateCarAntiClockWise
							}
							batteryPosition={batteryPosition}
							filterBatteryPosition={filterBatteryPosition}
							setFilterBatteryPosition={setFilterBatteryPosition}
							carHealth={carHealth}
							setCarHealth={setCarHealth}
							carInitialHealth={carInitialHealth}
							setShowPopUp={setShowPopUp}
							setPopUpStatus={setPopUpStatus}
							setPopUpDesc={setPopUpDesc}
							obstaclePosition={obstaclePosition}
							endPosition={endPosition}
							currentSlide={currentSlide}
							setCurrentSlide={setCurrentSlide}
							slideLength={slideLength}
							coins={coins}
							setCoins={setCoins}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarGameActivityTwo;
