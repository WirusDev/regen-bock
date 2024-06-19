import { Vector } from "../../public/photos/index_photos"; // Adjust this import based on your actual path
import Image from "next/image";
const BockAufRegen = () => {
  return (
    <div className='relative w-full h-[90vh] flex md:flex-row flex-col items-center md:justify-between justify-center'>
      <div className='relative z-10 text-black md:left-[6rem] font-bold text-9xl leading-tight'>
        <h1 className=' text-7xl md:text-8xl'>
          hast du
          <br />
          bock auf
          <br />
          regen?
        </h1>
      </div>
      <div className='relative  text-black md:right-[6rem]'>
        <Image src={Vector} alt='bock auf regen?' className='  w-[550px] ' />
      </div>
    </div>
  );
};

export default BockAufRegen;
