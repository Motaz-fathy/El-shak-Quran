import 'animate.css';
import arrow from '../../assets/images/general/arrow.png';
import planImg from '../../assets/images/general/planImg.png'
// import './plan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Plan = () => {
  const navigate = useNavigate(); 
  const handleClick = () => {
    navigate('/subsriptionform'); 
  };



  return (
    <div className="py-10 flex justify-between items-center flex-col  ">

      <div className="head mb-7">
        <h3 className="globalMain-header text-sm md:text-xl">أختر خطة الدراسة الخاصة بك</h3>
      </div>

      <div className="flex flex-col gap-y-4 sm:flex-row gap-36 justify-between items-center">

        <div className=''>
          <img className='w-[250px] md:w-64' src={planImg} alt="" />
        </div>
        <div className='flex flex-col gap-2 items-start justify-start'>

          <div className='flex items-center justify-center'>
            <span className='ml-2 p-1 w-5 md:w-7 h-5 md:h-7 border-2   border-black rounded-full flex items-center justify-center'>
              <FontAwesomeIcon className='text-[10px] md:text-[14px]' icon={faCheck} style={{ color: "#000000", }} />
            </span>
            <p className='font-[700] text-[16px] md:text-[20px]'>
              جودة عالية ورسوم منخفضة
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <span className='ml-2 p-1 w-5 md:w-7 h-5 md:h-7 border-2 border-black rounded-full flex items-center justify-center'>
              <FontAwesomeIcon className='text-[10px] md:text-[14px]' icon={faCheck} style={{ color: "#000000", }} />
            </span>
            <p className='font-[700] text-[16px] md:text-[20px]'>
              خصم يصل الى 20%
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <span className='ml-2 p-1 w-5 md:w-7 h-5 md:h-7 border-2 border-black rounded-full flex items-center justify-center'>
              <FontAwesomeIcon className='text-[10px] md:text-[14px]' icon={faCheck} style={{ color: "#000000", }} />
            </span>
            <p className='font-[700] text-[16px] md:text-[20px]'>
              8 دولارات بدلاً من 10 دولارات فى الساعة
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <span className='ml-2 p-1 w-5 md:w-7 h-5 md:h-7 border-2 border-black rounded-full flex items-center justify-center'>
              <FontAwesomeIcon className='text-[10px] md:text-[14px]' icon={faCheck} style={{ color: "#000000", }} />
            </span>
            <p className='font-[700] text-[16px] md:text-[20px]'>
              ابتداءً من 40$ شهرياً
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <button className='globalButton text-[32]'
            onClick={handleClick} 
          >جميع خطط التسعير</button>
          <img
            style={{ animationDuration: '28s' }}
            className='w-16 md:w-20 mt-2 ml-10 animate_animated animateshakeY animate_infinite'
            src={arrow} alt="arrowPHoto" />
        </div>
      </div>
    </div>
  )
}
export default Plan