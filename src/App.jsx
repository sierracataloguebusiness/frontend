import React from "react";
import Navbar from "./component/Navbar/Navbar.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Deals from "./pages/Deals.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import PrivateRoute from "./component/ProtectedRoute.jsx";
import { ToastContainer, toast, Slide } from "react-toastify";
import BlogDetail from "./pages/blog/BlogDetail.jsx";
import ProductDetail from "./pages/shop/ProductDetail.jsx";
import Cart from "./pages/shop/Cart.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Checkout from "./pages/shop/CheckOut.jsx";
import VendorGuideline from "./pages/vendor/VendorGuideline.jsx";
import VendorApplicationForm from "./pages/vendor/VendorApplicationForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import FAQ from "./pages/FAQ.jsx";

const App = () => {
  function Layout() {
    const location = useLocation();

    const hideNavbarRoutes = ["/dashboard"];

    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    return <>{!shouldHideNavbar && <Navbar />}</>;
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <Layout />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/product/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/vendor-guidelines" element={<VendorGuideline />} />
        <Route path="/vendor-application" element={<VendorApplicationForm />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute children={<Dashboard />} />}
        />
        <Route path="/cart" element={<PrivateRoute children={<Cart />} />} />
        <Route
          path="/checkout"
          element={<PrivateRoute children={<Checkout />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
