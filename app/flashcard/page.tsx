import React from "react";
import MemoryGame from "./memoryGame/MemoryGame";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full flex justify-center items-center">
			<MemoryGame />
		</div>
	);
};

export default page;
