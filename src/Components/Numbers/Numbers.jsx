
// import './number.css'
// import city from '../../assets/images/home/city.png'
// import shehk from '../../assets/images/home/shehk.png'
// import student from '../../assets/images/home/student.png'
// import family from '../../assets/images/home/family.png'


// const Numbers = () => {


//     const dataNumber = [
//         {img : student , num : "+0" , text : "عدد الطلاب" },
//         {img : family , num : "+0" , text : "عدد العائلات" },
//         {img : city , num : "+0" , text : "البلدان" },
//         {img : shehk , num : "+0" , text : "الشيوخ" },
//     ]


//     return (
//         <div  className='number flex px-40 justify-between my-20'>
//             {dataNumber.map((item , index) => (
//                 <div key={index} className="box flex flex-col gap-3 items-center " >
//                     <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
//                         <img src={item.img} alt="" />
//                     </div>
//                     <h4 className="font-[600] text-[42px] text-[--main-light-color]">{item.num}</h4>
//                     <p className="font-[700] text-[20px]">{item.text}</p>
//                 </div>
//             ))}
            
//         </div>
//     )
// }

// export default Numbers








import { useState, useEffect } from 'react';
import './number.css';
import axios from 'axios';

import city from '../../assets/images/home/city.png';
import shehk from '../../assets/images/home/shehk.png';
import student from '../../assets/images/home/student.png';
import family from '../../assets/images/home/family.png';

const Numbers = () => {
    // حالة لحفظ البيانات
    const [dataNumber, setDataNumber] = useState([
        { img: student, num: "+0", text: "عدد الطلاب" },
        { img: family, num: "+0", text: "عدد العائلات" },
        { img: city, num: "+0", text: "البلدان" },
        { img: shehk, num: "+0", text: "الشيوخ" },
    ]);

    // استخدام useEffect لإحضار البيانات
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/home');
                const data = response.data.data;

                // تحديث البيانات بناءً على الاستجابة
                setDataNumber([
                    { img: student, num: `+${data.users.count}`, text: "عدد الطلاب" },
                    { img: family, num: `+${data.articles_count.count}`, text: "عدد العائلات" },
                    { img: city, num: `+${data.courses_count.count}`, text: "البلدان" },
                    { img: shehk, num: `+${data.sheikhs_count.count}`, text: "الشيوخ" },
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='number flex px-40 justify-between my-20'>
            {dataNumber.map((item, index) => (
                <div key={index} className="box flex flex-col gap-3 items-center">
                    <div className="image border-2 border-[--main-dark-color] rounded-[50%] w-[80px] h-[80px] flex items-center justify-center">
                        <img src={item.img} alt="" />
                    </div>
                    <h4 className="font-[600] text-[42px] text-[--main-light-color]">{item.num}</h4>
                    <p className="font-[700] text-[20px]">{item.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Numbers;
