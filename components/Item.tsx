import Image from 'next/image';

const Item = (props: any) => {
  return (
    <>
      <div className="w-[300px] transition-all transform hover:scale-105">
        <Image
          src={props.image}
          alt=""
        />
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
