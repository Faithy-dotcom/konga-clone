import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Category from './pages/Category';
import CustomerSupport from './pages/CustomerSupport';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResult from './pages/SearchResult';
import TermsCondition from './pages/TermsCondition';
import UserAccount from './pages/UserAccount';
import WishList from "./pages/wishlist";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/category" element={<Category />} />
        <Route path="/customersupport" element={<CustomerSupport />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchresult" element={<SearchResult />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/useraccount" element={<UserAccount />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </Router>
  );
}

export default App;
