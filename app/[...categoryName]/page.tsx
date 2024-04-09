'use client';

import Image from 'next/image';
import { ShopContext } from '@/contexts/ShopContext';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import man_banner from '@/assets/banner_mens.png';
import women_banner from '@/assets/banner_women.png';
import kids_banner from '@/assets/banner_kids.png';
import dropdown_icon from '@/assets/dropdown_icon.png';

const Category = () => {
  const pathname = usePathname();

  const { all_product } = useContext(ShopContext);

  return (
    <>
      <div className="shop-category">
        <Image
          src={
            pathname === '/man'
              ? man_banner
              : pathname === '/women'
              ? women_banner
              : pathname === '/kids'
              ? kids_banner
              : man_banner
          }
          alt="Banner Category"
        />
        <div className="shopcategory-indexShort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="supports">
            Sort by{' '}
            <Image
              src={dropdown_icon}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
