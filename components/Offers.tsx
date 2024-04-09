import exclusive from '@/assets/exclusive_image.png';
import Image from 'next/image';

const Offers = () => {
  return (
    <>
      <div className="w-[65%] h-[65vh] flex m-auto px-[140px] py-[0px] mb-[150px] bg-gradient">
        <div className="flex flex-1 flex-col justify-center ">
          <h1 className="text-black text-[50px] font-semibold">Exclusive</h1>
          <h1 className="text-black text-[50px] font-semibold">Offer For You</h1>
          <p className="text-black text-[20px] font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="w-[282px] h-[50px] border-none rounded-full bg-[#ff4141] text-white text-[22px] font-medium mt-[30px] cursor-pointer">
            Check Now
          </button>
        </div>
        <div className="flex flex-1 items-center justify-end pt-[50px]">
          <Image
            src={exclusive}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Offers;
