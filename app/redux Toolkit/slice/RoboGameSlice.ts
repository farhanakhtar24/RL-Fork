import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RoboGameInterface } from "@/app/utils/interfaces/RoboGameInterface";
import { RoboGameData } from "@/app/utils/data/RoboGameData";

interface initialState {
	RoboGameData: RoboGameInterface[];
}

const initialState: initialState = {
	RoboGameData: RoboGameData,
};

const RoboGameSlice = createSlice({
	name: "RoboGame",
	initialState,
	reducers: {},
});

export const {} = RoboGameSlice.actions;

export const getRoboGameData = (state: RootState) =>
	state.RoboGameSlice.RoboGameData;

export default RoboGameSlice;
