import { useState } from "react";
import axios from "axios";
import useLocalization from "../../hooks/useTranslation";
import image1 from "../../assets/images/prices/image1.png";

const CurrencyConverter = () => {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EGP");
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const response = await axios.get(
                `https://quran.codecraft1.com/api/currency-exchange?currency_from=${fromCurrency}&currency_to=${toCurrency}&amount=${amount}`
            );

            setResult(response.data.data);
            console.log("Response:", response.data.data);
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const content = useLocalization("currencyConverter")

    return (
        <div
            className="text-center py-8 px-4 md:py-16 bg-[--body-bg-color]"
        >
            <h2
                className="text-xl md:text-3xl font-bold mb-4 text-[--main-dark-color]"
            >
                {content("maintitle")}
            </h2>
            <hr className="w-16 mx-auto border-t-2 border-orange-400 mb-6" />
            <p className="text-gray-700 mb-6 text-md md:text-lg lg:text-xl">
                {content("description")}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-32">
                <img
                    src={image1}
                    alt="محول العملات"
                    className="w-60 h-48 md:w-[350px] md:h-[300px] rounded-md"
                />
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#157A67] p-6 rounded-xl shadow-lg w-80 text-center"
                >
                    <h2 className="text-xl font-semibold text-white mb-4">{content("title")}</h2>

                    {/* حقل المبلغ */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">{content("amount.label")}</label>
                        <input
                            name="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-2 border rounded-md text-gray-700"
                            required
                            placeholder={content("amount.placeholder")}
                        />
                    </div>

                    {/* العملة الأساسية */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">{content("fromCurrency.label")}</label>
                        <select
                            name="currency_from"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full p-2 border rounded-md text-gray-700"
                        >
                            <option value="USD">{content("fromCurrency.options.USD")}</option>
                            <option value="EUR">{content("fromCurrency.options.EUR")}</option>
                            <option value="GBP">{content("fromCurrency.options.GBP")}</option>

                        </select>
                    </div>

                    {/* العملة المستهدفة */}
                    <div className="mb-4">
                        <label className="block text-white text-sm mb-2">{content("toCurrency.label")}</label>
                        <select
                            name="currency_to"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full p-2 border rounded-md text-gray-700"
                        >
                            <option value="EGP">{content("toCurrency.options.EGP")}</option>
                            <option value="USD">{content("toCurrency.options.USD")}</option>
                            <option value="GBP">{content("toCurrency.options.GBP")}</option>

                        </select>
                    </div>

                    {/* زر الإرسال */}
                    <button
                        type="submit"
                        className="bg-[#0F8A73] text-white py-2 px-8 rounded-md font-medium shadow-xl mt-4 "
                    >
                        {content("convertButton")}
                    </button>

                    {/* عرض النتيجة */}
                    {result && (
                        <div className="mt-6">
                            <p className="text-lg font-medium text-white">{content("result.label")}</p>
                            <p className="text-2xl font-bold text-white">{result.toFixed(2)}</p>
                        </div>
                    )}

                </form>
            </div>    </div>


    );
};

export default CurrencyConverter;
