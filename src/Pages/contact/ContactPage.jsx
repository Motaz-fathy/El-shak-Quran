import Overlay from "../../assets/images/contact/Overlay.png";
import design4 from "../../assets/images/contact/design4.png";
import photo from "../../assets/images/contact/photo.png";

import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    body: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await axios.post(
        "https://quran.codecraft1.com/api/contact-us",
        formData
      );
      toast.success(response.data.message);
    } catch {
      toast.error("حدث خطأ ما. الرجاء المحاولة مرة أخرى.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-[100%] relative">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="flex mt-12 w-full justify-between">
        <img src={Overlay} className="w-[80px] h-[80px]" alt="img" />
        <p className="w-full text-right">
          نحن ملتزمون بتقديم مجموعة واسعة من الدروس لتلبية احتياجات الطلاب من
          المستوى المبتدئ الى المستوى المتقدم. تركز دروسنا عبر الأنترنت على
          التقنيات والأدوات القائمة على العلوم وأحدث الأساليب المحدثة لتحسين
          التعلم لكل من البالغين والأطفال. يسعدنا ان نسمع منك, أرسل لنا رسالة
          وسنرد عليك فى أسرع وقت ممكن.
        </p>
        <div className="w-[200px] absolute top-[-150px] left-[100px]">
          <img src={design4} alt="" />
        </div>
      </div>
      <div className="max-w-full flex rounded-lg justify-center items-center mt-32 mb-10 bg-[--main-bgLight-color]">
        <div className="pl-[200px]">
          <img
            src={photo}
            className="rounded-lg shadow-md flex-col justify-center items-center mr-[50px] bg-[--main-dark-color]"
            alt=""
          />
        </div>
        <div className="w-[100%]">
          <form className="rounded-lg p-6 w-full" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="block text-right mb-1">الاسم:</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded p-2 text-right"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="email">
              <label className="block text-right mb-1">
                البريد الالكترونى:
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded p-2 text-right"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1">رقم الواتساب:</label>
              <input
                type="number"
                name="phone"
                className="w-full border border-gray-300 rounded p-2 text-right"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-right mb-1">رسالة:</label>
              <textarea
                id="message"
                name="body"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 text-right"
                value={formData.body}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className={`${
                  isSending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[--main-dark-color]"
                } text-white px-8 py-2 rounded-md focus:ring-2 focus:ring-[--main-border-color]`}
                disabled={isSending}
              >
                {isSending ? "جاري الإرسال" : "إرسال"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
