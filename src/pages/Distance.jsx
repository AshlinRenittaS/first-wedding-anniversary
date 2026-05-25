import Navbar from "../components/Navbar";

import {
  Heart,
} from "lucide-react";

/* IMPORT MAP IMAGE */
import distanceMap from "../assets/distance.jpeg";

const Distance = () => {

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#7a1020]/10 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main */}
      <div className="relative z-10 pt-28 md:pt-32 px-5 md:px-20 pb-20">

        {/* Heading */}
        <div className="text-center">

          <h1
            className="
              title-font
              text-[#7a1020]

              text-4xl
              md:text-7xl

              leading-tight
            "
          >
            Miles Apart,
            <br />
            Hearts Together
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">

            <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>

            <Heart
              size={18}
              className="fill-[#7a1020] text-[#7a1020]"
            />

            <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>
          </div>
        </div>

        {/* MAP IMAGE */}
        <div className="mt-16 flex justify-center">

          <div
            className="
              w-full
              max-w-5xl

              bg-[#f3e3dc]

              rounded-[40px]

              p-6
              md:p-10

              shadow-2xl
              border
              border-white/40
            "
          >

            <img
              src={distanceMap}
              alt="Distance Map"

              className="
                w-full
                h-auto
                object-contain
              "
            />
          </div>
        </div>

        {/* DISTANCE CARD */}
        <div className="max-w-2xl mx-auto mt-14">

          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[30px]
              p-8
              shadow-2xl
              border
              border-white/40
              text-center
            "
          >

            <p className="text-[#5c3b3b] text-lg">
              Distance Between Us
            </p>

            <h2
              className="
                mt-4
                title-font
                text-[#7a1020]

                text-5xl
                md:text-6xl
              "
            >
              2,588 km
            </h2>

            <p className="mt-3 text-[#5c3b3b]">
              But love knows no distance.
            </p>
          </div>
        </div>

        {/* TIME CARDS */}
        <div
          className="
            grid
            grid-cols-2
            gap-5

            mt-10
            max-w-2xl
            mx-auto
          "
        >

          {/* INDIA */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[25px]
              p-6
              shadow-2xl
              border
              border-white/40
              text-center
            "
          >

            <h2
              className="
                text-[#7a1020]
                heading-font

                text-xl
                md:text-2xl
              "
            >
              India
            </h2>

            <p
              className="
                mt-5
                title-font
                text-[#7a1020]

                text-3xl
                md:text-5xl
              "
            >
              08:30 PM
            </p>

            <p className="mt-3 text-[#5c3b3b]">
              IST
            </p>
          </div>

          {/* DUBAI */}
          <div
            className="
              bg-white/70
              backdrop-blur-xl
              rounded-[25px]
              p-6
              shadow-2xl
              border
              border-white/40
              text-center
            "
          >

            <h2
              className="
                text-[#7a1020]
                heading-font

                text-xl
                md:text-2xl
              "
            >
              Dubai
            </h2>

            <p
              className="
                mt-5
                title-font
                text-[#7a1020]

                text-3xl
                md:text-5xl
              "
            >
              07:00 PM
            </p>

            <p className="mt-3 text-[#5c3b3b]">
              GST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distance;