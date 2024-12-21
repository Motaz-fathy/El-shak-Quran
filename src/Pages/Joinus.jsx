    // import React from 'react'
    import joinus from '../assets/images/joinus/joinus.png'
    import design1 from '../assets/images/general/design1.png'
    import desigh3 from '../assets/images/general/design3.png'
    import { Outlet } from 'react-router-dom'
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCheck } from "@fortawesome/free-solid-svg-icons";


    export default function Joinus() {
        return (
            <div className='container w-full justify-center relative font-sans '>
                {/* <nav className="p-6 m-10 bg-[--main-bgLight-color]  h-[159px] top-[301px]">
                    <div className="flex gap-[24px] items-center justify-center h-[100px] top-[330px] left-[91]  ">
                        <Link to='/login' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">تسجيل الدخول</Link>
                        <Link to='/About' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white  focus:ring-2 focus:ring-[--main-border-color] justify-center items-center flex ">من نحن</Link>
                        <Link to='/Joinus' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">انضم الينا كمعلم</Link>
                        <Link to='/Ratings' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white focus:bg-[--main-dark-color] active:text-white focus:ring-2  focus:ring-[--main-border-color] justify-center items-center flex ">التقييمات</Link>
                    </div>
                </nav> */}
                <div className="images flex justify-between w-full">
            <div className='rightimg mr-[100px] mb-10 '> 
                <img src={joinus } alt="" />
                <h2 className='join font-bold text-center text-[--main-green-color] border-b-2 border-b-[--main-border-color]'>انضم الينا</h2>
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
            <div className='mx-20'>

            <form className="rounded-lg p-6 space-y-4 w-full bg-[--main-bgLight-color] mb-48 ">
                <div className='space-y-4'>
                <label className='block text-right mb-1'>الاسم:</label>
                <input type="tex"className="w-full border border-gray-300 rounded p-2 text-right"
                    required/>
                </div>
                <div className="email">
                    <label className="block text-right mb-1">البريد الالكترونى:</label>
                    <input type="email" className="w-full border border-gray-300 rounded p-2 text-right"
                    required/>
                </div>
                <div className="">
                    <label className="block text-right mb-1">رقم الواتساب:</label>
                    <input type="number"className="w-full border border-gray-300 rounded p-2 text-right"
                    required/>
                </div>
                    <div className='flex justify-between'>
                        <div className='w-[70%]'>
                        <label className="block text-right mb-1">العمر:</label>
                        <input
                        type="number"
                        className="w-full border border-gray-300 rounded p-2 text-right"
                        required/>
                        </div>
                <div className='ml-[200px] mt-[10px]'>
                <label className=" text-right mb-1 flex justify-start gap-4">النوع:</label>
                    <div className="flex justify-start gap-4">
                    <div className="flex items-center gap-1">
                    <label>انثى</label>
                    <input type="radio" name="gender" value="female" required />
                    </div>
                    <div className="flex items-center gap-1">
                        <label>ذكر</label>
                        <input type="radio" name="gender" value="male" required />
                    </div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <label className="block text-right mb-1">المستوى فى اللغه الانجليزية: </label>
                    <select className="w-full border border-gray-300 rounded p-2 text-right" required>
                    <option value="">اختر المستوى</option>
                    <option value="beginner">مبتدئ</option>
                    <option value="intermediate">متوسط</option>
                    <option value="advanced">متقدم</option>
                    </select>
                </div>
                    <div>
                <label className="block text-right mb-1">اجازة:</label>
                <div className="flex justify-start gap-4">
                    <div className="flex items-center gap-1">
                    <label>لا</label>
                    <input type="radio" name="vacation" value="no" required />
                    </div>
                    <div className="flex items-center gap-1">
                    <label>نعم</label>
                    <input type="radio" name="vacation" value="yes" required />
                    </div>
                </div>
                </div>
                <div>
                <label className="block text-right mb-1">التعليم:</label>
                <input
                    type="text"
                    placeholder="المؤهل التعليمي والتخصص الدراسي"
                    className="w-full border border-gray-300 rounded p-2 text-right"
                    required
                />
                </div>
                <div>
                <label className="block text-right mb-1">الوقت المتاح:</label>
                <input
                    type="text"
                    placeholder="من الساعة 00 إلى الساعة 00 صباحا / من الساعة 00 إلى الساعة 00 مساء"
                    className="w-full border border-gray-300 rounded p-2 text-right"
                    required
                />
                </div>
                <div>
                <label className="block text-right mb-1">  التقدم بطلب للحصول على؟</label>
                <div className="space-y-2 text-right">
                    {[
                        'تدريس القرآن واللغة العربية',
                        'تدريس القرآن والتجويد',
                        'تدريس اللغة العربية والإسلامية',
                        'القرآن والتجويد واللغة العربية',
                        'القرآن والتجويد وتدريس اللغة العربية والإسلامية'
                    ].map((pref, index) => (
                        <div key={index} className="flex items-center justify-start gap-2 ">
                        <input type="checkbox" name="preferences" />
                        <label>{pref}</label>
                    </div>
                    ))}
                </div>
                </div>
                <div className="relative inline-block">
                    <label className='flex'>سيرتك الذاتية:</label>
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"/>
                    <span className="block bg-[#F4FCFC] text-[--main-dark-color] py-2 px-4 rounded text-center cursor-pointer">اختر ملف</span>
                </div>
                <div>
                <label className="block text-right mb-1">كيف عرفتنا ؟</label>
                <select className="w-full border border-gray-300 rounded p-2 text-right" required>
                    <option value="">فيسبوك</option>
                    <option value="social">انستجرام</option>
                    <option value="friend">صديق</option>
                    <option value="search">محرك البحث</option>
                    <option value="other">أخرى</option>
                </select>
                </div>
                <div className="flex justify-center mt-6">
                <button
                type="submit"
                className="bg-[--main-dark-color] text-white px-8 py-2 rounded-md focus:ring-[--main-border-color]">
                إرسال
                </button>
            </div>
            </form>
            </div>
            <Outlet/>

            <div className='absolute top-[1400px] right-[px] transform scale-x-[-1]'>
            <img src={desigh3} alt="" />
            </div>
            </div>
        )
        }
