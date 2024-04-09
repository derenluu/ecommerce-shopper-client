import arrow_icon from '@/assets/arrow.png';
import hand_icon from '@/assets/hand_icon.png';
import hero_image from '@/assets/hero_image.png';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-gradient flex">
        <div className="flex flex-1 flex-col justify-center gap-5 ps-[180px] leading-130">
          <h2 className="text-black text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>
          <div>
            <div className="flex items-center gap-5">
              <p className="text-black text-7xl font-bold">new</p>
              <Image
                src={hand_icon}
                alt=""
                height={80}
              />
            </div>
            <p className="text-black text-7xl font-bold">collections</p>
            <p className="text-black text-7xl font-bold">for everyone</p>
            <div className="flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-[#ff4141] text-white text-[22px] font-medium">
              <div className="">Latest Collection</div>
              <Image
                src={arrow_icon}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src={hero_image}
            alt=""
            height={600}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
