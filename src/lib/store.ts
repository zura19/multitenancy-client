import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
