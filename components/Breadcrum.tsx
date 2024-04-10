import arrow_icon from '@/assets/breadcrum_arrow.png';
import Image from 'next/image';
import capitalizeFirstLetter from '@/utils/capitalizeFirstLetter';

const Breadcrum = (props: any) => {
  const { product } = props;
  // const category = capitalizeFirstLetter(product.category);
  return (
    <>
      <div className="flex items-center gap-[8px] text-[#5c5c5c] text-[16px] font-semibold my-[60px] mx-[170px] capitalize">
        Home
        <Image
          src={arrow_icon}
          alt=""
        />
        Shop
        <Image
          src={arrow_icon}
          alt=""
        />
        {product.category}
        <Image
          src={arrow_icon}
          alt=""
        />
        {product.name}
      </div>
    </>
  );
};

export default Breadcrum;
