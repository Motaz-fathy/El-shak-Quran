import shoppingCart from '../../assets/images/general/shoppingCart.png'
import { useContext } from 'react'
import EasySteps from '../../Components/EasySteps/EasySteps'
import { useNavigate } from 'react-router-dom'
import { CartStore } from '../../Context/CartContext.API'




const ShoppingCart = () => {


    const { calculateTotalPrice , cartItem} = useContext(CartStore)


    const Navigate = useNavigate()


    return (
        <div className='m-1 my-5 sm:m-10'>

            <div className="header flex  gap-5 sm:gap-10">
                <div className="icon  flex items-center flex-col ">
                    <div className="image bg-[--main-bgLight-color] rounded-[50%] w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] flex items-center justify-center">
                        <img className="w-[150%]" src={shoppingCart} alt="" />
                    </div>
                    <p className="my-1 sm:my-3 font-[600] text-[16px] sm:text-[22px] text-[--main-dark-color] border-b-2 border-[--main-border-color]">السلة</p>
                </div>
                <p className="text-[24px]  md:text-[30px] text-[--main-dark-color] mt-4">الكورسات التي تم اختيارها </p>
            </div>

            <div className="contentItems m-0 mt-3 lg:m-10 flex flex-wrap justify-between items-end">
                {cartItem.map((item , index)=>(
                    <div className="box w-[48%] lg:w-[32%] flex items-center flex-col gap-1 md:gap-2 mb-[40px] " key={index}>
                        <img  className="w-full h-[200px] md:h-[300px]" src={`https://quran.codecraft1.com/storage/${item.image}`} alt="image course" />
                        {/* <img src={immm} alt="" /> */}
                        <h4 className="font-[700] text-[20px] md:text-[24px]">{item.name}</h4>
                        <p className="font-[700]">{item.price}</p>
                    </div>
                ))}
            </div>

            <div className="buy  m-0  m:lg-20 flex items-center justify-between w-full lg:w-[50%]  mb-10">
                <div className="total">
                    <h4 className="font-[700] text-[22px] lg:text-[36px] text-[--main-dark-color] font-sans">المجموع</h4>
                    <h6 className="font-[700] text-[22px] lg:text-[36px]">{calculateTotalPrice(cartItem)} $</h6>
                </div>
                <button className="globalButton text-[22px] lg:text-[36px]">اجراء الدفع</button>
            </div>

            <EasySteps/>


            <div className="w-[fit-content] my-10 mx-[auto]">
                <button  onClick={()=> Navigate("/pricingpage")} className='globalButton text-[22px]'>جميع خطط التسعير</button>
            </div>

        </div>
    )
}

export default ShoppingCart
