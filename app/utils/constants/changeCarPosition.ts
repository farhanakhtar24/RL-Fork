import {
	playFailSound,
	playWallHitSound,
	playWinSound,
	playGetCoinSound,
	playWalkSound,
} from "./gameSounds";

let interval: any;
async function fun(x: any, y: any, setFilterBatteryPosition: any) {
	await setFilterBatteryPosition((prevFilterBatteryPosition: any) =>
		prevFilterBatteryPosition.filter(
			(coord: any) => !(coord[0] === x && coord[1] === y)
		)
	);
}
//On Click Of Reset Button
export const eraseBoxes = (
	setBoxes: any,
	setCarPosition: any,
	setRobotDirection: any,
	setCarHealth: any,
	setFilterBatteryPosition: any,
	batteryPosition: any,
	carInitialHealth: any,
	boxSize: any,
	setBoxSizeTemp: any,
	setBoxIndex: any,
	setCoins: any,
	setPlayButton: any
) => {
	setBoxes(new Array(boxSize).fill(null));
	setCarPosition({ x: 1, y: 1 });
	setRobotDirection(new Array(0));
	setCarHealth && setCarHealth(carInitialHealth);
	setFilterBatteryPosition && setFilterBatteryPosition(batteryPosition);
	clearInterval(interval);
	setBoxSizeTemp(boxSize);
	setBoxIndex(0);
	setCoins && setCoins(0);
	setPlayButton(false);
};
const showPopUpMsg = (
	setShowPopUp: any,
	setPopUpStatus: any,
	setPopUpDesc: any,
	interval: any,
	status: any,
	desc: any,
	battery: any
) => {
	setShowPopUp(true);
	setPopUpStatus(status);
	setPopUpDesc(desc);
	if (status === "Fail" || status === "Win" || status === "Stuck") {
		clearInterval(interval);
	}
};
export const checkEmptyBox = (
	boxes: any,
	boxSizeTemp: any,
	setPopUpDesc: any,
	setPopUpStatus: any,
	setShowPopUp: any
) => {
	for (let i = 0; i < boxSizeTemp; i++) {
		if (!boxes[i]) {
			setPopUpDesc("Please Fill All Box First!");
			setPopUpStatus("Fail");
			setShowPopUp(true);
			return true;
		}
	}
	return false;
};
export const changeCarPosition = (
	boxSizeTemp: any,
	setRobotDirection: any,
	filterBatteryPosition: any,
	setCarHealth: any,
	carHealthRef: any,
	boxes: any,
	setFilterBatteryPosition: any,
	setCarPosition: any,
	row: any,
	col: any,
	handleRotateCarClockWise: any,
	handleRotateCarAntiClockWise: any,
	carInitialHealth: any,
	setShowPopUp: any,
	setPopUpStatus: any,
	setPopUpDesc: any,
	obstaclePosition: any,
	endPosition: any,
	coins: any,
	setCoins: any,
	setPlayButton: any
) => {
	setRobotDirection([]);
	setPlayButton(true);
	let pos = { x: 1, y: 1 }; // Start at { x: 1, y: 1 }
	let index = 0;
	let robotSteps = 0;
	let coinTemp = coins;
	let count = filterBatteryPosition ? filterBatteryPosition.length : 0;
	const batteryHealth = 5;
	setCarHealth && setCarHealth(carInitialHealth);

	// Function to show popup message
	const showPopup = (status: any, desc: any, isSuccess = false) => {
		if (status === "Stuck") {
			playWallHitSound();
		}
		if (status === "Fail") {
			playFailSound();
		}
		setPlayButton(false);
		showPopUpMsg(
			setShowPopUp,
			setPopUpStatus,
			setPopUpDesc,
			interval,
			status,
			desc,
			isSuccess
		);
	};
	// When Traverse all BoxSize
	interval = setInterval(() => {
		robotSteps++;

		// Robot Final Destination
		if (pos.x === endPosition.x && pos.y === endPosition.y) {
			playWinSound();
			showPopup(
				"Win",
				`Hurray! You won the game in ${robotSteps - 1} steps`
			);
			return;
		}
		const box = boxes[index];
		if (!box) {
			clearInterval(interval);
			showPopup("Fail", "You Fail! Robot destination not reached");
			return;
		}
		playWalkSound();
		if (box === "left") {
			if (pos.x > 1) {
				if (
					obstaclePosition &&
					obstaclePosition.some(
						(coord: any) =>
							coord[0] === pos.x - 1 && coord[1] === pos.y
					)
				) {
					showPopup("Stuck", "You Fail! Robot got stuck on the way");
				} else {
					pos = { ...pos, x: pos.x - 1 };
				}
			} else {
				showPopup("Stuck", "You Fail! Robot got stuck on the way");
				return;
			}
		} else if (box === "right") {
			if (pos.x < row) {
				if (
					obstaclePosition &&
					obstaclePosition.some(
						(coord: any) =>
							coord[0] === pos.x + 1 && coord[1] === pos.y
					)
				) {
					showPopup("Stuck", "You Fail! Robot got stuck on the way");
				} else {
					pos = { ...pos, x: pos.x + 1 };
				}
			} else {
				showPopup("Stuck", "You Fail! Robot got stuck on the way");
				return;
			}
		} else if (box === "top") {
			if (pos.y > 1) {
				if (
					obstaclePosition &&
					obstaclePosition.some(
						(coord: any) =>
							coord[0] === pos.x && coord[1] === pos.y - 1
					)
				) {
					showPopup("Stuck", "You Fail! Robot got stuck on the way");
				} else {
					pos = { ...pos, y: pos.y - 1 };
				}
			} else {
				showPopup("Stuck", "You Fail! Robot got stuck on the way");
				return;
			}
		} else if (box === "bottom") {
			if (pos.y < col) {
				if (
					obstaclePosition &&
					obstaclePosition.some(
						(coord: any) =>
							coord[0] === pos.x && coord[1] === pos.y + 1
					)
				) {
					showPopup("Stuck", "You Fail! Robot got stuck on the way");
				} else {
					pos = { ...pos, y: pos.y + 1 };
				}
			} else {
				showPopup("Stuck", "You Fail! Robot got stuck on the way");
				return;
			}
		} else if (box === "turn-right") {
			handleRotateCarClockWise();
		} else if (box === "turn-left") {
			handleRotateCarAntiClockWise();
		}
		// Rest of your logic
		if (carHealthRef.current === 0) {
			showPopup("Fail", "You Fail! Robot ran out of health");
			return;
		}
		index++;
		setCarPosition({ ...pos });
		setCarHealth && setCarHealth((prevHealth: any) => prevHealth - 1);
		// When Robot Reach on Battery Position
		if (
			filterBatteryPosition &&
			filterBatteryPosition.some(
				(coord: any) => coord[0] === pos.x && coord[1] === pos.y
			)
		) {
			playGetCoinSound();
			setRobotDirection((prevDirection: any) => [
				...prevDirection,
				`Robot Move ${box}. (Robot Collected Coin)`,
			]);
			setCarHealth(carHealthRef.current + batteryHealth);
			fun(pos.x, pos.y, setFilterBatteryPosition);
			count--;
			setCoins(coinTemp + 1);
			coinTemp++;
		} else {
			setRobotDirection((prevDirection: any) => [
				...prevDirection,
				`Robot Move ${box}`,
			]);
		}
		if (index > boxSizeTemp) {
			showPopup("Fail", "You Fail! Robot destination not reached");
			return;
		}
	}, 1000);
};
