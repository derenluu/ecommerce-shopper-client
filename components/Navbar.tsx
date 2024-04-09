'use client';

import { useState } from 'react';
import Logo from '@/assets/logo.png';
import CartIcon from '@/assets/cart_icon.png';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  const MenuItem = ({ text, isActive, onClick }: MenuItemProps) => (
    <li
      className="flex flex-col items-center justify-center gap-1"
      onClick={onClick}
    >
      {text === 'Shop' ? (
        <Link href={`/`}>{text}</Link>
      ) : (
        <Link href={`/${text.toLowerCase()}`}>{text}</Link>
      )}
      {isActive && <hr className="border-none w-[80%] h-1 rounded-lg bg-[#FF4141]" />}
    </li>
  );

  return (
    <div className="flex justify-between p-4 shadow-md">
      <div className="flex items-center gap-3">
        <Image
          src={Logo}
          alt="Logo"
        />
        <p className="text-black text-4xl font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center gap-12 list-none text-[#626262] text-xl font-semibold">
        <MenuItem
          text="Shop"
          isActive={menu === 'shop'}
          onClick={() => setMenu('shop')}
        />
        <MenuItem
          text="Men"
          isActive={menu === 'men'}
          onClick={() => setMenu('men')}
        />
        <MenuItem
          text="Women"
          isActive={menu === 'women'}
          onClick={() => setMenu('women')}
        />
        <MenuItem
          text="Kids"
          isActive={menu === 'kids'}
          onClick={() => setMenu('kids')}
        />
      </ul>
      <div className="flex items-center gap-11">
        <Link href={'/login'}>
          <button className="w-[157px] h-[58px] outline-none border border-gray-600 rounded-full text-[#515151] text-xl font-semibold active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>
        <Link href={'/cart'}>
          <Image
            src={CartIcon}
            alt="Cart"
          />
        </Link>
        <div className="w-6 h-6 flex justify-center items-center mt-[-35px] ms-[-55px] rounded-xl text-sm bg-red-500 text-white">
          0
        </div>
      </div>
    </div>
  );
};

export default Navbar;
