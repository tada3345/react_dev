import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-[400px] mb-16 lg:mb-4">
      <div className="container mx-auto h-full">
        <div className="h-full bg-contact bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
          <h3
            className="text-3xl font-semibold mb-8"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            即日就業可
          </h3>
          <p
            className="max-w-xs mb-12"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            お気軽にお問い合わせください。
            <br />
            面談応じます。
          </p>
          {/* form*/}
          <form
            className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="1000"
          >
            <input
              className="bg-gradient-to-t from-[#341d38] to-[#271223] h-12 px-4 outline-none rounded-md"
              type="text"
              placeholder="メールアドレスを入力"
            />
            <button className="btn">送る</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
