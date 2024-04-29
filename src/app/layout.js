import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";


export const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'], // Add the weight variants you need
  subsets: ['latin'], // Add the subset variants you need
  variable: '--font-poppins', // Optional: Add a variable name for the font family
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "axamin.ai",
  description: "AI integrated Diagnostic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
        </body>
    </html>
  );
}
