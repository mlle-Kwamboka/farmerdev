import hero from "../assets/hero.png";

const Hero = ({ openModal }) => {
  return (
    <>
      <section className="mx-auto w-full p-10 py-20">
        <div className="w-full mx-auto grid grid-cols-2 items-center justify-center gap-5">
          <div className="flex flex-col items-start justify-start space-y-10">
            <h1 className="text-black text-[48px] font-bold">
              Best Quality Farm Products
            </h1>
            <p className="text-[16px] text-light-dark font-light">
            Orchard provides farmes, ranchers, private foresters, and agricultural producers with online self service applications and educational materials.
            </p>
            <button
              onClick={openModal}
              className="bg-og-blue text-dark-gray text-center text-[20px] font-bold capitalize rounded-full px-10 py-5"
              type="button"
            >
              Invest
            </button>
          </div>
          <div>
            <img src={hero} alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
