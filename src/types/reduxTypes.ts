import { store } from '../store/index';

export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;
export type RootState = ReturnType<typeof store.getState>;
