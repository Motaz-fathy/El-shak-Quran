// import React from 'react'
import joinus from '../assets/images/joinus/joinus.png'
import design1 from '../assets/images/general/design1.png'
import desigh3 from '../assets/images/general/design3.png'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

export default function Joinus() {
    const imageRef = useRef("")
    const cvRef = useRef("")
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        image: "",
        gender: "",
        age: "",
        level_of_english: "",
        vacation: "",
        education: "",
        links: "",
        cv: "",
        recommendations: "",
        title: "",
        time_available: "",
        experience: "",
        description: "",
    };

    const setFormData = (values) => {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (key === "cv") formData.append(key, cvRef.current.files[0])
            if (key === "image") formData.append(key, imageRef.current.files[0])
            formData.append(key, value || "");
        });
        return formData;
    };


    const onSubmit = async (values) => {
        try {
            console.log("Values:", values);  // Log the values to ensure they are correct
            const data = setFormData(values);
            const response = await axios.post("https://quran.codecraft1.com/api/teacher/store", data);

            if (response.data.status === "success") {
                toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                });
                formik.resetForm();
                console.log(response);
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.", {
                    position: "top-right",
                    autoClose: 3000,
                });
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
        onSubmit,
    });

    return (
        <div className='container w-full justify-center relative font-sans '>
            {/* Navbar */}
            <nav className="p-6 m-10 bg-[--main-bgLight-color]  h-[159px] top-[301px]">
                <div className="flex gap-[24px] items-center justify-center h-[100px] top-[330px] left-[91]  ">
                    <Link to='/login'
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">
                        تسجيل الدخول</Link>
                    <Link to='/About'
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white  focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex ">
                        من نحن</Link>
                    <Link to='/Joinus'
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">
                        انضم الينا كمعلم</Link>
                    <Link to='/Ratings'
                        className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">
                        التقييمات</Link>
                </div>
            </nav>

            {/* Information */}
            <div className="images flex justify-between w-full">
                <div className='rightimg mr-[100px] mb-10 '>
                    <img src={joinus} alt="" />
                    <h2
                        className='join font-bold text-center text-[--main-green-color] border-b-2 border-b-[--main-border-color]'>
                        انضم الينا</h2>
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faCheck} className=" border-[2px] border-[#333] rounded-[50%] p-2" />
                        <span>خبرة التدريس ( مطلوبة ).</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faCheck} className=" border-[2px] border-[#333] rounded-[50%] p-2" />
                        <span>إتقان اللغة الإنجليزية ( ممتاز ).</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faCheck} className=" border-[2px] border-[#333] rounded-[50%] p-2" />
                        <span>درجة الباكالوريوس ( يُفضل ).</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faCheck} className=" border-[2px] border-[#333] rounded-[50%] p-2" />
                        <span>لاب توب او كمبيوتر فقط.</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <FontAwesomeIcon icon={faCheck} className=" border-[2px] border-[#333] rounded-[50%] p-2" />
                        <span>دوام كامل ( يُفضل ).</span>
                    </div>
                </div>
                <div className="leftimg mt-[10px]">
                    <img src={design1} alt="" />
                </div>
            </div>

            {/* Form */}
            <div className='mx-20'>
                <form className="rounded-lg p-6 space-y-4 w-full bg-[--main-bgLight-color] mb-48 " onSubmit={formik.handleSubmit}>
                    {/* userName */}
                    <div className='space-y-4'>
                        <label className='block text-right mb-1'>الاسم:</label>
                        <input type="tex" className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("name")}
                        />
                    </div>

                    {/* Email */}
                    <div className="email">
                        <label className="block text-right mb-1">البريد الالكترونى:</label>
                        <input type="email" className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("email")}
                        />
                    </div>

                    {/* whatsapp */}
                    <div className="">
                        <label className="block text-right mb-1">رقم الواتساب:</label>
                        <input type="number" className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("phone")} />
                    </div>

                    {/* age & gander*/}
                    <div className="mt-4 flex items-center gap-4">
                        <div className='w-[60%]'>
                            <label className="block text-right mb-1">العمر:</label>
                            <input
                                type="number"
                                className="w-full border border-gray-300 rounded p-2 text-right"
                                required
                                {...formik.getFieldProps("age")}
                            />
                        </div>
                        <div className="flex gap-2 items-center flex-col mx-2">
                            <h3 className="mb-3">نوع الطالب:</h3>
                            <div className='flex'>
                                <label className="block text-gray-700 font-bold">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={1}
                                        onChange={formik.handleChange}
                                    />{" "}
                                    ذكر
                                </label>
                                <label className="block text-gray-700 font-bold">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={0}
                                        onChange={formik.handleChange}
                                    />{" "}
                                    أنثى
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* english level */}
                    <div>
                        <label className="block text-right mb-1">المستوى فى اللغه الانجليزية: </label>
                        <select className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("level_of_english")}>
                            <option value="">اختر المستوى</option>
                            <option value="beginner">مبتدئ</option>
                            <option value="intermediate">متوسط</option>
                            <option value="advanced">متقدم</option>
                        </select>
                    </div>

                    {/* vacation */}
                    <div>
                        <label className="block text-right mb-1">اجازة:</label>
                        <div className="flex justify-start gap-4">
                            <div className="flex items-center gap-1">
                                <label>لا</label>

                                <input type="radio" name="vacation" value={0} required onChange={formik.handleChange} />
                            </div>
                            <div className="flex items-center gap-1">
                                <label>نعم</label>

                                <input type="radio" name="vacation" value={1} required onChange={formik.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* education */}
                    <div>
                        <label className="block text-right mb-1">التعليم:</label>
                        <input type="text" placeholder="المؤهل التعليمي والتخصص الدراسي"
                            className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("education")} />
                    </div>

                    {/* Available Time */}
                    <div>
                        <label className="block text-right mb-1">الوقت المتاح:</label>
                        <input type="text" placeholder="من الساعة 00 إلى الساعة 00 صباحا / من الساعة 00 إلى الساعة 00 مساء"
                            className="w-full border border-gray-300 rounded p-2 text-right" required {...formik.getFieldProps("time_available")} />
                    </div>

                    {/* submitting Fro teaching */}
                    <div>
                        <label className="block text-right mb-1"> التقدم بطلب للحصول على؟</label>
                        <div className="space-y-2 text-right">
                            {[
                                'تدريس القرآن واللغة العربية',
                                'تدريس القرآن والتجويد',
                                'تدريس اللغة العربية والإسلامية',
                                'القرآن والتجويد واللغة العربية',
                                'القرآن والتجويد وتدريس اللغة العربية والإسلامية'
                            ].map((pref, index) => (
                                <div key={index} className="flex items-center justify-start gap-2 ">
                                    <input type="checkbox" name="preferences" {...formik.getFieldProps("education")} />
                                    <label>{pref}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* link  */}
                    <div className="email">
                        <label className="block text-right mb-1"> يرجى مشاركة فصل تجريبي zoom_video يغطي المتطلبات التالية باللغة الإنجليزية: - <br />
                            (1) تقديم نفسك ، (2) تلاوة القرآن ، (3) درس حكم التجويد، (4) درس نور البيان، (5) كتاب المدينة المنورة أو درس العربية بين ياديك، (6) درس الدراسات الإسلامية.
                        </label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 text-right" required placeholder='يرجى إضافة رابط جوجل درايف هنا بما فى ذلك المتطلبات'  {...formik.getFieldProps("links")} />
                    </div>

                    {/* Course Name  */}
                    <div className="email">
                        <label className="block text-right mb-1"> أسم الكورس الذى ستقوم بتدريسة</label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 text-right" required placeholder=' قم بأضافة اسم الكورس '  {...formik.getFieldProps("title")} />
                    </div>

                    {/*CV */}
                    <div className="relative inline-block mx-3">
                        <label className='flex py-1' htmlFor='userCv'>سيرتك الذاتية:</label>
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" id='userCv'  {...formik.getFieldProps("cv")} ref={cvRef} />
                        <span
                            className="block bg-[#F4FCFC] text-[--main-dark-color] py-2 px-4 rounded text-center cursor-pointer">اختر
                            ملف</span>
                    </div>

                    {/* User Profile */}
                    <div className="relative inline-block mx-3">
                        <label className='flex py-1' htmlFor='userImage'> الصورة الشحصية :</label>
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer " id='userImage'  {...formik.getFieldProps("image")} ref={imageRef} />
                        <span
                            className="block bg-[#F4FCFC] text-[--main-dark-color] py-2 px-4 rounded text-center cursor-pointer">اختر
                            ملف</span>
                    </div>

                    {/* How Know US */}
                    <div>
                        <label className="block text-right mb-1">كيف عرفتنا ؟</label>
                        <select className="w-full border border-gray-300 rounded p-2 text-right" required  {...formik.getFieldProps("recommendations")}>
                            <option value="">فيسبوك</option>
                            <option value="social">انستجرام</option>
                            <option value="friend">صديق</option>
                            <option value="search">محرك البحث</option>
                            <option value="other">أخرى</option>
                        </select>
                    </div>


                    {/* experince  */}
                    <div className="email">
                        <label className="block text-right mb-1"> الخبرة</label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 text-right" required placeholder='قم بأضافة خبراتك السابقة ' {...formik.getFieldProps("experience")} />
                    </div>

                    {/* desc  */}
                    <div className="email">
                        <label className="block text-right mb-1"> الوصف </label>
                        <input type="text" className="w-full border border-gray-300 rounded p-2 text-right" required placeholder='   قم بأدخال وصف مختصر لك  ' {...formik.getFieldProps("description")} />
                    </div>


                    {/* Submitting Form  */}
                    <div className="flex justify-center mt-6">
                        <button type="submit"
                            className="bg-[--main-dark-color] text-white px-8 py-2 rounded-md focus:ring-[--main-border-color]">
                            إرسال
                        </button>
                    </div>
                </form>
            </div>

            <Outlet />

            <div className='absolute top-[1800px] right-[px] transform scale-x-[-1]'>
                <img src={desigh3} alt="" />
            </div>

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
    )
}