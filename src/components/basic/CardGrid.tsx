import { Wow1, Wow2, Wow3 } from "../../assets/photos/index_photos";

const CardGrid = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center my-8'>
      <div className='card card-compact flex flex-col items-center'>
        <figure className='flex justify-center items-center h-[350px] w-full'>
          <img className='object-contain h-full' src={Wow1} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-3xl text-center'>Summer</h2>
        </div>
      </div>
      <div className='card card-compact flex flex-col items-center'>
        <figure className='flex justify-center items-center h-[350px] w-full'>
          <img className='object-contain h-full' src={Wow2} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-3xl text-center'>2024</h2>
        </div>
      </div>
      <div className='card card-compact flex flex-col items-center'>
        <figure className='flex justify-center items-center h-[350px] w-full'>
          <img className='object-contain h-full' src={Wow3} alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-3xl text-center'>Neuheiten</h2>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
