import SpinnerSvg from "../../../components/SpinnerSvg";


const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-600px)]">
      <SpinnerSvg />
    </div>
  );
};

export default LoadingSpinner;
