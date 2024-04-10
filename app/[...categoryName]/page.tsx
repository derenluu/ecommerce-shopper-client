'use client';

import Image from 'next/image';
import { ShopContext } from '@/contexts/ShopContext';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import man_banner from '@/assets/banner_mens.png';
import women_banner from '@/assets/banner_women.png';
import kids_banner from '@/assets/banner_kids.png';
import dropdown_icon from '@/assets/dropdown_icon.png';
import Item from '@/components/Item';

const Category = () => {
  const pathname = usePathname().slice(1);

  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="items-center justify-center">
        <Image
          src={
            pathname === 'man'
              ? man_banner
              : pathname === 'women'
              ? women_banner
              : pathname === 'kids'
              ? kids_banner
              : man_banner
          }
          alt="Banner Category"
          className="block w-[82%] mx-auto my-[30px]"
        />
        <div className="flex mx-[170px] my-0 justify-between items-center">
          <p>
            <span className="font-semibold">Showing 1-12 </span>
            out of 36 products
          </p>
          <div className="flex py-[10px] px-[20px] rounded-[40px] border border-[#888]">
            Sort by
            <Image
              src={dropdown_icon}
              alt=""
              className="m-auto ps-1"
              width={18}
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[20px] my-[20px] mx-[170px] ">
          {all_product.map((item, index) => {
            if (pathname === item.category) {
              return (
                <Item
                  key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex justify-center w-[233px] h-[69px] items-center my-[150px] mx-auto rounded-[75px] bg-[#ededed] text-[#787878] text-lg font-medium">
          Explore More
        </div>
      </div>
    </>
  );
};

export default Category;
