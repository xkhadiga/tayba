import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


function Footer() {
    const { t } = useTranslation();

     const navigate = useNavigate()
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-4">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Social Widget */}
          <div>
            <div className="mb-4">
                  <button onClick={()=> navigate("/")} className='logo text-2xl font-bold'>Tayba</button>
            </div>
            <p className="p-text mb-4">
                {t("footer.about")}
            </p>

            <ul className="flex items-center gap-4">
              <li><a href="#" className="text-gray-300 hover:text-white text-xl"><FaFacebookF /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-xl"><FaTwitter /></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-xl"><FaInstagram /></a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4"> {t("footer.newsletter.title")}</h3>
            <p className="p-text mb-4">
             {t("footer.newsletter.desc")}
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder={t("footer.newsletter.placeholder")}
                className="w-full px-4 py-2 rounded bg-[#333] text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded hover:bg-yellow-400 transition"
              >
                {t("footer.newsletter.button")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">{t("footer.contact.title")}</h3>

            <p className="flex items-center gap-2 mb-2 p-text">
              <FaMapMarkerAlt className="text-yellow-500" />
               {t("footer.contact.address")}
            </p>

            <p className="flex items-center gap-2 mb-2 p-text">
              <FaPhone className="text-yellow-500" />
              {t("footer.contact.phone")}
            </p>

            <p className="flex items-center gap-2 mb-2 p-text">
              <FaEnvelope className="text-yellow-500" />
              {t("footer.contact.email")}
            </p>
          </div>

        </div>

        {/* Bottom Footer */}
        <p className="text-center text-[#999] text-sm border-t border-[#333] py-4">
          {t("footer.copyright")}

        </p>

        <div className="text-center mt-4">
          <a
            href="#"
            className="text-yellow-500 hover:text-yellow-400 transition underline"
          >
            {t("footer.backToTop")}
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
