import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import design1 from "../assets/images/general/design1.png"
import design2 from "../assets/images/general/design2.png"
import EgazatSection from '../Components/Egazat/EgazatSection';
// import disLike from '../assets/images/general/disLike.png';
import { useNavigate } from 'react-router-dom';



export default function EgazatPage() {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [cardsData, setCardsData] = useState([]);
    const navigate = useNavigate();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/novel');
                setCardsData(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <div className="mt-11 px-4 lg:px-20 relative" style={{ backgroundColor: 'var(--body-bg-color)' }}>
                {/* Background Images */}
                <img src={design1} alt="design1" className="absolute right-0 top-0 w-20 sm:w-28 lg:w-auto" />
                <img src={design2} alt="design2" className="absolute left-0 bottom-[40px] w-28 sm:w-40 lg:w-56" />

                {/* Search Bar */}
                <div className="flex justify-end my-6 lg:my-10">
                    <div className=" sm:w-[20%] md:w-[50%] lg:w-[30%] border-2 border-[--main-dark-color] rounded-[10px] overflow-hidden py-2 px-3 sm:py-1 sm:px-2 flex items-center gap-3">
                        <FontAwesomeIcon className="text-[--main-dark-color]" icon={faSearch} />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="اكتب اسم القراءة"
                            className="w-full bg-transparent border-none outline-none text-sm sm:text-base"
                        />
                    </div>
                </div>


                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8" style={{ direction: 'rtl' }}>
                    {cardsData
                        .filter((card) => card.read_name.toLowerCase().includes(searchTerm.toLowerCase()))
                        .map((card, index) => (
                            [<div
                                key={index}
                                className="p-6 lg:p-8 rounded-lg shadow-lg border border-green-300 relative"
                                style={{
                                    backgroundColor: 'var(--main-bgLight-color)',
                                    borderColor: 'var(--main-dark-color)',
                                }}
                            >
                                <h3 className="mb-4 text-lg font-bold text-black text-center lg:mb-8">{card.read_name}</h3>
                                <div className="flex flex-col gap-2 items-center gap-y-3">

                                    {card.novels.map((button, idx) => (
                                        <button
                                            key={idx}
                                            className="globalButton"
                                            onClick={() =>
                                                navigate(`/egazat/${idx}`, {
                                                    state: { cardread: card.read_name, buttonName: button.name, description: button.description },
                                                })
                                            }
                                            style={{ width: '200px', padding: '10px 0px' }}
                                        >
                                            {button.name}
                                        </button>
                                    ))}
                                    {/* Add To Fav Btn  */}
                                    {/* <img className="absolute top-4 left-5 cursor-pointer w-6" src={disLike} alt="" onClick={() => HandelAddToFav(card.id)} /> */}
                                </div>
                            </div>]
                        ))}
                </div>

                {/* Additional Section */}
                <EgazatSection />
            </div>

        </>
    );

}