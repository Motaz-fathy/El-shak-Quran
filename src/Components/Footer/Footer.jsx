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
import useLocalization from "../../hooks/useTranslation";
import useLocalizationContext from "../../Context/localizationContext/localizationContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isEnglish } = useLocalizationContext()
  const content = useLocalization("footer")

  const quickLinks = [
    { label: content("quick_links.items.0"), path: '/' },
    { label: content("quick_links.items.1"), path: '/commonQuestions' },
    { label: content("quick_links.items.2"), path: '/coursesPage' },
    { label: content("quick_links.items.3"), path: '/pricingpage' },
    { label: content("quick_links.items.4"), path: '/library' },
  ];

  return (
    <footer className="py-5">

      {/* Top */}
      <div className="footer" style={{ backgroundColor: "#7CB98E" }}>
        <div className="flex flex-col md:flex-row items-center gap-2 justify-around">
          <div>
            <img
              className="w-[100px]"
              src={logo}
              alt="logo"
            />
          </div>
          <h3 className="text-center text-[16px] md:text-[18px] max-w-[90%]">
            {content("general.description")}
          </h3>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 text-start md:text-right">
        {/* القسم الأول: وسائل التواصل */}
        <div>
          <h3 className="text-lg font-bold mb-4"> {content("courses.title")} </h3>
          <ul className="space-y-1">
            <li>
              <FontAwesomeIcon
                className="socia-icone ml-2"
                icon={faArrowLeft}
              />
              {content("courses.items.0")}
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
        <div dir={isEnglish && "rtl"}>
          <h3 className="text-lg font-bold mb-4"> {content("quick_links.title")}</h3>
          <ul className="space-y-1">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <FontAwesomeIcon className="socia-icone ml-2" icon={faArrowLeft} />
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* القسم الثالث: اتصل بنا */}
        <div dir={isEnglish && "rtl"}>
          <h3 className="text-lg font-bold mb-4"> {content("contact_us.title")} </h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faWhatsapp} />
              {content("contact_us.items.1")}
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faEnvelopeOpen} />
              {content("contact_us.items.2")}
            </li>
            <li className="flex items-center justify-start md:justify-start gap-2">
              <FontAwesomeIcon className="socia-icone" icon={faLocationDot} />
              {content("contact_us.items.3")}
            </li>
          </ul>
        </div>

        {/* أيقونات السوشيال ميديا */}
        <div className="mt-8 flex items-end justify-evenly">
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
