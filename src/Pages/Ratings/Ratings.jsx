
import EgazatSection from '../../Components/Egazat/EgazatSection'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';



const Ratings = () => {


    const [formData, setFormData] = useState({
        name: '',
        comment: '',
    });

    const [comments, setComments] = useState([]); 
    const [visibleComments, setVisibleComments] = useState(3);      



    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/comments');
                if (response.data.status === 'success') {
                    setComments(response.data.data); 
                } else {
                    console.error('Error fetching comments:', response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchComments();
    }, []); 


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.comment) {
            alert('يرجى ملء جميع الحقول.');
            return;
        }
        try {
            const response = await axios.post(
                'https://quran.codecraft1.com/api/comments/store',
                formData
            );
            console.log('Response:', response.data);
            alert('تم إرسال التعليق بنجاح!');
            setFormData({ name: '', comment: '' });
        } catch (error) {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال التعليق.');
        }
    };



    // Function to Show More
    const loadMoreComments = () => {
        setVisibleComments(visibleComments + 2);
    };



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

            <div className='comments my-10'>
                <h4 className="globalMain-header text-[26px] md:text-[34px] font-[700]">اكتب تعليقك هنا</h4>
                <div className="box py-10 mt-10 bg-[--main-bgLight-color] flex items-center justify-center gap-5 flex-col rounded-lg ">
                    <form className="inputs w-[100%] px-3 md:px-10 flex flex-col items-center gap-5" onSubmit={handleSubmit}>
                        <input 
                            className="w-[100%] p-3 rounded-md border-[1px] border-[--main-dark-color] outline-0 placeholder-gray-500 placeholder:text-[20px]" 
                            type='text' 
                            name='name' 
                            placeholder='اسم المستخدم'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            className="w-[100%] p-3 rounded-md border-[1px] border-[--main-dark-color] outline-0 placeholder-gray-500 placeholder:text-[20px]" 
                            type='text' 
                            name='comment' 
                            placeholder='التعليق الخاص به'
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit' className="globalButton w-[200px] text-[22px] font-[700] mt-5">إرسال</button>
                    </form>
                </div>
            </div>



            <div className="opinion my-10 md:my-20 flex flex-col items-center w-full">
                <h4 className="globalMain-header text-[26px] md:text-[34px] font-[700]">آراء أولياء الامور والطلاب</h4>
                <div className="allOpinio w-full flex flex-col gap-3 mt-10">
                    {comments.slice(0, visibleComments).map((item , index) => (
                        <div key={index} className="box w-full p-2 md:p-5 rounded-lg bg-[--main-bgLight-color] flex flex-col gap-3">
                            <h4 className="text-[20px] md:text-[24px] font-[600]">{item.name}</h4>
                            <div className="flex  justify-between gap-5">
                                <p className="text-[16px] md:text-[20px] break-words overflow-hidden text-ellipsis">{item.comment}</p>
                                <div className="date flex items-center gap-3">
                                    <span className="text-[10px] md:text-[14px]">{new Date(item.created_at).toLocaleTimeString()}</span>
                                    <span className="text-[10px] md:text-[14px]">{new Date(item.created_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    {/* show More */}
                    {visibleComments < comments.length && (
                        <button onClick={loadMoreComments} className="globalButton w-[200px] text-[22px] font-[700] mt-5">
                            عرض المزيد
                        </button>
                    )}
            </div>

            <EgazatSection/>

        </div>
    )
}

export default Ratings


























