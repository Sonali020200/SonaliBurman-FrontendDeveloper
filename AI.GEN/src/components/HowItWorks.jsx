// import { useEffect } from "react";
import avatar from "../../src/assets/Avatar.png";
import '../styles/HowItWorks.css';

export const HowItWorks = () => {
   
    return (
      <>
        <div className="flex flex-col items-center justify-center gap-[32px] max-w-full z-[2] ">
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[26px] pl-0 box-border relative max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[13px] [transform:scale(1.406)]"
                  src={avatar}
                  alt="girl"
                />
                <div className="w-[96.81%] !m-[0] absolute right-[3.19%] bottom-[0px] left-[0%] flex flex-col items-start justify-center max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start"></div>
                </div>
                <div className="self-stretch h-32 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1" />
                </div>
                <div className="self-stretch h-32 flex flex-col items-start justify-start">
                  <div className="self-stretch flex-1" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center max-w-full z-[1] text-[64px] text-white">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border max-w-full">
                    <h1 className="m-0 w-[500px] h-16 relative text-inherit leading-[64px] font-semibold font-inherit flex items-center max-w-full mq450:text-19xl mq450:leading-[38px] mq825:text-[51px] mq825:leading-[51px]">
                      How it works
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center py-0 pr-[26px] pl-0 box-border relative min-h-[256px] max-w-full">
              <div className="w-[96.81%] !m-[0] absolute right-[3.19%] bottom-[0px] left-[0%] flex flex-col items-start justify-center max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[64px] font-normal font-inherit flex items-center mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                      Select an Avatar
                    </h1>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[64px] font-normal font-inherit flex items-center mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                      Create or Generate Script
                    </h1>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0">
                    <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[64px] font-normal font-inherit flex items-center mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                      Select AI Voices
                    </h1>
                    <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[64px] font-normal font-inherit flex items-center mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                      Publish
                    </h1>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                    <h1 className="m-0 self-stretch h-16 relative text-inherit leading-[64px] font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#5cc3fa,_#9e6ee6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center mq450:text-10xl mq450:leading-[38px] mq825:text-19xl mq825:leading-[51px]">
                      Select an Avatar
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
 