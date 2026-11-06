
import React from 'react'
import { AlertCircle } from 'lucide-react'

const Error = ({ error }) => {
  return (
    <div className="min-h-100 flex flex-col items-center justify-center gap-3 px-4">

      <AlertCircle size={40} className="text-red-500" />

      <h2 className="text-xl font-semibold text-gray-800">
        Something went wrong!
      </h2>

      <p className="text-center text-sm text-gray-500 max-w-md">
        {error?.message || error || 'Please try again later.'}
      </p>

    </div>
  )
}

export default Error
