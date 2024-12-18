import { useState, useEffect } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../assets/images/general/SVG (1).png";



const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="mb-7">
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

      <div className="w-full flex justify-center my-8">
        <h2 className="globalMain-header text-[28px]">مكتبة موقع (...)</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {/* <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div> */}

        {books.map((book, index) => (
          <div
            key={index}
            className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center"
          >
            <img
              src={book.image || <img src={img} alt="img" />}
              alt={book.title}
            />
            <p className="text-center">{book.title || <p>Seerah and Hadeeth</p>}</p>
          </div>
        ))}

      </div>

      <div className="w-full flex justify-center mt-16 mb-8">
        <h2 className="globalMain-header text-[28px]">كتب القرآن والتجويد</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div>

        <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div>

        <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div>

        <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div>

        <div className="flex flex-col w-[150px] md:min-w-[200px] pt-16 pb-2 px-5 border border-[--main-color] rounded-tl-[100px] rounded-tr-[100px] gap-5 bg-[--secound-bg-color] items-center justify-center">
          <img src={img} alt="img" />
          <p className="text-center">Seerah and Hadeeth</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
