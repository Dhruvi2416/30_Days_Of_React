import { useNavigate } from "react-router-dom";
const ChooseOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
     <h1 className="text-3xl m-2 text-white">Welcome to Color Convertor</h1>
      <div><button className="bg-red-600 p-4 rounded-lg text-white font-semibold m-4"
        onClick={() => {
          navigate("/RGBToHex");
        }}
      >
        RGB to HEX Color Convertor
      </button>
      <button className="bg-red-600 p-4 rounded-lg text-white font-semibold m-4"
        onClick={() => {
          navigate("/hexToRGB");
        }}
      >
        HEX to RGB Color Convertor
      </button></div>
    </div>
  );
};

export default ChooseOptions;
