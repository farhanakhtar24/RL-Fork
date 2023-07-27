import { configureStore } from "@reduxjs/toolkit";
// import answerCollectorSlice from "./slice/AnswerCollectorSlice";
import { enableMapSet } from "immer";
import DndSlice from "./slice/DndSlice";
import ImageChoiceSlice from "./slice/ImageChoiceSlice";
import FIBSlice from "./slice/FIBSlice";
import FIBDndSlice from "./slice/FIBDndSlice";
import RoboGameSlice from "./slice/RoboGameSlice";
enableMapSet();

export const store = configureStore({
	reducer: {
		DNDSlice: DndSlice.reducer,
		ImageChoiceSlice: ImageChoiceSlice.reducer,
		FIBSlice: FIBSlice.reducer,
		FIBDNDSlice: FIBDndSlice.reducer,
		RoboGameSlice: RoboGameSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
