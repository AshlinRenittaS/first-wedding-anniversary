import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  Heart,
  Unlock,
} from "lucide-react";

/* BACKGROUND IMAGE */
import letterBg from "../assets/letter.png";

const Letter = () => {

  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "ashlinajin";

  const handleUnlock = () => {

    if (password === correctPassword) {

      setUnlocked(true);
      setError("");

    } else {

      setError("Wrong password ♡");
    }
  };

  return (

    <div
      className="min-h-screen overflow-hidden relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${letterBg})`,
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff5f2]/40 backdrop-blur-[1px]"></div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="pt-32 px-5 md:px-20 pb-20">

          {/* Heading */}

        {unlocked && (
          <div className="text-center">

              <p className="title-font text-5xl md:text-7xl text-[#7a1020]">
                 A Letter For You
              </p>

              <p className="mt-4 text-[#5c3b3b] text-lg md:text-xl heading-font">
                   Written with endless love ♡
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
        )}

          {/* LOCK SCREEN */}
          {!unlocked ? (

            <div className="flex justify-center items-center mt-20">

              <div className="w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[40px] p-10 text-center">

                {/* HEART LOCK ICON */}
                <div className="relative flex justify-center">

                  {/* Glow */}
                  <div className="absolute w-32 h-32 rounded-full bg-[#7a1020]/20 blur-3xl"></div>

                  {/* Outer Circle */}
                  <div className="relative w-32 h-32 rounded-full bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-[0_8px_40px_rgba(122,16,32,0.25)]">

                    {/* Inner Circle */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8d1b2c] to-[#5d0c18] flex items-center justify-center shadow-2xl">

                      <div className="relative flex items-center justify-center">

                        {/* Heart */}
                        <Heart
                          size={48}
                          className="fill-white text-white"
                        />

                        {/* Small Lock */}
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">

                          <div className="w-4 h-4 rounded-sm border-2 border-[#7a1020] relative">

                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-[#7a1020] rounded-full bg-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="mt-8 text-4xl heading-font text-[#7a1020]">
                  Private Letter
                </h2>

                {/* Description */}
                <p className="mt-4 text-[#5c3b3b] leading-8">
                  Enter our special password
                  to unlock this love letter ♡
                </p>

                {/* Input */}
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-8 px-5 py-4 rounded-full bg-white/80 border border-[#7a1020]/20 outline-none focus:border-[#7a1020] text-center"
                />

                {/* Error */}
                {error && (

                  <p className="text-red-500 mt-4">
                    {error}
                  </p>
                )}

                {/* Button */}
                <button
                  onClick={handleUnlock}
                  className="mt-8 w-full bg-[#7a1020] hover:bg-[#5d0c18] transition-all duration-300 text-white py-4 rounded-full flex items-center justify-center gap-3 shadow-xl"
                >

                  Unlock Letter

                  <Unlock size={18} />
                </button>
              </div>
            </div>

          ) : (

            /* UNLOCKED LETTER */
            <div className="flex justify-center mt-16 px-2">

              <div className="relative w-full max-w-5xl">

                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#7a1020]/10 blur-3xl rounded-[50px]"></div>

                {/* Letter Container */}
                <div className="relative bg-[#fdf5f0]/90 backdrop-blur-lg rounded-[40px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-white/40">

                  {/* Decorative Flowers */}
                  <img
                    src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-watercolor-pink-flower-bouquet-png-image_10204328.png"
                    alt=""
                    className="absolute top-0 right-0 w-48 md:w-72 opacity-90 pointer-events-none"
                  />

                  {/* Letter Content */}
                  <div className="relative z-10 p-8 md:p-20">

                    {/* Heading */}
                    <div className="text-center">

                      <h1 className="title-font text-5xl md:text-7xl text-[#7a1020]">
                            Forever & Always ♡
                      </h1>

                      <div className="flex justify-center mt-5">

                        <Heart
                          size={18}
                          className="fill-[#7a1020] text-[#7a1020]"
                        />
                      </div>
                    </div>

                    {/* Letter Text */}
                    <div className="mt-14 max-w-3xl mx-auto">

                      <p className="heading-font text-[#5c3b3b] leading-[2.5rem] text-lg md:text-2xl">

                        My Dearest Love,
                        <br />
                        <br />

                        Every single day with you feels
                        like the most beautiful chapter
                        of my life.

                        <br />
                        <br />

                        From our very first meeting
                        to every smile, every hug,
                        every little memory —
                        you became my safest place
                        and my forever happiness.

                        <br />
                        <br />

                        Thank you for loving me,
                        understanding me,
                        supporting me,
                        and standing beside me always.

                        <br />
                        <br />

                        You are not just my partner,
                        you are my peace,
                        my comfort,
                        my strength,
                        and my home.

                        <br />
                        <br />

                        I promise to walk beside you
                        through every season of life,
                        holding your hand forever.

                        <br />
                        <br />

                        No matter what happens,
                        my heart will always belong to you.

                        <br />
                        <br />

                        Forever & Always,
                        <br />

                        <span className="title-font text-4xl md:text-5xl text-[#7a1020]">
                          Ashlin ♡
                        </span>
                      </p>
                    </div>

                    {/* Pen */}
                    <img
                      src="https://pngimg.com/d/pen_PNG7416.png"
                      alt=""
                      className="absolute bottom-6 right-4 md:right-10 w-24 md:w-36 rotate-[-15deg] opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Letter;