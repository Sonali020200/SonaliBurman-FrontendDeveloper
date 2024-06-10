import { useEffect } from "react";
import phase2 from "../../src/assets/phase2.png";
import '../styles/RoadMap.css';

export const Phase2 = () => {
    useEffect(() => {
      const paragraphs = document.querySelectorAll(".animated-paragraph");
      let current = 0;
  
      const updateParagraphs = () => {
        paragraphs.forEach((paragraph, index) => {
          if (index === current) {
            paragraph.classList.add("text-active");
            paragraph.classList.remove("text-inactive");
          } else {
            paragraph.classList.remove("text-active");
            paragraph.classList.add("text-inactive");
          }
        });
        current = (current + 1) % paragraphs.length;
      };
  
      updateParagraphs(); 
      const interval = setInterval(updateParagraphs, 1000);
  
      return () => clearInterval(interval); 
    }, []);
  
    return (
      <div className="roadMap-section md:flex justify-center items-center gap-10 relative">
        <div className="roadMap-section-para">
          <h1 className="roadmap01-h2 text-white text-3xl sm:text-4xl md:text-5xl head-gradient mb-8">PHASE 2</h1> 
          <div className="roadMap-section-paragraph">
            <ul>
          <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap. </li>
          <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero. </li>
          <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON. </li>
          <li className="animated-paragraph text-sm sm:text-base md:text-lg lg:text-xl text-white space-y-3 sm:space-y-4 md:space-y-6 list-disc sm:ml-8 md:ml-12 lg:ml-0"> Hive stellar velas flow cardano.</li>
            </ul>
        </div>
        </div>
        <div className="map-img1 md:w-[60%] md:rounded-r-lg rounded-lg overflow-hidden">
          <img src={phase2} alt="phase2-ai" className="overflow-hidden" />
        </div>

      </div>
    );
  };