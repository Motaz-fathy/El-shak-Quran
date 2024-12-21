import { useState, useRef, useEffect } from "react";
import facebook from "../../assets/images/iconHeader/facebook.png";
import whatsap from "../../assets/images/iconHeader/whatsap.png";
import youtube from "../../assets/images/iconHeader/youtube.png";
import logo from "../../assets/images/iconHeader/logo.png";
import eng from "../../assets/images/iconHeader/eng.png";
import ar from "../../assets/images/iconHeader/ar.png";
import './header.css';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import UserProfile from "../UserProfile/UserProfile";
import useLocalizationContext from "../../Context/localizationContext/localizationContext";
import useLocalization from "../../hooks/useTranslation";
import useAuth from "../../Context/authContext/authContext";

const Header = () => {
    const [toggleProfile, setToggleProfile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linksRef = useRef(null); // Reference to the links container
    const { changeLanguage, isEnglish } = useLocalizationContext();
    const content = useLocalization("header");
    const { isAuth } = useAuth()

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handlePop = () => {
        setToggleProfile(prevState => !prevState);
    };

    return (
        <div className="headers relative" >
            <div className={`topHeader flex items-center gap-2 md:gap-5 justify-end mt-2 md:mt-4 ${isEnglish ? "" : ""}`}>
                <div className="icons flex items-center gap-1 md:gap-3">
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                    <img src={whatsap} alt="whatsap" />
                </div>
                <Link to="/TrialSession">
                    <button className="globalButton px-[5px] md:px-[10px] py-[5px] md:py-[8px] text-[14px] rounded-[5px]">
                        {content("topHeader.trialSessionButton")}
                    </button>
                </Link>
            </div>

            <div className="bottomHeader flex items-center justify-between">
                <Link to="/" className="logo">
                    <img className="w-[70px] md:w-[100px] lg:w-[150px]" src={logo} alt="logo" />
                </Link>
                <div ref={linksRef} className={`links flex items-center justify gap-6 ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">
                        {content("bottomHeader.home")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/egazat">
                        {content("bottomHeader.egazat")}
                    </NavLink>
                    <NavLink className={({ isActive }) => `dropdown ${isActive ? "link active" : "link"}`} to="/coursesPage">
                        {content("bottomHeader.courses.title")}
                        <FontAwesomeIcon className="dropdownIcon" icon={faChevronDown} />
                        <div className="dropDwonList">
                            <h4 className="dropDwonQuran relative">
                                {content("bottomHeader.courses.dropdown.quranLessons")}
                                <FontAwesomeIcon className="dropDwonQuranIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px]">
                                    <li>{content("bottomHeader.courses.courseList.quran.0")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.1")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.2")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.3")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.4")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.5")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.6")}</li>
                                    <li>{content("bottomHeader.courses.courseList.quran.7")}</li>
                                </ul>
                            </h4>
                            <h4 className="dropDwonLang relative">
                                {content("bottomHeader.courses.dropdown.arabicLessons")}
                                <FontAwesomeIcon className="dropDwonLangIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px]">
                                    <li>{content("bottomHeader.courses.courseList.arabic.0")}</li>
                                    <li>{content("bottomHeader.courses.courseList.arabic.1")}</li>
                                    <li>{content("bottomHeader.courses.courseList.arabic.2")}</li>
                                    <li>{content("bottomHeader.courses.courseList.arabic.3")}</li>
                                    <li>{content("bottomHeader.courses.courseList.arabic.4")}</li>
                                </ul>
                            </h4>
                            <h4 className="dropDwonLesson relative">
                                {content("bottomHeader.courses.dropdown.islamicLessons")}
                                <FontAwesomeIcon className="dropDwonLessonIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px]">
                                    <li>{content("bottomHeader.courses.courseList.islamic.0")}</li>
                                    <li>{content("bottomHeader.courses.courseList.islamic.1")}</li>
                                    <li>{content("bottomHeader.courses.courseList.islamic.2")}</li>
                                    <li>{content("bottomHeader.courses.courseList.islamic.3")}</li>
                                    <li>{content("bottomHeader.courses.courseList.islamic.4")}</li>
                                </ul>
                            </h4>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/pricingpage">
                        {content("bottomHeader.pricingPage")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/ItsLibrary">
                        {content("bottomHeader.library")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/elsheikhs">
                        {content("bottomHeader.sheikhs")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/blogs">
                        {content("bottomHeader.blogs")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/commonQuestions">
                        {content("bottomHeader.faq")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">
                        {content("bottomHeader.more")}
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/contact">
                        {content("bottomHeader.contactUs")}
                    </NavLink>
                </div>
                <div className="left flex items-center gap-2 md:gap-5">
                    <Link to='/wishList'>
                        <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faHeart} />
                    </Link>
                    <Link to="/shoppingCart">
                        <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faShoppingCart} />
                    </Link>
                    {
                        isAuth && <Link onClick={handlePop} className="relative">
                            <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faUser} />
                        </Link>
                    }
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
                        changeLanguage(isEnglish ? "ar" : "en");
                    }}>
                        <img src={isEnglish ? eng : ar} alt={isEnglish ? "english" : "عربى"} />
                        <span className="hidden md:block">{isEnglish ? content("languageSwitch.english") : content("languageSwitch.arabic")}</span>
                    </div>
                    {!isMenuOpen && (
                        <FontAwesomeIcon
                            className="showBar"
                            icon={faBars}
                            onClick={toggleMenu}
                        />
                    )}
                    {isMenuOpen && (
                        <FontAwesomeIcon
                            className="close"
                            icon={faTimes}
                            onClick={toggleMenu}
                        />
                    )}
                </div>
            </div>

            {toggleProfile && <UserProfile close={() => { setToggleProfile(false) }} />}
        </div>
    );
};

export default Header;
