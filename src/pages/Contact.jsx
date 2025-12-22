import React from 'react'
import PageBanner from '../components/common/PageBanner'
import { LocationIcon, PhoneIcon, EmailIcon } from '../assets/icons'
import { useTranslation } from 'react-i18next';

function Contact() {
  const {t} = useTranslation();
const contactData = [
  {
    icon: <LocationIcon />,
    titleKey: "contact-page.location.title",
    textKey: "contact-page.location.text",
  },
  {
    icon: <PhoneIcon />,
    titleKey: "contact-page.phone.title",
    textKey: "contact-page.phone.text",
  },
  {
    icon: <EmailIcon />,
    titleKey: "contact-page.email.title",
    textKey: "contact-page.email.text",
  }
];
  return (
    <div className='overflow-x-hidden flex flex-col items-center w-full'>
      <PageBanner title={t("contact-page.title")} text={t("contact-page.text")}  />

        {/* top section - contacts */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:flex w-full items-center justify-around my-10 lg:m-0'>
          {contactData.map((item, index) => (
            <div className="flex items-center gap-4 p-4 md:p-10 lg:p-20" key={index}>
              <div className="w-12 h-12 flex items-center justify-center border border-(--primary-color) text-(--primary-color) rounded-full p-3 hover:bg-(--primary-color) hover:text-white">{item.icon} </div>
              <div>
                <h3 className="text-xl lg:text-3xl text-(--text-color) font-semibold">{t(item.titleKey)}</h3>
                <p className='p-text text-sm lg:text-lg'>{t(item.textKey)}</p>
              </div>
            </div>
          ))}
        </section>

        {/* form */}
        <section className='border-t w-full border-(--secondary-color) p-4 md:p-10 lg:p-20 flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 flex flex-col gap-6 '>
            <input type="text" placeholder='Name' className='p-2 pl-4 border border-(--secondary-color)' />
            <input type="email" placeholder='Email' className='p-2 pl-4 border border-(--secondary-color)' />
            <input type="number" placeholder='Your Phone' className='p-2 pl-4 border border-(--secondary-color)' />
            <textarea type="text" placeholder='Your Message' className='p-2 pl-4 border border-(--secondary-color)' />
            <button className="main-btn bg-[#ea462b] w-[40%] lg:w-[30%] mb-6">
              {t("contact-page.button")}
            </button>
            
          </div>
          {/* map - address */}
          <div className='md:w-1/2'>
          <iframe className='w-full h-full'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.6580030833134!2d29.94535340271855!3d31.21378651550446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c545f555730d%3A0xea7c0d5a7d8c234d!2sSemouha%20garden!5e0!3m2!1sen!2seg!4v1765828197683!5m2!1sen!2seg" frameborder="0"></iframe>
       
          </div>
          
        </section>
    </div>
  )
}

export default Contact