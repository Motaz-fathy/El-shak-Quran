
// import React from 'react'
import pepole from '../../assets/images/general/people.png'
import design1 from '../../assets/images/general/design1.png'
import disLike from '../../assets/images/general/disLike.png'
// import design3 from '../../assets/images/general/design3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';



const AlShehk = () => {


     // State For Search input
    const [searchText, setSearchText] = useState('');

    // Teacher List 
    const [teachers, setTeachers] = useState([]);

    // navigate to Profile Teacher Page
    const navigate = useNavigate()

//     // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/infoelshikhs');
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

//     // Filter data based on search input
    const filteredData = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchText.toLowerCase())
    );




    const dataWhy = [ 
        {text : "مدربين تدريبا جيدا" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "استخدام أدوات التدريس المتقدمة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "طرق التدريس المتقدمة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "إجازة معتمدة" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "حملة الدبلوم" , pargraph : "مصطفي ياسر حمدي"} ,
        {text : "عملية توظيف مدرس صارم" , pargraph : "مصطفي ياسر حمدي"} ,
    ]


    const dataQuestion = [
        { question : "ما الذي يميز معلمي القرآن الخاصين عن غيرهم؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
        { question : "هل سيستوعب معلمو القرآن الطلاب من جميع الأعمار والمواقع؟" , ansswer : "مصطفي سار حمدي" },
    ]



    return (
        <div className='p-2 lg:p-8 '>

            <div className="hero pb-20  bg-[--main-bgLight-color] mt-4 mb-10 flex  justify-between items-center py-5 md:py-20 px-[10px] md:px-[50px] lg:px-[100px]  relative rounded-md">
                <div className="text ">
                    <h4 className="text-[20px] md:text-[30px] text-[--main-dark-color] w-[90%] ">موقع ( .......... ) لدروس القرآن واللغة العربية والإسلامية عبر الانترنت</h4>
                    <div className='my-5 md:my-10 '>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]"> عربي مصري أصلي</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">إجازة معتمدة</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">تخرج جامعة الأزهر</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">مؤهلون وذوي خبرة</span>
                        </div>
                        <div className="box">
                            <span className="font-[900]">- </span>
                            <span className="text-[24px]">الإنجليزية بطلاقة</span>
                        </div>
                    </div>
                </div>
                <img className="w-[30%] hidden md:block " src={pepole} alt="" />
                <button className='globalButton absolute bottom-5 left-[30%]  md:left-[50%] text-[24px]'>ابدأ تجربة مجانية</button>
                <img className="absolute top-[-30px]  left-[-70px] md:left-[-50px] " src={design1} alt="" />
            </div>


            <div className="text flex items-center flex-col px-3 lg:px-40 text-center gap-1 md:gap mb-10  md:mb-20">
                <h3  className='text-[28px] md:text-[40px]  text-[--main-dark-color] font-[500]'>معلمو القرآن المصريون المؤهلون</h3>
                <p className="text-[16px] md:text-[18px]  text-center">لدينا معلمين ومعلمات القرآن يتم تدريبهم جيدا بما يكفي لتعليم جميع الأعمار والمستويات من الطلاب و مساعدة غير الناطقين بها على القراءةوحفظ القرآن بشكل صحيح مع قواعد التجويد، لذلك يقدمون دعمهم الكامل في مساعدة الطلاب بطريقة بسيطة وسهلة.
                    جميع مدرسينا لديهم شهادات فى تلاوة القرآن الكريم وحفظ اللغة العربية, والدراسات الإسلامية. المعلمون هم القدوة للطلاب لمساعدتهم على التعلم.
                    لذلك ، نفضل اختيار المعلمين المعتمدين والمؤهلين وذوي الخبرة في التدريس عبر الإنترنت.
                </p>
            </div>


            <div className="w-[60%] md:w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden mr-auto my-5 md:my-10  py-2 px-3 flex items-center gap-3">
                <FontAwesomeIcon  className="text-[--main-dark-color]" icon={faSearch} />
                <input 
                    className="w-[90%] bg-[transparent] border-[none] outline-[0]" 
                    type="text" placeholder="اكتب اسم المعلم"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} 
                />
            </div>



            <div className="teachersBox ">
                    {filteredData.map((teacher, index) => (
                        <div className="box bg-[--main-bgLight-color] flex items-center flex-col md:flex-row p-10 rounded-lg mb-10 shadow-lg relative" key={index}>
                            {/* Teacher Image */}
                            <img
                                className="w-[120px] h-[120px] rounded-[50%] mx-5 object-cover border-4 border-[--main-dark-color]"
                                src={`https://quran.codecraft1.com/public/${teacher.image}`}
                                alt={teacher.name}
                            />
                            {/* Teacher Info */}
                            <div className="info flex-1 flex flex-col items-center md:items-start gap-2">
                                <h6 className="text-[26px] font-[500]">الشيخ / {teacher.name}</h6>
                                <p className="text-[20px] text-[#62B6B7]">{teacher.experience_years}</p>
                                <Rating name="read-only" value={teacher.rating} readOnly />
                                <p className="my-4 text-[20px]">{teacher.specialization}</p>
                                <p className="text-[18px] w-[90%] md:w-[50%] text-center md:text-start">
                                    {teacher.description}
                                </p>
                            </div>
                            <button
                                className='globalButton rounded-md flex-2 mt-5 md:mt-0'
                                onClick={() => navigate(`/ProfileTeacher/${teacher.id}`, { state: teacher })}
                            >
                                عرض ملف المعلم
                            </button>
                            <img className="absolute top-4 left-5 cursor-pointer" src={disLike} alt="" />
                        </div>
                    ))}
                </div>


            <div className="whyChose">
                <h4 className="text-[--main-green-color] text-[22px] md:text-[30px] font-[700] text-center pb-3">لماذا تختار مدرسي القرآن في موقع .... ؟</h4>
                <hr  className='border-0 h-[2px] bg-[--main-border-color] w-[20%] ml-[auto] mr-[auto] '/>
                <div className="content flex justify-between md:justify-around mt-5 md:mt-10">
                    <div className="text ">
                        { dataWhy.map((item , index) => (
                            <details key={index}>
                                <summary className="w-[390px] md:w-[300px] p-2 mb-3 rounded-md text-[18px] font-[600] shadow-lg cursor-pointer bg-[--main-bgLight-color] text-[--main-green-color] border-[1px] border-[--main-border-color] border-r-[7px] border-r-[--main-border-color]">
                                    {item.text}
                                </summary>
                                <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.pargraph}</p>
                            </details>
                        )) }
                    </div>
                    <div className="image bg-[#333] hidden md:block w-[30%]  h-[350px] rounded-md overflow-hidden">
                        <img className="w-full h-full" src={pepole} alt="" />
                    </div>
                </div>

            </div>


            <div className="repeatQuestion flex items-center flex-col md:flex-row gap-3 md:gap-0 justify-around mt-8 md:mt-20 mb-10">
                <h4 className="text-[28px] md:text-[32px]   font-[700] text-[--main-green-color] border-b-2 border-[--main-border-color] "> الأسئلة المتكررة؟</h4>
                <div className="question rounded-md ">
                    { dataQuestion.map((item , index) =>(
                        <details key={index}>
                            <summary className="w-[400px] p-4   text-[16px] font-[400] shadow-lg cursor-pointer bg-[--main-bgLight-color]  border-b-[1px] border-b-[--main-green-color]">{item.question}</summary>
                            <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">{item.ansswer}</p>
                        </details>
                    )) }
                </div>
            </div>


        </div>
    )
}

export default AlShehk

















