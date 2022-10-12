import React from 'react';

//import componts
import PortfolioSlider from './PortfolioSlider';

const Portfolio = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2
              className="text-3xl font-bold mb-6"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1600"
            >
              ポートフォリオ
            </h2>
            <p
              className="max-w-2xl max-auto mb-12 lg:mb-24 text-center"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1800"
            >
              ゲーム・ウェブサイト・ウェブアプリなどを通し、日々研究を重ね急激成長中
              <div className=""></div>
            </p>
          </div>
          {/* slider */}
          <div data-aos="fade-up" data-aos-offset="300" data-aos-delay="2000">
            <PortfolioSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
