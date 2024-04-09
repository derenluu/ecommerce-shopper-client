import Image from 'next/image';
import footer_logo from '@/assets/logo_big.png';
import instagram_icon from '@/assets/instagram_icon.png';
import pintester_icon from '@/assets/pintester_icon.png';
import whatsapp_icon from '@/assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Image
            src={footer_logo}
            alt=""
          />
          <p className="text-[#383838] text-[46px] font-bold">SHOPPER</p>
        </div>
        <ul className="flex list-none gap-[50px] text-[#252525] text-[20px]">
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Offices</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-[20px]">
          <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <Image
              src={instagram_icon}
              alt=""
            />
          </div>
          <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <Image
              src={pintester_icon}
              alt=""
            />
          </div>
          <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border border-[#ebebeb]">
            <Image
              src={whatsapp_icon}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
          <hr className="w-[80%] h-[3px] border-none rounded-[10px] bg-[#c7c7c7]" />
          <p>Copy @ 2024 - All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
