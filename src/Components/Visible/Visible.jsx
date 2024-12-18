import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ph1 from '../../../src/assets/images/general/FoundEgaza.png'
import './visible.css'

const Visible = () => {  
  return (
    <div>
     <div
        className="flex items-center justify-end w-full my-8 relative"
        style={{ direction: "rtl" }}
      >
        <input
          type="text"
          placeholder="اكتب اسم القراءة"
          className="p-2 rounded-md border-2 bg-[#EAF8F4] w-36 md:w-80 pr-10 focus:outline-none "
          style={{
            borderColor: "var(--main-dark-color)", // تحديد لون الإطار باستخدام المتغير
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-green-700 left-28 md:left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
        />
      </div>

      <div className="flex flex-col gap-2 items-center justify-center mb-7 relative">
        <h3 className="font-semibold text-sm md:text-2xl text-[--main-green-color]">
          سورة الرحمن
        </h3>
        <video
          className="min-w-[320px] min-h-[50vh] border-[2px] border-[--main-green-color] rounded-md"
          src=""
          controls
        ></video>

        <FontAwesomeIcon
          className="text-[--main-light-color] absolute top-10 left-10"
          icon={faHeart}
        />
      </div>

      <div className="flex flex-col items-center justify-center font-bold bg-[--secound-bg-color] py-2">
        <h2 className="my-5 text-[26px] text-[--main-dark-color]">فيديوهات مقترحة</h2>

        <div className="flex items-center justify-center">

        <Swiper 
      slidesPerView={"auto"} loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,}}
      navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="custom-swiper px-[5px]"
      >
        <SwiperSlide className="cont px-[7px]"> 
         <img className="w-full" src={ph1} alt=""/> 
        </SwiperSlide>
        <SwiperSlide className="cont px-[7px]">  
        <img className="w-full" src={ph1} alt=""/> 
       </SwiperSlide>
        <SwiperSlide className="cont px-[7px]">
           <img className="w-full" src={ph1} alt=""/> 
        </SwiperSlide>

      </Swiper>

        </div>
      </div>

      <div className="flex justify-center items-center gap-x-2 gap-y-3">
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
        <div className="w-[33.3%] h-7 bg-white"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-200 relative h-40 border-[1px] border-[--main-green-color] rounded-md">
          <FontAwesomeIcon
            className="text-[--main-light-color] absolute top-10 left-10"
            icon={faHeart}
          />
        </div>
        <div className="bg-gray-200 relative h-40 border-[1px] border-[--main-green-color] rounded-md">
          <FontAwesomeIcon
            className="text-[--main-light-color] absolute top-10 left-10"
            icon={faHeart}
          />
        </div>
        <FontAwesomeIcon
          className="text-[--main-light-color] absolute top-10 left-10"
          icon={faHeart}
        />{" "}
        <div className="bg-gray-200 relative h-40 border-[1px] border-[--main-green-color] rounded-md">
          <FontAwesomeIcon
            className="text-[--main-light-color] absolute top-10 left-10"
            icon={faHeart}
          />
        </div>
        <FontAwesomeIcon
          className="text-[--main-light-color] absolute top-10 left-10"
          icon={faHeart}
        />{" "}
        <div className="bg-gray-200 relative h-40 border-[1px] border-[--main-green-color] rounded-md">
          <FontAwesomeIcon
            className="text-[--main-light-color] absolute top-10 left-10"
            icon={faHeart}
          />
        </div>
        <FontAwesomeIcon
          className="text-[--main-light-color] absolute top-10 left-10"
          icon={faHeart}
        />{" "}
      </div>
    </div>
  );
};

export default Visible;
