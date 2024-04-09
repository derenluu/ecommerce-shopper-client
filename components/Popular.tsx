import React from 'react';
import data_product from '@/assets/data';
import Item from './Item';

const Popular = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px] h-[90vh]">
        <h1 className="text-black text-5xl font-semibold">POPULAR IN WOMEN</h1>
        <hr className="w-[200px] h-[6px] rounded-lg bg-[#252525]" />
        <div className="mt-[50px] flex gap-7">
          {data_product.map((item, index) => {
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
          })}
        </div>
      </div>
    </>
  );
};

export default Popular;
