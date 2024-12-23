import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewBook = () => {
  const { id } = useParams(); // الحصول على معرف الكتاب من URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://quran.codecraft1.com/api/books/${id}`
        );
        setBook(response.data); // افتراض أن البيانات تحتوي على معلومات الكتاب
        setLoading(false);
      } catch (err) {
        setError("تعذر تحميل محتوى الكتاب.");
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="p-5">
      {loading ? (
        <p>جاري تحميل محتوى الكتاب...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">محتوى الكتاب</h1>
          {book.description && <p className="mb-4">{book.description}</p>}
          <div className="pdf-viewer">
            {book.file ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                <Viewer fileUrl={book.file} />
              </Worker>
            ) : (
              <p>لا يوجد ملف PDF لعرضه.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewBook;