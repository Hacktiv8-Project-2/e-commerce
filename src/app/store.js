import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import authSlice from './authSlice'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
  auth: authSlice,
  product: productReducer,
  cart: cartReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)