import fullLogo from "./../../public/RegenBock_Logo.svg";
import Telegram from "./../../public/telegram.svg";
import WhatsApp from "./../../public/whatsapp.svg";
import Instagram from "./../../public/instagram.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className='footer pt-10 bg-bg text-base-content  border-t border-base-300 max-w-screen-xl mx-auto px-4'>
        {/* ------------------ LINKS ON THE PHONE ---------------- */}

        <nav className=' md:hidden  flex flex-col items-center justify-between w-full py-4'>
          <div>
            <Image src={fullLogo} alt='Logo' className='w-[100%] pb-8' />
          </div>
          <div className='w-full  flex items-center justify-around space-x-4 mb-4 mr-4'>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={Instagram} alt='Instagram' className='h-[45px]' />
            </a>
            <a
              href='https://telegram.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={Telegram} alt='Telegram' className='h-[45px]' />
            </a>
            <a
              href='https://www.whatsapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image src={WhatsApp} alt='WhatsApp' className='h-[45px]' />
            </a>
          </div>
        </nav>
        <nav>
          <h6 className='footer-title opacity-100'>About</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            accusantium voluptates molestias magnam repellendus velit pariatur
            excepturi quis perspiciatis ad alias iure nostrum, ipsa vitae illo
            debitis porro quo nesciunt!
          </p>
          {/* ------------------ LINKS ON THE PC ---------------- */}
          <nav className='hidden relative md:flex items-center justify-around w-full py-4'>
            <div>
              <Image src={fullLogo} alt='Logo' className='h-[100px]' />
            </div>
            <div className='absolute bottom-0 right-10 flex items-center space-x-4 mb-4 mr-4'>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                title='Instagram'
              >
                <Image src={Instagram} alt='Instagram' className='h-[35px]' />
              </a>
              <a
                href='https://telegram.org'
                target='_blank'
                rel='noopener noreferrer'
                title='Telegram'
              >
                <Image src={Telegram} alt='Telegram' className='h-[35px]' />
              </a>
              <a
                href='https://www.whatsapp.com'
                target='_blank'
                rel='noopener noreferrer'
                title='WhatsApp'
              >
                <Image src={WhatsApp} alt='WhatsApp' className='h-[35px]' />
              </a>
            </div>
          </nav>
        </nav>
        <nav className='md:w-[150px]'>
          <h6 className='footer-title opacity-100'>Company</h6>
          <a className='link link-hover'>Features</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav className='md:w-[200px]'>
          <h6 className='footer-title opacity-100'>Help</h6>
          <a className='link link-hover'>Customer Support</a>
          <a className='link link-hover'>Delivery Details</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>

        <nav className='md:w-[150px]'>
          <h6 className='footer-title opacity-100'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
      <footer className='footer px-10 py-4  bg-bg text-base-content'></footer>
    </>
  );
}
