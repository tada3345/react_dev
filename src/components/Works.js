import React from 'react';

//import images
import Work1 from '../assets/img/work1.png';
import Work2 from '../assets/img/work2.png';
import Work3 from '../assets/img/work3.png';
import Work4 from '../assets/img/work4.png';

const Works = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto text-sky-900">
        {/* title */}
        <h2
          className="text-white text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          業績
        </h2>
        {/* grid*/}
        <div className="grid gap-y-4 lg:grid-cols-2">
          {/* item*/}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1000"
          >
            <img src={Work1} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">
                企業社内管理システム
              </h4>
              <p>
                Twitterのように気軽に「コメント」しあうことで問題を解決される場を整えた。
              </p>
            </div>
          </div>

          {/* item*/}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1300"
          >
            <img src={Work2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HPリニューアル</h4>
              <p>デザイン性とイメージ改善を目的としたHPリニューアル</p>
            </div>
          </div>
          {/* item*/}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1600"
          >
            <img src={Work3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">
                店内サービスご案内ページ
              </h4>
              <p>ご利用中のお客様に店内ＰCで必ず表示されるホームページ</p>
            </div>
          </div>
          {/* item*/}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="1900"
          >
            <img src={Work4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">
                SEO対策用の自社コラム
              </h4>
              <p>
                SEO対策と新サービスや求人等の特集のためのWordpressを使用した「まとめ」サイト
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
