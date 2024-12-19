
import joinus from '../assets/images/joinus/joinus.png';
import design1 from '../assets/images/general/design1.png';
import desigh3 from '../assets/images/general/design3.png';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from 'formik';


export default function Joinus() {
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
        time_available: "",
        cv: "",
        description: ""
    };

    const onSubmit = async (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues,
        onSubmit
    });

    return (
        <div className='container w-full justify-center relative font-sans'>
            {/* شريط التنقل */}
            <nav className="p-6 m-10 bg-[--main-bgLight-color] h-[159px]">
                <div className="flex gap-[24px] items-center justify-center">
                    <Link to='/login' className="rounded-[15px] bg-white focus:bg-[--main-dark-color] active:text-white p-4">تسجيل الدخول</Link>
                    <Link to='/About' className="rounded-[15px] bg-white focus:bg-[--main-dark-color] active:text-white p-4">من نحن</Link>
                    <Link to='/Joinus' className="rounded-[15px] bg-white focus:bg-[--main-dark-color] active:text-white p-4">انضم إلينا كمعلم</Link>
                </div>
            </nav>

            {/* محتوى الصفحة */}
            <div className="images flex justify-between w-full">
                <div className='mr-[100px] mb-10 '>
                    <img src={joinus} alt="" />
                    <h2 className='text-center text-[--main-green-color] font-bold border-b-2 border-b-[--main-border-color]'>انضم إلينا</h2>
                </div>
                <div>
                    {/* شروط العمل */}
                    {[
                        "خبرة التدريس ( مطلوبة )",
                        "إتقان اللغة الإنجليزية ( ممتاز )",
                        "درجة الباكالوريوس ( يُفضل )",
                        "لاب توب أو كمبيوتر فقط",
                        "دوام كامل ( يُفضل )"
                    ].map((text, index) => (
                        <div key={index} className="flex items-center gap-3 mb-3">
                            <FontAwesomeIcon icon={faCheck} className="border-[2px] border-[#333] rounded-full p-2" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-[10px]">
                    <img src={design1} alt="" />
                </div>
            </div>

            {/* نموذج البيانات */}
            <div className='mx-20 my-9'>
                <form onSubmit={formik.handleSubmit} className="bg-[--main-bgLight-color] rounded-lg p-6 space-y-4">
                    {/* حقول النموذج */}
                    {Object.keys(initialValues).map((field) => {
                        // حقول الملفات
                        if (field === 'image' || field === 'cv') {
                            return (
                                <div key={field}>
                                    <label className="block text-right mb-1">{field === 'image' ? "الصورة" : "السيرة الذاتية"}:</label>
                                    <input
                                        type="file"
                                        name={field}
                                        className="w-full border border-gray-300 rounded p-2"
                                        onChange={(e) => formik.setFieldValue(field, e.target.files[0])}
                                    />
                                </div>
                            );
                        }
                        // زر اختيار النوع
                        if (field === 'gender') {
                            return (
                                <div key={field}>
                                    <label className="block text-right mb-1">النوع:</label>
                                    <div className="flex gap-4">
                                        <label>
                                            <input type="radio" name="gender" value="male" onChange={formik.handleChange} /> ذكر
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" value="female" onChange={formik.handleChange} /> أنثى
                                        </label>
                                    </div>
                                </div>
                            );
                        }
                        // باقي المدخلات
                        return (
                            <div key={field}>
                                <label className="block text-right mb-1">{field}:</label>
                                <input
                                    type={field === "email" ? "email" : field === "phone" || field === "age" ? "number" : "text"}
                                    name={field}
                                    className="w-full border border-gray-300 rounded p-2 text-right"
                                    value={formik.values[field]}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        );
                    })}

                    {/* زر الإرسال */}
                    <div className="flex justify-center mt-6">
                        <button type="submit" className="bg-[--main-dark-color] text-white px-8 py-2 rounded-md">إرسال</button>
                    </div>
                </form>
            </div>

            <div className='absolute top-[1600px] transform scale-x-[-1]'>
                <img src={desigh3} alt="" />
            </div>

            <Outlet />
        </div>
    );
}
