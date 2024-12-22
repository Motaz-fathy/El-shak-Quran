import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./visible.css";
import useFav from "../../hooks/useFav";

const Visible = () => {
  const { addToFav, AlertContainer } = useFav()
  const [recitations, setRecitations] = useState([]); // Store the fetched recitations
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video

  const HandelAddToFav = async (id) => {
    await addToFav({
      item_type: "App\\Models\\Recitation",
      item_id: id
    })
  }
  // Fetch the recitations data when the component mounts
  useEffect(() => {
    fetch("https://quran.codecraft1.com/api/recitations")
      .then((response) => response.json())
      .then((data) => setRecitations(data))
      .catch((error) => console.error("Error fetching recitations:", error));
  }, []);

  // Handle video click and update the video player
  const handleVideoClick = (videoUrl, title) => {
    setSelectedVideo({ videoUrl, title });
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

      <div className="flex flex-col gap-2 items-center justify-center mb-7 relative">
        <h3 className="font-semibold text-sm md:text-2xl text-[--main-green-color]">
          {selectedVideo ? selectedVideo.title : "اختر الفيديو"}{" "}
          {/* Display title if video is selected */}
        </h3>
        <video
          className="min-w-[320px] min-h-[50vh] border-[2px] border-[--main-green-color] rounded-md"
          src={selectedVideo ? selectedVideo.videoUrl : ""}
          controls
        ></video>

        <FontAwesomeIcon
          className="text-[--main-light-color] absolute top-10 left-10"
          icon={faHeart}
        />
      </div>

      <div className="flex flex-col items-center justify-center font-bold bg-[--secound-bg-color] py-2">
        <h2 className="my-5 text-[26px] text-[--main-dark-color]">
          فيديوهات مقترحة
        </h2>

        <div className="flex items-center justify-center">
          <Swiper
            slidesPerView={"auto"}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="custom-swiper px-[5px]"
          >
            {recitations.slice(0, 5).map((recitation) => (
              <SwiperSlide key={recitation.id} className="cont px-[7px]">
                <div
                  className="cursor-pointer relative"
                  onClick={() =>
                    handleVideoClick(recitation.video, recitation.title)
                  }
                >
                  {/* Video element here */}
                  <video className="w-full" src={recitation.video} muted />
                  <h4 className="text-center mt-2 text-sm text-[--main-dark-color]">
                    {recitation.title}
                  </h4>
                  <FontAwesomeIcon
                    className="text-[--main-light-color] absolute top-10 left-10"
                    icon={faHeart}
                    onClick={() => HandelAddToFav(recitation.id)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {recitations.slice(5).map((recitation) => (
          <div
            key={recitation.id}
            className="bg-gray-200 relative h-40 border-[1px] border-[--main-green-color] rounded-md"
            onClick={() => handleVideoClick(recitation.video, recitation.title)}
          >
            <FontAwesomeIcon
              className="text-[--main-light-color] absolute top-10 left-10"
              icon={faHeart}
            />
          </div>
        ))}
      </div>
      <AlertContainer />
    </div>
  );
};

export default Visible;
