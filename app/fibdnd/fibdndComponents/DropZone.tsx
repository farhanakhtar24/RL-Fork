"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux Toolkit/hooks";
import {
	getFIBDNDGameData,
	setFIBDNDanswers,
} from "@/app/redux Toolkit/slice/FIBDndSlice";
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";

type Props = {
	index: number;
	slideIndex: number;
};

const DropZone = ({ index, slideIndex }: Props) => {
	const FIBDNDGameData = useAppSelector(getFIBDNDGameData);
	const reset = FIBDNDGameData[slideIndex].reset;
	const dispatch = useAppDispatch();
	const [word, setWord] = useState<string>("");
	const [{ isOver }, drop] = useDrop({
		accept: "card",
		drop: ({ answer }: any) => {
			addItemToBoard(answer);
			setWord(answer);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	const addItemToBoard = (answer: string) => {
		dispatch(
			setFIBDNDanswers({
				slideIndex: slideIndex,
				answerSubmitted: {
					dropZoneIndex: index,
					answer: answer,
				},
			})
		);
	};

	useEffect(() => {
		if (reset) {
			setWord("");
			return;
		}
	}, [reset]);

	return (
		<>
			{word ? (
				<span
					className={`w-[100px] h-10 text-black  border-b border-black border-dashed `}
					ref={drop}>
					{word}
				</span>
			) : (
				<span
					className={`flex text-black w-[100px] h-10 border-b border-black border-dashed `}
					ref={drop}
				/>
			)}
		</>
	);
};

export default DropZone;
