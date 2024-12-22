import './wishList.css'
import wishList from '../../assets/images/general/wishList.png'
import courseImg from '../../assets/images/general/cartImg.png'
import like from '../../assets/images/general/Vector.png'
import play from '../../assets/images/general/play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import { Rating } from '@mui/material'
import axios from 'axios'
import useAuth from '../../Context/authContext/authContext'
import { useEffect } from 'react'




const WishList = () => {
    const [data, setData] = useState([])
    const { token } = useAuth()
    const TYPES = {
        courses: "App\\Models\\Course",
        audio: "App\\Models\\Audio",
        sheikhs: "App\\Models\\Sheikhs",
        video: "App\\Models\\Recitation",
    }

    const getData = async () => {
        try {
            const response = await axios.get("https://quran.codecraft1.com/api/favorites", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })

            setData(response.data.data)
        } catch (error) {
            console.log("Fetch WishList Error", error)
        }
    }


    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Scroll Courses :-
    const scrollCourseRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollCourseRef.current) {
            scrollCourseRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollCourseRef.current) {
            scrollCourseRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };



    // Scroll Audio :-
    const scrollAudioRef = useRef(null);

    const handleScrollAudioRight = () => {
        if (scrollAudioRef.current) {
            scrollAudioRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollAudioLeft = () => {
        if (scrollAudioRef.current) {
            scrollAudioRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };



    // Scroll Audio :-
    const scrollShahkRef = useRef(null);

    const handleScrollShahkRight = () => {
        if (scrollShahkRef.current) {
            scrollShahkRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollShahkLeft = () => {
        if (scrollShahkRef.current) {
            scrollShahkRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };


    return (
        <div className='m-1 lg:m-10'>


            <div className="header mt-5 flex   gap-5 sm:gap-10">
                <div className="icon  flex items-center flex-col ">
                    <div className="image bg-[--main-bgLight-color] rounded-[50%]  w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center">
                        <img className="w-[80%] md:w-[100%]" src={wishList} alt="" />
                    </div>
                    <p className="my-1 md:m-3 font-[600] text-[18px] md:text-[22px] text-[--main-dark-color] border-b-2 border-[--main-border-color]">المفضلة</p>
                </div>
                <p className="text-[24px] md:text-[32px]  text-[--main-dark-color] mt-4">كل ما تم تحديده فى المفضلة</p>
            </div>



            <div className="courses relative  w-full">
                <h4 className="title my-2 md:my-10 mt-5 md:mt-10 text-[28px] md:text-[40px]  font-[700] text-[--main-dark-color]">الكورسات : </h4>
                <div
                    className="bigBox w-[93%] mx-auto flex gap-3 lg:gap-10 justify-start overflow-x-scroll "
                    ref={scrollCourseRef}
                >
                    {/* Courses */}
                    {data.filter(item => item.item_type === TYPES.courses).map(({ item }) => (
                        <div
                            className="box min-w-[40%] sm:min-w-[30%] lg:min-w-[24%]  relative flex items-center flex-col gap-0 md:gap-1 rounded-[15px]"
                            key={item.id}
                        >
                            <img className="w-[100%] h-[200px] md:h-50]" src={item.img} alt={item.name} />
                            <h4 className="font-[700] text-[24px]">{item.name}</h4>
                            <p className="font-[700]">{item.min}</p>
                            <p className="font-[700]">{item.price}</p>
                            <img className="absolute top-[15px] left-[15px] cursor-pointer w-[20px]" src={like} alt="" />
                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[-10] lg:right-[0] cursor-pointer  translate-y-[-50%] text-[--main-dark-color] text-[20px] lg:text-[30px] font-[600]"
                    onClick={handleScrollRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[-8px] lg:left-[0] cursor-pointer translate-y-[-50%] text-[--main-dark-color] text-[20px] lg:text-[30px] font-[600]"
                    onClick={handleScrollLeft}
                />
            </div>



            <div className="audio relative  w-full ">
                <h4 className="title my-4 md:my-10 mt-10 lg:mt-20 text-[28px] md:text-[40px]  font-[700] text-[--main-dark-color]">التلاوة الصوتية :</h4>
                <div
                    className="bigBox w-[92%] mx-auto flex items-center gap-3 md:gap-5 lg:gap-10 overflow-x-scroll"
                    ref={scrollAudioRef}
                >
                    {/* Audio */}
                    {data.filter(item => item.item_type === TYPES.audio).map(({ item }) => (
                        <div className='box min-w-[35%] md:min-w-[28%] lg:min-w-[24%]  bg-[--main-bgLight-color] relative flex items-center justify-center flex-col gap-5 py-[40px] rounded-[15px]'
                            key={item.id}
                        >
                            <h4 className="text-[30px]">{item.name.ar}</h4>
                            <div className="bg-[--main-dark-color] p-2 rounded-[50%] w-[50px] h-[50px] flex items-center justify-center border-2 border-[--main-border-color]">
                                <img className="w-[80%] cursor-pointer" src={item.path} alt="" />
                            </div>
                            <img className="absolute left-[15px] top-[15px] cursor-pointer w-[20px]" src={like} alt="" />
                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[-10] lg:right-[0]  cursor-pointer  text-[--main-dark-color] text-[20px] md:text-[30px] font-[600]"
                    onClick={handleScrollAudioRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[-8px] lg:left-[0] cursor-pointer text-[--main-dark-color] text-[20px] md:text-[30px] font-[600]"
                    onClick={handleScrollAudioLeft}
                />
            </div>



            <div className="vedios">
                <h4 className="title my-10 mt-20 text-[40px] font-[700] text-[--main-dark-color]">
                    التلاوة المرئية:
                </h4>
                <div className="bigBox flex items-start justify-center gap-4 flex-wrap">
                    {data
                        .filter((item) => item.item_type === TYPES.video)
                        .map((filteredItem, index) => (
                            <div key={index} className="box w-full md:w-[45%]">
                                {/* محتوى الفيديو */}
                                <video
                                    src={filteredItem.video}
                                    controls
                                    className="w-full rounded-lg shadow-lg"
                                >
                                    المتصفح الخاص بك لا يدعم تشغيل الفيديو.
                                </video>
                                {/* مثال لنص إضافي تحت الفيديو */}
                                <p className="mt-4 text-center text-[20px] font-semibold">
                                    {filteredItem.title}
                                </p>
                            </div>
                        ))}
                </div>
            </div>



            <div className="shehks mb-10 relative">
                <h4 className="title my-4 md:my-10 mt-10 md:mt-20 text-[28px] md:text-[40px]  font-[700] text-[--main-dark-color]">الشيوخ المفضلة :</h4>
                <div
                    className="bigBox w-[93%] mx-auto flex gap-3 lg:gap-10 justify-start overflow-x-scroll"
                    ref={scrollShahkRef}
                >
                    {/*Sheikhs */}
                    {data.filter(item => item.item_type === TYPES.sheikhs).map(({ item }) => (
                        <div
                            className="box min-w-[70%] md:min-w-[60%] lg:min-w-[24%] p-5 relative flex  flex-col gap-5 rounded-[15px] bg-[--main-bgLight-color] "
                            key={item.id}
                        >
                            <div className="info w-full flex items-center justify-start gap-2 md:gap-5">
                                <div className="image w-[80px] h-[80px] rounded-[50%] border-[1px] border-[--main-dark-color]">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="subInfo text-[16px] md:text-[22px] font-[500]">
                                    <div className="name">
                                        <span>اسم الشيخ / </span>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="rating flex  justify-start  flex-col">
                                        <span>{`${item.experience} من الخبرة`}</span>
                                        {/* <Rating name="read-only" value={item.rating} readOnly /> */}
                                    </div>
                                </div>
                            </div>

                            <div className="couseName mt-1 md:mt-5">
                                <span className="text-[18px] font-[600]">الكورس : </span>
                                <span>{item.title}</span>
                            </div>
                            <div className="details">
                                <span className="text-[18px] font-[600]">تفاصيل عن المدرس :</span>
                                <span>{item.description}</span>
                            </div>

                        </div>
                    ))}
                </div>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute top-[50%] right-[-10] lg:right-[0]  cursor-pointer  text-[--main-dark-color] text-[20px] md:text-[30px]  font-[600]"
                    onClick={handleScrollShahkRight}
                />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="absolute top-[50%] left-[-10px] lg:left-[0]  cursor-pointer text-[--main-dark-color] text-[20px] md:text-[30px]  font-[600]"
                    onClick={handleScrollShahkLeft}
                />
            </div>



        </div>
    )
}

export default WishList
