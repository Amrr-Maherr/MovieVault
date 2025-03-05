import { MoonLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader
        color="#ffffff"
        loading={true} 
        size={50} 
      />
    </div>
  );
}
