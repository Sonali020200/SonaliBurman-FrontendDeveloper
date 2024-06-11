import shoesPic from '../../src/assets/ai.shoes.png'
import girlPic from '../../src/assets/ai.girl.png'
import keyBoard from '../../src/assets/ai.keyboard.png'
import detailsPic from '../../src/assets/ai.details.png'


export const AICards = () => {
  return (
    <div className="">
      <div className="relative top-[10%] w-full">
        <div className="w-full h-[30%] flex justify-center items-center gap-12">
          <img
            src={shoesPic}
            width={400}
            height={500}
            alt="...img"
            className="w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={girlPic}
            width={600}
            height={300}
            alt="...img"
            className="w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="relative top-[20%] my-[3%] w-full h-[30%] flex justify-center items-center gap-12">
          <img
            src={keyBoard}
            width={600}
            height={300}
            alt="...img"
            className="w-[40%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
          <img
            src={detailsPic}
            width={400}
            height={500}
            alt="...img"
            className="w-[28%] rounded-lg transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

