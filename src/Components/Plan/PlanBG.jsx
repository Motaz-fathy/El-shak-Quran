import "animate.css";
import arrow from "../../assets/images/general/arrow.png";
import planImg from "../../assets/images/general/planImg.png";
import "./plan.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Plan = () => {
  return (
    <div className="planBg py-10 flex justify-between items-center flex-col  bg-[--main-bgLight-color] ">
      <div className="head mb-7">
        <h3 className="globalMain-header text-[24px] lg:text-[30px]">
          أختر خطة الدراسة الخاصة بك
        </h3>
      </div>

      <div className="boxPlan flex flex-row w-[100%] gap-y-8 justify-around items-center flex-wrap">
        <div className="planBox">
          <img className="planBG w-40 md:w-52" src={planImg} alt="" />
        </div>
        <div className="flex flex-col gap-2 items-canter sm:items-start justify-start ">
          <div className="flex items-center justify-center">
            <span className="ml-2 p-1 w-7 h-7 border-2   border-black rounded-full flex items-center justify-center opacity-0 sm:opacity-100">
              <FontAwesomeIcon
                className="text-sm"
                icon={faCheck}
                style={{ color: "#000000" }}
              />
            </span>
            <p className="font-[700] text-[20px]">جودة عالية ورسوم منخفضة</p>
          </div>

          <div className="flex items-center justify-center">
            <span className="ml-2 p-1 w-7 h-7 border-2 border-black rounded-full flex items-center justify-center opacity-0 sm:opacity-100">
              <FontAwesomeIcon
                className="text-sm"
                icon={faCheck}
                style={{ color: "#000000" }}
              />
            </span>
            <p className="font-[700] text-[20px]">خصم يصل الى 20%</p>
          </div>

          <div className="flex items-center justify-center">
            <span className="ml-2 p-1 w-7 h-7 border-2 border-black rounded-full flex items-center justify-center opacity-0 sm:opacity-100">
              <FontAwesomeIcon
                className="text-sm"
                icon={faCheck}
                style={{ color: "#000000" }}
              />
            </span>
            <p className="font-[700] text-[20px]">
              8 دولارات بدلاً من 10 دولارات فى الساعة
            </p>
          </div>

          <div className="flex items-center justify-center">
            <span className="ml-2 p-1 w-7 h-7 border-2 border-black rounded-full flex items-center justify-center opacity-0 sm:opacity-100">
              <FontAwesomeIcon
                className="text-sm"
                icon={faCheck}
                style={{ color: "#000000" }}
              />
            </span>
            <p className="font-[700] text-[20px]">ابتداءً من 40$ شهرياً</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="globalButton text-[32]">جميع خطط التسعير</button>
          <img
            style={{ animationDuration: "28s" }}
            className="w-16 md:w-20 mt-2 ml-10 animate__animated animate__shakeY animate__infinite"
            src={arrow}
            alt="arrowPHoto"
          />
        </div>
      </div>
    </div>
  );
};
export default Plan;
