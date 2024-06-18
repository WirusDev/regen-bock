import { Video } from "../../assets/photos/index_photos";
//import Shape from "../../assets/VideoShape.svg";
export default function HomeVideo() {
  return (
    <section className='relative flex justify-center items-center max-w-screen-xl h-screen overflow-hidden mt-8 '>
      <div className='relative w-full h-full'>
        {/* <img
          src={Shape}
          alt='Shape'
          className='absolute inset-0 w-full h-full object-cover'
          style={{ clipPath: "url(#clipPath)" }}
        /> */}
        <video
          src={Video}
          className='absolute top-0 left-0 w-full h-[80vh] object-cover md:rounded-bl-[400px] rounded-bl-[200px] rounded-br-[30px] md:rounded-tr-[400px] rounded-tr-[200px] rounded-tl-[30px] '
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          //   style={{
          //     pointerEvents: "none",
          //     clipPath: "url(#clipPath)",
          //   }}
          preload='auto'
        />
      </div>
    </section>
  );
}
