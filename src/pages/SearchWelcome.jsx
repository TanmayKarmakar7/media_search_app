import React from 'react'
import { Search, Image, Video, Sparkles } from 'lucide-react'

const SearchWelcome = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5">

      <div className="w-24 h-24 rounded-3xl bg-green-100 flex items-center justify-center mb-7">
        <Search size={45} className="text-green-600" />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Discover Something <span className="text-green-600">Amazing</span>
      </h2>

      <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
        Search beautiful photos, videos and GIFs.
        Your next inspiration is just one search away!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm">
          <Image size={17} />
          Photos
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm">
          <Video size={17} />
          Videos
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm">
          <Sparkles size={17} />
          GIFs
        </div>

      </div>

    </div>
  )
}

export default SearchWelcome
