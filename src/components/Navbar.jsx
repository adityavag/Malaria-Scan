import React from 'react'
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';


export default function Navbar() {
    const { t } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };
    return (
        <div className="fixed top-0 left-0 right-0 bg-white bg-opacity-70 shadow-md w-full p-4 z-50 mb-4">
            <div className='flex flex-row items-center space-x-2 justify-between'>
            <div className='text-2xl font-bold text-[#2463eb]'>{t("title")}</div>
                {/* <Globe className='text-gray-700 h-5 w-5' /> */}
                <select onChange={handleLanguageChange} className="border p-2 rounded-md">
                    <option value="en">English</option>
                    <option value="ta">தமிழ்</option>
                    <option value="hi">हिन्दी</option>
                </select>
            </div>
        </div>
    )
}
