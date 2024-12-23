import { useFormik } from "formik";
import design2 from "../../assets/images/general/design1.png";
import EasySteps from "../../Components/EasySteps/EasySteps";
import Plan from "../../Components/Plan/Plan";
import { ToastContainer, toast } from 'react-toastify';
import "./trialSession.css";
import axios from "axios";
import useLocalization from "../../hooks/useTranslation";

const TrialSession = () => {
  const content = useLocalization("trialSession")
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    the_cycle: "",
    favorites_days: "",
    favorites_time: "",
    age: "",
    student_gender: "",
    teacher_gender: "",
    message: "",
  };

  const onSubmit = async (values) => {
    try {
      console.log("Submitting values:", values);

      const response = await axios.post(
        "https://quran.codecraft1.com/api/demo-user/store",
        values
      );

      if (response.data.message) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
        });
        formik.resetForm();
      }

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "حدث خطأ أثناء معالجة الطلب. حاول مرة أخرى.", {
          position: "top-right",
          autoClose: 3000,
        });
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
    onSubmit,
  });

  return <div className="TrialSessionComponent">
    <div className="mb-7">
      <EasySteps />
    </div>
    <div className="text flex flex-col justify-center items-center relative">
      <h3>{content("evaluationSessionsHeader")}</h3>
      <p>{content("evaluationSessionsDescription")}</p>
      <span>{content("dataPrivacyNote")}</span>
      <img
        className="absolute right-[-48px] top-24 transform -translate-y-1/2 z-10"
        src={design2}
        alt="design2"
      />
    </div>

    <div className="flex justify-center items-center p-4">
      <form className="w-full p-6 rounded-lg shadow-md" onSubmit={formik.handleSubmit}>
        {/* Grid for Input Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.firstName")}
            </label>
            <input
              name="first_name"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.lastName")}
            </label>
            <input
              name="last_name"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.email")}
            </label>
            <input
              name="email"
              type="email"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.phone")}
            </label>
            <input
              name="phone"
              type="tel"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.country")}
            </label>
            <input
              name="country"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.city")}
            </label>
            <input
              name="city"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Course */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.theCycle")}
            </label>
            <input
              name="the_cycle"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.the_cycle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Favorite Days */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.favoriteDays")}
            </label>
            <input
              name="favorites_days"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.favorites_days}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Favorite Times */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.favoriteTimes")}
            </label>
            <input
              name="favorites_time"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.favorites_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              {content("formLabels.age")}
            </label>
            <input
              name="age"
              type="number"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>

        {/* Student Gender */}
        <div className="mt-4">
          <h3 className="mb-3">{content("formLabels.studentGender")}</h3>
          <div className="flex gap-4">
            <label className="block text-gray-700 font-bold">
              <input
                type="radio"
                name="student_gender"
                value={1}
                onChange={formik.handleChange}
              />{" "}
              {content("genders.male")}
            </label>
            <label className="block text-gray-700 font-bold">
              <input
                type="radio"
                name="student_gender"
                value={0}
                onChange={formik.handleChange}
              />{" "}
              {content("genders.female")}
            </label>
          </div>
        </div>

        {/* Teacher Gender */}
        <div className="mt-4">
          <h3 className="mb-3">{content("formLabels.teacherGender")}</h3>
          <div className="flex gap-4">
            <label className="block text-gray-700 font-bold">
              <input
                type="radio"
                name="teacher_gender"
                value={1}
                onChange={formik.handleChange}
              />{" "}
              {content("genders.male")}
            </label>
            <label className="block text-gray-700 font-bold">
              <input
                type="radio"
                name="teacher_gender"
                value={0}
                onChange={formik.handleChange}
              />{" "}
              {content("genders.female")}
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block mb-1 text-gray-700 text-sm font-bold">
            {content("formLabels.message")}
          </label>
          <textarea
            name="message"
            rows="2"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-6 text-center">
          <button type="submit" className="globalButton">
            {content("submitButton")}
          </button>
        </div>
      </form>
    </div>
    <Plan />
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

};

export default TrialSession;