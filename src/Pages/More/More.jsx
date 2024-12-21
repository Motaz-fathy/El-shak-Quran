
import Login from '../Authpages/Login';
// import Newpass from '../Authpages/newpass';
// import Regester from '../Authpages/regester';
import { useState } from 'react';
import Joinus from '../Joinus';
import Ratings from '../Ratings/Ratings';
import About from '../About/About';




const More = () => {

    const [activeLink, setActiveLink] = useState(1); 

    const handleClick = (index) => {
        setActiveLink(index);
    };


    const renderComponent = () => {
        switch (activeLink) {
            case 0:
                return <Login />;
            case 1:
                return <About />;
            case 2:
                return <Joinus />;
            case 3:
                return <Ratings />;
            default:
                return null; // "من نحن" أو أي حالة أخرى
        }
    };




    return (
        <div className="more">

            <div className="head bg-[--main-bgLight-color] my-5 lg:my-10 py-3 md:py-5 px-1 lg:px-10 rounded-lg">
                <ul className="flex items-center justify-between">
                    {["تسجيل دخول", "من نحن", "انضم إلينا كمعلم", "التقييمات"].map((link, index) => (
                        <li
                            key={index}
                            className={`link w-[24%] py-3 md:py-5 px-1 md:px-5 lg:px-10 text-[16px] lg:text-[24px] font-[700] rounded-lg text-center 
                                ${activeLink === index
                                    ? "bg-[--main-green-color] text-[white]" 
                                    : "bg-[white] text-[--main-green-color]" }`}
                            onClick={() => handleClick(index)} 
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            </div>


            <div className="content">
                {renderComponent()}
            </div>



        </div>
    );
};

export default More;

