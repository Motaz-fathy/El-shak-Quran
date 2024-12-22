

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
import About from "./Pages/About/About";
import { ItsLibrary } from "./Pages/ItsLibrary/ItsLibrary";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Authpages/Login";
import ArabicLoginTailwind from "./Pages/Authpages/regester";
import Newpass from "./Pages/Authpages/newpass";
import Joinus from "./Pages/Joinus";
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
import ReadPage from "./Components/Read/ReadPage";
import VoicePage from "./Components/Itsvoice/VoicePage";
import ContactPage from "./Pages/contact/ContactPage";
import { ProtectedRoute, PublicRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import NotFound from "./Pages/NotFound/NotFound";
import CartStoreProvider from "./Context/CartContext/CartContext";

function App() {
  return (
    <div className="app">
      <div className="appContainer">
        <Router>
          <Header />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/regester" element={<PublicRoute><ArabicLoginTailwind /></PublicRoute>} />
            <Route path="/newpass" element={<PublicRoute><Newpass /></PublicRoute>} />
            <Route path="/joinus" element={<PublicRoute><Joinus /></PublicRoute>} />
            <Route path="/contact" element={<PublicRoute><ContactPage /></PublicRoute>} />

            {/* Protected Routes */}
            <Route 
              path="/shoppingCart" 
              element={
                <CartStoreProvider>
                  <ProtectedRoute>
                  <ShoppingCart />
                  </ProtectedRoute>
                </CartStoreProvider>
              } 
            />
            <Route 
              path="/subsriptionform" 
              element={
                <CartStoreProvider>
                  <ProtectedRoute>
                  <SubscriptionForm />
                  </ProtectedRoute>
                </CartStoreProvider>
              }
            />
            <Route path="/wishList" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
            <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
            <Route path="/elsheikhs" element={<ProtectedRoute><AlShehk /></ProtectedRoute>} />
            <Route path="/trialSession" element={<ProtectedRoute><TrialSession /></ProtectedRoute>} />
            <Route path="/plan" element={<ProtectedRoute><Plan /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/easySteps" element={<ProtectedRoute><EasySteps /></ProtectedRoute>} />
            <Route path="/egazat" element={<ProtectedRoute><EgazatPage /></ProtectedRoute>} />
            <Route path="/itsLibrary" element={<ProtectedRoute><ItsLibrary /></ProtectedRoute>} />
            <Route path="/read" element={<ProtectedRoute><ReadPage /></ProtectedRoute>} />
            <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
            <Route path="/viewBook" element={<ProtectedRoute><ViewBook /></ProtectedRoute>} />
            <Route path="/visible" element={<ProtectedRoute><Visible /></ProtectedRoute>} />
            <Route path="/Voice" element={<ProtectedRoute><VoicePage /></ProtectedRoute>} />
            <Route path="/egazat/:id" element={<ProtectedRoute><EgazatDetailsPage /></ProtectedRoute>} />
            <Route path="/pricingpage" element={<ProtectedRoute><PricingPage /></ProtectedRoute>} />
            <Route path="/subsriptionform" element={<ProtectedRoute><SubscriptionForm /></ProtectedRoute>} />
            <Route path="/commonQuestions" element={<ProtectedRoute><CommonQuestions /></ProtectedRoute>} />
            <Route path="/ProfileTeacher/:name" element={<ProtectedRoute><ProfileTecher /></ProtectedRoute>} />
            <Route path="/Ratings" element={<ProtectedRoute><Ratings /></ProtectedRoute>} />
            <Route path="/coursesPage" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
            <Route path="/coursesdetails/:name" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/blogsdetails/:id" element={<ProtectedRoute><BlogsDetails /></ProtectedRoute>} />
            <Route path="/qurancourse" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
        <a href="#">
          <img
            className="w-[50px] h-[50px] rounded-[50%] cursor-pointer fixed bottom-2 right-2 md:bottom-5 md:right-5"
            src={whatsapp}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default App;