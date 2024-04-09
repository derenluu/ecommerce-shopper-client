const NewsLetter = () => {
  return (
    <>
      <div className="w-[65%] h-[40vh] flex flex-col items-center justify-center m-auto px-[140px] mb-[150px] bg-gradient gap-[30px]">
        <h1 className="text-[#454545] text-[50px] font-semibold">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-[#454545] text-[20px]">Subscribe to our newletter and stay updated</p>
        <div className="flex items-center justify-between bg-white w-[730px] h-[70px] rounded-full border border-gray-600">
          <input
            type="email"
            placeholder="Your Email"
            className="w-[500px] ms-[30px] border-none outline-none color-[#616161] text-[16px]"
          />
          <button className="w-[210px] h-[70px] rounded-full bg-black text-white text-[16px] cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
