import { ZeitPh } from "../../public/photos/index_photos"; // Adjust this import based on your actual path
import Image from "next/image";
const Zeit = () => {
  return (
    <div className='relative w-full h-fit flex md:flex-row flex-col items-center md:justify-between justify-center gap-2 my-8 mb-[150px]'>
      <div className='relative  text-black '>
        <Image src={ZeitPh} alt='bock auf regen?' className='  w-[550px] ' />
      </div>
      <div className='relative z-10 text-black md:self-end font-bold text-9xl leading-tight md:w-[50%] md:pl-12'>
        <h3 className=' '>Unsere Ziel ist Freude...</h3>
        <p className='font-thin mt-2'>
          Unsere Its collections blend a conceptual-meets-functional design
          approach, a strong urban inspiration, and a signature fabric identity.
          A coated waterproof fabric palette inspired ist Freude...
        </p>
      </div>
    </div>
  );
};

export default Zeit;
