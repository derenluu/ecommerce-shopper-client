import new_collections from '@/assets/new_collections';
import Item from './Item';

const NewCollection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px] mb-[100px]">
        <h1 className="text-black text-5xl font-semibold">NEW COLLECTIONS</h1>
        <hr className="w-[200px] h-[6px] rounded-lg bg-[#252525]" />
        <div className="grid grid-cols-4 mt-[50px] gap-[30px]">
          {new_collections.map((item, index) => {
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

export default NewCollection;
