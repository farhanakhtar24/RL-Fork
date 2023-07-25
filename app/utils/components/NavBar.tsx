import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
	return (
		<div className="w-full p-5 bg-cyan-900 text-white">
			<ul className="flex gap-5 items-center">
				<li>
					<Link href={`/`}>Home</Link>
				</li>
				<li>
					<Link href={`/h5p`}>h5p</Link>
				</li>
				<li>
					<Link href={`/flashcard`}>flashcard</Link>
				</li>
				<li>
					<Link href={`/reactflow`}>Flow</Link>
				</li>
				<li>
					<Link href={`/dnd`}>Drag And Drop</Link>
				</li>
				<li>
					<Link href={`/imagechoice`}>Image Choice</Link>
				</li>
				<li>
					<Link href={`/fillintheblanks`}>Fill In the Blanks</Link>
				</li>
				<li>
					<Link href={`/fibdnd`}>Fill In the Blanks / DND</Link>
				</li>
				<li>
					<Link href={`/2dRoboGame`}>2D Game</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
