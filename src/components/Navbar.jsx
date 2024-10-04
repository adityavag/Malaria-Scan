import React, { useEffect } from 'react'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { Globe, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const { t } = useTranslation();

    useEffect(()=>{
        const currentLang = localStorage.getItem('i18nextLng') || 'en';
        i18n.changeLanguage(currentLang);
    },[]);

    const handleLanguageChange = (event) => {
        const selectedLang = event.target.value;
        i18n.changeLanguage(selectedLang);
        localStorage.setItem('i18nextLng', selectedLang);
    };
    return (
        <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-70 shadow-md w-full p-4 z-50 mb-4">
            <div className='flex flex-row items-center space-x-2 justify-between'>
            <Link to="/">
            <div className='text-2xl font-bold text-[#2463eb]'>{t("title")}</div>
            </Link>
                <select onChange={handleLanguageChange} defaultValue={localStorage.getItem('i18nextLng')||'en'} className="border p-2 rounded-md bg-white">
                    <option value="en" className='bg-white'>English</option>
                    <option value="ta" className='bg-white'>தமிழ்</option>
                    <option value="hi" className='bg-white'>हिन्दी</option>
                    <option value="ma" className='bg-white'>മലയാളം</option>
                    <option value="ka" className='bg-white'>ಕನ್ನಡ</option>
                    <option value="pa" className='bg-white'>ਪੰਜਾਬੀ</option>
                    <option value="mr" className='bg-white'>मराठी</option>
                </select>
            </div>
        </div>
    )
}
