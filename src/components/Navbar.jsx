
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
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                <h1 className="text-2xl font-bold tracking-tight">
                    Media<span className="text-green-600">Search.</span>
                </h1>

                <div className="flex items-center gap-3">

                    {links.map((link) => {
                        const Icon = link.icon
                        const isActive = location.pathname === link.path

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-lg
                                    text-sm font-medium transition
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

                </div>

            </div>
        </header>
    )
}

export default Navbar
