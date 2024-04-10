import Image from 'next/image';
import Link from 'next/link';

const Item = (props: any) => {
  return (
    <>
      <div className="w-[300px] transition-all transform hover:scale-105">
        <Link href={`/product/${props.id}`}>
          <Image
            src={props.image}
            alt=""
          />
        </Link>
        <p className="my-6">{props.name}</p>
        <div className="flex gap-5">
          <div className="text-[#374151] text-lg font-semibold">{props.new_price}</div>
          <div className="text-[#8c8c8c] text-lg font-medium line-through">{props.old_price}</div>
        </div>
      </div>
    </>
  );
};

export default Item;
