
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'
import { Image, Video, FileImage } from 'lucide-react'

const Tabs = () => {

    const tabs = [
        { name: 'photos', icon: Image },
        { name: 'videos', icon: Video },
        { name: 'GIF', icon: FileImage }
    ]

    const dispatch = useDispatch()
    const activeTab = useSelector(state => state.search.activeTab)

    return (
        <div className="flex flex-wrap gap-3 items-center justify-center my-7">

            {tabs.map((tab) => {
                const Icon = tab.icon

                return (
                    <button
                        key={tab.name}
                        onClick={() => dispatch(setActiveTab(tab.name))}
                        className={`
                            flex items-center gap-2 px-7 py-2.5 rounded-lg
                            text-sm font-medium uppercase
                            transition-all duration-200 cursor-pointer
                            ${activeTab === tab.name
                                ? 'bg-green-600 text-white shadow-sm'
                                : 'bg-white text-gray-600 border border-gray-200 hover:border-green-500 hover:text-green-600'
                            }
                        `}
                    >
                        <Icon size={18} />
                        {tab.name}
                    </button>
                )
            })}

        </div>
    )
}

export default Tabs
