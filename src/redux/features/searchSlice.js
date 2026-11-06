import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'photos',
        results: [],
        loading: false,
        error: null,
        page: 1
    },
    reducers: {
        setQuery(state, action){
            state.query = action.payload
        },
        setActiveTab(state, action){
            state.activeTab = action.payload
            state.page = 1
        },
        setResults(state, action){
            state.loading = false
            state.results = action.payload
        },
        appendResults(state, action) {
            state.loading = false
            state.results.push(...action.payload)
        },
        setLoading(state, action){
            state.loading = true,
            state.error = null
        },
        setError(state, action){
            state.error = action.payload,
            state.loading = false

        },
        clearResult(state){
            state.results = []
        }
    }
})

export const { setQuery, setActiveTab, setResults, appendResults, setLoading, setError, clearResult } = searchSlice.actions

export default searchSlice.reducer