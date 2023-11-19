const ShortInfo = () => {
  return (
    <div
      className="relative flex justify-center items-center py-2 px-2 lg:py-4 lg:px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img className="w-full lg:h-[460px] xl:h-[480px] 2xl:h-[550px]" src="https://i.ibb.co/7gnrFRr/short-info.png" alt="Short Info Background" />
      <div className="absolute text-center px-4 py-2 md:px-5 md:py-3 lg:py-10 xl:py-14 2xl:py-18 lg:px-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 dark:bg-slate-900 text-white">
        <h2 className="uppercase text-xs md:text-2xl font-serif">
          We're looking forward to hearing from you!
        </h2>
        <p className="text-[7px] md:text-sm">
          We cherish every interaction and love to hear great initiatives. Share
          your ideas with us today and we'll get back to you as soon as possible
          to establish how best we can work together to make your project shine.
        </p>
      </div>
    </div>
  );
};

export default ShortInfo;
