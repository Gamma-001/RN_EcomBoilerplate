import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sampleApi from './api';

const reducer = combineReducers({
    // add the remaining reducers here
    [sampleApi.reducerPath]: sampleApi.reducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(sampleApi.middleware)
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;