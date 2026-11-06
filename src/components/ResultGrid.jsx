import React, { useEffect, useState } from 'react'
import { fetchGifs, fetchPhotos, fetchVideos } from '../api/mediaApi.js'
import { setError, setLoading, setResults, appendResults } from '../redux/features/searchSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard.jsx'
import Loading from './Loading.jsx'
import Error from './Error.jsx'

const ResultGrid = () => {

    const dispatch = useDispatch()

    const { query, activeTab, results, loading, error } =
        useSelector(store => store.search)

    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)

    const getData = async (currentPage, loadMore = false) => {
        if (!query.trim()) return

        try {
            if (loadMore) {
                setLoadingMore(true)
            } else {
                dispatch(setLoading())
            }

            let data = []

            if (activeTab.toLowerCase() === 'photos') {
                const res = await fetchPhotos(query, currentPage, 20)

                data = res.map(item => ({
                    id: `UNSPLASH-${item.id}`,
                    type: 'photo',
                    title: item.alt_description || query,
                    thumbnail: item.urls.small,
                    src: item.urls.full
                }))
            }

            else if (activeTab.toLowerCase() === 'videos') {
                const res = await fetchVideos(query, currentPage, 20)

                data = res.map(item => ({
                    id: `PIXABAY-${item.id}`,
                    type: 'video',
                    title: item.tags || query,
                    thumbnail: item.videos.tiny.url,
                    src: item.videos.large.url
                }))                
            }

            else if (activeTab.toLowerCase() === 'gif') {
                const res = await fetchGifs(query, currentPage, 20)
                
                data = res.map(item => ({
                    id: `GIPHY-${item.id}`,
                    type: 'gif',
                    title: item.title || query,
                    thumbnail: item.images.fixed_width.webp,
                    src: item.images.original.url
                }))
            }

            if (loadMore) {
                dispatch(appendResults(data))
            } else {
                dispatch(setResults(data))
            }

            setHasMore(data.length === 20)

        } catch (error) {
            dispatch(setError(error.message || 'Something went wrong'))
        } finally {
            setLoadingMore(false)
        }
    }

    
    useEffect(() => {
        setPage(1)
        setHasMore(true)

        if (!query.trim()) {
            dispatch(setResults([]))
            return
        }

        getData(1)

    }, [query, activeTab])

    
    const handleLoadMore = () => {
        const nextPage = page + 1

        setPage(nextPage)
        getData(nextPage, true)
    }

    if (error) return <Error error={error} />

    if (loading) return <Loading />

    return (
        <div className="w-full">

            {results.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">

                        {results.map(item => (
                            <ResultCard key={item.id} item={item} />
                        ))}

                    </div>

                    {hasMore && (
                        <div className="flex justify-center pb-12">

                            <button
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="px-8 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition disabled:opacity-60 cursor-pointer"
                            >
                                {loadingMore ? 'Loading...' : 'Load More'}
                            </button>

                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">

                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                        <span className="text-3xl">🔍</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800">
                        No results found
                    </h3>

                    <p className="text-sm text-gray-500 mt-2">
                        Try searching with a different keyword.
                    </p>

                </div>
            )}

        </div>
    )
}

export default ResultGrid
