const About = () => {
  return (
    <section className="bg-blue-50 py-24  px-6" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-32">
      
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            src="/src/assets/guruji.png"
            alt="Meditation group"
            className=" w-[466px] rounded-[25px] "
          />
        </div>

      
        <div className=" flex flex-col gap-4 w-full sm:w-1/2 text-center lg:text-left">
          <div className="flex items-center gap-4">
            
            <h2 className="text-base font-comfortaa leading-6 flex items-center tracking-normal text-[#00235A] text-nowrap">
              Welcome To Arog Bharat
            </h2>
            <span className="w-[400px] bg-[#00235A] h-1"></span>
          </div>

         
          <p className=" text-[24px] md:text-[36px] font-comfortaa leading-[35px] flex justify-center sm:justify-start items-center tracking-normal text-[#011A1D];">
            ArogBharat <br />
            Reverse the Disease,
            <br /> Live with Ease
          </p>
          <p className="text-[#00235A] text-lg leading-relaxed mb-4">
            Adhyatma is an association of traditional yoga practitioners who are
            on a mission to bring the holistic practices of yoga that
            encompasses the mind, body, and spirit. At Adhyatma, the
            dharma(duty) of each teacher is to spread the ancient wisdom and
            practice of yoga with practitioners around the world and to provide
            a supportive and authentic environment for your yoga journey through
            online and offline yoga offerings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
