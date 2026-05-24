import { useState } from "react";
import Navbar from "../components/Navbar";

import {
  Lock,
  Unlock,
  Heart,
} from "lucide-react";

const Surprise = () => {

  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {

    if (password === "26052025") {
      setIsUnlocked(true);
    } else {
      alert("Wrong Password ♡");
    }
  };

  return (

    <div className="min-h-screen bg-[#f8ece7] overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-200/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7a1020]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Main */}
      {/* <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-24"> */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-32 pb-20">

        {!isUnlocked ? (

          /* LOCK SCREEN */
          <div
            className="
              w-full
              max-w-md
              bg-white/60
              backdrop-blur-xl
              rounded-[40px]
              border
              border-white/40
              shadow-2xl
              p-8
              md:p-10
              text-center
            "
          >

            {/* Lock Icon */}
            <div className="flex justify-center">

              <div
                className="
                  w-24
                  h-24
                  rounded-full
                  bg-[#7a1020]
                  flex
                  items-center
                  justify-center
                  shadow-2xl
                "
              >

                <Lock
                  size={40}
                  className="text-white"
                />
              </div>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                title-font
                text-5xl
                text-[#7a1020]
              "
            >
              Surprise
            </h1>

            {/* Text */}
            <p
              className="
                mt-4
                text-[#5c3b3b]
                heading-font
                leading-8
              "
            >
              Enter our special date
              <br />
              to unlock your surprise ♡
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mt-7">

              <div className="w-16 h-[1px] bg-[#7a1020]/30"></div>

              <Heart
                size={16}
                className="fill-[#7a1020] text-[#7a1020]"
              />

              <div className="w-16 h-[1px] bg-[#7a1020]/30"></div>
            </div>

            {/* Input */}
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                mt-8
                w-full
                px-5
                py-4
                rounded-full
                bg-white/80
                border
                border-[#7a1020]/20
                outline-none
                text-center
                text-[#7a1020]
                placeholder:text-[#7a1020]/50
              "
            />

            {/* Button */}
            <button
              onClick={handleUnlock}
              className="
                mt-6
                w-full
                bg-[#7a1020]
                hover:bg-[#5c0c18]
                transition-all
                duration-300
                text-white
                py-4
                rounded-full
                flex
                items-center
                justify-center
                gap-3
                shadow-xl
              "
            >

              Unlock Surprise

              <Unlock size={18} />
            </button>
          </div>

        ) : (

          /* VIDEO PAGE */
          <div className="w-full max-w-4xl">

            {/* Heading */}
            <div className="text-center">

              <h1
                className="
                  title-font
                  text-[#7a1020]
                  leading-tight
                  text-4xl
                  md:text-6xl
                "
              >
                A Little Surprise
                <br />
                For My Love
              </h1>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mt-6">

                <div className="w-16 h-[1px] bg-[#7a1020]/30"></div>

                <Heart
                  size={16}
                  className="fill-[#7a1020] text-[#7a1020]"
                />

                <div className="w-16 h-[1px] bg-[#7a1020]/30"></div>
              </div>
            </div>
<div
  className="
    mt-10
    bg-white/60
    backdrop-blur-xl
    rounded-[35px]
    p-3
    md:p-5
    border
    border-white/40
    shadow-2xl
  "
>
  <div className="overflow-hidden rounded-[28px]">

    <video
      controls
      playsInline
      preload="auto"
      className="
        w-full
        h-auto
        max-h-[70vh]
        rounded-[28px]
        bg-black
      "
    >
      <source
        src="/video/surprise.mp4"
        type="video/mp4"
      />

      Your browser does not support the video tag.
    </video>

  </div>
</div>
            {/* Bottom Text */}
            <div className="text-center mt-10">

              <p
                className="
                  text-[#5c3b3b]
                  heading-font
                  leading-relaxed
                  text-xl
                  md:text-3xl
                "
              >
                I made this just for you ❤️
                <br />
                Happy Anniversary My Love ♡
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Surprise;