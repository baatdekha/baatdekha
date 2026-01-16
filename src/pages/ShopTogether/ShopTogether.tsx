import shopTogetherBanner from "../Home/shopping-in-raghunathpali.jpeg";

const ShopTogether = () => {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex justify-center mb-10">
        <img className="rounded-2xl" src={shopTogetherBanner} alt="Banner" />
      </div>
      <div className="text-container">
        <div className="coming-soon-text">Coming Soon</div>
        <div className="tagline">Shop Together, Save Together</div>
      </div>
    </div>
  );
};

export default ShopTogether;
