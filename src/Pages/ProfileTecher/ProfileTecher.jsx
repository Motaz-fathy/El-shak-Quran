
// import { Rating } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import EasySteps from "../../Components/EasySteps/EasySteps";
import Plan from './../../Components/Plan/PlanBG';

const ProfileTecher = () => {
    const location = useLocation();
    const navigate = useNavigate();

  // استلام بيانات المعلم من useLocation
    const teacherData = location.state;

  // إذا لم يتم تمرير بيانات
    if (!teacherData) {
        return (
        <div className="p-8">
            <h2 className="text-[32px] font-[700] text-red-500">
            عذرًا، لم يتم العثور على تفاصيل المعلم!
            </h2>
            <button
            className="globalButton mt-4"
            onClick={() => navigate("/")}
            >
            العودة إلى الصفحة الرئيسية
            </button>
        </div>
        );
    }

    return (
        <div>

            <div className="info flex items-center gap-20 mb-10 p-10 bg-[--main-bgLight-color] mt-3">
                <div className="image flex items-center flex-col gap-5">
                    {/* <img className="w-[300px] rounded-lg bg-[#919090]" src={teacherData.img} alt="" /> */}
                    <img className="w-[300px] rounded-lg bg-[#919090]" src={teacherData.image} alt={teacherData.image} />
                    <h4 className="text-[26px] pb-2 font-[600] border-b-[1px] border-b-[--main-border-color]">{`الشيخ / ${teacherData.name}`}</h4>
                </div>
                <div className="details">
                    {/* <p className="text-[20px] text-[--main-green-color]">{teacherData.ex} سنين من الخبرة</p> */}
                    <p className="text-[20px] text-[--main-green-color]">{teacherData.experience} سنين من الخبرة</p>
                    {/* <Rating name="read-only" value={teacherData.rate} readOnly /> */}
                    {/* <Rating name="read-only" value={teacherData.rating} readOnly /> */}
                    {/* <p className="my-4 text-[20px]" >{teacherData.course}</p> */}
                    <p className="my-4 text-[20px]" >{teacherData.title}</p>
                    {/* <p className="text-[18px] w-[50%]">{teacherData.des}</p> */}
                    <p className="text-[18px] w-[50%]">{teacherData.description}</p>
                </div>
            </div>

            <EasySteps/>

            <div className="text-center my-10">
                <button className="globalButton ">جميع خطط التسعير</button>
            </div>

            <Plan/>

        </div>
    );
};

export default ProfileTecher;
