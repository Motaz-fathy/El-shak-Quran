import React, { useState } from "react";
import axios from "axios";

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



    return (
        <form
            onSubmit={handleSubmit}
            className="bg-[#157A67] p-6 rounded-xl shadow-lg w-80 text-center"
        >
            <h2 className="text-xl font-semibold text-white mb-4">Currency Converter</h2>

            {/* حقل المبلغ */}
            <div className="mb-4">
                <label className="block text-white text-sm mb-2">Amount</label>
                <input
                    name="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-2 border rounded-md text-gray-700"
                    required
                />
            </div>

            {/* العملة الأساسية */}
            <div className="mb-4">
                <label className="block text-white text-sm mb-2">From</label>
                <select
                    name="currency_from"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-2 border rounded-md text-gray-700"
                >
                    <option value="USD">United States Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">British Pound</option>

                </select>
            </div>

            {/* العملة المستهدفة */}
            <div className="mb-4">
                <label className="block text-white text-sm mb-2">To</label>
                <select
                    name="currency_to"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="w-full p-2 border rounded-md text-gray-700"
                >
                    <option value="EGP">Egypt</option>
                    <option value="USD">United States Dollar</option>
                    <option value="GBP">British Pound</option>

                </select>
            </div>

            {/* زر الإرسال */}
            <button
                type="submit"
                className="bg-[#0F8A73] text-white py-2 px-8 rounded-md font-medium shadow-xl mt-4 "
            >
                Convert
            </button>

            {/* عرض النتيجة */}
            {result && (
                <div className="mt-6">
                    <p className="text-lg font-medium text-white">:Result</p>
                    <p className="text-2xl font-bold text-white">{result}</p>
                </div>
            )}

        </form>
    );
};

export default CurrencyConverter;
