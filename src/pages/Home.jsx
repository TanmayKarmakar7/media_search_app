import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import SearchWelcome from './SearchWelcome'

const Home = () => {

  const { query } = useSelector((store) => store.search)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}
        {/* <div className="flex flex-col justify-center items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Discover Media
          </h2>
          <p className="text-gray-500 mt-2">
            Search and explore your favorite images, videos and gif.
          </p>
        </div> */}
        <SearchWelcome />

        {/* Search */}
        <div className="mb-10">
          <SearchBar />
        </div>

        {/* Search Results */}
        {query && (
          <>
            {/* Tabs */}
            <div className="mb-8">
              <Tabs />
            </div>

            {/* Results */}
            <section>
              <h3 className="text-xl font-semibold mb-5">
                Explore Results
              </h3>

              <ResultGrid />
            </section>
          </>
        )}

      </main>
    </div>
  )
}

export default Home
