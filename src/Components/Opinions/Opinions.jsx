

// import './opinions.css'
// import { Rating } from '@mui/material'
// import person from '../../assets/images/home/person.png'

// const Opinions = () => {

//     const data = [ 
//         {
//             img :person ,
//             name : "ياسر",
//             comment : "الكورس فاجر",
//             rating : 4 ,
//             date : "12/11/2024",
//             time: "12:25 pm"
//         },
//         {
//             img :person ,
//             name : "مصطفي ",
//             comment : "الكورس فاجر",
//             rating : 4 ,
//             date : "12/11/2024",
//             time: "12:25 pm"
//         },
//         {
//             img :person ,
//             name : "حمدي",
//             comment : "الكورس فاجر",
//             rating : 4 ,
//             date : "12/11/2024",
//             time: "12:25 pm"
//         },
//         {
//             img :person ,
//             name : "عمر",
//             comment : "الكورس  فاجر",
//             rating : 4 ,
//             date : "12/11/2024",
//             time: "12:25 pm"
//         },
//     ]



//     return (
//         <div className='opinions mt-20 mb-10'>
//             <h4 className='globalMain-header title text-[40px]'>آراء أولياء الامور والطلاب </h4>
//             <div className="bigBox flex flex-col gap-5 mt-10 ">
//                 { data.map((item , index)=> (
//                     <div className="box p-10  shadow-lg  rounded-[10px] bg-[--main-bgLight-color] flex items-center w-[100%]" key={index}>
//                         <img className='opinionsImg w-[150px] h-[150px] rounded-[50%] ml-10' src={item.img} alt="" />
//                         <div>
//                             <h6 className='font-[700] text-[34px]'>{item.name}</h6>
//                             <p className='comment text-[24px]'>{item.comment}</p>
//                         </div>
//                         <div className="rating  flex flex-1 gap-10 flex-col items-end justify-between  ">
//                             <Rating name="read-only" value={item.rating} readOnly />
//                             <div className="date flex items-center gap-7 ">
//                                 <div>
//                                     <span  className='text-[20px]'> </span>
//                                     <span>{item.date}</span>
//                                 </div>
//                                 <div>
//                                     <span className='text-[20px]'> </span>
//                                     <span>{item.time}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )) }
//             </div>
//         </div>
//     )
// }

// export default Opinions;





















import './opinions.css';
import { Rating } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Opinions = () => {
    const [data, setData] = useState([]);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/comments');
                setData(response.data.data); // Assuming the API returns data in `data.data`
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Format Date and Time
    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    };

    return (
        <div className="opinions mt-20 mb-10">
            <h4 className="globalMain-header title text-[40px]">آراء أولياء الامور والطلاب</h4>
            <div className="bigBox flex flex-col gap-5 mt-10">
                {data.map((item, index) => {
                    const { date, time } = formatDateTime(item.created_at);
                    return (
                        <div
                            className="box p-7 shadow-lg rounded-[10px] bg-[--main-bgLight-color] flex items-center w-[100%]"
                            key={index}
                        >
                            {/* User image */}
                            <img
                                className="opinionsImg w-[150px] h-[150px] rounded-[50%] ml-10"
                                src={item.user?.image || 'fallback-image-url'} // Add a fallback image if no user image
                                alt={item.user?.name || 'User'}
                            />
                            <div>
                                {/* User name */}
                                <h6 className="font-[700] text-[30px]">{item.name || 'مستخدم مجهول'}</h6>
                                {/* Comment */}
                                <p className="comment text-[20px]">{item.comment}</p>
                            </div>
                            <div className="rating flex flex-1 gap-10 flex-col items-end justify-between">
                                {/* Rating */}
                                <Rating name="read-only" value={item.rating_id || 0} readOnly />
                                {/* Date and Time */}
                                <div className="date flex items-center gap-5">
                                    <div>
                                        {/* <span className="text-[20px]">التاريخ: </span> */}
                                        <span>{date}</span>
                                    </div>
                                    <div className="w-[70px]">
                                        {/* <span className="text-[20px]">الوقت: </span> */}
                                        <span>{time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Opinions;
