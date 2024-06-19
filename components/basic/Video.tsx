import React from "react";
import videoSrc from "../../public/video/0616.mp4";

export default function HomeVideo() {
  return (
    <section className='relative flex justify-center items-center max-w-screen-xl h-screen overflow-hidden mt-8'>
      <div className='relative w-full h-full'>
        <video
          src={videoSrc}
          className='absolute top-0 left-0 w-full h-[80vh] object-cover md:rounded-bl-[400px] rounded-bl-[200px] rounded-br-[30px] md:rounded-tr-[400px] rounded-tr-[200px] rounded-tl-[30px]'
          muted
          autoPlay
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          preload='auto'
        />
      </div>
    </section>
  );
}
