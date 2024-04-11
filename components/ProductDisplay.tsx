import Image from 'next/image';
import start_icon from '@/assets/star_icon.png';
import start_dull_icon from '@/assets/star_dull_icon.png';

const ProductDisplay = (props: any) => {
  const { product } = props;
  return (
    <>
      <div className="flex my-0 mx-[170px]">
        <div className="flex gap-[17px]">
          <div className="flex flex-col gap-[16px]">
            <Image
              src={product.image}
              alt=""
              className="h-[163px]"
            />
            <Image
              src={product.image}
              alt=""
              className="h-[163px]"
            />
            <Image
              src={product.image}
              alt=""
              className="h-[163px]"
            />
            <Image
              src={product.image}
              alt=""
              className="h-[163px]"
            />
          </div>
        </div>
        <div>
          <Image
            src={product.image}
            alt=""
            className="w-[700px] h-[700px]"
          />
        </div>
        <div className="flex flex-col my-0 mx-[70px]">
          <h1 className='text-[#3d3d3d] text-[40xp] font-semibold'>{product.name}</h1>
          <div className="right-start">
            <Image
              src={start_icon}
              alt=""
            />
            <Image
              src={start_icon}
              alt=""
            />
            <Image
              src={start_icon}
              alt=""
            />
            <Image
              src={start_icon}
              alt=""
            />
            <Image
              src={start_dull_icon}
              alt=""
            />
            <p>(122)</p>
          </div>
          <div className="prices">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsam sapiente corporis
            velit aliquam mollitia ipsum voluptatum libero hic quod
          </div>
          <div className="size">
            <h1>Select Size</h1>
            <div className="select size">
              <div className="">S</div>
              <div className="">M</div>
              <div className="">L</div>
              <div className="">XL</div>
              <div className="">2XL</div>
            </div>
          </div>
          <button type="button">ADD TO CART</button>
          <p className="category">
            <span>Category: </span>Women, T-Shirt, Crop
          </p>
          <p className="category">
            <span>Tags: </span>Modern, Latest
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
