// import FailSound from "../audios/fail1.mp3";
// import WinSound from "../audios/win2.mp3";
// import WallHitSound from "../audios/wall_hit1.mp3";
// import GetCoinSound from "../audios/Point_score.mp3";
// import WalkSound from "../audios/WalkSound.mp3";

// let FailSound = require("../audios/fail1.mp3");
// let WinSound = require("../audios/win2.mp3");
// let WallHitSound = require("../audios/wall_hit1.mp3");
// let GetCoinSound = require("../audios/Point_score.mp3");
// let WalkSound = require("../audios/WalkSound.mp3");

export const playFailSound = () => {
	const audio = new Audio("../audios/fail1.mp3");
	audio.play();
};

export const playWinSound = () => {
	const audio = new Audio("../audios/win2.mp3");
	audio.play();
};

export const playWallHitSound = () => {
	const audio = new Audio("../audios/wall_hit1.mp3");
	audio.play();
};

export const playGetCoinSound = () => {
	const audio = new Audio("../audios/Point_score.mp3");
	audio.play();
};

export const playWalkSound = () => {
	const audio = new Audio("../audios/WalkSound.mp3");
	audio.play();
};
