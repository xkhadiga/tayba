import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

  return (
    <nav className=" flex justify-between items-center px-4 lg:px-32 py-6 w-full ">
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
      <div className="hidden lg:flex items-center gap-4">
        {/* 🌍 LANGUAGE SWITCHER */}
        <button
          onClick={() => changeLang("en")}
          className={`text-sm px-1 py-1 rounded ${
            i18n.language === "en" ? "font-bold" : ""
          }`}
        >
          EN
        </button>

        <button
          onClick={() => changeLang("ar")}
          className={`text-sm px-1 py-1 rounded ${
            i18n.language === "ar" ? "font-bold" : ""
          }`}
        >
          AR
        </button>

        {/* booking button */}
        <button
          className="nav-btn font-semibold"
          onClick={() => navigate("/booking")}
        >
          {t("navbar.book")}
        </button>
      </div>

      {/* menu button on sm screen size */}
      <button className="lg:hidden text-2xl z-10" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* menu */}
      {open && (
        <div dir="ltr" className="absolute top-20 right-4 w-[70%] md:w-[35%] bg-white shadow-md flex flex-col items-center gap-4 py-6 lg:hidden z-50">
          {" "}
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                navigate(link.path);
                setOpen(false);
              }}
              className={`nav-link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {t(link.name)}
            </button>
          ))}
          <div className="flex gap-4">
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
          <button
            className="nav-btn font-semibold"
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
