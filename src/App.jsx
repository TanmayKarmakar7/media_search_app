import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div className='bg-gray-900 min-h-screen w-full text-white'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectionPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App
