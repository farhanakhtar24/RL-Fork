"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import boundary from "/app/utils/images/Boundary.png";

type Props = {
	row: number;
	col: number;
	carPosition: any;
	rotateCarClockWise: boolean;
	rotateCarAntiClockWise: boolean;
	image: StaticImageData;
	endPosition: {
		x: number;
		y: number;
	};
	filterBatteryPosition: any;
	obstaclePosition: any;
};

const GameMatrix = ({
	row,
	col,
	carPosition,
	rotateCarClockWise,
	rotateCarAntiClockWise,
	image,
	endPosition,
	filterBatteryPosition,
	obstaclePosition,
}: Props) => {
	return Array.from({ length: row }, (_, rowIndex) =>
		Array.from({ length: col }, (_, colIndex) => {
			const adjustedRowIndex = rowIndex + 1;
			const adjustedColIndex = colIndex + 1;

			const rowGreaterFive = row > 5 || col > 5;
			const rowGraterSeven = row > 7 || col > 7;
			const gridBlockSize = rowGreaterFive
				? rowGraterSeven
					? "h-6 w-6 sm:h-7 sm:w-7 xl:h-10 xl:w-10 2xl:h-16 2xl:w-16"
					: "h-7 w-7 sm:h-7 sm:w-7 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
				: "h-12 w-12 xl:h-16 xl:w-16 2xl:h-20 2xl:w-20";

			if (
				adjustedColIndex === carPosition?.x &&
				adjustedRowIndex === carPosition?.y
			) {
				return (
					<div
						key={`${adjustedRowIndex}-${adjustedColIndex}`}
						className={`border border-gray-600 ${
							adjustedColIndex === endPosition.x &&
							adjustedRowIndex === endPosition.y
								? "bg-red-500"
								: "bg-yellow-400"
						} ${gridBlockSize} p-0 m-0`}>
						<Image
							className={`h-full w-full object-cover ${
								rotateCarClockWise
									? "rotate-90"
									: rotateCarAntiClockWise
									? "rotate-270"
									: ""
							}`}
							src={image.src}
							alt="Car"
							width={100}
							height={100}
						/>
					</div>
				);
			} else if (
				adjustedColIndex === endPosition.x &&
				adjustedRowIndex === endPosition.y
			) {
				return (
					<div
						key={`${adjustedRowIndex}-${adjustedColIndex}`}
						className={`border border-gray-600 bg-red-500 ${gridBlockSize} p-0 m-0`}></div>
				);
			} else if (
				filterBatteryPosition &&
				filterBatteryPosition.some(
					(coord: any) =>
						coord[0] === adjustedColIndex &&
						coord[1] === adjustedRowIndex
				)
			) {
				return (
					<div
						key={`${adjustedRowIndex}-${adjustedColIndex}`}
						className={`border border-gray-600 ${gridBlockSize} p-0 m-0`}>
						<Image
							src="https://i.pinimg.com/originals/21/e5/2f/21e52f1ee0fd10cafd99331a61a382bd.gif"
							alt="Battery"
							className="h-full w-full object-cover"
							width={100}
							height={100}
						/>
					</div>
				);
			} else if (
				obstaclePosition &&
				obstaclePosition.some(
					(coord: any) =>
						coord[0] === adjustedColIndex &&
						coord[1] === adjustedRowIndex
				)
			) {
				return (
					<div
						key={`${adjustedRowIndex}-${adjustedColIndex}`}
						className={`border border-gray-600 bg-yellow-400 ${gridBlockSize} p-0 m-0`}>
						<Image
							src={boundary.src}
							alt="obstacle"
							className="h-full w-full object-cover"
							width={100}
							height={100}
						/>
					</div>
				);
			} else {
				return (
					<div
						key={`${adjustedRowIndex}-${adjustedColIndex}`}
						className={`border border-gray-600 bg-yellow-400 ${gridBlockSize} p-0 m-0`}></div>
				);
			}
		})
	);
};

export default GameMatrix;
