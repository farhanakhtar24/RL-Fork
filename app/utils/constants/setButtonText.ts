import leftArrow from "/app/utils/images/leftArrow.png";
import rightArrow from "/app/utils/images/rightArrow.png";
import upArrow from "/app/utils/images/upArrow.png";
import downArrow from "/app/utils/images/downArrow.png";

export const setButtonText = (buttonId: any) => {
	let buttonText = "";
	switch (buttonId) {
		case "left":
			return leftArrow;

		case "right":
			return rightArrow;

		case "top":
			return upArrow;

		case "bottom":
			return downArrow;

		case "turn-left":
			return "https://img.icons8.com/?size=1x&id=124347&format=png";

		case "turn-right":
			return "https://img.icons8.com/?size=1x&id=39780&format=png";
	}
	return buttonText;
};
