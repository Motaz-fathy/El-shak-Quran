import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Read = () => {
  return (
    <div>
      <div
        className="flex items-center justify-end w-full my-8 relative"
        style={{ direction: "rtl" }}
      >
        <input
          type="text"
          placeholder="اكتب اسم القراءة"
          className="p-2 rounded-md border-2 bg-[#EAF8F4] w-36 md:w-80 pr-10 focus:outline-none "
          style={{
            borderColor: "var(--main-dark-color)" // تحديد لون الإطار باستخدام المتغير
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-green-700 left-28 md:left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
        />
      </div>

      <div>
        <h1>القرآن الكريم</h1>
      </div>
    </div>
  );
};

export default Read ;
