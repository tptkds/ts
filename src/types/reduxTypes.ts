// export type AppDispatch = typeof store.dispatch;
// export type DispatchFunc = () => AppDispatch;
// export type RootState = ReturnType<typeof store.getState>;

import { store } from '../stores/index';

// import { makeStore } from '../store/index';
// export type AppStore = ReturnType<typeof makeStore>;
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
