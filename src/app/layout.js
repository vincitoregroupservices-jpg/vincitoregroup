import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Vincitore Group",
  description: "Transforming dreams into timeless architectural landmarks.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Material Symbols Icon Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${BricolageGrotesque.className} bg-background`}>
        <Navbar />
        {children}

        {/* <ToastContainer position="bottom-right" autoClose={3000} /> */}
        <Footer />
      </body>
    </html>
  );
}
