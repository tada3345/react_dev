import React from 'react';
//import components
import Pixs from './Pixs';

//image
import Img from '../assets/img/yasuda.png';

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <div>
            <h1
              data-aos="fade-down"
              data-aos-delay="500"
              className="text-3xl font-bold mb-8 lg:text-4xl lg:leading-snug"
            >
              リアクトJSの達人
              <br /> フロントエンドエンジニア
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="600"
              className="font-secondary mb-12 max-w-[440px] max-auto lg:mx-0"
            >
              リアクトをメインとしたJAVASCRIPTのフロントエンドデベロッパー。
              「リアクト」は管理が簡単、サイトスピードも抜群、
              他応用できる最新ウェブ技術で、世界大手サイトの大半が使用中。
              革新的な技術でウェブサイトに活気をどうぞ！
            </p>
            {/* button */}
            <div
              data-aos="fade-down"
              data-aos-delay="700"
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
            >
              <button className="btn">お問い合わせ</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                ポートフォリオ
              </a>
            </div>
            <Pixs />
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <img className="lg:mx-6" src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
