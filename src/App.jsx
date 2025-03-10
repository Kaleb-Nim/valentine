import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Maybe see how",
      "Wow i can't believe you'd pick this again",
      "Think again you can clear OT another day",
      "still No? I've booked a super good viet restaurant",
      "pleasee i find you vry pretty",
      "and you're vry much my type :)",
      "u looked so hot black dress u wore at the concert",
      "and defo can't forget that grey crop top",
      "Surely not?",
      "You think I'm gonna give you a choice? hahahaha",
      "Actly I'm not asking",
      "But I should probably give you a choice",
      "idk bout u i feel we went thru similar life experience",
      "soooo this that your final answer?",
      "Plsss? :( jk jk",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://tenor.com/view/excited-love-cute-puppy-dog-gif-14833253.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://tenor.com/view/guitar-sing-music-song-gif-14011119.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Rachel will you be my Valentine? :)
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "Maybe see how" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// const Footer = () => {
//   return (
//     <a
//       className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
//       href="https://github.com/Xeven777/valentine"
//       target="__blank"
//     >
//       Made with{" "}
//       <span role="img" aria-label="heart">
//         ❤️
//       </span>
//     </a>
//   );
// };
