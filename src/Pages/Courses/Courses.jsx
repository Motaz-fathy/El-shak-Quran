// import courseImg from '../../assets/images/general/course.png'
import one from "../../assets/images/courses/one.png";
import two from "../../assets/images/courses/two.png";
import three from "../../assets/images/courses/three.png";
import four from "../../assets/images/courses/four.png";
import five from "../../assets/images/courses/five.png";
import level_1 from "../../assets/images/courses/level_1.png";
import level_2 from "../../assets/images/courses/level_2.png";
import level_3 from "../../assets/images/courses/level_3.png";
import center from "../../assets/images/courses/center.png";
import CoursesPage from "../CoursesPage/CoursesPage";
import Container from "../../assets/images/courses/Container.png";
import Container_1 from "../../assets/images/courses/Container_1 .png";
import Container_2 from "../../assets/images/courses/Container_2 .png";
import Container_3 from "../../assets/images/courses/Container_3.png";
import Container_4 from "../../assets/images/courses/Container_4.png";
import pepole from "../../assets/images/general/people.png";
import sheikh from "../../assets/images/courses/sheikh.jpg";
import { useLocation, useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFav from "../../hooks/useFav";
import like from "../../assets/images/general/wishList.png"

const Courses = () => {
  const { name } = useParams()
  const { addToFav, AlertContainer } = useFav()
  const handelAddToFav = async (id) => {
    await addToFav({
      "item_type": "App\\Models\\Course",
      "item_id": id
    }
    )
  }
  //  for coures Datails :-
  const location = useLocation();
  const course = location.state;

  const navigate = useNavigate()

  const [questions, setQuestions] = useState([]); 
  const [teachers, setTeachers] = useState([]);


  // For Slider of Teacher :-
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://quran.codecraft1.com/api/teacher');
        setTeachers(response.data.data);
      } catch (err) {
        alert(err.message)
      }
    };
    fetchTeachers();
  }, []);


  // For Slider of Teacher :-
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://quran.codecraft1.com/api/dashboard/faqs');
        setQuestions(response.data.data);
      } catch (err) {
        alert(err.message)
      }
    };
    fetchTeachers();
  }, []);




  const fiveBox = [
    {
      title: "الخطة",
      textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ",
      textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة",
      textThree: "لاحتياجاتهم ووتيرتها.",
      img: one
    },
    {
      title: "الإتقان",
      textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ",
      textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة",
      textThree: "لاحتياجاتهم ووتيرتها.",
      img: two
    },
    {
      title: "المراجعة والإتقان",
      textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ",
      textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة",
      textThree: "لاحتياجاتهم ووتيرتها.",
      img: three
    },
    {
      title: "إتقان التجويد",
      textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ",
      textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة",
      textThree: "لاحتياجاتهم ووتيرتها.",
      img: four
    },
    {
      title: "التقدم الشخصي",
      textOne: "سيتعلم الطلاب حفظ القرآن , إما جزء محدد أو القرآن ",
      textTwo: "بأكمله , بواسطة اتباع خطة خطوة بخطوة مناسبة",
      textThree: "لاحتياجاتهم ووتيرتها.",
      img: five
    }
  ];

  const dataLevels = [
    {
      img: level_1,
      title: "مستوى المبتدئين",
      text:
        " بالنسبة للطلاب الجدد في اللغة العربية القرآنية والتجويد ، يركز هذا المستوى على القراءة التأسيسية والسور القصيرة الحفظ مثل جزء عم. "
    },
    {
      img: level_2,
      title: "مستوى المتوسط",
      text:
        "سيعمل الطلاب الذين يتمتعون بمهارات القراءة والتجويد الأساسية على سور حفظ أطول مع إتقان تلاوتهم وتقنيات الحفظ."
    },
    {
      img: level_3,
      title: "مستوى المتقدم",
      text:
        "في هذا المستوى ، يركز الطلاب على حفظ القرآن بأكمله أو أقسام أكبر ، وتطبيق استراتيجيات حفظ المتقدمة ، والمراجعة بانتظام."
    }
  ];

  const cardsData = [
    {
      id: 1,
      bgColor: "#96C5BD",
      imgSrc: Container,
      title: "مصحف حافظ كامل",
      text:
        "سيبدأ الطلاب بنجاح في حفظ القرآن الكريم بالكامل أو اختيار أجزاء بناء على أهدافهم الشخصية ومناهجهم الدراسية."
    },
    {
      id: 2,
      bgColor: "#AFDBDC",
      imgSrc: Container_1,
      title: "إتقان التجويد في حافظ",
      text:
        "سيقوم كل طالب بحفظ وتلاوة القرآن بدقة والطلاقة من خلال تعلم قواعد التجويد المناسبة."
    },
    {
      id: 3,
      bgColor: "#F8D8B1",
      imgSrc: Container_2,
      title: "خطط القرآن",
      text:
        "تطوير تقنيات مراجعة قوية للحفاظ على المدى الطويل الاحتفاظ بأجزاء القرآن."
    },
    {
      id: 4,
      bgColor: "#D6EBE1",
      imgSrc: Container_3,
      title: "االتعلم الذاتي",
      text:
        "مع خطط الدروس المخصصة التي تتكيف مع قدراتهم و الجداول الزمنية ، سيحقق الطلاب الأهداف الخاصة بهم بأنفسهم وتيرة."
    },
    {
      id: 5,
      bgColor: "#78C1C1CF",
      imgSrc: Container_4,
      title: "المسائلة الشخصية",
      text:
        "سيكتسب الطلاب الثقة في تقدمهم مع الانتظام التقييمات والتعليقات الشخصية للحفاظ عليها المسار."
    }
  ];

  const cardsData2 = [
    {
      id: 1,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "مدرسون معتمدون من حافظ من الأزهر",
      text:
        "جميع مدرسينا مؤهلون تأهيلا عاليا ، بعد أن حصلوا على إجازة وشهادات إسلامية من جامعة الأزهر ، مما يضمن أعلى مستوى من التدريس."
    },
    {
      id: 2,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "بوابة بدء التعلم",
      text:
        "يمكن للطلاب الوصول إلى المحاضرات المسجلة من خلال البوابة ، مما يمكنهم من مراجعة الدروس بسهولة لتحسين الحفظ."
    },
    {
      id: 3,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "تسجيلات الفيديو للتعلم",
      text:
        "تتيح بوابتنا الإلكترونية سهلة الاستخدام للطلاب تتبع تقدمهم والاتصال بسهولة بمعلمهم ، مما يضمن تحقيقهم للعلم بكفاءة."
    },
    {
      id: 4,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "ملاحظات شاملة",
      text:
        "يتم تقديم ملاحظات شخصية بعد كل جلسة ، مما يساعد الطلاب على فهم نقاط قوتهم ومجالات التحسين."
    },
    {
      id: 5,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "إشراف أكاديمي",
      text:
        "نحن نقدم خيارات جدولة مرنة ، مما يسمح للطلاب بإعادة جدولة الفصول الدراسية حسب الحاجة لتناسب حياتهم المزدحمة."
    },
    {
      id: 6,
      bgColor: "#CBEDD5",
      imgSrc: Container,
      title: "أساليب تعليمية فعّالة",
      text:
        "يتم تدريب مدرسينا لتعليم الطلاب من خلفيات ثقافية متنوعة ، مما يجعل تجربة التعلم شاملة ومحترمة."
    }
  ];

  const dataWhy = [
    { text: "أفضل طرق التدريس", pargraph: "مصطفي ياسر حمدي" },
    { text: "شهادات إتمام الدورة", pargraph: "مصطفي ياسر حمدي" },
    { text: "المسابقات والاختبارات", pargraph: "مصطفي ياسر حمدي" },
    { text: "خطط رسوم ميسورة التكلفة", pargraph: "مصطفي ياسر حمدي" },
    { text: "24/7 التوفر", pargraph: "مصطفي ياسر حمدي" },
    { text: "فصول تجريبية مجانية", pargraph: "مصطفي ياسر حمدي" }
  ];




  return (
    <div className="my-10 ">

      {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
      <div className="hero flex justify-around relative">
        <div className="text ">
        <div className="text pr-10 md:pr-0 ">
          <img src={like} alt="add To Wishlist" className="block ms-auto p-3 cursor-pointer" onClick={() => handelAddToFav(name)} />
          <p className="text-[20px] font-[700] text-center md:text-start pl-3 md:pl-20">
            {course.description}
          </p>
          <div className="number flex items-center gap-5 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-[600]">الدورات المنظمة</span>
              <span className="text-[20px] font-[700] text-[--main-green-color]">{`+${course.organized_courses}`}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-[600]">المدرسين</span>
              <span className="text-[20px] font-[700] text-[--main-green-color]">{`+${course.name_sheikh}`}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px] font-[600]">الطلاب الراضيين</span>
              <span className="text-[20px] font-[700] text-[--main-green-color]">{`+${course.satisfied_students}`}</span>
            </div>
          </div>
        </div>

        {/* that have issue here when load fail image url  */}

        <div className="image w-[50%] hidden lg:block">
          <img className="w-[100%] rounded-lg " src={course.image} />
        </div>

        <button 
          className="globalButton absolute bottom-[-30px] md:bottom-0  left-[35%] md:left-[50%]"
          onClick={()=> navigate('/trialSession')}
        >
          ابدأ تجربة مجانية
        </button>
      </div>
      {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

      <div className="whatLearn  text-center my-14 lg:my-20  flex items-center justify-center flex-col ">
        <h4 className="text-[20px] md:text-[30px] font-[700] text-[--main-green-color] pb-3">
          ماذا ستتعلم في دروس التجويد عبر الإنترنت؟
        </h4>
        <p className="w-[100%] lg:w-[70%]  text-center text-[14px] lg:text-[20px] font-[600] ">
          لقد صممنا دروس التجويد هذه لتعليم الأطفال والأخوات والكبار تعلم
          القواعد الأساسية لتلاوة القرآن بشكل صحيح. يضمن نهجنا التدريجي والبيئة
          الجذابة للطلاب من جميع المستويات,تعلم القراءة مع دورة التجويد لتطوير
          مهارات التلاوة الدقيقة.
        </p>
      </div>


      <div className="fiveBox bg-[--main-bgLight-color] p-3 lg:p-10 flex flex-wrap items-center justify-center">
        {fiveBox.map((item, index) =>
          <div
            className="box rounded-[16px] w-[100%] md:48 lg:w-[32%] my-1 lg:my-3 mx-1 h-[200px] text-[white] flex items-center justify-center flex-col bg-[--main-green-color] relative"
            key={index}
          >
            <h4 className="text-[26px] font-[700] mb-5">
              {item.title}
            </h4>
            <p>
              {item.textOne}
            </p>
            <p>
              {item.textTwo}
            </p>
            <p>
              {item.textThree}
            </p>
            <img className="absolute top-3 right-3" src={item.img} alt="" />
          </div>
        )}
      </div>


      <div className="manhag my-10 lg:my-20 mb-10 lg:mb-20 ">
        <div className="manhagTitle mb-10">
          <h4 className="globalMain-header text-[22px] md:text-[30px]">
            منهجنا الدراسي لدورة التجويد عبر الإنترنت
          </h4>
          <p className="text-center mt-7 md:mt-10  text-[14px] lg:text-[20px]  font-[700] ">
            تم تصميم مناهجنا لتوجيه الطلاب خطوة بخطوة من خلال إتقان التجويد.
            يعتمد كل مستوى على المستوى السابق ، مما يساعدك على التطور من مبتدئ
            إلى قارئ متقدم.
          </p>
        </div>

        <div className="bigBoxManhag flex justify-center items-center gap-5 sm:gap-10   flex-col">
          <div className="top flex items-center justify-between flex-col sm:flex-row  w-[100%] lg:w-[60%] gap-5">
            <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  تعلم قواعد التجويد
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                  سيتعلم الطلاب قواعد التجويد ، مما يضمن أن يكون حفظهم دقيقا
                  وجميلا ويلتزم بالنطق الصحيح لكل حرف.
                </p>
              </details>
            </div>
            <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  تعلم القراءة باللغة العربية
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                يبدأ المنهج بتعزيز قدرة الطلاب على قراءة القرآن بطلاقة باللغة العربية ، مما يشكل الأساس للحفظ.
                </p>
              </details>
            </div>
          </div>

          <div className="center flex items-center justify-between flex-col sm:flex-row  gap-5 w-[100%] lg:w-[80%]">
            <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  حافظ جزء تبارك  
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                  سينتقل طلاب المرحلة المتوسطة إلى جزء تبارك (الجزء 29) ، لمواصلة رحلة الحفظ مع سور أطول.
                </p>
              </details>
            </div>
            <img className="w-[150px] hidden lg:block" src={center} alt="" />
            <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  حافظ جزء عم 
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                  سيبدأ المبتدئين بحفظ جزء عام (الجزء 30) ، والذي يحتوي على سور أقصر ، مما يجعله مثاليا للحفظ التأسيسي.
                </p>
              </details>
            </div>
          </div>

          <div className="bottom w-[100%] lg:w-[60%] flex items-center justify-between flex-col sm:flex-row  gap-5">
            <div className="rounded-lg overflow-hidden  cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  حفظ سور مختارة أو جزء 
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                  بالنسبة للطلاب الذين يفضلون حفظ سور أو أجزاء معينة من القرآن ، فإننا نقدم المرونة في الاختيار بناء على الأهداف الشخصية.
                </p>
              </details>
            </div>
            <div className="rounded-lg overflow-hidden cursor-pointer shadow-lg">
              <details className="w-[300px] rounded-lg">
                <summary className="bg-[--main-bgLight-color]  text-[--main-green-color] p-2 ">
                  حافظ القرآن الكريم  
                </summary>
                <p className="bg-[--main-green-color] text-[white] text-[--main-green-color]  p-2">
                حافظ القرآن الكريم بالتجويد والقراءات كامل
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>


      <div className="levels bg-[--main-bgLight-color] p-5 lg:p-20">
        <h4 className="globalMain-header text-[24px] lg:text-[36px] text-center">
          مستويات تعلم الدروس عبر الانترنت{" "}
        </h4>
        <div className="bigBox flex items-center justify-between flex-col sm:flex-row gap-5 mt-10">
          {dataLevels.map((item, index) =>
            <div className="box flex items-center flex-col " key={index}>
              <img className="w-[170px] mb-[-50px]" src={item.img} alt="" />
              <div className="text text-[white] text-center bg-[--main-green-color] p-5 rounded-lg shadow-lg">
                <h4 className="text-[28px] font-[700] pt-7 pb-3">
                  {item.title}
                </h4>
                <p className="text-[16px] font-[700]">
                  {item.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>


      <CoursesPage />


      <div className="mb-4">
        {/* <h4 className="globalMain-header sm:text-sm md:text-[30px] mb-8 text-center"> */}

        <div className="teachers mt-10 lg:mt-20">
          <h4 className="globalMain-header text-[30px] mb-10">
            المعلمون المصريون المعتمدون
          </h4>
          <div className="slider flex overflow-x-scroll gap-3 flex-row-reverse  scrollbar-hide">
            {teachers.map((teacher, index) =>
              <div
                key={index}
                className="box p-3 min-w-[300px] bg-[--main-bgLight-color] rounded-lg mb-10 shadow-lg"
              >
                <div className="info flex items-center gap-3">
                  <img
                    className="w-[80px] h-[80px] rounded-[50%]"

                    alt={teacher.name}
                  />
                  <div className="text">
                    <h6 className="text-[18px] font-[500]">
                      الشيخ / {teacher.name}
                    </h6>
                    <p className="text-[14px] text-[#62B6B7]">
                      {`${teacher.experience}  من الخبرة  `}
                    </p>
                    {/* <Rating name="read-only" value={teacher.rate} readOnly /> */}
                  </div>
                </div>
                <div className="details">
                  <p className="my-4 text-[14px]">
                    <span className="text-[16px] font-[600]">كورس / </span>
                    {teacher.title}
                  </p>
                  <p className="text-[14px] ">
                    <span className="text-[16px] font-[600]">تفاصيل عن المدرس / </span>
                    {teacher.description}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="teacherDatails text-center mt-10 mb-20 px-3 lgpx-0">
            <ul>
              <li className="font-[700] text-[#111] text-[16px]">
                مدرسو القرآن في حافظ هم من الناطقين باللغة العربية ، مما يضمن
                تعلم الطلاب النطق الصحيح والتنغيم لتلاوة القرآن الصحيحة وحفظه.
              </li>
              <li className="font-[700] text-[#111] text-[16px]">
                حصل كل مدرس على إجازة من جامعة الأزهر, المؤسسة الإسلامية الرائدة
                ، مما يشهد على حفزه وخبرته في التدريس.
              </li>
              <li className="font-[700] text-[#111] text-[16px]">
                مع سنوات من الخبرة في توجيه الطلاب نحو برنامج تحفيظ القرآن
                الناجح ، فإن مدرسي حافظ لدينا هم معلمو حافظ القرآن المعتمدون من
                الخبراء.
              </li>
              <li className="font-[700] text-[#111] text-[16px]">
                مدرسو القرآن الكريم لدينا هم خبراء في تعليم الطلاب من كل الأعمار
                ومستوى التعلم والذكاء من خلال الأساليب العملية التي تناسب وتجذب
                شخصيتهم نحو التعلم الممتع.
              </li>
              <li className="font-[700] text-[#111] text-[16px]">
                مدرسو القرآن حافظ لدينا هم من الناطقين باللغة العربية ويتحدثون
                الإنجليزية بطلاقة ، مما يضمن سهولة التواصل مع الطلاب من خلفيات
                متعددة وتجربة تعليمية افتراضية أفضل.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="globalMain-header text-[30px] mb-10">
            ما هي الميزات التي تجعل الدورة الخاصة بنا مميزة
          </h4>
          <div className=" flex flex-wrap lg:flex-nowrap items-end justify-center gap-16 md:gap-[130px] ">
            <div className="space-y-4 w-full lg:w-1/2 flex flex-col justify-center">
              {cardsData.map(card =>
                <div
                  key={card.id}
                  className="flex items-center p-4 rounded-lg shadow"
                  style={{ backgroundColor: card.bgColor }}
                >
                  <img
                    src={card.imgSrc}
                    alt="Icon"
                    className="w-12 h-12 mx-2"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#157A67]">
                      {card.title}
                    </h3>
                    <p className=" md:font-semibold">
                      {card.text}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className=" ">
              <img
                src={sheikh}
                alt="Special Feature"
                className=" h-[300px] md:h-[450px] rounded-lg shadow object-cover"
              />
            </div>
          </div>
        </div>


        <div className="p-5 md:p-10 my-5 md:my-10">
          <h4 className="globalMain-header sm:text-sm md:text-[30px] mb-12 text-center">
            ما هي الميزات التي تجعل دورتنا التعليمية مميزة
          </h4>
          <div className="flex flex-wrap -mx-4">
            {cardsData2.map(card =>
              <div key={card.id} className="w-full sm:w-1/2 px-4 mb-6 flex">
                <div
                  className={`flex items-center p-4 rounded-lg shadow w-full`}
                  style={{ backgroundColor: card.bgColor }}
                >
                  <img
                    src={card.imgSrc}
                    alt="Icon"
                    className=" w-10 md:w-12 h-10 md:h-12 mx-2"
                  />
                  <div>
                    <h3 className="sm:text-md md:text-lg font-semibold text-[#157A67]">
                      {card.title}
                    </h3>
                    <p className="lg:text-lg">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* //////////// */}

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center bg-[#D6EBE1] p-6 md:p-16 rounded-lg shadow-lg">
          {/* القسم الأيمن: النصوص والزر */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-4 text-center md:text-start">
            <h3 className="text-xl font-bold text-[#157A67]">
              شهادة إتمام الدورة التعليمية
            </h3>
            <p className="leading-relaxed  text-lg sm:font-semibold md:font-bold">
              عند الانتهاء من الدورة، سيحصل الطلاب على شهادة إنجاز وسيتم تكريمهم
              باحتفال بتقدمهم في تعلم الدروس القرآنية الرئيسية. يمثل هذا الإنجاز
              خطوة مهمة في رحلتهم لفهم وحفظ القرآن.
            </p>
            <button className="globalButton" onClick={()=> navigate('/trialSession')}> إحجز نسخة تجريبية الآن </button>
          </div>

          {/* القسم الأيسر: صورة الشهادة */}
          <div className="flex justify-center items-center w-full md:w-1/2 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-12 w-full max-w-sm">
              <p className="text-center text-[#157A67] font-semibold">
                صورة الشهادة
              </p>
            </div>
          </div>
        </div>

        <div className="whyChose mt-10 lg:mt-20">
          <h4 className="text-[--main-green-color] text-[30px] font-[700] text-center pb-5">
            لماذا تختار موقع ......
          </h4>
          <hr className="border-0 h-[2px] bg-[--main-border-color] w-[20%] ml-[auto] mr-[auto] " />

          <div className="content flex  justify-around mt-5 lg:mt-10">
            <div className="text">
              {dataWhy.map((item, index) =>
                <details key={index}>
                  <summary className="w-[400px] md:w-[300px]  p-2 mb-3 rounded-md text-[18px] font-[600] shadow-lg cursor-pointer bg-[--main-bgLight-color] text-[--main-green-color] border-[1px] border-[--main-border-color] border-r-[7px] border-r-[--main-border-color]">
                    {item.text}
                  </summary>
                  <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">
                    {item.pargraph}
                  </p>
                </details>
              )}
            </div>
            <div className="image bg-[#333] w-[30%] hidden md:block h-[350px] rounded-md overflow-hidden">
              <img className="w-full h-full" src={pepole} alt="" />
            </div>
          </div>
        </div>

        <div className="repeatQuestion flex items-center justify-around mt-10 lg:mt-20 flex-col md:flex-row">
          <h4 className="text-[32px] font-[700] text-[--main-green-color] border-b-2 border-[--main-border-color] mb-5 md:mb-0">
            أهم الأسئلة الشائعة؟
          </h4>
          <div className="question rounded-md ">
            {questions.map((item, index) =>
              <details key={index}>
                <summary className="w-[400px] p-4   text-[16px] font-[400] shadow-lg cursor-pointer bg-[--main-bgLight-color]  border-b-[1px] border-b-[--main-green-color]">
                  {item.question}
                </summary>
                <p className="bg-[--main-bgLight-color] rounded-md p-5  mb-3">
                  {item.answer}
                </p>
              </details>
            )}
          </div>
        </div>

      </div>
      <AlertContainer />
    </div>
    </div>
  );
};

export default Courses;
