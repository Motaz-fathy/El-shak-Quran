import { useState, useRef } from "react";
import facebook from "../../assets/images/iconHeader/facebook.png";
import whatsap from "../../assets/images/iconHeader/whatsap.png";
import youtube from "../../assets/images/iconHeader/youtube.png";
import logo from "../../assets/images/iconHeader/logo.png";
import eng from "../../assets/images/iconHeader/eng.png";
// import wish from "../../assets/images/iconHeader/wish.png";
// import cart from "../../assets/images/iconHeader/cart.png";
import './header.css';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import UserProfile from "../UserProfile/UserProfile";





const Header = () => {
    const [toggleProfile, setToggleProfile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const linksRef = useRef(null); // Reference to the links container

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handelPop = () => {
        setToggleProfile(prevState => !prevState)
    }
    return (
        <div className="headers relative">
            <div className="topHeader flex items-center gap-2 md:gap-5 justify-end mt-2 md:mt-4">
                <div className="icons flex items-center gap-1 md:gap-3">
                    <img src={youtube} alt="youtube" />
                    <img src={facebook} alt="facebook" />
                    <img src={whatsap} alt="whatsap" />
                </div>
                <Link to="/TrialSession">
                    <button className="globalButton px-[5px] md:px-[10px] py-[5px] md:py-[8px] text-[14px] rounded-[5px]">حجز حصة تجريبية</button>
                </Link>
            </div>

            <div className="bottomHeader flex items-center justify-between">
                <Link to="/" className="logo">
                    <img className="w-[70px] md:w-[100px] lg:w-[150px]" src={logo} alt="" />
                </Link>
                <div ref={linksRef} className={`links flex items-center justify gap-6 ${isMenuOpen ? 'active' : ''}`}>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/">الرئيسية</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/egazat">الإجازات</NavLink>
                    <NavLink className={({ isActive }) => `dropdown ${isActive ? "link active" : "link"}`} to="/coursesPage"
                    >
                        الكورسات
                        <FontAwesomeIcon className="dropdownIcon" icon={faChevronDown} />
                        <div className="dropDwonList">
                            <h4 className="dropDwonQuran relative">دروس القرآن الكريم <FontAwesomeIcon className="dropDwonQuranIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px] ">
                                    <li>تحفيظ القرآن الكريم</li>
                                    <li>تفسير القرآن الكريم</li>
                                    <li>إجازة القرآن الكريم</li>
                                    <li>القراءات العشر</li>
                                    <li>تحفيظ القرآن الكريم</li>
                                    <li>تلاوة القرآن الكريم</li>
                                    <li>تجويد القرآن الكريم</li>
                                    <li>القرآن الكريم للأطفال</li>
                                </ul>
                            </h4>
                            <h4 className="dropDwonLang relative">دروس اللغة العربية <FontAwesomeIcon className="dropDwonLangIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px] ">
                                    <li>كورس اللغة العربية للكبار</li>
                                    <li>كورس اللغة العربية للأطفال</li>
                                    <li>كورس القاعدة النورانية</li>
                                    <li>كورس المحادثة باللغة العربية</li>
                                    <li>كورس اللغة العربية لقراءة القرآن</li>
                                </ul>
                            </h4>
                            <h4 className="dropDwonLesson relative">دروس إسلامية <FontAwesomeIcon className="dropDwonLessonIcon" icon={faChevronDown} />
                                <ul className="absolute top-0 right-[101%] w-[200px]">
                                    <li>كورس الحديث</li>
                                    <li>كورس الفقة</li>
                                    <li>كورس العقيدة</li>
                                    <li>كورس المسلمين الجدد</li>
                                    <li>كورس تعليم الشهادة للمسلمين الجدد</li>
                                </ul>
                            </h4>
                        </div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/pricingpage">الأسعار</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/ItsLibrary">المكتبة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/elsheikhs">الشيوخ</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/blogs">المدونات</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/commonQuestions">الأسئلة الشائعة</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/about">المزيد</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "link active" : "link")} to="/contact">تواصل معنا</NavLink>
                </div>
                <div className="left flex items-center gap-2 md:gap-5">
                    <Link to='/wishList'>
                        <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faHeart} />
                    </Link>
                    <Link to="/shoppingCart">
                        <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faShoppingCart} />
                    </Link>
                    <Link onClick={handelPop} className="relative">
                        <FontAwesomeIcon className="text-[#0F8A73] text-[20px]" icon={faUser} />
                    </Link>
                    <div className="flex items-center gap-2">
                        <img src={eng} alt="english" />
                        <span className="hidden md:block">Englash</span>
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

            {toggleProfile && <UserProfile />}
        </div>
    );
};

export default Header;