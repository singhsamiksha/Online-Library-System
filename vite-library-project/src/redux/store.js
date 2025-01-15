import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './reducers/bookReducer'
import tabReducer from './reducers/tabReducer'

export default configureStore({
  reducer: {
    bookStore: bookReducer,
    tabStore: tabReducer,
  },
})