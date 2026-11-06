import React from 'react'
import { Link } from 'react-router-dom'
import { Home, SearchX } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="max-w-lg w-full text-center">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <SearchX size={40} className="text-green-600" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold text-green-600">
          404
        </h1>

        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 leading-relaxed">
          Oops! The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          <Home size={20} />
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default NotFound
