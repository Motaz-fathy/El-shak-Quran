
import img_1 from '../../assets/images/home/img_1.png'
import img_2 from '../../assets/images/home/img_2.png'
import img_3 from '../../assets/images/home/img_3.png'
import img_4 from '../../assets/images/home/img_4.png'
import img_5 from '../../assets/images/home/img_5.png'
import img_6 from '../../assets/images/home/img_6.png'
import useLocalization from '../../hooks/useTranslation'
import './whyUs.css'

const WhyUs = () => {

    const content = useLocalization("global_recognition")

    const data = [
        {
            img: img_1,
            title: content("0.title"),
            text: content("0.text"),
        },
        {
            img: img_2,
            title: content("1.title"),
            text: content("1.text"),
        },
        {
            img: img_3,
            title: content("2.title"),
            text: content("2.text"),
        },
        {
            img: img_4,
            title: content("3.title"),
            text: content("3.text"),
        },
        {
            img: img_5,
            title: content("4.title"),
            text: content("4.text"),
        },
        {
            img: img_6,
            title: content("5.title"),
            text: content("5.text"),
        },
    ]


    return (
        <div className='whyUs w-[100%]  my-20 bg-[--main-bgLight-color] py-10 '>
            <h2 className='globalMain-header mb-[40px] text-[40px]'> {content("6")}</h2>
            <div className="bigBox flex flex-wrap justify-between text-center">
                {data.map((item, index) => (
                    <div className="box  w-[33%]  flex items-center flex-col mb-10" key={index}>
                        <img src={item.img} alt="" />
                        <h6 className='font-[800] text-[--main-dark-color] text-[20px] my-3 '>{item.title}</h6>
                        <p className="font-[700] text-[18px] w-[60%] text-center text-[#54595F]">{item.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default WhyUs
