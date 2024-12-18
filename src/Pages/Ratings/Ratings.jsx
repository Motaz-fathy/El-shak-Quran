

import { Rating } from '@mui/material'
import person from '../../assets/images/home/person.png'
import EgazatSection from '../../Components/Egazat/EgazatSection'
import { Link } from 'react-router-dom'


const Ratings = () => {




    const data = [ 
        {
            img :person ,
            name : "ياسر",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "مصطفي ",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "حمدي",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
        {
            img :person ,
            name : "عمر",
            comment : "الكورس فاجر",
            rating : 4 ,
            date : "12/11/2024",
            time: "12:25 pm"
        },
    ]



    return (
        <div>
            <nav className="p-6 m-10 bg-[--main-bgLight-color] h-[159px] top-[301px]">
            <div className="flex gap-[24px] items-center justify-center h-[100px] top-[330px] left-[91] ">
            <Link to='/login' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white active:bg-[--main-dark-color] active:text-white active:ring-[--main-border-color] justify-center items-center flex ">تسجيل الدخول</Link>
            <Link to='/About' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white active:bg-[--main-dark-color] active:text-white active:ring-[--main-border-color] justify-center items-center flex ">من نحن</Link>
            <Link to='/Joinus' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white active:bg-[--main-dark-color] active:text-white active:ring-[--main-border-color] justify-center items-center flex ">انضم الينا كمعلم</Link>
            <Link to='/Ratings' className="p-[12px 22px 12px 22px] rounded-[15px] w-[309px] h-[100px] bg-white active:bg-[--main-dark-color] active:text-white active:ring-[--main-border-color] justify-center items-center flex ">التقييمات</Link>
            </div>
        </nav>
            <div className='mt-20 mb-10'>
                <h4 className='globalMain-header text-[30px] lg:text-[40px]'>آراء أولياء الامور والطلاب </h4>
                <div className="bigBox flex flex-col gap-5 mt-10 ">
                    { data.map((item , index)=> (
                        <div className="box p-3 lg:p-10 shadow-lg rounded-[10px] bg-[--main-bgLight-color] flex items-center w-[100%]" key={index}>
                            <img className='w-[80px] lg:[150px] h-[80px] lg:h-[150px] rounded-[50%] ml-3 lg:ml-10' src={item.img} alt="" />
                            <div>
                                <h6 className='font-[700] text-[22px] lg:text-[28px] '>{item.name}</h6>
                                <p className=' text-[18px] lg:text-[24px]'>{item.comment}</p>
                            </div>
                            <div className="rating  flex flex-1 gap-10 flex-col items-end  ">
                                <Rating name="read-only" value={item.rating} readOnly />
                                <div className="date flex items-center gap-1 lg:gap-7 ">
                                    <div>
                                        <span  className='text-[16px] lg:text-[20px]'></span>
                                        <span>{item.date}</span>
                                    </div>
                                    <div>
                                        <span className='text-[16px] lg:text-[20px]'></span>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>

            <EgazatSection/>

        </div>
    )
}

export default Ratings
