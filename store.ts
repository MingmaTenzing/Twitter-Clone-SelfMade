import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import tweetReducer from "./slices/tweetslice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    user: userReducer,
    tweet: tweetReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;




