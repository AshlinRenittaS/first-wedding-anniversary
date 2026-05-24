import Navbar from "../components/Navbar";
import heroBg from "../assets/home.png";

import {
  Heart,
} from "lucide-react";

const Home = () => {
  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-no-repeat
        relative
        overflow-hidden
      "
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center bottom",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-[#fff5f2]/35"></div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div
          className="
            min-h-screen
            flex
            flex-col
            items-center
            justify-start
            text-center

            px-5

            pt-40
            sm:pt-44
            md:pt-48

            pb-10
          "
        >
          {/* Happy */}
          <p
            className="
              title-font
              text-[#7a1020]
              leading-none

              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Happy
          </p>

          {/* Anniversary */}
          <h1
            className="
              title-font
              text-[#7a1020]
              leading-[0.9]
              mt-1

              text-[58px]
              sm:text-[90px]
              md:text-[130px]
              lg:text-[170px]
            "
          >
            Anniversary
          </h1>

          {/* Subtitle */}
          <p
            className="
              mt-4
              text-[#4e2c2c]
              heading-font

              text-sm
              sm:text-lg
              md:text-2xl
            "
          >
            Two hearts. Two countries. One love.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 md:w-24 h-[1px] bg-[#7a1020]/40"></div>

            <Heart
              size={16}
              className="fill-[#7a1020] text-[#7a1020]"
            />

            <div className="w-12 md:w-24 h-[1px] bg-[#7a1020]/40"></div>
          </div>

          {/* Names */}
          <h2
            className="
              mt-6
              text-[#7a1020]
              heading-font

              text-2xl
              sm:text-4xl
              md:text-5xl
            "
          >
            ASHLIN ♡ AJIN
          </h2>

          {/* Date */}
          <p
            className="
              mt-3
              text-[#4e2c2c]
              heading-font

              text-base
              sm:text-xl
              md:text-2xl
            "
          >
            26 May 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;