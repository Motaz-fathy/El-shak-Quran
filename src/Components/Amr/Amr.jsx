
import './amr.css'
import lab from '../../assets/images/home/lab.png'
import arrow from '../../assets/images/general/arrow.png'
import person from '../../assets/images/home/person.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useLocalizationContext from '../../Context/localizationContext/localizationContext'


const Amr = () => {
    const { isEnglish } = useLocalizationContext()
    const navigate = useNavigate()

    // Teacher List 
    const [vedio, setVedio] = useState([]);


    //     // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/videos');
setVedio(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);




    return (
        <div  className="amr  my-20  relative" >
            <div className="box flex flex-col lg:flex-row gap-10 justify-center">
                <div className="info w-full lg:w-1/3  text-[white] flex flex-col justify-start items-center p-5 bg-[--main-dark-color] rounded-[--md-border]  border-2 border-[#FF9D37]">
                    <img className='width-[60%]' src={person} alt="" />
                    <h4 className='name  text-[40px] font-[700] my-10'>الشيخ/ عمرو البدرى</h4>
                    <p className="text-[24px] font-[700] mb-10">درس رواية حفص عن عاصم</p>
                    <div className="groupButton  flex items-center gap-10">
                        <button
                            className="globalButton bg-[--main-bgLight-color] px-3 text-[black] text-[20px] font-[700]"
                            onClick={() => navigate('/pricingpage')}
                        >احجز الان</button>
                        <button className="globalButton bg-[--main-bgLight-color] px-3 text-[black] text-[20px] font-[700]">شاهد الفيديو المجانى</button>
                    </div>
                </div>

                {/* -------------------------- */}
                <div className="l w-full lg:w-2/4 relative">
                    <img className='amrImg ' src={lab} alt="" />
                    {vedio.map((item , index) => (
                        <div key={index} className="vedio w-[65%] h-[60%] lg:h-[50%] rounded-lg overflow-hidden cursor-pointer absolute top-[20%] left-[17%]">
                            <video 
                                className="w-[100%] h-[100%]" 
                                controls
                                src={`https://quran.codecraft1.com/public/${item.video}`}
                            ></video>
                        </div>
                    ))}
                </div>
                {/* -------------------------- */}

            </div>
            {/* {vedio.map((item , index) => (
                <div key={index} className="vedio max-w-[210px] h-[160px] md:h-[300px] md:max-w-[450px] bg-[red] absolute top-[72%] left-[24%] md:left-[16%] md:top-[25%] rounded-lg overflow-hidden cursor-pointer">
                    <video 
                        className="w-[100%] h-[100%]" 
                        controls
                        src={`https://quran.codecraft1.com/public/${item.video}`}
                    ></video>
                </div>
            ))} */}
            <img className='arrow absolute bottom-[-50px] left-[52%] w-[100px] md:w-[200px]' src={arrow} alt="" />
        </div>
    )
}

export default Amr
