
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersReducer } from "./slice";
import filterReducer from "./filterReducer";
import followersSlice from "./followersSlice";

const filtersConfig = {
  key: "filter",
  storage,
};

const followConfig = {
  key: "isFollow",
  storage,
};

export const store = configureStore({
  reducer: {
    filter: persistReducer(filtersConfig, filterReducer),
    isFollow: persistReducer(followConfig, followersSlice),
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
