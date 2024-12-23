import SVG from "../assets/images/prices/SVG.png";
// import image2 from "../assets/images/prices/image2.png";
import PayPal from "../assets/images/prices/PayPal.png";
import MasterCard from "../assets/images/prices/MasterCard.png";
import Plan from "../Components/Plan/Plan";
import EasySteps from "../Components/EasySteps/EasySteps";
import { useNavigate } from 'react-router-dom';
import CurrencyConverter from "../Components/CurrencyConverter/CurrencyConverter";
import { useState, useEffect } from "react";
import axios from "axios";
import useLocalization from "../hooks/useTranslation";
import useLocalizationContext from "../Context/localizationContext/localizationContext";

const PricingPage = () => {
    const content = useLocalization("price")
    const { isEnglish } = useLocalizationContext()
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/subsriptionform');
    };

    const [activeTab, setActiveTab] = useState(null); // Start with null for default tab
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To manage error state

    // Get Plans
    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get("https://quran.codecraft1.com/api/plans");
                if (response.data.status === 200) {
                    setPlans(response.data.data);
                    // Set the default tab to the first unique duration
                    const uniqueDurations = [...new Set(response.data.data.map((plan) => plan.session_duration))];
                    setActiveTab(uniqueDurations[0] || null); // Default to the first available duration
                    setLoading(false); // Set loading to false once data is fetched
                }
            } catch (error) {
                setError("Error fetching plans. Please try again later.");
                setLoading(false); // Stop loading even if there's an error
                console.error("Error fetching plans:", error.response ? error.response : error.message);
            }
        };
        fetchPlans();
    }, []);

    const uniqueDurations = [...new Set(plans.map((plan) => plan.session_duration))];

    const filteredPlans = (duration) =>
        plans.filter((plan) => plan.session_duration === duration);

    const contentPlan = useLocalization("plans")
    return (
        <>
            {/* Pricing Overview Section */}
            <div
                className={` flex flex-col md:flex-row items-center md:items-start justify-evenly p-6 md:p-11 rounded-md my-4`}
                style={{
                    backgroundColor: "var(--secound-bg-color)",
                }}
            >
                {/* Right Section */}
                <div className="flex flex-col items-center mb-6 md:mb-0 md:pr-11">
                    <img
                        src={SVG}
                        alt={content("rightSection.altText")}
                        className="w-16 h-16 md:w-24 md:h-24 mb-4"
                    />
                    <h3
                        className="text-base md:text-lg font-semibold mb-2"
                        style={{
                            color: "var(--main-dark-color)",
                        }}
                    >
                        {content("title")}
                    </h3>
                    <hr className="w-8 md:w-12 border-t-2 border-orange-400" />
                </div>

                {/* Left Section */}
                <div className="text-right  md:pe-28" dir={isEnglish && "rtl"}>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl px-3 font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            {content("rightSection.description.0")}
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl px-3 font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            {content("rightSection.description.1")}
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl px-3 font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            {content("rightSection.description.2")}
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-black text-xl md:text-2xl px-3 font-bold">•</span>
                        <p className="mr-3 text-gray-800 text-sm md:text-xl">
                            {content("rightSection.description.3")}
                        </p>
                    </div>
                </div>
            </div>

            {/* Plans Component */}
            <Plan />

            {/* Currency Converter Section */}
            <CurrencyConverter />

            {/* Pricing Plans Section */}
            <div className="p-8 ">
                {/* Page Title */}
                <h2 className="text-center text-3xl sm:xl font-bold mb-4 text-[#157A67]">  {contentPlan("page_title")}</h2>
                <hr className="w-[90px] mx-auto border-t-2 border-[#F0AD4E] mb-8" />

                {/* Tabs for Duration */}
                <div className="mx-auto mb-8 w-full border-[--main-dark-color]">
                    <div className="flex justify-center w-full ">
                        {uniqueDurations.map((duration) => (
                            <button
                                key={duration}
                                onClick={() => setActiveTab(duration)}
                                style={{
                                    backgroundColor: activeTab === duration ? "var(--secound-bg-color)" : "var(--main-dark-color)",
                                    color: activeTab === duration ? "var(--main-dark-color)" : "white",
                                }}
                                className="px-8 sm:px-10 lg:px-16 py-2 text-white font-semibold w-auto flex-grow sm:flex-grow-0"
                            >
                                {contentPlan("tabs.lessons")} {duration} {contentPlan("tabs.minutes")}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 py-16 border rounded-2xl px-6 bg-[--secound-bg-color]">
                    {loading ? (
                        <div>{contentPlan("pricing_cards.loading")}</div>
                    ) : error ? (
                        <div className="text-red-500">{error}</div>
                    ) : (
                        filteredPlans(activeTab).map((plan) => (
                            <div
                                key={plan.id}
                                className="relative bg-white shadow-lg text-center border rounded-md border-[--main-dark-color]"
                            >
                                {/* Plan Number */}
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-14 rounded-full flex items-center justify-center text-xl text-[--secound-bg-color] font-bold border-[6px] border-[--main-border-color] bg-[--main-dark-color]">
                                    {plan.id}
                                </div>

                                {/* Plan Details */}
                                <p className="font-bold text-lg pt-11 pb-2 rounded-t-lg bg-[--main-dark-color] text-white">
                                    {plan.sessions_per_week} {contentPlan("pricing_cards.monthly")}
                                </p>
                                <div className="my-3 text-4xl font-bold text-[--main-dark-color]">
                                    {plan.price}
                                    {/* <span className="text-gray-500 line-through text-sm">{plan.oldPrice}</span> */}
                                    <p className="text-gray-600 text-lg mt-1"> {contentPlan("pricing_cards.lesson_per_week")}</p>
                                </div>
                                <p className="text-gray-600 text-sm m-2"> {contentPlan("pricing_cards.lesson_count")}</p>
                                <div className="border-t border-dashed border-gray-500 w-1/2 mx-auto"></div>
                                <p className="text-gray-600 text-sm m-2"> {contentPlan("pricing_cards.lesson_count")}</p>

                                {/* Buttons */}
                                <div className="flex flex-col mt-4">
                                    <button className="w-full py-4 bg-[--main-dark-color] text-[--main-bgLight-color] text-lg">
                                        {contentPlan("pricing_cards.subscribe_button")}
                                    </button>
                                    <button className="px-4 py-4 text-white rounded-b-lg bg-[#3AA28ED1] text-lg">
                                        {contentPlan("pricing_cards.trial_lesson_button")}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Payment Methods */}
                <div className="flex justify-start items-center space-x-4 pt-2">
                    <img
                        src={PayPal}
                        alt="PayPal"
                        className="h-auto"
                    />
                    <img
                        src={MasterCard}
                        alt="MasterCard"
                        className="h-auto"
                    />
                </div>
            </div>

            {/* Easy Steps */}
            <EasySteps />

            {/* Button to Subscription Form */}
            <div className="flex justify-center my-16">
                <button
                    type="button"
                    className="bg-[#0F8A73] text-white py-3 px-8 border-2 rounded-xl border-[#F0AD4E]"
                    onClick={handleClick}
                >                                        {contentPlan("view_all_plans_button")}

                </button>
            </div>
        </>
    );
};

export default PricingPage;
