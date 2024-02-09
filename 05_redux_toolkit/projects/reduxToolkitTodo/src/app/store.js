/**
 * Process to make store.
 *  1. Configure store.
 *  2. Make reducers, they are called slices in redux toolkit. see `../features` folder
 *  3. Store needs knowledge of reducers.
 */

import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})