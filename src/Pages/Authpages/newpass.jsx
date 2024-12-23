import { Link, Outlet } from 'react-router-dom'
// import logo from '../../assets/images/iconHeader/logo.png'
import design3 from '../../assets/images/general/design3.png'
import design1 from '../../assets/images/general/design1.png'
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify"
import AboutNav from '../../Components/AboutNav/AboutNav'
import FormLayout from '../../Components/FormLayout/FormLayout'
import useLocalization from '../../hooks/useTranslation'



export default function ArabicLoginTailwind() {
    const [userEmail, setUserEmail] = useState("")
    const content = useLocalization("auth")
    // const navigateTo = useNavigate("")
    const handelSendEmail = async (event) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append("email", userEmail)
            const response = await axios.post("https://quran.codecraft1.com/api/forget/password", formData)
            if (response.status === 200) {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 1000,
                });
                // navigateTo("/createNewPassword")
            }
        } catch (error) {
            console.log(error)
            if (error.status !== 200) {
                toast.error(
                    error.response.data.message ||
                    "حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.",
                    {
                        position: "top-right",
                        autoClose: 3000,
                    }
                );
            } else {
                toast.error("حدث خطأ غير متوقع. يرجى المحاولة لاحقًا.", {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        }
    }


    return (
        <div dir="rtl" className="my-10 relative font-sans">

            {/* Navigation */}
            <AboutNav />

            {/* Decorative Images */}
            <div className="absolute top-0 right-0 w-[200px] h-auto max-w-xs">
                <img src={design3} alt="" className="w-full h-auto transform scale-x-[-1]" />
            </div>


            {/* Main Content */}


            <FormLayout onSubmit={handelSendEmail} title={content("passwordRecovery.title")}>
                <h4 className="text-xl font-medium "> {content("passwordRecovery.description")} </h4>

                <div className="mt-12">
                    <input
                        type="email"
                        className="w-full px-3 py-2 bg-[--main-bgLight-color] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                        placeholder={content("passwordRecovery.emailPlaceholder")}
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                </div>
                <button type="submit" className="w-full bg-[--main-bgLight-color] text-black py-2 rounded-md hover:ring-2  hover:ring-[--main-border-color]">
                    {content("passwordRecovery.recoverButton")}
                </button>
                <Link to="/login" className='justify-center flex items-center mr[500px]'>    {content("passwordRecovery.alreadyHaveAccount")} </Link>
                <Link to="/regester" className='flex items-center justify-center mr[500px]'>    {content("passwordRecovery.noAccount")}</Link>
            </FormLayout>


            {/* Bottom Decorative Image */}
            <div className="absolute bottom-0 left-[-30px] w-[200px] h-auto max-w-xs ">
                <img src={design1} alt="" className="w-full h-auto transform scale-y-[-1] " />
            </div>
            <Outlet />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
