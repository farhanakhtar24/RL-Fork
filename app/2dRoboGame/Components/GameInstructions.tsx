import React from "react";
import Book from "/app/utils/images/book.png";
import Image from "next/image";

type Props = {};

const GameInstructions = (props: Props) => {
	return (
		<div className=" text-white to-fuchsia-300 sm:h-screen">
			<div className="bg-gray-300 h-14 2xl:h-28 flex">
				<Image
					src={Book.src}
					alt="img"
					className="h-full px-4"
					width={100}
					height={100}
				/>
				<h1 className="text-xl text-black text-bold py-3">Learn</h1>
			</div>
			<ol
				style={{ listStyleType: "decimal" }}
				className="space-y-2 sm:px-5 sm:py-4 leading-5 sm:leading-6 bg-gray-100 text-black text-md">
				<li>
					The objective of the game is to move a car from the starting
					position to the end position on the game board.
				</li>
				<li>
					The starting position of the car is (4, 4) and the end
					position is (8, 1).
				</li>
				<li>
					The car can be moved in four directions: up, down, left, and
					right. Use the arrow keys or the provided controls to move
					the car in the desired direction.
				</li>
				<li>The car can only move one cell at a time.</li>
				<li>
					Try to reach the end position as quickly as possible while
					avoiding obstacles and making as few moves as possible.
				</li>
				<li>
					You win the game when you reach the end position at (8, 1).
				</li>
				<li>Good luck and have fun playing the game!</li>
			</ol>
		</div>
	);
};

export default GameInstructions;
