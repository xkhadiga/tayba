import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Nav() {
    const { t, i18n } = useTranslation();
    const links = [
        { name: 'navbar.home', path: '/' },
        { name: 'navbar.about', path: '/about' },
        { name: 'navbar.menu', path: '/menu' },
        { name: 'navbar.contact', path: '/contact' },
    ]

        const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    };

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
                          {t(link.name)}
                    </button>
                ))}
            </div>
            {/* right side items */}
            <div className="flex items-center gap-4">

                {/* 🌍 LANGUAGE SWITCHER */}
                <button
                    onClick={() => changeLang("en")}
                    className={`text-sm px-1 py-1 rounded ${i18n.language === "en" ? "font-bold" : ""}`}
                >
                    EN
                </button>

                <button
                    onClick={() => changeLang("ar")}
                    className={`text-sm px-1 py-1 rounded ${i18n.language === "ar" ? "font-bold" : ""}`}
                >
                    AR
                </button>

                {/* booking button */}
                <button className='nav-btn font-semibold' onClick={() => navigate('/booking')}>
                    {t("navbar.book")}
                </button>
            </div>
        </nav>
    )
}

export default Nav
