import "./App.css";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import TrialSession from "./Pages/trialSession/TrialSession";
import Plan from "./Components/Plan/Plan";
import EgazatPage from "./Pages/EgazatPage";
import EgazatDetailsPage from "./Pages/EgazatDetailsPage";
import Header from "./Components/Header/Header";
import PricingPage from "./Pages/PricingPage";
import EasySteps from "./Components/EasySteps/EasySteps";
// import About from "./Pages/About/About";
import { ItsLibrary } from "./Pages/ItsLibrary/ItsLibrary";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Authpages/Login";
import ArabicLoginTailwind from "./Pages/Authpages/regester";
import Newpass from "./Pages/Authpages/newpass";
// import Joinus from "./Pages/Joinus";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import WishList from "./Pages/WishList/WishList";
import Blogs from "./Pages/Blogs/Blogs";
import AlShehk from "./Pages/AlShehk/AlShehk";
import SubscriptionForm from "./Pages/SubscriptionForm";
import CommonQuestions from "./Pages/ComonQuestions";
import Books from "./Components/books/Books";
import Visible from "./Components/Visible/Visible";
import ProfileTecher from "./Pages/ProfileTecher/ProfileTecher";
import Ratings from "./Pages/Ratings/Ratings";
import CoursesPage from "./Pages/CoursesPage/CoursesPage";
import whatsapp from "./assets/images/iconHeader/whatsap.png";
import ViewBook from "./Components/ViewBook/ViewBook";

// animate css
import "animate.css";

// Swipper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BlogsDetails from "./Pages/BlogsDetails/BlogsDetails";
// import ContactPage from "./Pages/contact/contact";
import ReadPage from "./Components/Read/ReadPage";
import VoicePage from "./Components/Itsvoice/VoicePage";
// import ContactPage from "./Pages/contact/ContactPage";
import CartStoreProvider from "./Context/CartContext.API";
import More from "./Pages/More/More";


function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <Router>
          {/* <Header /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/shoppingCart" 
              element={
                <CartStoreProvider>
                  <ShoppingCart />
                </CartStoreProvider>
              } 
            />
            <Route 
              path="/subsriptionform" 
              element={
                <CartStoreProvider>
                  <SubscriptionForm />
                </CartStoreProvider>
              }
            />
            <Route path="/wishList" element={<WishList />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/elsheikhs" element={<AlShehk />} />
            <Route path="/trialSession" element={<TrialSession />} />
            <Route path="/plan" element={<Plan />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/more"  element={<More/>}/>
            <Route path="/easySteps" element={<EasySteps />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/egazat" element={<EgazatPage />} />
            <Route path="/itsLibrary" element={<ItsLibrary />} />
            <Route path="/read" element={<ReadPage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/viewBook" element={<ViewBook />} />
            <Route path="/visible" element={<Visible />} />
            <Route path="/Voice" element={<VoicePage />} />
            <Route path="/egazat/:id" element={<EgazatDetailsPage />} />
            <Route path="/pricingpage" element={<PricingPage />} />
            <Route path="/commonQuestions" element={<CommonQuestions />} />
            <Route path="/ProfileTeacher/:name" element={<ProfileTecher />} />
            <Route path="/Ratings" element={<Ratings />} />
            <Route path="/coursesPage" element={<CoursesPage />} />
            <Route path="/coursesdetails/:name" element={<Courses />} />
            <Route path="/blogsdetails/:id" element={<BlogsDetails />} />
            <Route path="/qurancourse" element={<Courses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Regester" element={<ArabicLoginTailwind />} />
            <Route path="/newpass" element={<Newpass />} />
            {/* <Route path="/joinus" element={<Joinus />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
          <Footer />
          <a href="#">
            <img
              className="w-[50px] h-[50px] rounded-[50%] cursor-pointer fixed bottom-2 right-2 md:bottom-5 md:right-5 "
              src={whatsapp}
              alt=""
            />
          </a>
        </Router>
      </div>
    </div>
  );
}

export default App;
