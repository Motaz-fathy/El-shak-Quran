import EasySteps from "../../Components/EasySteps/EasySteps";
import Plan from "../../Components/Plan/Plan";
import EgazatSection from "../../Components/Egazat/EgazatSection";
import "./about.css";
import img from "../../assets/images/about/aboutImg.png";
import img2 from "../../assets/images/about/Container (1).png";
import img3 from "../../assets/images/about/Container (2).png";
import img4 from "../../assets/images/about/Container (3).png";
import img5 from "../../assets/images/about/Container.png";
import img6 from "../../assets/images/about/Group.png";
import img7 from "../../assets/images/about/SVG (1).png";
import img8 from "../../assets/images/about/SVG.png";
import img9 from "../../assets/images/about/why-us-Img/Overlay.png";
import img10 from "../../assets/images/about/why-us-Img/Overlay (1).png";
import img11 from "../../assets/images/about/why-us-Img/Overlay (2).png";
import img12 from "../../assets/images/about/why-us-Img/Overlay (3).png";
import img13 from "../../assets/images/about/why-us-Img/Overlay (4).png";
import img14 from "../../assets/images/about/why-us-Img/Overlay (5).png";
import img15 from "../../assets/images/about/why-us-Img/Overlay (6).png";
import img17 from "../../assets/images/about/why-us-Img/Overlay (7).png";
import img18 from "../../assets/images/about/why-us-Img/Overlay (9).png";
import img19 from "../../assets/images/about/why-us-Img/Overlay (10).png";
import img20 from "../../assets/images/about/why-us-Img/Overlay (11).png";
import img21 from "../../assets/images/about/why-us-Img/Overlay (13).png";
import img22 from "../../assets/images/about/why-us-Img/Overlay (14).png";
import img23 from "../../assets/images/about/why-us-Img/Overlay (15).png";
import img24 from "../../assets/images/about/why-us-Img/Overlay (16).png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    
    <div>
      <nav className="bg-[--main-bgLight-color] mt-3">
            <div className="flex gap-[4px] items-center justify-center p-3">
            <Link to='/login' 
             className='globalButton text-center text-[8px] md:text-xl w-32 md:w-64 h-12 md:h-20 flex justify-center items-center'
            >تسجيل الدخول</Link>
            <Link to='/About' 
             className='globalButton text-center text-[8px] md:text-xl w-32 md:w-64 h-12 md:h-20 flex justify-center items-center'
            >من نحن</Link>
            <Link to='/Joinus'  
             className='globalButton text-center text-[8px] md:text-xl w-32 md:w-64 h-12 md:h-20 flex justify-center items-center'
            >انضم الينا كمعلم</Link>
            <Link to='/Ratings' 
            className='globalButton text-center text-[8px] md:text-xl w-32 md:w-64 h-12 md:h-20 flex justify-center items-center'
            >التقييمات</Link>
            </div>
        </nav>
      <div className="about-h3 my-3">
        <h3>من نحن</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-3/4">
          <div className="buttons flex gap-2 mb-7">
            <button className="globalButton">اتصل بنا</button>
            <button className="globalButton">دوراتنا</button>
          </div>
          <p className="text-justify">
            أكاديمية مشكاة هي أفضل مكان لتعلم القرآن واللغة العربية والدراسات
            الإسلامية. لقد حافظنا على سمعة عالمية لسنوات عديدة ، حيث نخدم الطلاب
            من المملكة المتحدة والولايات المتحدة الأمريكية وكندا وأستراليا
            وألمانيا وعبر أوروبا. تم تصميم مجموعة متنوعة من الدورات عبر الإنترنت
            لجميع الأعمار والمستويات ، والتي يتم تدريسها من قبل مدرسين عرب
            معتمدين من خريجي الجامعات الإسلامية المرموقة. نحن نقدم خيارات مرنة
            لتعلم القرآن يمكن تكييفها مع جدولك الزمني واهتماماتك وأسلوب التدريس
            المفضل. لدينا مجموعة واسعة من الفصول تناسب حتى الجداول الزمنية
            الأكثر ازدحاما ، والمصممة لتلبية احتياجات التعلم الخاصة بك. كما نقدم
            الدعم للمتحولين المسلمين ، ونساعدهم على فهم الإسلام وممارسات العبادة
            اليومية من خلال رحلة التعلم عبر الإنترنت معنا.
          </p>
        </div>

        <div className="img w-full md:w-1/4">
          <img className="w-96" src={img} alt="about" />
        </div>
      </div>

      <div className="flex flex-col my-7">
        <div className="flex flex-row items-center gap-3 box-about">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img5} alt="img5" />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-3/4 p-7">
            <h4 className="custom-underline">مرخص من جامعة الأزهر</h4>
            <p className="text-justify">
              نحن فخورون بأن نقول إن جامعة الأزهر قدمت تراخيص وإشراف شديد لتعليم
              العائلات المسلمة في جميع أنحاء العالم. لذلك نحن نستخدم طرق التدريس
              المعتمدة من جامعة الأزهر لدوراتنا عبر الإنترنت حتى يتعلم الطلاب من
              خلال أفضل التقنيات.
            </p>
          </div>
        </div>
        {/* green box */}
        <div className="flex flex-row items-center gap-3 box-about green-box">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img2} alt="img2" />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-3/4 p-7">
            <h4 className="custom-underline">انضم إلى آلاف الطلاب</h4>
            <p className="text-justify">
              انضم إلى آلاف الطلاب الذين يثقون في أكاديمية مشكاة للحصول على أعلى
              جودة من التعليم عبر الإنترنت من راحة وأمان منازلهم برضا 100٪.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 box-about">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img8} alt="img8" />
          </div>

          <div className="flex flex-col w-full md:w-3/4 p-7">
            <h4 className="custom-underline">مهمتنا</h4>
            <p className="mt-8 text-justify">
              قد جعلنا مهمتنا توفير التعليم لأولئك الذين كانوا محتاجين وحريصين
              على التعلم. لذلك ، أنشأنا أفضل منهجية تدريس لتحقيق أهدافنا ، ونهدف
              إلى توفير برامج عالية الجودة ومعلمين متخصصين.
            </p>
            <p className="mt-3 text-justify">
              ضم فريق أكاديمية مشكاة +100 معلم وموظف مؤهل من جميع أنحاء العالم
              حاصلين على شهادات معتمدة من جامعات مرموقة مثل جامعة الأزهر.
            </p>
            <p className="mt-3 text-justify">
              من خلال خدماتنا ، يمكن للجميع التعلم عبر الإنترنت مع مدرسين / إناث
              معتمدين بغض النظر عن العمر أو الجنس أو المكان.
            </p>
            <p className="mt-3 text-justify">
              نحن فخورون بتقديم تعليم قيم بشكل استثنائي للمسلمين الذين يرغبون في
              دراسة اللغة العربية والقرآن في جميع أنحاء العالم!
            </p>
          </div>
        </div>

        {/* green box */}
        <div className="flex flex-row items-center gap-3 box-about green-box">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img3} alt="img3" />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-3/4 p-7">
            <h4 className="custom-underline">رؤيتنا</h4>
            <p className="text-justify">
              تتمثل رؤيتنا في نشر تعلم القرآن من خلال مدرسين متخصصين وجعله في
              متناول جميع المسلمين في جميع أنحاء العالم من خلال جلسة مباشرة عبر
              الإنترنت. نحن نصل إلى 1.9 مليار مسلم غير عربي من خلال هذه الدورات
              ونهدف أيضا إلى الوصول إلى 7.7 مليار من الإخوة والأخوات غير
              المسلمين برسالة الإسلام.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 box-about">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img4} alt="img4" />
          </div>

          <div className="flex flex-col w-full md:w-3/4 p-7">
            <h4 className="custom-underline">النهج الأقصى</h4>
            <p className="mt-8 text-justify">
              إعلان رسالة الإسلام لمعظم الناس ، سواء كانوا يعيشون في بلد مسلم أو
              بلد غير مسلم ، ونقل رسالة الله إلى جميع إخوانهم المسلمين وغير
              المسلمين ، لأن الإسلام للبشرية جمعاء.
            </p>
          </div>
        </div>

        {/* green box */}
        <div className="flex flex-row items-center gap-3 box-about green-box">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img6} alt="img6" />
          </div>

          <div className="flex flex-col gap-8 w-full md:w-3/4 p-7">
            <h4 className="custom-underline">جودة التعليم</h4>
            <p className="text-justify">
              التعليم الجيد حق لكل إنسان. لذلك ، تتمثل رؤيتنا في توفير تعليم جيد
              للجميع بأسعار معقولة.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 box-about">
          <div className="w-1/4 hidden md:block">
            <img className="p-7" src={img7} alt="img7" />
          </div>

          <div className="flex flex-col w-full md:w-3/4 p-7">
            <h4 className="custom-underline">مدرسونا</h4>
            <p className="mt-8 text-justify">
              نقوم بتعيين مدرسينا على وجه التحديد وفقا لمجال خبرتهم بغض النظر عن
              عمر الطالب وجنسه. يخضع كل معلم من معلمينا لمقابلات متعددة وامتحان
              شامل قبل قبولهم في أكاديمية مشكاة. توفر أكاديمية مشكاة تدريبا خاصا
              في تعليم غير الناطقين باللغة العربية لجميع مدرسي اللغة العربية
              والقرآن لدينا. جميع مدرسينا من ذوي الخبرة والمعرفة وحريصون على
              مساعدة أي شخص على تحقيق الطلاقة في اللغة العربية
            </p>
            <p className="mt-8 text-justify">
              يقدم مدرسونا تعليما لا مثيل له وبأسعار معقولة لآلاف الطلاب في جميع
              أنحاء العالم الذين يتوقون إلى تعلم القرآن واللغة العربية والدراسات
              الإسلامية. في أكاديمية مشكاة ، مهمتنا هي جلب أفضل المدربين فقط. إن
              معرفتهم وخبرتهم وطابعهم الاستثنائي يفوق بكثير تلك الموجودة في
              برامج اللغة العربية والقرآن الكريم الأخرى في الخارج
            </p>
          </div>
        </div>
      </div>
      {/* Why us */}
      <div className="why-us w-full my-28">
        <div className="w-full flex items-center justify-center p-5">
          <h3 className="globalMain-header text-center">لماذا نحن</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full p-4">
          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img9} alt="img9" />
            <h3 className="text-lg font-bold mb-2">
              100٪ ضمان استعادة الاموال
            </h3>
            <p className="text-sm text-center">
              رضا الطلاب هو أولويتنا القصوى. نحن نعمل بجد لضمان أن جهودنا تلبي
              توقعاتهم. إذا لم تكن راضيا عن دوراتنا ، فسنقوم برد دفعتك.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img10} alt="img10" />
            <h3 className="text-lg font-bold mb-2">دروس تجريبية مجانية</h3>
            <p className="text-sm text-center">
              لديك الفرصة للتعرف على الدورة والمعلمين مباشرة. يوفر الفصل
              التجريبي المجاني انتقالا سلسا حتى يتمكن الطلاب من الاستقرار جيدا
              والتعرف على الدورة التدريبية ومعلمهم.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img11} alt="img11" />
            <h3 className="text-lg font-bold mb-2">
              24/7 الدعم والجدول الزمني
            </h3>
            <p className="text-sm text-center">
              يمكنك جدولة دورة معنا في أي وقت. نحن نقدم خدمة التعلم 24/7 سبعة
              أيام في الأسبوع ، حتى تتمكن من التعلم عبر الإنترنت وأنت مرتاح في
              منزلك.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img12} alt="img13" />
            <h3 className="text-lg font-bold mb-2">باقات خاصة</h3>
            <p className="text-sm text-center">
              نحن نقدم خطط أسعار خاصة لطلابنا عندما يحضرون أفراد أسرهم
              وأصدقائهم. استفد من الأسعار المخفضة والباقات الخاصة واستمتع
              بخدماتنا الدراسية عبر الإنترنت.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img13} alt="img13" />
            <h3 className="text-lg font-bold mb-2">أسعار معقولة</h3>
            <p className="text-sm text-center">
              نحن نقدم لك الفرصة للتعلم في بيئة تفاعلية وتعاونية بأسعار معقولة
              يمكن للجميع تحملها. تتوفر خطط أسعار مختلفة لراحتك.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img14} alt="img14" />
            <h3 className="text-lg font-bold mb-2">دفع آمن سهل</h3>
            <p className="text-sm text-center">
              لضمان سلامة طلابنا ، قمنا بتبسيط عملية الدفع. يمكنك دفع فواتيرك عن
              طريق PayPal وبطاقات الائتمان / الخصم والتحويل المصرفي.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img15} alt="img15" />
            <h3 className="text-lg font-bold mb-2">جلسات فردية</h3>
            <p className="text-sm text-center">
              تتمثل إحدى المزايا الرائعة للفصل الفردي في أن الفصول مصممة وفقا
              لوتيرة الطلاب واحتياجات التعلم لتزويد الطلاب بفرصة تعليمية أوسع
              وأعمق.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img17} alt="img17" />
            <h3 className="text-lg font-bold mb-2">صديقة للأطفال</h3>
            <p className="text-sm text-center">
              لكل دورة ، هناك إصدار خاص للأطفال يقوم فيه المعلمون بتصميم الدورة
              وفقا لقدرة الطالب على التعلم لجعل الفصل جذابا وتفاعليا للأطفال.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img11} alt="img11" />
            <h3 className="text-lg font-bold mb-2">معلمين / معلمات</h3>
            <p className="text-sm text-center">
              هناك معلمات يقمن بتدريس الطالبات، ومعلمون ذكور يقومون بتدريس
              الطلاب، وآخرون متخصصون في تعليم الأطفال.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img18} alt="img18" />
            <h3 className="text-lg font-bold mb-2">شهادات الإنجاز</h3>
            <p className="text-sm text-center">
              سيحصل كل طالب على شهادة في نهاية الدورة دون أي تكلفة إضافية. تمنحك
              الشهادات الإذن بأنك مؤهل الآن لتعليم الآخرين ما تعلمته.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img19} alt="img19" />
            <h3 className="text-lg font-bold mb-2">تقرير مرحلي</h3>
            <p className="text-sm text-center">
              يقوم مدرسونا بإعداد تقارير مرحلية شهرية تساعد الطلاب على تحسين
              تقدمهم. كما أنه يساعد المعلمين على مراجعة نقاط القوة والضعف لدى
              الطلاب والعمل عليها لإخراج أفضل ما لديهم.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img20} alt="img20" />
            <h3 className="text-lg font-bold mb-2">التعلم الجماعي</h3>
            <p className="text-sm text-center">
              نحن نقدم للعائلات والأصدقاء المسلمين الفرصة لمشاركة الفصول
              الجماعية في بيئة مريحة وموثوقة للاستمتاع بالتعلم معا ويمكنهم
              مساعدة بعضهم البعض في رحلة التعلم.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img21} alt="img21" />
            <h3 className="text-lg font-bold mb-2">دروس المكياج</h3>
            <p className="text-sm text-center">
              لديك حالة طارئة وفاتتك فصل. لا مشكلة! نحن نقدم لك الفرصة لتعويض
              الفصل. أيضا ، يمكنك بسهولة التحدث إلى معلمك حول فصلك وإعادة جدولته
              ليوم آخر.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img22} alt="img22" />
            <h3 className="text-lg font-bold mb-2">المساعدة عبر الإنترنت</h3>
            <p className="text-sm text-center">
              إذا كانت لديك أي أسئلة أو مشاكل ، فإن خدماتنا عبر الإنترنت متاحة
              لك على مدار الساعة. يمكنك الاتصال بنا بسهولة من خلال الدردشة عبر
              الإنترنت أو التواصل معنا من خلال رقم الهاتف المقدم على الموقع.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img23} alt="img23" />
            <h3 className="text-lg font-bold mb-2">طرق التدريس المتقدمة</h3>
            <p className="text-sm text-center">
              يتم تقديم جميع الدورات باستخدام طرق التدريس المتقدمة التي تجعل
              الجلسات تفاعلية وتحفز الطلاب على المشاركة بنشاط في عملية التعلم.
            </p>
          </div>

          <div className="why-us-box flex flex-col items-center justify-center gap-2 rounded-lg p-4">
            <img src={img24} alt="img24" />
            <h3 className="text-lg font-bold mb-2">التطور الروحي</h3>
            <p className="text-sm text-center">
              توعية الناس بما هو صواب أو خطأ أخلاقيا من خلال نقل التعليم
              الإسلامي ومساعدتهم على عيش حياة وفقا للقواعد الإسلامية.
            </p>
          </div>
        </div>
      </div>

      <EasySteps />
      <Plan />
      <EgazatSection />
    </div>
  );
};

export default About;
