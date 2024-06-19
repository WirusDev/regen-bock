import {
  ProdItem1,
  ProdItem2,
  ProdItem3,
  ProdItem4,
} from "../../public/photos/index_photos";
import Image from "next/image";

const Products = () => {
  return (
    <div className='w-full my-8'>
      <p className='bold-p'>Tagline</p>
      <h1 className='5xl'>Products</h1>
      <p className=''>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reiciendis
      </p>
      <div className=' pt-12 pb-[100px]'>
        <div className='m-auto carousel carousel-center w-[98svw] space-x-4 gap-4 max-w-[1280px]'>
          <div className='carousel-item'>
            <div className='card card-compact rounded-[25px] shadow-sm w-[350px]'>
              <figure>
                <Image
                  className='aspect-square w-full object-cover'
                  src={ProdItem1}
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl'>Transparent Regenjake</h2>
                <div className='flex justify-between w-full'>
                  <p>Gradient</p>
                  <p className='text-end'>55€</p>
                </div>

                <div className='card-actions justify-end'>
                  <button className='btn btn-primary w-full rounded-full btn-outline border-primary hover:bg-black'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card card-compact rounded-[25px] shadow-sm w-[350px]'>
              <figure>
                <Image
                  className='aspect-square w-full object-cover'
                  src={ProdItem2}
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl'>Regenjacke Sun</h2>
                <div className='flex justify-between w-full'>
                  <p>Gelb</p>
                  <p className='text-end'>55€</p>
                </div>

                <div className='card-actions justify-end'>
                  <button className='btn btn-primary w-full rounded-full btn-outline border-primary hover:bg-black'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card card-compact rounded-[25px] shadow-sm w-[350px]'>
              <figure>
                <Image
                  className='aspect-square w-full object-cover'
                  src={ProdItem3}
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl'>Transparent Gold</h2>
                <div className='flex justify-between w-full'>
                  <p>Rot</p>
                  <p className='text-end'>55€</p>
                </div>

                <div className='card-actions justify-end'>
                  <button className='btn btn-primary w-full rounded-full btn-outline border-primary hover:bg-black'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='card card-compact rounded-[25px] shadow-sm w-[350px]'>
              <figure>
                <Image
                  className='aspect-square w-full object-cover'
                  src={ProdItem4}
                  alt='Shoes'
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-xl'>Transparent Regenjake</h2>
                <div className='flex justify-between w-full'>
                  <p>Gradient</p>
                  <p className='text-end'>55€</p>
                </div>

                <div className='card-actions justify-end'>
                  <button className='btn btn-primary w-full rounded-full btn-outline border-primary hover:bg-black'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
