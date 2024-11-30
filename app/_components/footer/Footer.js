import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white-200 ">
      <div className="container mx-auto py-14 px-6">
        <div className="grid md:grid-cols-12  grid-cols-1 gap-8">
          <div className="lg:col-span-4 col-span-12">
            <Link href="/">
              <Image
                className="mb-4 ml-5"
                src="/logo.png"
                height="120"
                width="120"
                alt="PixelDepot"
                quality={80}
              />
              <span className="md:ml-2 text-white text-2xl pt-3 lg:text-3xl ml-6">
                PixelDepot
              </span>
            </Link>
          </div>
          <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold text-2xl md:ml-0 ml-6">
              Company{" "}
            </h5>
            <ul className="list-none mt-6 space-y-2 text-white text-[1.0rem] md:ml-7 ml-[2.7rem]">
              <li>
                <Link
                  href="/"
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/upload"
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold text-2xl md:ml-0 ml-6">
              PexelDepot{" "}
            </h5>
            <ul className="list-none space-x-2 mt-6 text-white cursor-pointer md:ml-4 ml-[2.7rem] g">
              <li className="md:mb-1 mb-1 hover:text-gray-400">
                Terms of Services
              </li>
              <li className="md:mb-1 mb-1 hover:text-gray-400">
                Privacy Policy
              </li>
              <li className="md:mb-1 mb-1 hover:text-gray-400">License</li>
              <li className="md:mb-1 mb-1 hover:text-gray-400">Imprint</li>
              <li className="md:mb-1 mb-1 hover:text-gray-400">
                Cookies Policy
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-12">
            <h5 className="tracking-wide text-gray-100 font-semibold text-2xl md:ml-0 ml-6">
              Newsletters{" "}
            </h5>
            <p className="mt-6 text-gray-400">
              Sign up and receive the latest tips via email....
            </p>
            <form action="">
              <div className="my-3 text-white">
                <label for="email-input " className="text-gray-400">
                  Write your email <span className="text-red-600 mb-2">.</span>
                </label>
                <input
                  type="email"
                  id="email-input"
                  className="mt-3 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-500 focus:border-[#FFCDA3] focus:ring-0"
                  placeholder="name@example.com"
                />
                {
                  <input
                    type="submit"
                    className="py-2 px-5 tracking-wide border duration-500 text-clip text-center bg-[#FFCDA3] hover:bg-[#FFCD88] border-[#FFCDA3] hover:border-[#FFCD88] text-black rounded-md w-full mt-2 cursor-pointer"
                  />
                }
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700">
        <div className="md:text-left text-center container mx-auto py-7 px-6 text-gray-400">
          <p className="mb-0">&copy;2024 benjaminprymz</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
