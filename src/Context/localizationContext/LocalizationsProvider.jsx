import PropTypes from 'prop-types'
import { localizationsContext } from "./localizationContext"
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';

const LocalizationsProvider = ({ children }) => {
    const isEnglish = useRef(true)
    const [language, setLanguage] = useState("");
    const { i18n } = useTranslation()

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)

        const isArabic = lang === "ar"
        isEnglish.current = !isArabic

        const rootElement = document.documentElement

        rootElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
        rootElement.setAttribute("lang", isArabic ? "ar" : "en");

        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        const currentLanguage = localStorage.getItem("language") || "ar";
        changeLanguage(currentLanguage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <localizationsContext.Provider value={{ changeLanguage, isEnglish: isEnglish.current, language }}>
        {children}
    </localizationsContext.Provider>
}

LocalizationsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default LocalizationsProvider
