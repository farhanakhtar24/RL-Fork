import React from "react";
import FlashCardsList from "./FlashCardCompnents/FlashCardsList";
import MemoryGame from "./memoryGame/MemoryGame";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full flex justify-center items-center">
			{/* <FlashCardsList /> */}
			<MemoryGame />
		</div>
	);
};

export default page;
