
import React from "react";
import quote from "../../assets/quote.webp";
import user from "../../assets/user.webp";

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between w-[90%] lg:w-[48%] min-w-[80%] lg:min-w-[48%] mx-2 relative">
    {/* Top and Left Border */}
    <div className="absolute inset-0 -left-2 -top-2 -bottom-2 border-t-2 w-2/3 rounded-s-md border-[2px] border-orange-300  border-r-transparent"></div>

    <div className="flex justify-end py-2">
      <img src={quote} alt="" className="w-[50px]" />
    </div>
    <p className="text-gray-700 text-sm mb-4">{testimonial.message}</p>
    <div className="flex items-center gap-8 bg-blue-100 py-2 px-4 rounded-md">
      <div className="rounded-full w-12 h-12 flex items-center justify-center">
        <img src={user} alt="" className="w-full" />
      </div>
      <div>
        <h4 className="font-semibold text-black">{testimonial.name}</h4>
        <p className="text-black text-sm">{testimonial.profession}</p>
        <p className="text-black text-sm">{testimonial.location}</p>
      </div>
    </div>

   
  </div>
);

const Testimonial = ({ testimonials }) => {
  return (
    <section className="bg-blue-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Listen from our users
        </h2>
        <div className="relative">
          <div
            className="flex overflow-x-scroll gap-4 py-8 scrollbar-hidden"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
