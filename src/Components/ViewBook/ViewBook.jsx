import { useLocation} from "react-router-dom";
import PDFViewer from "pdf-viewer-reactjs";
const ViewBook = () => {

  const location = useLocation();
  const book = location.state?.book;

  console.log("Book" , book)
  return (
    <div className="p-5">
     <h1 className="text-2xl font-bold mb-4">محتوى الكتاب</h1>
          {book.description && <p className="mb-4">{book.description}</p>}
          <div className="pdf-viewer">
          <PDFViewer
  document={{
    url: book?.file,
  }}
  renderError={(error) => <p>حدث خطأ أثناء تحميل الملف: {error.message}</p>}
/>
          </div>
     
    </div>
  );
};

export default ViewBook;