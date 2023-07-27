export interface RoboGameInterface {
	row: number;
	col: number;
	carPosition: { x: number; y: number };
	boxes: Array<{ x: number; y: number }>;
	robotDirection: Array<number>;
	endPosition: { x: number; y: number };
	boxSize: number;
	batteryPosition?: Array<Array<number>>;
	filterBatteryPosition?: Array<Array<number>>;
	obstaclePosition?: Array<Array<number>>;
	carHealth: number;
	carInitialHealth: number;
	coins: number;
}
