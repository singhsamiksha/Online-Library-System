import { createSlice } from '@reduxjs/toolkit'
import Globals from '../../constants'

export const tabSlice = createSlice({
    name: 'tabs',
    initialState: {
        currentTab: null,
    },
    reducers: {
        changeTab: (state, actions) => {
            if(actions.payload && Globals.TABS[actions.payload]) {
                state.currentTab = actions.payload
            } else {
                console.error('Invalid tab value');
            }
        },
    },
})

export const { changeTab } = tabSlice.actions;

export default tabSlice.reducer;