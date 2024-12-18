
import './coursesSection.css'
import cousesImg from '../../assets/images/home/cousesImg.png'
import iconImg from '../../assets/images/home/iconImg.png'
import { useNavigate } from 'react-router-dom'

const CoursesSection = () => {

    const navigate = useNavigate()


    const data = [
        {
            imgOne : cousesImg,
            imgTwo : iconImg,
            text : "دروس القرآن الكريم",
        },
        {
            imgOne : cousesImg,
            imgTwo : iconImg,
            text : "دروس القرآن الكريم",
        },
        {
            imgOne : cousesImg,
            imgTwo : iconImg,
            text : "دروس القرآن الكريم",
        },
        {
            imgOne : cousesImg,
            imgTwo : iconImg,
            text : "دروس القرآن الكريم",
        },
    ]


    return (
        <div className='coursesEction bg-[--main-bgLight-color] py-10'>
            <h4 className='globalMain-header title text-center mb-[40px] text-[40px]'>الدورات والمناهج عبر الانترنت </h4>
            <div className="bigBox flex flex-wrap justify-center items-center  gap-10 " >
                { data?.map((item , index)=> (
                    <div className="box w-[40%] bg-[--main-dark-color] py-10 gap-10 rounded-[15px] border-2 border-[--main-border-color] flex flex-col items-center justify-between" key={index}>
                        <img className="w-[70%]" src={item.imgOne} alt="" />
                        <div className="flex items-center gap-7">
                            <div className="iconImg bg-[#CBEDD5] p-5 rounded-[50%]">
                                <img src={item.imgTwo} alt="" />
                            </div>
                            <p className="font-[700] text-[30px] text-[white]">{item.text}</p>
                        </div>
                        <button
                            className="globalButton rounded-[15px] bg-[#CBEDD5] text-[black] text-[24px] font-[700]"
                            onClick={()=> navigate('/trialSession')}
                        >حجز حصة تجريبية</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CoursesSection
