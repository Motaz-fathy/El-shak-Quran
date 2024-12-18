// import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import logo from "../../assets/images/iconHeader/logo.png";
import face from "../../assets/images/iconHeader/facebook.png";
import whats from "../../assets/images/iconHeader/whatsap.png";
import yout from "../../assets/images/iconHeader/youtube.png";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="footer p-5" style={{ backgroundColor: "#7CB98E" }}>

        <div className="flex flex-col md:flex-row items-center gap-2">

          <div className="">
          <img
            className="w-[100px]"
            src={logo}
            alt="logo"
          />
          </div>

          <h3 className="text-center text-[16px] md:text-[18px]">
            هو موقع لتعلم القراءات العشرة والحصول على شهادات وإجازات معتمدة من
            معلمين خبراء فى العلوم القرآنية
          </h3>

        </div>

      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 text-start md:text-right">
        {/* القسم الأول: وسائل التواصل */}
        <div>
          <h3 className="text-lg font-bold mb-4">دورات مهمة</h3>
          <ul className="space-y-1">
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة نافع
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة ابن كثير
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة أبي عمرو البصري
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة ابن عامر
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              قراءة عاصم
            </li>
          </ul>
        </div>

        {/* القسم الثاني: روابط مرجعية */}
        <div>
          <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-1">
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الرئيسية
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الإجازات
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الكورسات
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              الأسعار
            </li>
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              المكتبة
            </li>
          </ul>
        </div>

        {/* القسم الثالث: اتصل بنا */}
        <div>
          <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faPhone} />
              الهاتف
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faWhatsapp} />
              الواتساب
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faEnvelopeOpen} />
              البريد الإلكتروني
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faLocationDot} />
              الموقع
            </li>
          </ul>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="mt-8 flex items-end justify-start gap-4">
          <a href="#" className="text-green-500 text-2xl">
            <img src={whats} alt="whats" />
          </a>
          <a href="#" className="text-blue-500 text-2xl">
            <img src={face} alt="face" />
          </a>
          <a href="#" className="text-red-500 text-2xl">
            <img src={yout} alt="yout" />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full mt-4">
        <p className="m-auto font-medium text-[12px] md:text-[16px]">
        حقوق الطبع والنشر <span>&copy; 2024 Codec Craft</span> جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
