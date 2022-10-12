import React from 'react';

// import images
import Img1 from '../assets/img/exp-img1.png';
import Img2 from '../assets/img/exp-img2.png';

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-l flex space-x-6 items-center">
            {/*imges*/}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img src={Img1} alt="" />
            </div>
            <div className="self-end" data-aos="fade-up" data-aos-offset="400">
              <img src={Img2} alt="" />
            </div>
          </div>
          {/* text*/}
          <div
            className="flex1 flex flex-col items-start justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="text-3xl font-bold mb-6">即日就業可</h2>
            <p className="font-secondary mb-6">
              「大至急、特設ページが欲しい。」
              <br />
              その願いが叶います。
            </p>
            <button className="btn">今すぐお問い合わせ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
