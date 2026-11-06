import React from 'react'
import download from '../assets/download.png'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCollection } from '../redux/features/collectionSlice'


const ResultCard = ({ item }) => {

  const dispatch = useDispatch()

  const location = useLocation()
  
  const type = item.type?.toLowerCase()

  const savedItems = useSelector(state => state.collection.items)

  const isSaved = savedItems.some(saved => saved.id === item.id)  


  const addToCollection = (el) => {
      dispatch(addCollection(el))
  }


  const handleDownload = async () => {
    try {
      const response = await fetch(item.downloadUrl || item.src)

      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      const extension =
        type === 'video' ? 'mp4' :
        type === 'gif' ? 'gif' : 'jpg'

      const link = document.createElement('a')
      link.href = url
      link.download = `${item.title || 'download'}.${extension}`

      document.body.appendChild(link)
      link.click()
      link.remove()

      setTimeout(() => {
        URL.revokeObjectURL(url)
      }, 1000)

    } catch (error) {
      console.error('Download failed:', error)
      window.open(item.downloadUrl || item.src, '_blank')
    }
  }


  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Media */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">

        {(type === 'photo' || type === 'gif') && (
          <img
            src={item.thumbnail}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}

        {type === 'video' && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={item.thumbnail}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Save Button */}
        <button disabled={isSaved}
          onClick={() => addToCollection(item)}
          className={`${location.pathname === '/collections' ? 'hidden' : ''} absolute top-3 left-3 px-4 py-2 rounded-lg text-xs font-semibold shadow-sm bg-white text-gray-700 transition-all duration-200 ${isSaved ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:bg-green-600 hover:text-white opacity-0 group-hover:opacity-100'}`}
        >
          {isSaved ? 'Saved' : '+ Save'}
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          aria-label="Download media"
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-lg bg-white shadow-sm opacity-0 group-hover:opacity-100 hover:bg-green-50 transition-all duration-200 cursor-pointer"
        >
          <img src={download} alt="Download" className="h-5" />
        </button>

      </div>

      {/* Card Footer */}
      <div className="px-4 py-3">
        <a href={item.src} target='_blank' rel="noopener noreferrer" className="text-sm font-semibold text-gray-800 hover:text-blue-800 capitalize line-clamp-2">
          {item.title || 'Untitled'}
        </a>

        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
          {type}
        </p>
      </div>

    </div>
  )
}

export default ResultCard
