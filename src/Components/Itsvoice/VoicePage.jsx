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
import axios from "axios";
import useFav from "../../hooks/useFav";

const VoicePage = () => {
  const { addToFav, AlertContainer } = useFav()
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSurah, setCurrentSurah] = useState(null); // Track the current Surah

  const HandelAddToFav = async (id) => {
    await addToFav({
      item_type: "App\\Models\\Audio",
      item_id: id
    })
  }
  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get("https://quran.codecraft1.com/api/surah");
        setSurahs(response.data.data);
        setLoading(false);
      } catch {
        setError("Error fetching Surahs.");
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCardClick = (surah) => {
    setCurrentSurah(surah); // Set the clicked Surah as the current Surah
    setIsPlaying(true); // Automatically start playing
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
          className="p-2 rounded-md border-2 bg-[#EAF8F4] w-36 md:w-80 pr-10 focus:outline-none"
          style={{
            borderColor: "var(--main-dark-color)",
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute text-green-700 left-28 md:left-72 top-1/2 transform -translate-y-1/2 scale-x-[-1]"
        />
      </div>

      {/* Main Player */}
      <div
        style={{ boxShadow: "0 1px 6px -1px var(--main-green-color)" }}
        className="audio-player shadow-md p-4 mx-1 rounded-lg flex flex-col items-center my-7 relative"
      >
        <h3 className="text-lg font-semibold mb-2">
          {currentSurah ? currentSurah.name : "اختر سورة للتشغيل"}
        </h3>

        <div className="w-full mb-3">
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full mt-4"
          />
        </div>

        <div className="controls flex items-center justify-center gap-6 space-x-4">
          <button className="ml-4" onClick={() => console.log("Previous Track")}>
            <FontAwesomeIcon className="text-[--main-light-color]" icon={faBackward} />
          </button>
          <button onClick={togglePlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon className="text-[--main-light-color]" icon={faPause} />
            ) : (
              <FontAwesomeIcon className="text-[--main-light-color]" icon={faPlay} />
            )}
          </button>
          <button className="ml-2" onClick={() => console.log("Next Track")}>
            <FontAwesomeIcon className="text-[--main-light-color]" icon={faForward} />
          </button>
        </div>

        <button className="mt-2 absolute top-1 left-3">
          <FontAwesomeIcon className="text-[--main-light-color]" icon={faHeart} />
        </button>
      </div>

      {/* Surah Cards */}
      <div className="flex flex-wrap items-center justify-center gap-7">
        {loading && <p>جاري تحميل السور...</p>}
        {error && <p>{error}</p>}
        {!loading &&
          !error &&
          surahs.map((surah) => (
            <div
              key={surah.id}
              onClick={() => handleCardClick(surah)}
              className="flex flex-col w-[150px] relative gap-5 p-4 px-5 bg-[--secound-bg-color] items-center justify-center rounded-md cursor-pointer"
            >
              <p>{surah.name || "اسم السورة غير متوفر"}</p>

              <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[--main-dark-color]">
                <button>
                  <FontAwesomeIcon
                    className="text-[--main-light-color]"
                    icon={faPlay}
                  />
                </button>
              </div>

              <button className="mt-2 absolute top-1 left-3" onClick={() => HandelAddToFav(surah.id)}>
                <FontAwesomeIcon className="text-[--main-light-color]" icon={faHeart} />
              </button>
            </div>
          ))}
      </div>
      <AlertContainer />
    </div>
  );
};

export default VoicePage;
