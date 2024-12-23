import { useFormik } from "formik";
import Overlay from "../../assets/images/contact/Overlay.png";
import design4 from "../../assets/images/contact/design4.png";
import photo from "../../assets/images/contact/photo.png";
import useLocalization from "../../hooks/useTranslation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"

const ContactPage = () => {
  const content = useLocalization("contact")

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    body: ""
  }

  const onSubmit = async (values) => {


    try {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await axios.post("https://quran.codecraft1.com/api/contact-us", formData);



      if (response.data.status === 201) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 1000,
          zIndex: 9999999999,
        });
      }
      
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || "حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.",
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      } else {
        toast.error("حدث خطأ غير متوقع. يرجى المحاولة لاحقًا.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit
  })
  return (
    <div className=" w-[100%] relative px-5">
      <div className="flex my-6 w-full md:justify-between  flex-col gap-4 items-center md:flex-row ">

        <img src={Overlay} className="w-[80px] h-[80px] relative" alt="img" />
        <p className="w-full md  text-center relative">
          {content("header")}
        </p>

        <div className="w-[200px] absolute top-[-150px] left-[100px]">
          <img src={design4} alt="" />
        </div>
      </div>

      <div className="max-w-full flex rounded-lg justify-center items-center my-6 mb-10 bg-[--main-bgLight-color] flex-col md:flex-row py-3">
        <div className="md:p-[50px] flex justify-center pl:0">
          <img
            src={photo}
            className=" rounded-lg shadow-md flex-col justify-center items-center md:mr-[50px] bg-[--main-dark-color] w-[100px] h-[100px]"
            alt="Image"
          />
        </div>
        <div className="w-[100%]">
          <form className=" rounded-lg p-6 w-ful " onSubmit={formik.handleSubmit}>
            <div className="my-4">
              <label className="block  mb-1">{content("form.name")}</label>
              <input
                type="tex"
                className="w-full border border-gray-300 rounded p-2 "
                required
                name="name"
                {...formik.getFieldProps("name")}
              />
            </div>
            <div className="email my-4">
              <label className="block  mb-1">
                {content("form.email")}
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded p-2 "
                required
                {...formik.getFieldProps("email")}
                name="email"
              />
            </div>
            <div className="my-4">
              <label className="block  mb-1"> {content("form.whatsapp")}</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2 "
                required
                {...formik.getFieldProps("phone")}
                name="phone"
              />
            </div>
            <div className="my-4">
              <label className="block  mb-1">{content("form.message")}</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 "
                required
                {...formik.getFieldProps("body")}
                name="body"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[--main-dark-color] text-white px-8 py-2 rounded-md focus:ring-2 focus:ring-[--main-border-color]"
              >
                {content("form.submitButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactPage;
