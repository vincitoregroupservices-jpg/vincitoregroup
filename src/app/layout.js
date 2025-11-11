// import { Bricolage_Grotesque } from "next/font/google";
// import "./globals.css";
// import Footer from "@/components/layout/Footer/Footer";
// import Navbar from "@/components/layout/Navbar/Navbar";
// import "leaflet/dist/leaflet.css";
// import { ToastContainer } from "react-toastify";

// const BricolageGrotesque = Bricolage_Grotesque({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

// export const metadata = {
//   title: "Vincitore Group",
//   description: "Transforming dreams into timeless architectural landmarks.",
//   icons: {
//     icon: "/favicon.png",
//     shortcut: "/favicon.png",
//     apple: "/favicon.png",
//   },
// };

// export default function RootLayout({ children }) {
//   // return (
//   //   <html lang="en">
//   //     <head>
//   //       {/* ✅ Material Symbols Icon Font */}
//   //       <link
//   //         href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//   //         rel="stylesheet"
//   //       />
//   //     </head>
//   //     <body className={`${BricolageGrotesque.className} bg-background`}>
//   //       <Navbar />
//   //       {children}

//   //       <ToastContainer position="bottom-right" autoClose={3000} />
//   //       <Footer />
//   //     </body>
//   //   </html>
//   // );

//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Material Symbols Icon Font */}
//         <link
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
//           rel="stylesheet"
//         />
//       </head>
//       <body
//         className={`${BricolageGrotesque.className} bg-background h-screen flex items-center justify-center`}
//       >
//         <h1 className="text-gold-dark text-3xl font-semibold">
//           Comming Soon...
//         </h1>
//       </body>
//     </html>
//   );
// }

"use client"; // 👈 Required for using useState & useEffect

import { useEffect, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { ToastContainer } from "react-toastify";

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// 🚀 Launch time (adjust to your target)
const launchDate = new Date("2025-11-11T23:11:11").getTime();

export default function RootLayout({ children }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${BricolageGrotesque.className} bg-background h-screen flex flex-col items-center justify-center text-center`}
      >
        <h1 className="text-gold-dark text-4xl font-bold mb-4 tracking-wide">
          🚀 Coming Soon...
        </h1>

        <div className="text-2xl text-gold flex gap-4">
          <div>
            <span className="block text-5xl font-semibold">
              {timeLeft.days}
            </span>
            <span className="text-sm text-gold-light">Days</span>
          </div>
          <div>
            <span className="block text-5xl font-semibold">
              {timeLeft.hours}
            </span>
            <span className="text-sm text-gold-light">Hours</span>
          </div>
          <div>
            <span className="block text-5xl font-semibold">
              {timeLeft.mins}
            </span>
            <span className="text-sm text-gold-light">Minutes</span>
          </div>
          <div>
            <span className="block text-5xl font-semibold">
              {timeLeft.secs}
            </span>
            <span className="text-sm text-gold-light">Seconds</span>
          </div>
        </div>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </body>
    </html>
  );
}
