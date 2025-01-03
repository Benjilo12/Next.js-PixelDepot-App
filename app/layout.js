import "@/app/_styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/footer/Footer";
import Header from "./_components/Header";

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
        <section>
          <Navbar />
          {/* <Header /> */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
