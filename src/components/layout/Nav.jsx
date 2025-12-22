import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageIcon, MenuIcon } from "../../assets/icons";

function Nav() {
  const { t, i18n } = useTranslation();
  const links = [
    { name: "navbar.home", path: "/" },
    { name: "navbar.about", path: "/about" },
    { name: "navbar.menu", path: "/menu" },
    { name: "navbar.contact", path: "/contact" },
  ];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);

  return (
    <nav className=" flex justify-between items-center px-4 lg:px-32 py-6 w-full relative">
      {/* logo */}
      <button onClick={() => navigate("/")} className="logo text-3xl font-bold">
        Tayba
      </button>

      {/* links */}
      <div className={`nav-links gap-10 hidden lg:flex `}>
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className={`nav-link ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            {t(link.name)}
          </button>
        ))}
      </div>
      {/* right side items */}
      <div className="hidden lg:flex  items-center gap-3 relative">
        <button 
        onClick={() => setLanguageMenu(!languageMenu)}
        className="relative">
          <LanguageIcon className="w-[1.5rem] hover:text-(--primary-color)" />
        {languageMenu && 
                 <div className="flex flex-col items-center gap-2 absolute -right-2 top-12 bg-white rounded-lg px-6 shadow-md z-1 ">
            <button
              onClick={() => changeLang("en")}
              className={`text-sm px-1 py-1 rounded hover:text-(--primary-color)  ${
                i18n.language === "en" ? "font-bold" : ""
              }`}
            >
              EN
            </button>

            <button
              onClick={() => changeLang("ar")}
              className={`text-sm px-1 py-1 rounded hover:text-(--primary-color) ${
                i18n.language === "ar" ? "font-bold" : ""
              }`}
            >
              AR
            </button>
          </div>
        }
 
        </button>

        {/* 🌍 LANGUAGE SWITCHER */}

        {/* booking button */}
        <button
          className="nav-btn font-semibold"
          onClick={() => navigate("/booking")}
        >
          {t("navbar.book")}
        </button>
      </div>

      {/* menu button on sm screen size */}
      <button
        className="lg:hidden text-2xl z-10 text-(--text-color)"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon width="1.5rem" />
      </button>

      {/* menu */}
      {open && (
        <div
          dir="ltr"
          className="absolute top-20 right-4 w-[70%] md:w-[35%] bg-white shadow-md flex flex-col items-start gap-4 py-6 lg:hidden z-50 rounded-2xl text-base"
        >
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setOpen(false);
              }}
              className={`nav-link border-b border-[#f0f0f0] px-6 pb-1  w-full text-start ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {t(link.name)}
            </button>
          ))}
          <div className="flex justify-between w-full px-6 border-b border-[#f0f0f0] pb-1">
            <span>{t("navbar.language")}</span>
            <div className="flex gap-2">
              <button
                onClick={() => changeLang("en")}
                className={i18n.language === "en" ? "font-bold" : ""}
              >
                EN
              </button>

              <button
                onClick={() => changeLang("ar")}
                className={i18n.language === "ar" ? "font-bold" : ""}
              >
                AR
              </button>
            </div>
          </div>
          <button
            className="nav-btn font-semibold self-center"
            onClick={() => {
              navigate("/booking");
              setOpen(false);
            }}
          >
            {t("navbar.book")}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
