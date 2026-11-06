import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'
import { Search } from 'lucide-react';

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-sm w-full"
        >
            <input
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Search anything..."
                className="h-11 w-full px-4 text-gray-700 bg-transparent outline-none placeholder:text-gray-400 text-sm"
            />

            <button
                type="submit"
                className="h-11 px-7 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 cursor-pointer flex gap-1 items-center"
            >
                <Search size={16} strokeWidth={3} />
                Search
            </button>
        </form>
    )
}

export default SearchBar
