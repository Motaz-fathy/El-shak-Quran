
import { useContext, useEffect, useState } from 'react';
import shoppingCart from '../../assets/images/general/shoppingCart.png';
import EasySteps from '../../Components/EasySteps/EasySteps';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { authContext } from '../../Context/authContext/authContext';

const ShoppingCart = () => {
    const { token } = useContext(authContext); 
    const [cartItem, setCartItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0); 
    const Navigate = useNavigate();

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get('https://quran.codecraft1.com/api/carts', {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                });

                const allItems = response.data.data;
                const total = response.data.total_price; 

                const formattedCartItems = allItems.map(item => ({
                    id: item.id,
                    name: item.course.name,
                    image: `https://quran.codecraft1.com/public/${item.course.image}`,
                    price: item.plan.price,
                }));

                setCartItem(formattedCartItems);
                setTotalPrice(total);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchCartData();
        } else {
            setLoading(false);
        }
    }, [token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!cartItem.length) {
        return <p>السلة فارغة</p>;
    }

    return (
        <div className='m-1 my-5 sm:m-10'>
            <div className="header flex gap-5 sm:gap-10">
                <div className="icon flex items-center flex-col">
                    <div className="image bg-[--main-bgLight-color] rounded-[50%] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center">
                        <img className="w-[150%]" src={shoppingCart} alt="" />
                    </div>
                    <p className="my-1 sm:my-3 font-[600] text-[16px] sm:text-[22px] text-[--main-dark-color] border-b-2 border-[--main-border-color]">السلة</p>
                </div>
                <p className="text-[24px] md:text-[30px] text-[--main-dark-color] mt-4">الكورسات التي تم اختيارها</p>
            </div>

            <div className="contentItems m-0 mt-3 lg:m-10 flex flex-wrap justify-between items-end">
                {cartItem.map((item, index) => (
                    <div className="box w-[48%] lg:w-[32%] flex items-center flex-col gap-1 md:gap-2 mb-[40px]" key={index}>
                        <img className="w-full h-[200px] md:h-[300px] rounded-lg" src={item.image} alt="image course" />
                        <h4 className="font-[500] md:font-[700] text-[14px] md:text-[24px]">{item.name}</h4>
                        <p className="font-[500] md:font-[700] text-[14px] md:text-[22px]">{item.price} $</p>
                    </div>
                ))}
            </div>

            <div className="buy m-0 m:lg-20 flex items-center justify-between w-full lg:w-[55%] mb-10">
                <div className="total">
                    <h4 className="font-[700] text-[22px] lg:text-[36px] text-[--main-dark-color] font-sans">المجموع</h4>
                    <h6 className="font-[700] text-[22px] lg:text-[36px]">$ {totalPrice.toFixed(2)}</h6>
                </div>
                <button className="globalButton py-2 text-[22px] lg:text-[28px]">اجراء الدفع</button>
            </div>

            <EasySteps />

            <div className="w-[fit-content] my-10 mx-[auto]">
                <button onClick={() => Navigate("/pricingpage")} className='globalButton text-[22px]'>جميع خطط التسعير</button>
            </div>
        </div>
    );
};

export default ShoppingCart;
