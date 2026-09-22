import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import MainLayout from "./layouts/MainLayout";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
        </Route>

        <Route path="*" element={<h1>404 Not found page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
