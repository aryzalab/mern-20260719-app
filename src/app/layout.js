import "./globals.css";

export const metadata = {
  title: "Electro Shop",
  description: "E-commerce website for buying electronic product online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full`}>
      <body className="min-h-full flex flex-col">
        Hello from root layout
        {children}
      </body>
    </html>
  );
}
