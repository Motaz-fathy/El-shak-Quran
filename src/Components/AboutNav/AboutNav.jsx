import { Link } from "react-router-dom"
import useLocalization from "../../hooks/useTranslation"
import useLocalizationContext from "../../Context/localizationContext/localizationContext"

const AboutNav = () => {
    const { isEnglish } = useLocalizationContext()
    const content = useLocalization("auth")
    
    return <nav className="p-2 m-3 bg-[--main-bgLight-color] mb-5">
        <div className={`flex gap-6 items-center justify-center flex-wrap ${isEnglish && "flex-row-reverse"}`}>
            <Link
                to="/login"
                className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
            >
                {content("aboutLinks.login")}
            </Link>
            <Link
                to="/About"
                className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%]  md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex "
            >
                {content("aboutLinks.about_us")}
            </Link>
            <Link
                to="/Joinus"
                className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
            >
                {content("aboutLinks.join_us_as_teacher")}
            </Link>
            <Link
                to="/Ratings"
                className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
            >
                {content("aboutLinks.ratings")}
            </Link>
        </div>
    </nav>
}

export default AboutNav