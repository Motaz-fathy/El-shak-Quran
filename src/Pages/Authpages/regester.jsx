import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../assets/images/iconHeader/logo.png";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";

export default function ArabicLoginTailwind() {
    const navigateTo = useNavigate();
    let setTimeoutId;
    const initialValues = {
        email: "",
        Password: "",
        name: "",
    };

    // const validationSchema = {}

    const onSubmit = async (values) => {
        try {
            const formData = new FormData();
            Object.entries(values).forEach(([key, value]) => {
                formData.append(key, value || "");
            });

            const response = await axios.post(
                "https://quran.codecraft1.com/api/admin/register",
                formData
            );

            if (response.status === 201) {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 1000,
                });
                setTimeoutId = setTimeout(() => {
                    navigateTo("/login");
                }, 1500);
            }
        } catch (error) {
            if (error.response) {
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
    };

    const formik = useFormik({
        initialValues,
        // validationSchema,
        onSubmit,
    });

    useEffect(() => {
        return () => {
            clearTimeout(setTimeoutId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div dir="rtl" className=" my-10 relative font-sans">
            {/* Navigation */}
            <nav className="p-2 m-3 bg-[--main-bgLight-color] ">
                <div className="flex gap-6 items-center justify-center flex-wrap">
                    <Link
                        to="/login"
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
                    >
                        تسجيل الدخول
                    </Link>
                    <Link
                        to="/About"
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%]  md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex "
                    >
                        من نحن
                    </Link>
                    <Link
                        to="/Joinus"
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
                    >
                        انضم الينا كمعلم
                    </Link>
                    <Link
                        to="/Ratings"
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[40%] md:w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex "
                    >
                        التقييمات
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex items-center justify-center md:flex-row-reverse flex-col my-5 md:my-0 gap-y-3">
                <div className="box w-[400px] ">
                    <div className="w-full flex items-center justify-center bg-[--main-green-color] rounded-lg max-w-md ">
                        <div className=" h-[500px] sm:p-8 rounded-lg text-white justify-center text-center ">
                            <div className="bg-[#157A67] p-8 text-white">
                                <h2 className="text-2xl font-bold mb-6 text-center">
                                    {" "}
                                    سجل الدخول مجانا
                                </h2>

                                <form
                                    className="space-y-6 bg-[#157A67]"
                                    onSubmit={formik.handleSubmit}
                                >
                                    <div>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                                            placeholder="البريد الإلكتروني"
                                            {...formik.getFieldProps("email")}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                                            placeholder=" الاسم بالكامل"
                                            {...formik.getFieldProps("name")}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                                            placeholder="كلمة المرور"
                                            {...formik.getFieldProps("password")}
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="rounded text-white focus:ring-offset-[#FF9D37]"
                                        />
                                        <label htmlFor="remember" className="text-sm">
                                            {" "}
                                            اوافق على سياسه وشروط الخدمة
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#CBEDD5] text-black py-2 rounded-md hover:ring-2  hover:ring-[--main-border-color]"
                                    >
                                        تسجيل الدخول
                                    </button>
                                    <Link to="/login" className="items-center mr[500px]">
                                        هل لديك حساب بالفعل؟
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Logo & Social Login */}
                <div className="w-full max-w-md sm:p-8 flex flex-col items-center justify-center bg-[--main-bgLight-color] rounded-lg">
                    <img
                        src={logo}
                        alt="Logo"
                        className="mb-6 sm:mb-8 max-w-[200px] w-full"
                    />
                    <p className="text-center text-[--main-green-color] mb-6">
                        يرجى تسجيل الدخول من خلال وسائل التواصل الاجتماعي للوصول السريع
                    </p>
                    <div className="space-y-3 w-full">
                        {[
                            {
                                bg: "#3B5998",
                                text: "تسجيل الدخول عبر فيسبوك",
                                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                            },
                            {
                                bg: "#00ACED",
                                text: "تسجيل الدخول عبر تويتر",
                                path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                            },
                            {
                                bg: "#C32F10",
                                text: "تسجيل الدخول عبر جوجل",
                                path: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                            },
                        ].map((item, index) => (
                            <button
                                key={index}
                                className={`w-full flex items-center justify-center gap-2 text-white rounded-md px-3 py-2 bg-[${item.bg}] transition-colors text-sm sm:text-base`}
                            >
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d={item.path} />
                                </svg>
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>
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
