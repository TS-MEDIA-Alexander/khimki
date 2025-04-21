// store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";  // Импортируем reducer
import newsReducer from "./slice/news";  // Импортируем reducer
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;
