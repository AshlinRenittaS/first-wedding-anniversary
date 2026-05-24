import Navbar from "../components/Navbar";

import {
  Heart,
} from "lucide-react";

/* BACKGROUND IMAGE */
import foreverBg from "../assets/forever.png";

const Forever = () => {

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden relative">

      {/* Full Background */}
      <img
        src={foreverBg}
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-5
          md:px-10
          pt-32
          pb-16
        "
      >

        {/* Heading */}
        <h1
          className="
            title-font
            text-[#7a1020]
            text-4xl
            md:text-7xl
          "
        >
          Forever & Always
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mt-5">

          <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>

          <Heart
            size={16}
            className="fill-[#7a1020] text-[#7a1020]"
          />

          <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>
        </div>

        {/* Heart Text */}
        <div className="mt-20 md:mt-28">

          <h2
            className="
              title-font
              text-[#7a1020]
              text-6xl
              md:text-[120px]
              leading-tight
            "
          >
            You are
            <br />
            my home
          </h2>
        </div>

        {/* Description */}
        <p
          className="
            mt-14
            md:mt-20
            text-[#5c3b3b]
            text-base
            md:text-2xl
            leading-8
            md:leading-10
            max-w-3xl
            heading-font
          "
        >
          Thank you for being the most beautiful part
          of my life. Here's to our forever.
        </p>

        {/* Countdown Card */}
        <div
          className="
            mt-10
            md:mt-14
            bg-white/35
            backdrop-blur-md
            rounded-[25px]
            md:rounded-[35px]
            px-5
            md:px-10
            py-5
            md:py-8
            border
            border-white/40
            shadow-2xl
            w-full
            max-w-[700px]
          "
        >

          <p className="text-[#5c3b3b] text-sm md:text-lg">
            Until Our Next Anniversary
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 md:gap-5 mt-5">

            {[
              { value: "365", label: "Days" },
              { value: "12", label: "Hours" },
              { value: "45", label: "Minutes" },
              { value: "30", label: "Seconds" },
            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-white/50
                  rounded-2xl
                  py-4
                  md:py-5
                "
              >

                <h2
                  className="
                    text-[#7a1020]
                    text-2xl
                    md:text-5xl
                    title-font
                  "
                >
                  {item.value}
                </h2>

                <p
                  className="
                    mt-1
                    text-[#5c3b3b]
                    text-[11px]
                    md:text-sm
                  "
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          className="
            mt-10
            bg-[#7a1020]
            hover:bg-[#5c0b18]
            transition-all
            duration-300
            text-white
            px-8
            md:px-12
            py-4
            rounded-full
            shadow-2xl
            flex
            items-center
            gap-3
            text-sm
            md:text-base
          "
        >

          REPLAY OUR JOURNEY

          <Heart
            size={15}
            className="fill-white text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default Forever;