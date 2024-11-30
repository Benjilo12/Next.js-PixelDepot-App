import Image from "next/image";
import styles from "./about.module.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";

function page({}) {
  return (
    <div>
      <h1 className="flex justify-center mt-10 text-4xl md:text-5xl font-extrabold">
        PixelDeport
      </h1>
      <section className={styles.container}>
        <div className="flex flex-col text-white text-center ">
          <h1 className="text-4xl mb-4 md:text-5xl">Empowering Creators</h1>
          <p className="text-2xl mt-3">
            By providing free stock photos PixelDeport helps millions of
            creators all over the world to easily create beautiful products and
            designs.
          </p>
        </div>
      </section>
      <section className="mb-[120px]">
        <div className="flex justify-center items-center px-5 bg-gray-100 mt-[110px]">
          <div className="flex flex-wrap max-w-[1450px] bg-white rounded-lg overflow-hidden shadow-md">
            {/* Left Side */}
            <div className="w-full md:flex-[1_1_50%] p-4">
              <Image
                src={about1}
                layout="responsive"
                width={800}
                height={400}
                quality={80}
                placeholder="blur"
                alt="about"
              />
            </div>

            {/* Right Side */}
            <div className="w-full md:flex-[1_1_50%] p-6 flex flex-col justify-center text-left">
              <h2 className="mb-4 text-center text-2xl md:text-4xl">
                On your website, blog or app
              </h2>
              <p className="text-lg md:text-2xl text-center leading-7 md:leading-9">
                Use the photos and videos online whether it’s a website,
                e-commerce shop, newsletter, e-book, presentation, blog, or a
                template you sell.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex justify-center items-center bg-gray-100 mt-10">
          <div className="flex flex-wrap max-w-[1450px] bg-white rounded-lg overflow-hidden shadow-md">
            {/* Right Side */}
            <div className="w-full md:flex-[1_1_50%] p-6 flex flex-col justify-center text-left">
              <h2 className="mb-4 text-center text-2xl md:text-4xl">
                Tell your story with imagery
              </h2>
              <p className="text-lg md:text-2xl text-center leading-7 md:leading-9">
                Some of the use cases for which you can use photos from
                PixelDeport.
              </p>
            </div>

            {/* Left Side */}
            <div className="w-full md:flex-[1_1_50%] p-4 flex flex-col-reverse md:flex-col">
              <Image
                src={about2}
                layout="responsive"
                width={800}
                height={400}
                quality={80}
                placeholder="blur"
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
