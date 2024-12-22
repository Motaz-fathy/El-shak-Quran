import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import useLocalization from "../../hooks/useTranslation";
import FormLayout from "../../Components/FormLayout/FormLayout";
import AboutNav from "../../Components/AboutNav/AboutNav";

export default function ArabicLoginTailwind() {

    const content = useLocalization("auth")
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
            <AboutNav />

            {/* Main Content */}
            <FormLayout onSubmit={formik.handleSubmit} title={content("signup.signup")}>
                <div>
                    <input
                        type="email"
                        className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                        placeholder={content("signup.email_placeholder")}
                        {...formik.getFieldProps("email")}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                        placeholder={content("signup.name_placeholder")}
                        {...formik.getFieldProps("name")}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        className="w-full px-3 py-2 bg-[#CBEDD5] rounded-md text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[--main-border-color]"
                        placeholder={content("signup.password_placeholder")}
                        {...formik.getFieldProps("password")}
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="remember"
                        className="rounded text-white focus:ring-offset-[#FF9D37]"
                    />
                    <label htmlFor="remember" className="text-sm px-2">
                        {content("signup.agree_to_terms")}
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#CBEDD5] text-black py-2 rounded-md hover:ring-2  hover:ring-[--main-border-color]"
                >
                    {content("signup.btn")}
                </button>
                <Link to="/login" className="items-center mr[500px] py-2">
                    {content("signup.already_have_account")}
                </Link>
            </FormLayout>

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
