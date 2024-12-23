

import './opinions.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Opinions = () => {

    const [data, setData] = useState([]);
    const [visibleComments, setVisibleComments] = useState(3);      


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

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);
        return {
            date: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
    };


    // Function to Show More
    const loadMoreComments = () => {
        setVisibleComments(visibleComments + 2);
    };

    return (
        <div className="opinions mt-20 mb-10">
            <h4 className="globalMain-header title text-[40px]">آراء أولياء الامور والطلاب</h4>
            <div className="bigBox flex flex-col gap-5 mt-10">
                {data.map((item, index) => {
                    const { date, time } = formatDateTime(item.created_at);
                    return (
                        <div className="box p-8 shadow-lg rounded-[10px] bg-[--main-bgLight-color] flex items-center w-[100%]" key={index}>
                            <div>
                                {/* User name */}
                                <h6 className="font-[500] text-[24px] mb-3">{item.name || 'مستخدم مجهول'}</h6>
                                {/* Comment */}
                                <p className="comment text-[16px]">{item.comment}</p>
                            </div>
                            <div className="rating flex flex-1 gap-10 flex-col items-end justify-between">
                                {/* Date and Time */}
                                <div className="date flex items-center flex-col md:flex-row gap-1 md:gap-5 ">
                                    <div className='text-[10px] md:text-[14px]'>
                                        <span>{date}</span>
                                    </div>
                                    <div className='text-[10px] md:text-[14px]'>
                                        <span>{time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {/* show More */}
                {visibleComments < data.length && (
                        <button onClick={loadMoreComments} className="globalButton w-[200px] text-[20px] font-[600] mt-1">
                            عرض المزيد
                        </button>
                    )}
            </div>
        </div>
    );
};

export default Opinions;
