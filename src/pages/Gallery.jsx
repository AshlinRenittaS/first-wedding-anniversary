import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  Heart,
  Camera,
} from "lucide-react";

/* BEFORE MARRIAGE */
import before1 from "../assets/before1.jpeg";
import before2 from "../assets/before2.jpeg";
import before3 from "../assets/before3.jpeg";
import before4 from "../assets/before4.jpeg";
import before5 from "../assets/before5.jpeg";
import before6 from "../assets/before6.jpeg";
import before7 from "../assets/before7.jpeg";
import before8 from "../assets/before8.jpeg";

/* ENGAGEMENT & MARRIAGE */
import engage1 from "../assets/mrg.jpeg";
import engage2 from "../assets/mrg1.jpeg";
import engage3 from "../assets/mrg2.jpeg";
import engage4 from "../assets/mrg3.jpeg";
import engage5 from "../assets/mrg4.jpeg";
import engage6 from "../assets/mrg5.jpeg";
import engage7 from "../assets/mrg6.jpeg";
import engage8 from "../assets/mrg7.jpeg";
import engage9 from "../assets/mrg8.jpeg";
import engage10 from "../assets/mrg9.jpeg";
import engage11 from "../assets/mrg10.jpeg";
import engage12 from "../assets/mrgg.jpeg";
import engage13 from "../assets/mrg11.jpeg";

/* AFTER MARRIAGE */
import after1 from "../assets/after1.jpeg";
import after2 from "../assets/after2.jpeg";
import after3 from "../assets/after3.jpeg";
import after4 from "../assets/after4.jpeg";
import after5 from "../assets/after5.jpeg";

/* SCREENSHOTS */
import screen1 from "../assets/screen1.jpeg";
import screen2 from "../assets/screen2.jpeg";
import screen3 from "../assets/screen3.jpeg";

const tabs = [
  "Before MRG",
  "Engagement & MRG",
  "After MRG",
  "Screenshots",
];

const galleryData = {
  "Before MRG": [
    { image: before1 },
    { image: before2 },
    { image: before3 },
    { image: before4 },
    { image: before5 },
    { image: before6 },
    { image: before7 },

    // LAST IMAGE FIX
    {
      image: before8,
      mobileClass: "object-contain bg-[#f8ece7]",
    },
  ],

  "Engagement & MRG": [

    // 1ST IMAGE FIX
    {
      image: engage12,
      mobileClass: "object-contain bg-[#f8ece7]",
    },

    // 2ND IMAGE FIX
    {
      image: engage1,
      mobileClass: "object-contain bg-[#f8ece7]",
    },

    { image: engage2 },
    { image: engage13 },
    { image: engage3 },
    { image: engage4 },
    { image: engage5 },
    { image: engage6 },
    { image: engage7 },
    { image: engage8 },
    { image: engage9 },

    // 12TH IMAGE FIX
    {
      image: engage10,
      mobileClass: "object-contain bg-[#f8ece7]",
    },

    { image: engage11 },
  ],

  "After MRG": [
    { image: after1 },

    // 2ND IMAGE FIX
    {
      image: after2,
      mobileClass: "object-contain bg-[#f8ece7]",
    },

    // 3RD IMAGE FIX
    {
      image: after3,
      mobileClass: "object-contain bg-[#f8ece7]",
    },

    { image: after4 },
    { image: after5 },
  ],

  "Screenshots": [
    { image: screen1 },
    { image: screen2 },
    { image: screen3 },
  ],
};

const Gallery = () => {

  const [activeTab, setActiveTab] = useState("Before MRG");

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="pt-32 px-5 md:px-20 pb-20">

        {/* Heading */}
        <div className="text-center">

          <h1 className="title-font text-5xl md:text-7xl text-[#7a1020]">
            Our Gallery
          </h1>

          <p className="mt-4 text-[#5c3b3b] text-lg md:text-xl heading-font">
            Every picture tells our forever story ♡
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-6">

            <div className="w-20 h-[1px] bg-[#7a1020]/30"></div>

            <Heart
              size={18}
              className="fill-[#7a1020] text-[#7a1020]"
            />

            <div className="w-20 h-[1px] bg-[#7a1020]/30"></div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6
                md:px-8
                py-3
                rounded-full
                text-sm
                md:text-base
                transition-all
                duration-300
                border
                shadow-lg

                ${
                  activeTab === tab
                    ? "bg-[#7a1020] text-white border-[#7a1020]"
                    : "bg-white/70 text-[#7a1020] border-white/40 hover:bg-[#7a1020] hover:text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryData[activeTab].map((item, index) => (

            <div
              key={index}
              className={`
                relative
                overflow-hidden
                rounded-[35px]
                shadow-2xl
                group
                bg-white/70
                backdrop-blur-lg
                border border-white/40

                ${
                  activeTab === "Screenshots"
                    ? "h-[500px] md:h-[350px]"
                    : "h-[420px] md:h-[350px]"
                }
              `}
            >

              {/* Image */}
              <img
                src={item.image}
                alt=""
                className={`
                  w-full
                  h-full
                  object-center
                  transition-all
                  duration-700
                  group-hover:scale-105

                  ${
                    activeTab === "Screenshots"
                      ? "object-contain bg-[#f8ece7]"
                      : item.mobileClass
                      ? `${item.mobileClass} md:object-contain`
                      : "object-cover md:object-contain"
                  }
                `}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Camera Icon */}
              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500">

                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-xl">

                  <Camera
                    size={20}
                    className="text-[#7a1020]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-24">

          <p className="title-font text-4xl md:text-6xl text-[#7a1020] leading-tight">
            Love captured
            <br />
            in every moment ♡
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">

            <div className="w-20 h-[1px] bg-[#7a1020]/30"></div>

            <Heart
              size={18}
              className="fill-[#7a1020] text-[#7a1020]"
            />

            <div className="w-20 h-[1px] bg-[#7a1020]/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;