
import SVG from "../assets/images/prices/SVG.png"
import image1 from "../assets/images/prices/image1.png"
import image2 from "../assets/images/prices/image2.png"
// import design1 from "../assets/images/general/design1.png"
import PayPal from "../assets/images/prices/PayPal.png"
import MasterCard from "../assets/images/prices/MasterCard.png"
import Plan from "../Components/Plan/Plan"
import EasySteps from "../Components/EasySteps/EasySteps";
import { useNavigate } from 'react-router-dom';
import CurrencyConverter from "../Components/CurrencyConverter/CurrencyConverter";
import React, { useState, useEffect } from "react";
import axios from "axios";


const PricingPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/subsriptionform');
    };

    const [activeTab, setActiveTab] = useState(60);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get("https://quran.codecraft1.com/api/plans");
                if (response.data.status === 200) {
                    setPlans(response.data.data);
                    console.log(response.data);

                }
            } catch (error) {
                
                console.error("Error fetching plans:", error.response ? error.response : error.message);

            }
        };
        fetchPlans();
    }, []);

    const uniqueDurations = [...new Set(plans.map((plan) => plan.session_duration))];
    // setActiveTab(90)

    const filteredPlans = (duration) =>
        plans.filter((plan) => plan.session_duration === duration);

    return (
        <>
            <div
                className="flex flex-col md:flex-row items-center md:items-start justify-start p-6 md:p-11 rounded-md my-4"
                style={{
                    backgroundColor: "var(--secound-bg-color)",
                }}
            >
                {/* القسم الأيمن */}
                <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-11">
                    <img
                        src={SVG}
                        alt="التسعير"
                        className="w-16 h-16 md:w-24 md:h-24 mb-4"
                    />
                    <h3
                        className="text-base md:text-lg font-semibold mb-2"
                        style={{
                            color: "var(--main-dark-color)",
                        }}
                    >
                        التسعير
                    </h3>
                    <hr className="w-8 md:w-12 border-t-2 border-orange-400" />
                </div>

                {/* القسم الأيسر */}
                <div className="text-right space-y-4 md:pr-28">
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            يتم فرض الرسوم الشهرية على أساس شهري بالدولار الأمريكي.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            الرسوم المفروضة مقدما مع ضمان استرداد الأموال بالكامل.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            إذا كنت تريد خطة مخصصة، فسنقوم بترتيبها إن شاء الله.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            المدفوعات عن طريق الحساب المصرفي، أو PayPal أو بطاقة الخصم أو
                            الائتمان.
                        </p>
                    </div>
                </div>
            </div>

            {/* ////////////////////////////// */}
            <Plan />
            {/* //////////////////////// */}
            <div
                className="text-center py-8 px-4 md:py-16 bg-[--body-bg-color]"
            >
                <h2
                    className="text-xl md:text-3xl font-bold mb-4 text-[--main-dark-color]"
                >
                    تحويل العملات
                </h2>
                <hr className="w-16 mx-auto border-t-2 border-orange-400 mb-6" />
                <p className="text-gray-700 mb-6 text-md md:text-lg lg:text-xl">
                    إذا كنت لا تدفع بالدولار الأمريكي، فيمكنك استخدام محول العملات التالي
                    لحساب قيمة التسعير مقابل عملتك.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-32">
                    <img
                        src={image1}
                        alt="محول العملات"
                        className="w-60 h-48 md:w-[350px] md:h-[300px] rounded-md"
                    />
                    <CurrencyConverter/>
                    {/* <img
                        src={image2}
                        alt="وسائل الدفع"
                        className="w-40 h-60 md:w-48 md:h-72 rounded-md"
                    /> */}
                </div>
            </div>

            <div className="p-8 ">
                {/* عنوان الصفحة */}
                <h2 className="text-center text-3xl sm:xl font-bold mb-4 text-[#157A67]">فئات خطط التسعير</h2>
                <hr className=" w-[90px]  mx-auto border-t-2 border-[#F0AD4E] mb-8" />

                {/* الألسنة (Tabs) */}
                <div
                    className="mx-auto mb-8 w-full  border-[--main-dark-color] "
                >

                    <div className="flex justify-center w-full ">
                        {uniqueDurations.map((duration) => (
                            <button
                                key={duration}
                                onLoad={()=> setActiveTab(durationp)}
                                onClick={() => setActiveTab(duration)}
                                style={{
                                    backgroundColor: activeTab === duration ? "var(--secound-bg-color)" : "var(--main-dark-color)",
                                    color: activeTab === duration ? "var(--main-dark-color)" : "white",
                                }}
                                className="px-8 sm:px-10 lg:px-16 py-2 text-white font-semibold w-auto flex-grow sm:flex-grow-0"
                            >
                               درس {duration} دقيقة
                            </button>
                        ))}
                    </div>
                </div>

                
                
                {/* البطاقات */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 py-16 border rounded-2xl px-6 bg-[--secound-bg-color] "

                >
                    {filteredPlans(activeTab).map((plan)=> (
                        <div
                            key={plan.id}
                            className="relative bg-white shadow-lg  text-center border rounded-md border-[--main-bg-color] "

                        >
                            {/* الرقم داخل الدائرة */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-14 rounded-full flex items-center justify-center text-xl text-[--secound-bg-color] font-bold border-[6px] border-[--main-border-color] bg-[--main-dark-color]"
                            >
                                {plan.id}
                            </div>

                            {/* تفاصيل الخطة */}

                            <p className=" font-bold text-lg pt-11 pb-2 rounded-t-lg bg-[--main-dark-color] text-white"
                            >{plan.sessions_per_week} يوم / أسبوع
                            </p>
                            <div className="my-3 text-4xl font-bold text-[--main-dark-color]"
                            >
                                {plan.price}{" "}
                                {/* <span className="text-gray-500 line-through text-sm">{plan.oldPrice}</span> */}
                                <p className="text-gray-600 text-lg mt-1">شهريا</p>
                            </div>
                            <p className="text-gray-600 text-sm m-2">4دروس/شهر</p>
                            <div className="border-t border-dashed border-gray-500 w-1/2 mx-auto"></div>
                            <p className="text-gray-600 text-sm m-2">4دروس/شهر</p>


                            {/* الأزرار */}
                            <div className="flex flex-col mt-4">
                                <button className=" w-full py-4 bg-[--main-dark-color] text-[--main-bgLight-color] text-lg"
                                >اشتراك</button>
                                <button className=" px-4 py-4 text-white rounded-b-lg bg-[#3AA28ED1] text-lg"
                                >
                                    درس تجريبي
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* ////////////////// */}

                <div className="flex justify-start items-center space-x-4 pt-2">
                    {/* الصورة الأولى */}
                    <img
                        src={PayPal}
                        alt="Image 1"
                        className=" h-auto"
                    />

                    {/* الصورة الثانية */}
                    <img
                        src={MasterCard}
                        alt="Image 2"
                        className=" h-auto"
                    />
                </div>

            </div>
            <EasySteps />
            <div className="flex justify-center my-16">
                <button
                    type="button"
                    className="bg-[#0F8A73] text-white py-3 px-8 border-2 rounded-xl border-[#F0AD4E]"
                    onClick={handleClick}
                >
                    جميع خطط التسعير
                </button>
            </div>

        </>
    );
};

export default PricingPage;
