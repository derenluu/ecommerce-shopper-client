const page = () => {
  return (
    <>
      <div className="w-full h-[80vh] bg-[#fce3fe] py-[100px] mb-[30px]">
        <div className="w-[580px] h-[620px] bg-white m-auto py-[40px] px-[40px]">
          <h1 className="my-[10px] mx-0 font-semibold text-3xl">Sign Up</h1>
          <div className="flex flex-col gap-[20px] mt-[30px]">
            <input
              type="text"
              placeholder="Your name"
              className="w-full h-[72px] ps-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[72px] ps-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full h-[72px] ps-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-lg"
            />
          </div>
          <button
            type="button"
            className="w-full h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[24px]"
          >
            Continue
          </button>
          <p className="mt-[20px] text-[#5c5c5c] text-lg font-medium">
            Already have an account <span className="text-[#ff4141] font-semibold">Login here</span>
          </p>
          <div className="flex items-center mt-[25px] gap-[15px] text-[#5c5c5c] text-lg font-medium">
            <input
              type="checkbox"
              placeholder="Checkbox"
              name=""
              id=""
            />
            <p className="text-lg font-medium">Agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
