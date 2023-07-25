"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import cover from "../assets/cover.png";
import { CardInterface } from "./MemoryGame";

type Props = CardInterface & {
	handleChoice: (Card: CardInterface) => void;
	flipped: boolean;
	disabled: boolean;
};

const Card = ({ id, src, matched, flipped, handleChoice, disabled }: Props) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice({ id, src, matched });
		}
	};
	return (
		<div className="relative cursor-pointer" key={id}>
			<div>
				<Image
					className={`border-2 border-white rounded-md overflow-hidden ${
						flipped ? "rotate-y-0 delay-100" : ""
					} absolute rotate-y-90 transition-all ease-in duration-100`}
					src={src.src}
					alt=""
					width={150}
					height={150}
				/>
				<Image
					className={`border-2 border-white rounded-md overflow-hidden ${
						flipped ? "rotate-y-90 delay-0" : ""
					} transition-all ease-in duration-100`}
					src={cover.src}
					alt=""
					width={150}
					height={150}
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default Card;
