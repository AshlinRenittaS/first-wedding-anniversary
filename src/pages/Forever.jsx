// import Navbar from "../components/Navbar";

// import { Heart } from "lucide-react";

// /* BACKGROUND IMAGE */
// import foreverBg from "../assets/forever.png";

// const Forever = () => {
//   return (
//     <div className="min-h-[100svh] overflow-hidden relative bg-[#f8ece7]">

//       {/* Background Image */}
//       <img
//         src={foreverBg}
//         alt=""
//         className="
//           absolute
//           inset-0
//           w-full
//           h-full
//           object-cover
//           object-center
//           md:object-top
//         "
//       />

//       {/* Soft Overlay */}
//       <div className="absolute inset-0 bg-white/10"></div>

//       {/* Navbar */}
//       <div className="relative z-20">
//         <Navbar />
//       </div>

//       {/* Main Content */}
//       <div
//         className="
//           relative
//           z-10
//           min-h-[100svh]
//           flex
//           flex-col
//           items-center
//           text-center
//           px-5
//           md:px-10
//           pt-24
//           md:pt-32
//           pb-16
//         "
//       >

//         {/* Heading */}
//         <h1
//           className="
//             title-font
//             text-[#7a1020]
//             text-3xl
//             md:text-6xl
//           "
//         >
//           Forever & Always
//         </h1>

//         {/* Divider */}
//         <div className="flex items-center gap-3 mt-4">

//           <div className="w-14 md:w-24 h-[1px] bg-[#7a1020]/30"></div>

//           <Heart
//             size={16}
//             className="fill-[#7a1020] text-[#7a1020]"
//           />

//           <div className="w-14 md:w-24 h-[1px] bg-[#7a1020]/30"></div>
//         </div>

//         {/* HEART TEXT SECTION */}
//         <div
//           className="
//             relative
//             mt-16
//             md:mt-24
//             flex
//             items-center
//             justify-center
//             w-full
//           "
//         >

//           <div
//             className="
//               relative
//               flex
//               items-center
//               justify-center
//               w-full
//               max-w-[900px]
//               h-[260px]
//               md:h-[520px]
//             "
//           >

//             {/* TEXT INSIDE HEART */}
//             <h2
//               className="
//                 title-font
//                 text-[#7a1020]
//                 text-5xl
//                 sm:text-6xl
//                 md:text-[120px]
//                 leading-tight
//                 text-center
//                 z-10
//               "
//             >
//               You are
//               <br />
//               my home
//             </h2>
//           </div>
//         </div>

//         {/* Description */}
//         <p
//           className="
//             mt-10
//             md:mt-16
//             text-[#5c3b3b]
//             text-base
//             md:text-2xl
//             leading-8
//             md:leading-10
//             max-w-3xl
//             heading-font
//           "
//         >
//           Thank you for being the most beautiful part
//           of my life. Here's to our forever.
//         </p>

//         {/* Countdown Card */}
//         <div
//           className="
//             mt-10
//             md:mt-14
//             bg-white/35
//             backdrop-blur-md
//             rounded-[25px]
//             md:rounded-[35px]
//             px-5
//             md:px-10
//             py-5
//             md:py-8
//             border
//             border-white/40
//             shadow-2xl
//             w-full
//             max-w-[700px]
//           "
//         >

//           <p className="text-[#5c3b3b] text-sm md:text-lg">
//             Until Our Next Anniversary
//           </p>

//           {/* Countdown */}
//           <div className="grid grid-cols-4 gap-3 md:gap-5 mt-5">

//             {[
//               { value: "365", label: "Days" },
//               { value: "12", label: "Hours" },
//               { value: "45", label: "Minutes" },
//               { value: "30", label: "Seconds" },
//             ].map((item, index) => (

//               <div
//                 key={index}
//                 className="
//                   bg-white/50
//                   rounded-2xl
//                   py-4
//                   md:py-5
//                 "
//               >

//                 <h2
//                   className="
//                     text-[#7a1020]
//                     text-2xl
//                     md:text-5xl
//                     title-font
//                   "
//                 >
//                   {item.value}
//                 </h2>

//                 <p
//                   className="
//                     mt-1
//                     text-[#5c3b3b]
//                     text-[11px]
//                     md:text-sm
//                   "
//                 >
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           className="
//             mt-10
//             bg-[#7a1020]
//             hover:bg-[#5c0b18]
//             transition-all
//             duration-300
//             text-white
//             px-8
//             md:px-12
//             py-4
//             rounded-full
//             shadow-2xl
//             flex
//             items-center
//             gap-3
//             text-sm
//             md:text-base
//           "
//         >

//           REPLAY OUR JOURNEY

//           <Heart
//             size={15}
//             className="fill-white text-white"
//           />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Forever;

import Navbar from "../components/Navbar";

import {
  Heart,
  Sparkles,
  Infinity,
  Stars,
} from "lucide-react";

const Forever = () => {

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden relative">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7f4] via-[#f8ece7] to-[#f2dcd7]"></div>

      {/* Blur Circles */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#7a1020]/10 rounded-full blur-3xl"></div>

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
          px-5
          pt-28
          md:pt-36
          pb-16
        "
      >

        {/* Top Badge */}
        <div
          className="
            bg-white/50
            backdrop-blur-md
            border
            border-white/40
            rounded-full
            px-6
            py-3
            shadow-xl
            flex
            items-center
            gap-3
          "
        >

          <Sparkles
            size={18}
            className="text-[#7a1020]"
          />

          <p className="text-[#7a1020] text-sm md:text-base">
            Our Forever Story
          </p>
        </div>

        {/* Main Card */}
        <div
          className="
            mt-10
            w-full
            max-w-6xl

            bg-white/35
            backdrop-blur-xl

            border
            border-white/40

            rounded-[40px]
            md:rounded-[60px]

            shadow-[0_20px_80px_rgba(0,0,0,0.12)]

            p-8
            md:p-16
            lg:p-20
          "
        >

          {/* Center Icon */}
          <div className="flex justify-center">

            <div
              className="
                w-24
                h-24
                md:w-32
                md:h-32

                rounded-full

                bg-gradient-to-br
                from-[#8d1b2c]
                to-[#5d0c18]

                flex
                items-center
                justify-center

                shadow-2xl
              "
            >

              <Infinity
                size={55}
                className="text-white"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mt-10">

            <h1
              className="
                title-font
                text-[#7a1020]

                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Forever
              <br />
              Starts Here
            </h1>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mt-7">

              <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>

              <Heart
                size={18}
                className="fill-[#7a1020] text-[#7a1020]"
              />

              <div className="w-16 md:w-24 h-[1px] bg-[#7a1020]/30"></div>
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                text-[#5c3b3b]
                heading-font

                text-base
                md:text-xl
                leading-9

                max-w-3xl
                mx-auto
              "
            >
              Every heartbeat,
              every smile,
              every memory,
              every dream —
              feels beautiful because
              we walk through life together.

              <br />
              <br />

              No matter where life takes us,
              my heart will always choose you ♡
            </p>
          </div>

          {/* Cards */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-16
            "
          >

            {/* Card 1 */}
            <div
              className="
                bg-white/45
                backdrop-blur-md
                rounded-[30px]
                p-8
                shadow-xl
                text-center
              "
            >

              <Heart
                size={34}
                className="mx-auto fill-[#7a1020] text-[#7a1020]"
              />

              <h2
                className="
                  mt-5
                  text-[#7a1020]
                  text-2xl
                  heading-font
                "
              >
                Endless Love
              </h2>

              <p className="mt-4 text-[#5c3b3b] leading-8">
                A love that grows stronger
                every single day.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                bg-white/45
                backdrop-blur-md
                rounded-[30px]
                p-8
                shadow-xl
                text-center
              "
            >

              <Sparkles
                size={34}
                className="mx-auto text-[#7a1020]"
              />

              <h2
                className="
                  mt-5
                  text-[#7a1020]
                  text-2xl
                  heading-font
                "
              >
                Beautiful Moments
              </h2>

              <p className="mt-4 text-[#5c3b3b] leading-8">
                Every moment with you
                becomes my favorite memory.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                bg-white/45
                backdrop-blur-md
                rounded-[30px]
                p-8
                shadow-xl
                text-center
              "
            >

              <Stars
                size={34}
                className="mx-auto text-[#7a1020]"
              />

              <h2
                className="
                  mt-5
                  text-[#7a1020]
                  text-2xl
                  heading-font
                "
              >
                Forever Promise
              </h2>

              <p className="mt-4 text-[#5c3b3b] leading-8">
                Through every season,
                we stay together forever.
              </p>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-20">

            <p
              className="
                title-font
                text-[#7a1020]

                text-3xl
                md:text-5xl
                leading-tight
              "
            >
              “You are my
              <br />
              today and forever.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forever;