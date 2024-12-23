import { useState, useEffect } from "react";
import axios from "axios";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import useLocalization from "../hooks/useTranslation";

const CommonQuestions = () => {
    const content = useLocalization("faq")

    const [questions, setQuestions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get("https://quran.codecraft1.com/api/dashboard/faqs");
                if (response?.data?.data?.length) {
                    setQuestions(response.data.data);
                } else {
                    setError("لا توجد أسئلة متاحة حاليًا.");
                }
            } catch (err) {
                setError("حدث خطأ أثناء تحميل الأسئلة.");
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto p-4">
            {loading ? (
                <p className="text-center text-lg text-[#0F8A73] font-medium">
                    جارٍ تحميل الأسئلة...
                </p>
            ) : error ? (
                <p className="text-center text-red-600 font-bold">
                    {error}
                </p>
            ) : questions.length === 0 ? (
                <p className="text-center text-gray-500 font-medium">
                    لا توجد أسئلة شائعة في الوقت الحالي.
                </p>
            ) : (
                <>
                    {/* Header Section */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col items-center">
                            <FontAwesomeIcon
                                icon={faQuestionCircle}
                                className="text-[#CBEDD5] bg-[#0F8A73] rounded-full text-6xl transform scale-x-[-1]"
                            />
                            <h2 className="text-xl sm:text-2xl font-bold mt-2 text-[#0F8A73]">
                                {content("faq_title")}
                            </h2>
                            <hr className="w-16 border-[#F0AD4E] mt-1" />
                        </div>
                        <div className="text-right text-[#0F8A73] text-base sm:text-lg lg:text-xl flex-1 mr-4">
                            <p>
                                {content("faq_subtitle")}
                            </p>
                        </div>
                    </div>

                    {/* Questions Section */}
                    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                        <h1 className="text-lg sm:text-xl font-bold text-right mb-4 text-[#0F8A73]">
                            {content("general_questions_title")}
                        </h1>
                        <div className="border border-[#0F8A73] rounded-2xl overflow-hidden">
                            {questions.map((item, index) => (
                                <div key={item.id} className="overflow-hidden">
                                    {/* Question Header */}
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex justify-between items-center w-full p-3 sm:p-4 bg-[#CBEDD5] text-right text-base sm:text-lg lg:text-xl font-medium transition-all duration-200"
                                    >
                                        <span>{item.question}</span>
                                        <span>
                                            {activeIndex === index ? (
                                                <FontAwesomeIcon icon={faCaretUp} />
                                            ) : (
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            )}
                                        </span>
                                    </button>
                                    {/* Answer Section */}
                                    {activeIndex === index && (
                                        <div
                                            className="p-3 sm:p-4 bg-[#0F8A73] text-right text-[#FFFFFF] text-base sm:text-lg lg:text-xl transition-all duration-300"
                                            style={{ maxHeight: "100%" }}
                                        >
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CommonQuestions;
