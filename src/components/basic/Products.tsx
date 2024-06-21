import {
  ProdItem1,
  ProdItem2,
  ProdItem3,
  ProdItem4,
} from "../../assets/photos/index_photos";

const Products = () => {
  return (
    <div className='max-w-screen-xl my-8'>
      <p className='bold-p'>Tagline</p>
      <h1 className='5xl'>Products</h1>

      <span className='indicator-item badge badge-primary badge-lg mr-2'>
        100% RECYCLED
      </span>
      <span className='indicator-item badge badge-primary badge-lg mr-2'>
        MODERN
      </span>
      <span className='indicator-item badge badge-primary badge-lg mr-2'>
        KOMFORT
      </span>

      <div className=' pt-12 pb-[100px]'>
        <div className='m-auto carousel carousel-center w-[98svw] space-x-4 gap-4 md:max-w-screen-xl'>
          <div className='carousel-item '>
            <div className='card card-compact rounded-[25px] shadow-sm w-[350px] '>
              <figure>
                <img
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
                <img
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
                <img
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
                <img
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
