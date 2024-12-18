// import design1 from '../../assets/images/general/design2.png'
import design2 from "../../assets/images/general/design1.png";
import EasySteps from "../../Components/EasySteps/EasySteps";
import Plan from "../../Components/Plan/Plan";
import "./trialSession.css";


const TrialSession = () => {



  return (
    <div className="TrialSessionComponent">
      <div className="mb-7">
        <EasySteps />
      </div>
      <div className="text flex flex-col justify-center items-center relative">
        <h3>يقدم (.......) جلسات تقييم مجانية</h3>
        <p>
          يرجى ملء النموذج فى الاسفل لتحديد موعد الدورة التجريبية المجانية
          الخاصة بك
        </p>
        <span>لن تتم مشاركة بياناتك مع اى أطراف آخرى أبداً</span>
        <img
          className="absolute right-[-48px] top-24 transform -translate-y-1/2 z-10"
          src={design2}
          alt="design2"
        />
      </div>
      <div className="flex justify-center items-center p-4">
        <form className="w-full  p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-gray-700 text-sm font-bold">
                الاسم الأول
              </label>
              <input
                name="frist-name"
                type="text"
                className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700 text-sm font-bold">
                الاسم الأخير
              </label>
              <input
                name="last-name"
                type="text"
                className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              البريد الإلكتروني
            </label>
            <input
              name="gmail"
              type="email"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              رقم الواتس
            </label>
            <input
              name="whatsApp"
              type="tel"
              className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              البلد
            </label>
            <input
              name="country"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              المنطضه الزمنيه
            </label>
            <input
              name="country-time"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              الدوره
            </label>
            <input
              name="course"
              type="text"
              className="w-full px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              الايام المفضله
            </label>
            <input
              name="FavoriteDays"
              type="text"
              className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-2">
            <label className="block mb-1 text-gray-700 text-sm font-bold">
              الاوقات المفضله
            </label>
            <input
              name="FavoriteTimes"
              type="text"
              className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mt-4"></div>

          <div>
            <h3 className="mb-3">نوع الطالب :</h3>
            <div className="flex gap-4">
              <label className="block mb-1 text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> ذكر
              </label>
              <label className="block mb-1 text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> أنثى
              </label>
              <label className="block mb-1 text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> كلاهما
              </label>
            </div>
          </div>

          <div className="mb-4 ">
            <h3 className="mb-3">نوع المدرس :</h3>
            <div className="flex gap-4">
              <label className="block text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> ذكر
              </label>
              <label className="block text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> أنثى
              </label>
              <label className="block text-gray-700 font-bold">
                <input type="radio" name="gender" className="mr-2" /> كلاهما
              </label>
            </div>
          </div>
          <textarea
            className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="2"
          ></textarea>
          <div className="mt-6 text-center">
            <button type="submit" className="globalButton">
              احصل على النسخة التجريبية المجانية
            </button>
          </div>
        </form>
      </div>
      <Plan />
    </div>
  );
};
export default TrialSession;







