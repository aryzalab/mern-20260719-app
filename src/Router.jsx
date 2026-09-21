import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";

import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import NodeCoursesPage from "./pages/NodeCoursesPage.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/courses/node" element={<NodeCoursesPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
        </Route>

        {/* Page not found */}
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
