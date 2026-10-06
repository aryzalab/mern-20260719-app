import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: "Electro Shop",
  description: "E-commerce website for buying electronic product online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MainLayout>
        <Header />
        <main className="min-h-screen dark:bg-gray-900">{children}</main>
        <Footer />
        <ToastContainer position="top-center" autoClose={1500} />
      </MainLayout>
    </html>
  );
}
