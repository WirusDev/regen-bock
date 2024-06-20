import fullLogo from "./../../assets/RegenBock_Logo.svg";

export default function Navbar() {
  return (
    <div className='navbar h-[50px] z-50 text-black rounded-b-[35px] w-full max-w-[1248px] mx-auto top-0 px-4 sticky  bg-gradient from-transparent to-tertiary via-tertiary backdrop-blur-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle'
            title='Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md rounded-box w-52 bg-bg' //bg-navbar-gradient bg-cover bg-center
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center align-items-center justify-center'>
        <a className='btn btn-ghost text-xl' href='#'>
          <img src={fullLogo} alt='Logo' className='h-[45px] cover' />
        </a>
      </div>
      <div className='navbar-end'>
        {/* -----------------------Search----------------------- */}
        <button className='btn btn-ghost btn-circle' title='Search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        {/* -----------------------notifications----------------------- */}
        <button
          className='btn btn-ghost btn-circle '
          title='View notifications'
        >
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-xs badge-primary indicator-item'></span>
          </div>
        </button>
        <div className='dropdown dropdown-end'>
          {/* -----------------------CART----------------------- */}
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='badge badge-sm indicator-item'>2</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-bg text-black shadow' // bg-navbar-gradient bg-cover bg-center
          >
            <div className='card-body'>
              <span className='font-bold text-lg'>2 Artikel </span>
              <span className='text-green'>Insgesamt: €89.99</span>
              <div className='card-actions'>
                <button className='btn btn-primary btn-block'>Warenkorb</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
