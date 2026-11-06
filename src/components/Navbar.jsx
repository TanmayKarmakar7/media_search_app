
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Bookmark } from 'lucide-react'

const Navbar = () => {

    const location = useLocation()

    const links = [
        { name: 'Search', path: '/', icon: Search },
        { name: 'Collection', path: '/collection', icon: Bookmark }
    ]

    return (
        <header className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-4">

                <h1 className="text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap">
                    Media<span className="text-green-600">Search.</span>
                </h1>

                <nav className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">

                    {links.map((link) => {
                        const Icon = link.icon
                        const isActive = location.pathname === link.path

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    flex items-center justify-center gap-2
                                    px-3 sm:px-4 py-2 rounded-lg
                                    text-xs sm:text-sm font-medium
                                    whitespace-nowrap transition
                                    flex-1 sm:flex-none
                                    ${isActive
                                        ? 'bg-green-600 text-white shadow-sm'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-green-500 hover:text-green-600'
                                    }
                                `}
                            >
                                <Icon size={17} />
                                {link.name}
                            </Link>
                        )
                    })}

                </nav>

            </div>
        </header>
    )
}

export default Navbar
