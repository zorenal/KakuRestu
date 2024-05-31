import { Crimson_Text, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className} style={{ fontSize: '16px' }}>
        <Navbar />
        <main className={crimson.className} style={{ fontSize: '18px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
