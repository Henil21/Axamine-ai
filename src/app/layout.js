import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";

export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Add the weight variants you need
  subsets: ["latin"], // Add the subset variants you need
  variable: "--font-poppins", // Optional: Add a variable name for the font family
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "axamine.ai",
  description: "AI integrated Diagnostic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
          {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
