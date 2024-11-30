import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/footer/Footer";

//configure fonts
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / PixelDepot",
    default: "Welcome / PixelDepot",
  },
  description:
    "Looking for beautiful images for your website, blog, or social media? PixelDepot offers a vast collection of downloadable photos in every category.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} min-h-screen`}>
        <div>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
