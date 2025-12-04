import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Nav() {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Menu', path: '/menu' },
        { name: 'Contact', path: '/contact' },
    ]

    const navigate = useNavigate()
      const location = useLocation()

    return (
        <nav className=' flex justify-between items-center px-32 py-6 w-full '>
            {/* logo */}
            <button onClick={()=> navigate("/")} className='logo text-3xl font-bold'>Tayba</button>
            
            {/* links */}
            <div className={`nav-links flex gap-10 `}>
                {links.map((link) => (
                    <button key={link.name} onClick={() => navigate(link.path)}
                        className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                        {link.name}
                    </button>
                ))}
            </div>
            
            {/* button */}
            <div>
                <button className='nav-btn' onClick={() => navigate('/booking')}>
                    Book a Table
                </button>
            </div>
        </nav>
    )
}

export default Nav
