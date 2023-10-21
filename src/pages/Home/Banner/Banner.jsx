import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const bannerImg = [
    "https://i.ibb.co/1Gkh7s8/online-shopping-1-1.jpg",
    "https://i.ibb.co/6Zb7qdz/shop-basket-1-1.jpg",
    "https://i.ibb.co/YdzVHSV/online-fashion-shopping-1-1.jpg",
  ];

  return (
    <AutoplaySlider bullets={false} play={true} interval={6000}>
      {bannerImg.map((imgSrc, index) => (
        <div key={index}>
          <img className="lg:h-4/6" src={imgSrc} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Banner;
