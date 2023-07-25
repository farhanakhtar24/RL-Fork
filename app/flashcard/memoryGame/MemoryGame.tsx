"use client";
import React, { useEffect, useState } from "react";
import hemlet from "/app/flashcard/assets/helmet-1.png";
import potion from "/app/flashcard/assets/potion-1.png";
import sword from "/app/flashcard/assets/sword-1.png";
import shield from "/app/flashcard/assets/shield-1.png";
import scroll from "/app/flashcard/assets/scroll-1.png";
import ring from "/app/flashcard/assets/ring-1.png";
import { StaticImageData } from "next/image";
import Card from "./Card";

export interface CardInterface {
	id: number;
	src: StaticImageData;
	matched: boolean;
}

type Props = {};

const cardImages = [
	{ src: hemlet, matched: false },
	{ src: potion, matched: false },
	{ src: sword, matched: false },
	{ src: shield, matched: false },
	{ src: scroll, matched: false },
	{ src: ring, matched: false },
];

const MemoryGame = (props: Props) => {
	const [cards, setCards] = useState<CardInterface[]>([]);
	const [turns, setTurns] = useState(0);
	const [choiceOne, setChoiceOne] = useState<CardInterface | null>(null);
	const [choiceTwo, setChoiceTwo] = useState<CardInterface | null>(null);
	const [disabled, setDisabled] = useState(false);
	//shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card, index) => {
				return { ...card, id: Math.random() };
			});
		setChoiceOne(null);
		setChoiceTwo(null);
		setCards(shuffledCards);
		setTurns(0);
	};

	const handleChoice = (Card: CardInterface) => {
		choiceOne ? setChoiceTwo(Card) : setChoiceOne(Card);
	};

	const resetTurns = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
		setTurns((prev) => prev + 1);
		setDisabled(false);
	};

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true);
			if (choiceOne.src.src === choiceTwo.src.src) {
				setCards((prev) => {
					return prev.map((card) => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true };
						}
						return card;
					});
				});
				resetTurns();
			} else {
				setTimeout(() => resetTurns(), 1000);
			}
		}
	}, [choiceOne, choiceTwo, cards]);

	useEffect(() => {
		shuffleCards();
	}, []);

	return (
		<div
			className={`w-full h-full text-1.5xl text-center bg-purple-950 text-white p-3 flex flex-col items-center
            gap-5`}>
			<h1 className={`font-bold text-xl`}>Memory Game</h1>
			<button
				className={`bg-transparent border-2 border-white px-3 py-2 rounded-md text-white 
                font-bold cursor-pointer text-base duration-300 hover:bg-c23866 hover:text-white`}
				onClick={shuffleCards}>
				New Game
			</button>

			<div className="grid grid-cols-4 gap-5">
				{cards.map((card) => {
					return (
						<Card
							key={card.id}
							id={card.id}
							src={card.src}
							handleChoice={handleChoice}
							matched={card.matched}
							flipped={
								choiceOne?.id === card.id ||
								choiceTwo?.id === card.id ||
								card.matched
							}
							disabled={disabled}
						/>
					);
				})}
			</div>
			<p>Turns : {turns}</p>
		</div>
	);
};

export default MemoryGame;
