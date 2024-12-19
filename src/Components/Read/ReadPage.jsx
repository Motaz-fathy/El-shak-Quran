import { useState, useEffect } from "react";
import axios from "axios";

const QuranReader = () => {
  const [quranPages, setQuranPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchPage, setSearchPage] = useState(""); // New state for search input

  useEffect(() => {
    // Fetch Quran data with pages
    axios
      .get("https://api.alquran.cloud/v1/quran/ar.alafasy") // Replace with a suitable Quran API
      .then((response) => {
        const surahs = response.data.data.surahs;
        const pages = surahs.flatMap((surah) =>
          surah.ayahs.map((ayah) => ({
            text: ayah.text,
            page: ayah.page,
            surah: surah.name, // Include Surah name
            number: ayah.numberInSurah, // Include Ayah number
          }))
        );

        const groupedPages = groupBy(pages, "page");
        setQuranPages(Object.values(groupedPages));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Quran data:", error);
      });
  }, []);

  const groupBy = (array, key) =>
    array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = () => {
    const pageNum = parseInt(searchPage, 10);
    if (pageNum >= 1 && pageNum <= quranPages.length) {
      setCurrentPage(pageNum); // Set current page to the searched page
    } else {
      alert("الصفحة غير موجودة!"); // Show error alert for invalid page
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-9 mt-4 relative">
      <div
        className="bg-white shadow-md rounded-lg p-4 border-2 border-green-700"
        style={{
          width: "80%", // Increased width for the container (80% of the screen width)
          maxWidth: "1400px", // Maximum width for larger screens
          height: "calc(100vh - 230px)", // Adjusted height to be slightly larger (changed to 230px)
        }}
      >
        <h1 className="text-2xl font-bold text-center text-green-700 mb-4">
          القرآن الكريم
        </h1>

        {/* Centered Search Bar */}
        <div className="flex justify-center mb-4">
          <input
            type="number"
            value={searchPage}
            onChange={(e) => setSearchPage(e.target.value)}
            placeholder="ادخل رقم الصفحة"
            className="p-2 rounded-md border-2 bg-[#EAF8F4] w-36 md:w-80 pr-10 focus:outline-none"
            style={{
              borderColor: "var(--main-dark-color)", // Set border color
            }}
          />
          <button
            onClick={handleSearch}
            className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md"
          >
            بحث
          </button>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500">جارٍ تحميل البيانات...</p>
        ) : (
          <div
            className="overflow-auto"
            style={{ height: "calc(100% - 120px)" }}
          >
            {/* Content area with scrollable Ayahs */}
            <div className="p-4 border rounded-lg bg-[#EAF8F4]">
              {/* Display Surah Title */}
              <h2 className="text-lg font-bold text-right text-green-700 mb-2">
                {quranPages[currentPage - 1][0].surah}
              </h2>
              {/* Display Ayahs */}
              {quranPages[currentPage - 1].map((ayah, index) => (
                <p
                  key={index}
                  className="text-xl text-right leading-loose my-2 font-arabic"
                  style={{ direction: "rtl" }}
                >
                  {ayah.text}{" "}
                  <span className="text-sm text-gray-500">({ayah.number})</span>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pagination Bar Positioned Outside the Frame */}
      <div
        className="flex justify-center absolute bottom-5 left-0 right-0"
        style={{ zIndex: 10 }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          السابق
        </button>
        <span className="px-4 py-2 mx-1 bg-gray-200 rounded">
          الصفحة {currentPage} من {quranPages.length}
        </span>
        <button
          disabled={currentPage === quranPages.length}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${
            currentPage === quranPages.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default QuranReader;
