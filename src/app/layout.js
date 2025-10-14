import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";

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
      <body className={`${BricolageGrotesque.className} bg-background`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
