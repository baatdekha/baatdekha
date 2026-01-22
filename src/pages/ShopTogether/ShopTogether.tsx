import shopTogetherBanner from "@/pages/Home/assets/shopping-in-raghunathpali.jpeg";

export const ShopTogether = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex justify-center mb-10">
        <img className="rounded-2xl" src={shopTogetherBanner} alt="Banner" />
      </div>
    </div>
  );
};

