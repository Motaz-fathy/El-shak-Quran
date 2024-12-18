import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
// import ReactHowler from "react-howler";


const VoicePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [surahs, setSurahs] = useState([]);
  // Api - https://quran.codecraft1.com/api/surah
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch("https://quran.codecraft1.com/api/surah");
        const data = await response.json();
        setSurahs(data); // تخزين البيانات في state
      } catch (error) {
        console.error("Error fetching Surahs:", error);
      }
    };

    fetchSurahs();
  }, []);


  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const newValue = event.target.value;
    setProgress(newValue);
  };

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
            borderColor: "var(--main-dark-color)", // تحديد لون الإطار باستخدام المتغير
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-green-700 left-28 md:left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
        />
      </div>

      <div
        style={{ boxShadow: "0 1px 6px -1px var(--main-green-color)" }}
        className="audio-player shadow-md p-4 mx-1 rounded-lg flex flex-col items-center my-7 relative"
      >
        {/* العنوان */}
        <h3 className="text-lg font-semibold mb-2">سورة الكهف</h3>

        {/* واجهة الصوت */}
        <div className="w-full mb-3">
          {/* الشريط الزمني */}
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full mt-4"
          />
        </div>

        {/* أزرار التحكم */}
        <div className="controls flex items-center justify-center gap-6 space-x-4">
          <button
            className="ml-4"
            onClick={() => console.log("Previous Track")}
          >
            <FontAwesomeIcon
              className="text-[--main-light-color]"
              icon={faForward}
            />
          </button>
          <button className="" onClick={togglePlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon
                className="text-[--main-light-color]"
                icon={faPause}
              />
            ) : (
              <FontAwesomeIcon
                className="text-[--main-light-color]"
                icon={faPlay}
              />
            )}
          </button>
          <button className="ml-2" onClick={() => console.log("Next Track")}>
            <FontAwesomeIcon
              className="text-[--main-light-color]"
              icon={faBackward}
            />
          </button>
        </div>

        {/* أيقونة مفضلة */}
        <button className="mt-2 absolute top-1 left-3">
          <FontAwesomeIcon
            className="text-[--main-light-color]"
            icon={faHeart}
          />
        </button>

        {/* مشغل الصوت */}
        {/* <ReactHowler src={audioSrc} playing={isPlaying} /> */}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-7">
        
      <div className="flex flex-wrap items-center justify-center gap-7">
        {surahs.map((surah) => (
          <div
            key={surah.id}
            className="flex flex-col w-[150px] relative gap-5 p-4 px-5 bg-[--secound-bg-color] items-center justify-center rounded-md"
          >
            {/* اسم السورة */}
            <p>{surah.name}</p>

            {/* زر التشغيل */}
            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[--main-dark-color]">
              <button onClick={togglePlayPause}>
                {isPlaying ? (
                  <FontAwesomeIcon className="text-white" icon={faPause} />
                ) : (
                  <FontAwesomeIcon
                    className="text-[--main-light-color]"
                    icon={faPlay}
                  />
                )}
              </button>
            </div>

            {/*  المفضلة */}
            <button className="mt-2 absolute top-1 left-3">
              <FontAwesomeIcon
                className="text-[--main-light-color]"
                icon={faHeart}
              />
            </button>
          </div>
        ))}
      
      </div>
      </div>
    </div>
  );
};

export default VoicePage;



