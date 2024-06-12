import Donut from '../../src/assets/Donut.png'


const Tokenomics = () => {
  return (
    <div>
            <h1 className='img-animate-up-down animation2-up-down bg-gradient-to-r from-[#FA75F8] to-[#9E6EE6] bg-clip-text text-transparent font-semibold text-5xl text-center mt-28 mb-12 lg:mb-28'>Tokenomics</h1>
            <div className='flex justify-center mb-12'>
                <div className='grid grid-cols-2 mx-8 lg:gap-x-40 lg:ml-44'>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Name</span>
                        <span>:</span>
                        <span>AI GEN</span>
                    </div>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Token Name</span>
                        <span>:</span>
                        <span>$AIGEN</span>
                    </div>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Total Supply</span>
                        <span>:</span>
                        <span>1B</span>
                    </div>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Circulating Supply</span>
                        <span>:</span>
                        <span>1B</span>
                    </div>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Contract</span>
                        <span>:</span>
                        <span>Lorem ipsum dolor sit amet consectetur...</span>
                    </div>
                    <div className='py-2 lg:text-xl text-xs flex gap-1 lg:gap-8 m-2'>
                        <span className=' lg:w-44 font-semibold'>Chain</span>
                        <span>:</span>
                        <span>Ethereum</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between lg:px-16'>
                <img className='w-44 lg:w-auto pl-4' src={Donut} alt="" />
                <div className='lg:mr-40'>
                    <div className='w-44 lg:w-full flex border-1 border-gray-200  rounded-lg m-2'>
                        <span className='w-2 lg:w-6 bg-[#BE2C2C] dir-ltr rounded-s-lg '></span>
                        <div className='lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2'>
                            <span className='lg:w-36 font-semibold'>Partnership</span>
                            <span>:</span>
                            <span>5% tokens</span>
                        </div>
                    </div>
                    <div className='w-44 lg:w-full flex border-1 border-gray-200  rounded-lg m-2'>
                        <span className='w-2 lg:w-6 bg-[#FF8F34] dir-ltr rounded-s-lg '></span>
                        <div className='lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2'>
                            <span className='lg:w-36 font-semibold'>LP Pool</span>
                            <span>:</span>
                            <span>35% tokens</span>
                        </div>
                    </div>
                    <div className='w-44 lg:w-full flex border-1 border-gray-200  rounded-lg m-2'>
                        <span className='w-2 lg:w-6 bg-[#9934FF] dir-ltr rounded-s-lg '></span>
                        <div className='lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2'>
                            <span className='lg:w-36 font-semibold'>Burned</span>
                            <span>:</span>
                            <span>30% tokens</span>
                        </div>
                    </div>
                    <div className='w-44 lg:w-full flex border-1 border-gray-200  rounded-lg m-2'>
                        <span className='w-2 lg:w-6 bg-[#028DFD] dir-ltr rounded-s-lg '></span>
                        <div className='lg:pr-12 lg:py-2 flex text-xs lg:text-xl gap-2 lg:gap-8 m-2'>
                            <span className='lg:w-36 font-semibold'>BNB LP Pool</span>
                            <span>:</span>
                            <span>30% tokens</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  );
};

export default Tokenomics;
