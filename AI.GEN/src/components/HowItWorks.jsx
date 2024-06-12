import { useEffect, useState } from "react";
import avatar from "../../src/assets/Avatar.png";
import '../styles/HowItWorks.css';

 export const HowItWorks = () => {
  const [current, setCurrent] = useState(0);
  const paragraphs = [
      "Select an Avatar",
      "Create or Generate Script",
      "Select AI Voices",
      "Publish"
  ];

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrent((prevCurrent) => (prevCurrent + 1) % paragraphs.length);
      }, 900);

      return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
      <div className="p-4 m-5 flex flex-col md:flex-row justify-start items-center gap-10 relative">
          <div className="md:w-3/5 rounded-lg md:rounded-r-lg overflow-hidden">
              <img src={avatar} alt="avatar-ai" className="w-full h-full move-right-left object-cover" />
          </div>
          <div className="flex flex-col">
              <h1 className="text-3xl md:text-7xl mt-5 font-semibold">How it works</h1>
              {paragraphs.map((text, index) => (
                  <p
                      key={index}
                      className={`text-3xl md:text-4xl mt-3 font-bold ${index === current ? 'text-active' : 'text-inactive'}`}
                  >
                      {text}
                  </p>
              ))}
          </div>
      </div>
  );
};
 