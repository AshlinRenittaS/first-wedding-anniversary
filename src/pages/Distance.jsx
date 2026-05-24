import Navbar from "../components/Navbar";

import {
  Heart,
  Plane,
  Clock3,
  MapPin,
} from "lucide-react";

const Distance = () => {

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden relative">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="pt-32 px-5 md:px-20 pb-20">

        {/* Heading */}
        <div className="text-center">

          <h1 className="title-font text-5xl md:text-7xl text-[#7a1020]">
            Miles Apart,
            <br />
            Hearts Together
          </h1>

          <div className="flex justify-center mt-5">

            <Heart
              size={18}
              className="fill-[#7a1020] text-[#7a1020]"
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="relative mt-20 max-w-6xl mx-auto">

          <div className="bg-[#f3e3dc] rounded-[40px] p-10 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt=""
              className="w-full opacity-20"
            />

            <div className="absolute left-[18%] top-[45%] md:left-[25%] md:top-[42%] text-center">

              <Heart
                size={18}
                className="fill-[#7a1020] text-[#7a1020] mx-auto"
              />

              <h2 className="mt-2 text-[#7a1020] font-semibold text-lg">
                India
              </h2>

              <p className="text-sm text-[#5c3b3b]">
                Chennai
              </p>
            </div>

            <div className="absolute right-[18%] top-[38%] md:right-[25%] md:top-[38%] text-center">

              <Heart
                size={18}
                className="fill-[#7a1020] text-[#7a1020] mx-auto"
              />

              <h2 className="mt-2 text-[#7a1020] font-semibold text-lg">
                Dubai
              </h2>

              <p className="text-sm text-[#5c3b3b]">
                UAE
              </p>
            </div>

            <div className="hidden md:block absolute left-[32%] top-[45%] w-[35%] border-t-2 border-dashed border-[#7a1020]/40 rotate-[-8deg]"></div>

            <Plane
              size={32}
              className="hidden md:block absolute left-[50%] top-[38%] text-[#7a1020]"
            />
          </div>
        </div>

        {/* Map Section */}
{/* <div className="mt-20 flex justify-center">

  <div className="relative w-full max-w-4xl h-[220px]">

    <div className="absolute left-0 bottom-0 text-center">

      <img
        src="https://i.imgur.com/Y6a7R6m.png"
        alt=""
        className="w-40 opacity-25"
      />

      <div className="absolute top-10 left-16">

        <Heart
          size={18}
          className="fill-[#7a1020] text-[#7a1020] mx-auto"
        />

        <h2 className="mt-1 text-3xl font-semibold text-[#3d1f1f] heading-font">
          India
        </h2>

        <p className="text-[#5c3b3b] text-sm">
          New Delhi
        </p>
      </div>
    </div>

    <div className="absolute right-0 top-0 text-center">

      <img
        src="https://i.imgur.com/Z1K8l0P.png"
        alt=""
        className="w-40 opacity-25"
      />

      <div className="absolute top-10 right-14">

        <Heart
          size={18}
          className="fill-[#7a1020] text-[#7a1020] mx-auto"
        />

        <h2 className="mt-1 text-3xl font-semibold text-[#3d1f1f] heading-font">
          Dubai
        </h2>

        <p className="text-[#5c3b3b] text-sm">
          UAE
        </p>
      </div>
    </div>

    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 300"
      fill="none"
    >

      <path
        d="M230 170 Q500 20 770 140"
        stroke="#7a1020"
        strokeWidth="3"
        strokeDasharray="10 10"
        opacity="0.45"
        fill="transparent"
      />
    </svg>

    <Plane
      size={42}
      className="absolute left-1/2 top-[30%] -translate-x-1/2 text-[#7a1020] rotate-[15deg]"
    />
  </div>
</div> */}

        {/* Distance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">

          {/* Distance */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/40 text-center">

            <MapPin
              size={32}
              className="mx-auto text-[#7a1020]"
            />

            <h2 className="mt-5 text-2xl heading-font text-[#7a1020]">
              Distance Between Us
            </h2>

            <p className="mt-4 text-5xl title-font text-[#7a1020]">
              2,588
            </p>

            <p className="mt-2 text-[#5c3b3b]">
              Kilometers
            </p>
          </div>

          {/* Reunion */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/40 text-center">

            <Heart
              size={32}
              className="mx-auto fill-[#7a1020] text-[#7a1020]"
            />

            <h2 className="mt-5 text-2xl heading-font text-[#7a1020]">
              Next Reunion
            </h2>

            <p className="mt-4 text-5xl title-font text-[#7a1020]">
              126
            </p>

            <p className="mt-2 text-[#5c3b3b]">
              Days Remaining ♡
            </p>
          </div>

          {/* Love */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/40 text-center">

            <Clock3
              size={32}
              className="mx-auto text-[#7a1020]"
            />

            <h2 className="mt-5 text-2xl heading-font text-[#7a1020]">
              Time Difference
            </h2>

            <p className="mt-4 text-5xl title-font text-[#7a1020]">
              1.5h
            </p>

            <p className="mt-2 text-[#5c3b3b]">
              But always connected
            </p>
          </div>
        </div>

        {/* Time Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">

          {/* India Time */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/40 text-center">

            <h2 className="text-2xl heading-font text-[#7a1020]">
              India
            </h2>

            <p className="mt-5 text-5xl title-font text-[#7a1020]">
              08:30 PM
            </p>

            <p className="mt-3 text-[#5c3b3b]">
              IST
            </p>
          </div>

          {/* Dubai Time */}
          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-2xl border border-white/40 text-center">

            <h2 className="text-2xl heading-font text-[#7a1020]">
              Dubai
            </h2>

            <p className="mt-5 text-5xl title-font text-[#7a1020]">
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
