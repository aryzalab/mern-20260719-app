import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Electro Shop",
  description: "E-commerce website for buying electronic product online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ToastContainer position="top-center" autoClose={1500} />
      </body>
    </html>
  );
}
