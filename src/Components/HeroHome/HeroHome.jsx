// import { useEffect, useState } from "react";
// import sliderImg from "../../assets/images/home/heroImg.png";
// import border from "../../assets/images/home/border.png";
// import stekar from "../../assets/images/home/stekar.png";
// import "./heroHome.css";



// const HeroHome = () => {


// //  Data of Slider:-----------------------------------------
//   const data = [
//     {
//       title: "قراءة نافع",
//       subTitleOne: "1. رواية قالون عن نافع:",
//       subTitleTwo: "1. رواية  قالون عن نافع:",
//       one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       img: sliderImg,
//       imgStekar: stekar,
//     },
//     {
//       title: "قراءة حفص ",
//       subTitleOne: "1. رواية قالون عن نافع:",
//       subTitleTwo: "1. رواية  قالون عن نافع:",
//       one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       img: sliderImg,
//       imgStekar: stekar,
//     },
//     {
//       title: "قراءة حفص ",
//       subTitleOne: "1. رواية قالون عن نافع:",
//       subTitleTwo: "1. رواية  قالون عن نافع:",
//       one1: "- : قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       one4: "- : قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       img: sliderImg,
//       imgStekar: stekar,
//     },
//     {
//       title: "قراءة حفص ",
//       subTitleOne: "1. رواية قالون عن نافع:",
//       subTitleTwo: "1. رواية  قالون عن نافع:",
//       one1: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two2: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three3: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       one4: "- الإمالة: قالون يميل قليلًا في بعض الكلمات، لكنه أقل استخدامًا للإمالة مقارنة بورش.",
//       two5: "- المد: يتبع في روايته أحكام المد الطبيعي والمد المنفصل.",
//       three6: "- الإظهار والإدغام: قالون يراعي الإدغام بغنة في بعض المواضع دون غيرها، وفقًا لقواعد محددة.",
//       img: sliderImg,
//       imgStekar: stekar,
//     },
//   ]


//   // Slider :-----------------------------------------
//   const [currentIndex, setCurrentIndex] = useState(0); 

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); 
//     }, 2000);                
//     return () => clearInterval(interval);
//   }, [data.length]);




//   return (
//     <div className="heroHome">
//       <div className="slider flex "
//       style={{ transform: `translateX(${currentIndex * - 100}%)`, }}
//       >
//         {data.map((item, index) => (
//           <div className="box" key={index}>
//             <h1 className="title">{item.title}</h1>
//             <img className="sliderImg" src={item.img} alt="" />
//             <div className="subBox one">
//               <h5>{item.subTitleOne}</h5>
//               <div className="list">
//                 <span>{item.one1}</span>
//                 <span>{item.two2}</span>
//                 <span>{item.three3}</span>
//                 <button>قراءة المزيد</button>
//               </div>
//             </div>
//             <div className="subBox  two">
//               <h5>{item.subTitleTwo}</h5>
//               <div className="list">
//                 <p>{item.one1}</p>
//                 <p>{item.two2}</p>
//                 <p>{item.three3}</p>
//                 <button>قراءة المزيد</button>
//               </div>
//             </div>
//             <img className="stekar" src={item.imgStekar} alt="" />
//             <img className="stekarTop" src={item.imgStekar} alt="" />
//             <img className="borderImg" src={border} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroHome;


































import { useEffect, useState } from "react";
import axios from "axios";
import sliderImg from "../../assets/images/home/heroImg.png";
import border from "../../assets/images/home/lastBorder1.png";
import stekar from '../../assets/images/home/stekar.png'
// import "./heroHome.css";

const HeroHome = () => {
  const [data, setData] = useState([]);

  // -----------------------------------------------------------------
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 2000); 
    
        return () => clearInterval(interval); // Cleanup on component unmount
      }, [data.length]);



  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://quran.codecraft1.com/api/novel");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  
  return (
    <div className="heroHome my-10 min-w-[100%] overflow-hidden relative w-full">
      <div
        className="slider flex items-center  flex-row-reverse transition-transform duration-500 ease-in-out w-full" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <div className="box h-[520px] lg:h-[580px]  bg-[--main-bgLight-color] rounded-lg  min-w-[100%]  flex flex-shrink-0 items-center justify-center gap-10 flex-col pb-40 lg:pb-0 relative" key={index}>


            <div className="title relative">
              <h1 className="text-[28px] lg:text-[40px] font-[700] text-[--main-dark-color]">{item.read_name}</h1>
              <img className="borderImg min-w-[150px] lg:min-w-[230px] absolute top-[-60%] left-[-35%] lg:left-[-35%] lg:top-[-60%]" src={border} alt="Border" />
            </div>


            <div className="content flex justify-between w-[100%] px-2 md:px-20">
            
              <div className="twoBox w-[60%] relative">
                <div className="subBox one  text-[white] w-[400px] md:w-[600px] lg:w-[300px] flex items-center gap-2 flex-col">
                  <h5 className="bg-[--main-green-color] w-[fit-content]  px-3 border-2 border-[--main-border-color] rounded-lg">{item.novels[0]?.name || "اسم الرواية غير متاح"}</h5>
                  <div className="list p-5 bg-[--main-green-color] w-[fit-content]  px-3 border-2 border-[--main-border-color] rounded-lg flex items-center flex-col gap-2">
                    <span>{item.novels[0]?.description || "الوصف غير متاح"}</span>
                    <button className="bg-[--main-bgLight-color] text-[#111] rounded-md border-2 border-[--main-border-color] text-[16px] px-5">قراءة المزيد</button>
                  </div>
                </div>

                <div className="subBox two text-[white] w-[400px] md:w-[600px] lg:w-[300px] flex items-center gap-2 flex-col absolute bottom-[-105%] md:bottom-[-120%] right-[0] md:right-[0] lg:bottom-[0] lg:right-[40%]">
                  <h5  className="bg-[--main-green-color] w-[fit-content]  px-3 border-2 border-[--main-border-color] rounded-lg" >{item.novels[1]?.name || "اسم الرواية غير متاح"}</h5>
                  <div className="list  p-5 bg-[--main-green-color] w-[fit-content]  px-3 border-2 border-[--main-border-color] rounded-lg flex items-center flex-col gap-2">
                    <p>{item.novels[1]?.description || "الوصف غير متاح"}</p>
                    <button className="bg-[--main-bgLight-color] text-[#111] rounded-md border-2 border-[--main-border-color] text-[16px] px-5 flex items-center flex-col gap-2">قراءة المزيد</button>
                  </div>
                </div>
              </div>
            
              <div className="image w-[35%] hidden lg:block">
                <img className="sliderImg w-[100%] he-[100%]" src={sliderImg} alt="Slider" />
              </div>

            </div>

            <img className='absolute bottom-[10%] right-[10%] w-[100px] hidden lg:block' src={stekar} alt="" />
            <img className='absolute top-[5%] right-[10%] w-[40px] block lg:hidden' src={stekar} alt="" />
            <img className='absolute top-[5%] left-[5%] w-[70px]  block lg:hidden' src={stekar} alt="" />

          </div>
        ))}

      </div>
    </div>
  );
};

export default HeroHome;
















