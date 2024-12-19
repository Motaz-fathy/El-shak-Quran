import { useState, useEffect } from "react";
import axios from "axios";
// import PayPal from "../assets/images/general/PayPal.png";
import { useContext } from 'react';
import { CartStore } from "../Context/CartContext.API";


const SubscriptionForm = () => {

    const { addToCart , cartItem} = useContext(CartStore);   

    const [plans, setPlans] = useState([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);
    const [isRecurring, setIsRecurring] = useState(false);
    const [formData, setFormData] = useState({
        course: "",
        plan: "",
        subscription_plan: "",
        name: "",
        email: "",
        phone: "",
        country: "",
        payment_method: "",
        accept_terms: null,
    });
    const [courses, setCourses] = useState([]); 
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("https://quran.codecraft1.com/api/courses");
                if (response.data) {
                    setCourses(response.data.data); 
                    // console.log(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };
        fetchCourses();
    }, []);


    const countryCodes = [
        { country: "مصر", code: "+20" },
        { country: "السعودية", code: "+966" },
        { country: "الإمارات", code: "+971" },
        { country: "الأردن", code: "+962" },
        { country: "الكويت", code: "+965" },
        { country: "البحرين", code: "+973" },
        { country: "قطر", code: "+974" },
        { country: "عمان", code: "+968" },
        { country: "اليمن", code: "+967" },
        { country: "العراق", code: "+964" },
        { country: "سوريا", code: "+963" },
        { country: "لبنان", code: "+961" },
        { country: "فلسطين", code: "+970" },
        { country: "ليبيا", code: "+218" },
        { country: "تونس", code: "+216" },
        { country: "الجزائر", code: "+213" },
        { country: "المغرب", code: "+212" },
    ];

    const arabCountries = [
        { name: "مصر", value: "Egypt" },
        { name: "السعودية", value: "KSA" },
        { name: "الإمارات", value: "UAE" },
        { name: "الأردن", value: "Jordan" },
        { name: "الكويت", value: "Kuwait" },
        { name: "البحرين", value: "Bahrain" },
        { name: "عمان", value: "Oman" },
        { name: "قطر", value: "Qatar" },
        { name: "العراق", value: "Iraq" },
        { name: "لبنان", value: "Lebanon" },
        { name: "سوريا", value: "Syria" },
        { name: "اليمن", value: "Yemen" },
        { name: "الأردن", value: "Jordan" },
        { name: "فلسطين", value: "Palestine" },
        { name: "السودان", value: "Sudan" },
        { name: "ليبيا", value: "Libya" },
        { name: "تونس", value: "Tunisia" },
        { name: "الجزائر", value: "Algeria" },
        { name: "المغرب", value: "Morocco" },
    ];

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get("https://quran.codecraft1.com/api/plans");
                if (response.data.status === 200) {
                    setPlans(response.data.data);
                }
            } catch (error) {
                console.error("Error fetching plans:", error);
            }
        };
        fetchPlans();
    }, []);

    const uniqueDurations = [...new Set(plans.map((plan) => plan.session_duration))];

    const filteredPlans = (duration) =>
        plans.filter((plan) => plan.session_duration === duration);

    const handleCheckboxChange = (checkboxId) => {
        setSelectedCheckbox(checkboxId === selectedCheckbox ? null : checkboxId);
        setFormData((prev) => ({
            ...prev,
            plan: checkboxId === selectedCheckbox ? "" : checkboxId,
        }));
    };


    const handleRadioChange = (planName, planPrice) => {
        setFormData((prev) => ({
            ...prev,
            subscription_plan: planName,
            price: planPrice, 
        }));
    };
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://quran.codecraft1.com/api/subscriptions2",
                JSON.stringify(formData),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 201) {
                // console.log("Data submitted successfully");
            } else {
                console.error("Failed to submit data");
            }
        } catch (error) {
            if (error.response) {
                // console.error("Response error:", error.response.data);
                alert(`خطأ: ${error.response.data.message || "تعذر إرسال البيانات."}`);
            } else if (error.request) {
                console.error("No response received:", error.request);
                alert("تعذر الاتصال بالخادم.");
            } else {
                // console.error("Error setting up request:", error.message);
                alert("حدث خطأ غير متوقع.");
            }
        }
    };



    const handleAddToCart = () => {
        const selectedCourse = courses.find(course => course.name === formData.course);


        const isAlreadyInCart = cartItem.some(item => item.name === selectedCourse.name);
        if (isAlreadyInCart) {
            alert("هذا الكورس موجود بالفعل");
            return; 
        }
    
        if (selectedCourse) {
            const item = {
                id: selectedCourse.id,   
                name: selectedCourse.name, 
                image: selectedCourse.image, 
                price: formData.price || 100,
            };
            addToCart(item);
            setFormData({
                course: "",
                plan: "",
                subscription_plan: "",
                name: "",
                email: "",
                phone: "",
                country: "",
                payment_method: "",
                accept_terms: null,
            });
            setSelectedCheckbox(null);
            alert("تم إضافة الكورس بنجاح");
        }
    };
    


    return (

        <div className="flex flex-col justify-center items-center p-4">
            <h1 className="text-center text-xl lg:text-3xl font-semibold text-[#157A67] mb-2 md:mb-6"
            >
                للإشتراك عن طريق بطاقة الخصم أو الائتمان, يرجى ملء النموذج أدناه
            </h1>
            <hr className="w-[100px] md:w-[350px] border-t-2 border-orange-400 mb-4" />
            <form className="w-full max-w-2xl lg:max-w-[700px] p-4 lg:p-6 rounded-lg shadow-md bg-[#CBEDD5]"
                onSubmit={handleSubmit}
            >
                <h4 className="text-right text-sm lg:text-base font-bold text-[#157A67] mt-6 lg:mt-11 mb-4">
                    اختار دورتك التعليمية
                </h4>

                <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                        الدورة:
                    </label>
                    <select
                        name="course"
                        className="block w-full px-4 py-2 border-2 mb-4 focus:outline-none border-[#0F8A73]"
                        value={formData.course}
                        onChange={handleInputChange}
                    >
                        {courses.map((course, index) => (
                            <option key={index} value={course.name}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Dynamic checkboxes */}
                <div>
                    <label className="block mb-2 text-[#157A67] font-semibold">
                        اختر خطتك
                    </label>
                    <div className="space-y-4">
                        {uniqueDurations.map((duration) => (
                            <label
                                key={duration}
                                className="flex items-center space-x-reverse space-x-2"
                            >
                                <input
                                    type="checkbox"
                                    name="plan"
                                    value={duration}
                                    className="form-checkbox text-green-600"
                                    onChange={() => handleCheckboxChange(duration)}
                                    checked={formData.plan === duration}
                                />
                                <span>درس {duration} دقيقة</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Radio options for selected checkbox */}
                {selectedCheckbox && (
                    <div className="my-6">
                        <h2 className="text-[#157A67] font-semibold mb-4">
                            خطط درس {selectedCheckbox} دقيقة
                        </h2>
                        <div className="space-y-2">
                        {/* ----------- */}
                        {filteredPlans(selectedCheckbox).map((plan) => (
                            <label
                                key={plan.id}
                                className="flex items-center space-x-reverse space-x-2"
                            >
                                <input
                                    type="radio"
                                    name={"subscription_plan"}
                                    value={plan.name}
                                    className="form-radio text-green-600"
                                    onChange={() => handleRadioChange(plan.name, plan.price)} 
                                    checked={formData.subscription_plan === plan.name}
                                />
                                <span>   {plan.sessions_per_week} جلسات/أسبوع - {plan.price} دولار</span>
                            </label>
                        ))}
                        {/* ----------- */}

                        </div>
                    </div>
                )}
                {/* ظظظظظظظظظظظظظظ */}
                <div className="mt-2">
                    <label className="block mb-1 text-gray-700 text-sm font-bold">
                        الاسم الأول
                    </label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#0F8A73]"
                    />

                </div>

                <div className="mt-2">
                    <label className="block mb-1 text-gray-700 text-sm font-bold">
                        البريد الإلكتروني
                    </label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-[#0F8A73]"
                    />
                </div>
                {/* //////////////// */}
                <label className="block text-sm font-medium text-gray-800 mt-2">
                    رقم الواتساب:
                </label>
                <div className="flex items-center mt-2 gap-x-2">
                    {/* حقل رقم الواتساب */}
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="أدخل رقم الواتساب"
                        className="px-4 py-1 focus:outline-none w-[90%] border-2 border-[#0F8A73]"
                      
                    />
                    <select
                        name="countryCode"
                        className="block py-[7px] focus:outline-none border-2 border-[#0F8A73]"
                        value={formData.countrycode}
                        onChange={handleInputChange}

                    >
                        <option value="">اختر كود الدولة</option>
                        {countryCodes.map((item, index) => (
                            <option key={index} value={item.code}>
                                {item.country} ({item.code})
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-800 mt-2">
                        البلد:
                    </label>
                    <select
                        name="country"
                        className="block w-full px-4 py-2 border-2 focus:outline-none border-[#0F8A73]"
                        value={formData.country}
                        onChange={handleInputChange}

                    >
                        {arabCountries.map((country, index) => (
                            <option key={index} value={country.value}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                <h2 className="text-lg lg:text-xl font-bold text-gray-800 my-4">
                    طريقة الدفع:
                </h2>
                <div className="flex flex-col space-y-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="payment_method"
                            value="card"
                            onChange={(e) => handleInputChange(e)}  // تحديث formData هنا
                            className="form-radio text-[#0F8A73] focus:outline-none ml-2"

                        />
                        <span className="ml-2 text-gray-700">
                            بطاقة الائتمان / بطاقة الخصم
                        </span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="payment_method"
                            value="paypal"
                            className="form-radio text-[#0F8A73] focus:outline-none ml-2"
                            onChange={(e) => handleInputChange(e)}  // تحديث formData هنا
                        />
                        <span className="ml-2 text-gray-700">الدفع عبر PayPal</span>
                    </label>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-bold text-[#157A67]">تمكين الدفع الشهري المتكرر</h3>
                    <label className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            name="accept_terms"
                            className="form-checkbox ml-2"
                            checked={isRecurring}
                            onChange={() => {
                                const newValue = !isRecurring;
                                setIsRecurring(newValue);
                                setFormData((prev) => ({
                                    ...prev,
                                    accept_terms: newValue, // إرسال القيمة كـ boolean
                                }));
                            }}
                        />
                        <span className="ml-2 text-gray-700">نعم</span>
                    </label>

                    <p className=" text-sm mt-4 leading-relaxed">
                        سيتم دفع الاشتراك الشهري المتكرر مقدما ويتم تجديده تلقائيا في نفس اليوم من كل شهر. في حالة الإلغاء أو الإيقاف أو تغيير الخطة ، نقوم بإلغاء الخطة أو إيقافها مؤقتا أو تغييرها وفقا لذلك مع ضمان استرداد الأموال بالكامل لأي فئات مستحقة.
                    </p>
                </div>



                <div className="flex justify-center gap-[15px] md:gap-[55px] sm:mt-10 md:mt-12">
                    <button
                        type="submit"
                        className="bg-[#0F8A73] text-white py-2 px-3 md:py-3 md:px-8 border-2 rounded-xl border-[#F0AD4E]"
                    >
                        إجراء الدفع
                    </button>
                    <button
                        type="button"
                        className="bg-[#0F8A73] text-white py-2 px-3 md:py-3 md:px-8  border-2 rounded-xl border-[#F0AD4E]"
                        onClick={handleAddToCart}
                    >
                        اضف الى السلة
                    </button> 

                </div>



            </form >
        </div >
    );
};

export default SubscriptionForm;



