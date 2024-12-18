

import { useNavigate } from "react-router-dom"
import FoundEgaza from "../../assets/images/general/FoundEgaza.png"
const EgazatSection = () => {


    const navigate = useNavigate()


    return (
        <>
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between p-8 my-5 rounded-lg w-full"
                style={{
                    backgroundColor: 'var(--main-dark-color)',
                }}>

                <div className="w-full md:w-1/2 text-white text-center  flex flex-col items-center  space-y-4">
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">
                        أحصل على الإجازة بأعلى الأسانيد في العالم
                    </h2>
                    <button
                        className="globalButton text-black py-2 px-3 rounded-lg font-medium shadow-md text-md w-40"
                        style={{
                            backgroundColor: "var(--main-bgLight-color)",
                        }}
                        onClick={()=> navigate('/trialSession')}
                    >
                        حجز حصة تدريبية
                    </button>
                </div>
                {/* الصورة */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                    <img
                        src={FoundEgaza}
                        alt="youtube"
                        className="rounded-lg w-full max-w-xs md:max-w-md lg:max-w-lg"
                    />
                </div>

            </div>
        </>
    )
}

export default EgazatSection

