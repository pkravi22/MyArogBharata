import guruji from "../../assets/guruji1.webp";
const Join = () => {
  return (
    <div className="bg-blue-100 py-16  ">
      <div className=" rounded-lg  sm:px-16 py-10 bg-customBlue flex  flex-col  md:flex-row  justify-center items-center sm:justify-between max-w-[1256px] mx-2 sm:mx-32">
        <div>
          <img src={guruji} alt="" className="w-[231px] z-2" />
        </div>
        <section
          id="join"
          className=" text-white  py-4  px-8 lg:px-8 text-center"
        >
          
          <h2 className="text-xl lg:text-3xl font-semibold px-2 pb-4 ">
            more than 30k+ Yogi Learner
          </h2>
          <h3 className="text-xl tracking-wider font-semibold mb-4">
            Take your first step of moksha{" "}
          </h3>
          <div className="flex justify-center mb-4">
            <img
              src="/path/to/instagram-images.jpg"
              alt="I"
              className=" text-[#011A1D] w-12 h-12 rounded-full -mr-2 bg-white"
            />
            <img
              src="/path/to/instagram-images2.jpg"
              alt="I"
              className="w-12 h-12 rounded-full -mr-2 bg-white"
            />
            <img
              src="/path/to/instagram-images3.jpg"
              alt="I"
              className="w-12 h-12 rounded-full -mr-2 bg-white"
            />
            <img
              src="/path/to/instagram-images4.jpg"
              alt="I"
              className="w-12 h-12 rounded-full -mr-2 bg-white"
            />
            <img
              src="/path/to/instagram-images5.jpg"
              alt="I"
              className="w-12 h-12 rounded-full bg-white"
            />
          </div>

          <button className="bg-blue-50 text-gray-500 py-4 px-12 rounded-full hover:bg-blue-800">
            Join Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default Join;
