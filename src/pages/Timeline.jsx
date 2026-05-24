import Navbar from "../components/Navbar";

import {
  Heart,
  CalendarDays,
} from "lucide-react";

/* IMPORT YOUR ASSET IMAGES */

import flower from "../assets/flower.jpeg";
import outing from "../assets/outing.jpeg";
import kiss from "../assets/kiss.jpeg";
import xmas from "../assets/xmas.jpeg";
import valentines from "../assets/valentines.jpeg";
import preWedding from "../assets/prewedding.jpeg";
import engagement from "../assets/engagement.jpeg";
import wedding from "../assets/wedding.jpeg";
import birthday from "../assets/birthday.jpeg";
import afterMrgSelfie from "../assets/1stselfieaftermrg.jpeg";
import firstMeet from "../assets/firstmeet.png";

const timelineData = [
  {
    date: "14 July 2024",
    title: "Our First Meet",
    desc: "The beautiful moment our families met for the first time — the beginning of our forever story.",
    image: firstMeet,

    imageClass: "object-center",
    mobileImageClass: "object-cover object-center",
  },

  {
    date: "18 August 2024",
    title: "Flowering Ceremony",
    desc: "A special traditional ceremony filled with blessings, smiles, and beautiful memories.",
    image: flower,

    imageClass: "object-[center_8%]",
    mobileImageClass: "object-contain bg-[#f8ece7]",
  },

  {
    date: "1 November 2024",
    title: "First Outing",
    desc: "Our first outing together — laughter, conversations, and unforgettable moments.",
    image: outing,

    imageClass: "object-[center_8%]",
    mobileImageClass: "object-contain bg-[#f8ece7]",
  },

  {
    date: "3 November 2024",
    title: "First Kiss",
    desc: "A magical moment that made our hearts even closer forever.",
    image: kiss,

    imageClass: "object-center",
    mobileImageClass: "object-cover object-center",
  },

  // FIXED XMAS IMAGE
  {
    date: "25 December 2024",
    title: "First Christmas Together",
    desc: "Celebrating love, lights, gifts, and happiness together during Christmas.",
    image: xmas,

    imageClass: "object-[center_15%]",
    mobileImageClass: "object-cover object-[center_12%]",
  },

  {
    date: "14 February 2025",
    title: "First Valentine's Day",
    desc: "A day full of love, romance, and unforgettable memories together.",
    image: valentines,

    imageClass: "object-[center_8%]",
    mobileImageClass: "object-contain bg-[#f8ece7]",
  },

  // FIXED PRE WEDDING IMAGE
  {
    date: "23 May 2025",
    title: "Pre Wedding Shoot",
    desc: "Capturing our beautiful love story before the biggest day of our lives.",
    image: preWedding,

    imageClass: "object-[center_22%]",
    mobileImageClass: "object-cover object-[center_18%]",
  },

  {
    date: "25 May 2025",
    title: "Engagement",
    desc: "The day we officially promised forever to each other.",
    image: engagement,

    imageClass: "object-center",
    mobileImageClass: "object-cover object-center",
  },

  {
    date: "26 May 2025",
    title: "Grand Wedding",
    desc: "The most beautiful chapter of our journey — becoming one forever.",
    image: wedding,

    imageClass: "object-center",
    mobileImageClass: "object-cover object-center",
  },

  // FIXED SELFIE IMAGE
  {
    date: "26 May 2025",
    title: "First Selfie After Marriage",
    desc: "Our very first selfie after marriage — a beautiful little memory filled with love, smiles, and togetherness.",
    image: afterMrgSelfie,

    // desktop + tablet
    imageClass: "object-[center_8%]",

    // mobile FIX
    mobileImageClass: "object-contain bg-[#f8ece7]",
  },

  {
    date: "5 January 2026",
    title: "My First Birthday After Marriage",
    desc: "A birthday made extra special with love, care, and togetherness.",
    image: birthday,

    imageClass: "object-top",
    mobileImageClass: "object-cover object-top",
  },
];

const Timeline = () => {

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <div className="pt-32 px-5 md:px-20 pb-20">

        {/* Heading */}
        <div className="text-center">

          <p className="title-font text-5xl md:text-7xl text-[#7a1020]">
            Our Journey
          </p>

          <p className="mt-4 text-[#5c3b3b] text-lg md:text-xl heading-font">
            Every memory with you became part of our forever.
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

        {/* Timeline */}
        <div className="relative mt-20">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-[#7a1020]/20 -translate-x-1/2"></div>

          <div className="flex flex-col gap-16 md:gap-24">

            {timelineData.map((item, index) => (

              <div
                key={index}
                className="relative"
              >

                {/* MOBILE VIEW */}
                <div className="md:hidden">

                  <div className="bg-white/70 backdrop-blur-lg rounded-[30px] overflow-hidden shadow-2xl border border-white/40">

                    {/* IMAGE */}
                    <div className="w-full h-[430px] overflow-hidden bg-[#f8ece7] flex items-center justify-center">

                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full ${item.mobileImageClass}`}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-7">

                      <div className="flex items-center gap-3 text-[#7a1020]">

                        <CalendarDays size={16} />

                        <p className="text-sm">
                          {item.date}
                        </p>
                      </div>

                      <h2 className="mt-4 text-3xl heading-font text-[#7a1020]">
                        {item.title}
                      </h2>

                      <p className="mt-4 text-[#5c3b3b] leading-8">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DESKTOP / TABLET VIEW */}
                <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">

                  {/* LEFT SIDE */}
                  {index % 2 === 0 ? (

                    <>
                      {/* TEXT */}
                      <div className="flex justify-end">

                        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-[30px] p-8 shadow-2xl border border-white/40">

                          <div className="flex items-center gap-3 text-[#7a1020]">

                            <CalendarDays size={16} />

                            <p className="text-sm">
                              {item.date}
                            </p>
                          </div>

                          <h2 className="mt-5 text-3xl heading-font text-[#7a1020]">
                            {item.title}
                          </h2>

                          <p className="mt-4 text-[#5c3b3b] leading-8">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="flex justify-start">

                        <div className="w-full max-w-md h-[340px] overflow-hidden rounded-[30px] shadow-2xl border border-white/40 bg-[#f8ece7]">

                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full object-cover ${item.imageClass}`}
                          />
                        </div>
                      </div>
                    </>

                  ) : (

                    <>
                      {/* IMAGE */}
                      <div className="flex justify-end">

                        <div className="w-full max-w-md h-[340px] overflow-hidden rounded-[30px] shadow-2xl border border-white/40 bg-[#f8ece7]">

                          <img
                            src={item.image}
                            alt={item.title}
                            className={`w-full h-full object-cover ${item.imageClass}`}
                          />
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="flex justify-start">

                        <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-[30px] p-8 shadow-2xl border border-white/40">

                          <div className="flex items-center gap-3 text-[#7a1020]">

                            <CalendarDays size={16} />

                            <p className="text-sm">
                              {item.date}
                            </p>
                          </div>

                          <h2 className="mt-5 text-3xl heading-font text-[#7a1020]">
                            {item.title}
                          </h2>

                          <p className="mt-4 text-[#5c3b3b] leading-8">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* CENTER HEART */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

                    <div className="w-12 h-12 rounded-full bg-[#7a1020] flex items-center justify-center border-4 border-[#f8ece7] shadow-2xl">

                      <Heart
                        size={18}
                        className="fill-white text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;