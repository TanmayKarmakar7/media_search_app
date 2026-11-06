import React from 'react'
import ResultCard from '../components/ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection, clearCollection } from '../redux/features/collectionSlice.js'
import { Eraser } from 'lucide-react';
import Navbar from '../components/Navbar.jsx'

const CollectionPage = () => {

  const dispatch = useDispatch()

  const collection = useSelector(state => state.collection.items)


  const removeFromCollection = (id) => {
    if (window.confirm('Remove this item from your collection?')) {
      dispatch(removeCollection({id}))
    }
  }
  
  
  const clearAllCollection = () => {
    if (window.confirm('Are you sure you want to clear your entire collection?')) {
      dispatch(clearCollection())
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}
        <div className="mb-10 flex gap-2 flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight">
            My Collection
          </h2>

          <p className="text-gray-500">
            All your favorite photos, videos and GIFs in one place.
          </p>
        </div>

        {/* Collection Count */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">
            Saved Media
          </h3>

          <div className='flex gap-3 items-center'>
            <span className="px-3 py-2 rounded-lg bg-green-100 text-green-600 text-sm font-medium">
              {collection.length} Items
            </span>

            {collection.length > 0 && (
              <button
                onClick={clearAllCollection}
                className="px-5 py-2 rounded-lg bg-red-100 text-red-600 text-sm hover:bg-red-600 hover:text-white cursor-pointer transition flex justify-center items-center gap-2 font-medium"
              >
                Clear Collection
                <Eraser size={22} strokeWidth={2} />
              </button>
            )}

          </div>
        </div>

        {/* Collection Grid */}
        {collection.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">

            {collection.map((item) => (
              <div key={item.id} className="relative group">

                <ResultCard item={item} />

                <button
                  onClick={() => {
                    removeFromCollection(item.id)
                  }}
                  className="absolute top-3 left-3 z-10 px-3 py-2 rounded-lg bg-white text-red-500 text-xs font-semibold shadow-sm opacity-0 group-hover:opacity-100 hover:bg-red-500 hover:text-white transition cursor-pointer"
                >
                  Remove
                </button>

              </div>
            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-xl border border-gray-200">

            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-5">
              <span className="text-3xl">♡</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              No collection yet
            </h3>

            <p className="text-sm text-gray-500 mt-2 max-w-sm">
              You haven't saved any media yet. Explore and save your
              favorite photos, videos and GIFs.
            </p>

          </div>

        )}

      </main>
    </div>
  )
}

export default CollectionPage
