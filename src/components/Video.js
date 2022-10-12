import React, { useState } from 'react';

// import modal vid
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';

//import icons
import { BsPlayCircleFill } from 'react-icons/bs';

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3
            data-aos="fade-right"
            data-aos-offset="350"
            className="text-2xl font-semibold mb-8 lg:mb-0"
          >
            ジャヴァスクリプトの最新情報
          </h3>
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="mB8_qWxRXqI"
            onClose={() => setIsOpen(false)}
          />
          {/* video */}
          <div
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center"
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 hover:text-white hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
