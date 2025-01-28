import React from "react";
import quote from "../../assets/quote.webp";
import user from "../../assets/user.webp";
import ArrowLine from "../arrow/ArrowLine";
import bg from "../../assets/webinarImages/bg.png";
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white shadow-md border border-gray-900 rounded-lg p-4 flex flex-col justify-between relative">
    {/* Top and Left Border */}
    <div className="absolute inset-0 -"></div>

    <div className="flex justify-end py-2 ">
      <img src={quote} alt="Quote" className="w-[50px]" />
    </div>
    <p className="text-gray-700 text-sm mb-4">{testimonial.message}</p>
    <div className="flex items-center gap-8 bg-blue-100 py-2 px-4 rounded-md">
      <div className="rounded-full w-16  flex items-center justify-center">
        <img src={user} alt="User" className="w-full rounded-full" />
      </div>
      <div>
        <h4 className="font-semibold text-black">{testimonial.name}</h4>
        <p className="text-black text-sm">{testimonial.profession}</p>
        <p className="text-black text-sm">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonial = ({ testimonials, color }) => {
  return (
    <section className="py-10 relative">
      {/* Absolute Background Image */}
      <div className="absolute flex justify-center top-44 items-center inset-0 z-0">
        <img src={bg} alt=""  className="w-[600px]  bg-red z-50"/>
      </div>

      <div className="relative mx-auto px-4 sm:px-8 z-10">
        <h2 className="text-2xl sm:text-4xl text-center font-bold mb-6">
          Listen from our users
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
