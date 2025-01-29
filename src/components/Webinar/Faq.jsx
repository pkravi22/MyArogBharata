import React, { useState } from "react";
import bgImage from "../../assets/webinarImages/ques.webp";

import { RiArrowDropDownLine } from "react-icons/ri";
import Registration from "./Registration";
const FAQ = ({image}) => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is Yoga?",
      answer:
        "Yoga is a physical, mental, and spiritual practice that originated in ancient India.",
    },
    {
      id: 2,
      question: "How often should I practice Yoga?",
      answer:
        "It is recommended to practice Yoga at least 3-4 times a week for better results.",
    },
    {
      id: 3,
      question: "Do I need any special equipment for Yoga?",
      answer:
        "No special equipment is required, but a yoga mat can be helpful.",
    },
    {
      id: 4,
      question: "Is Yoga suitable for beginners?",
      answer:
        "Yes, Yoga is great for beginners. You can start with basic poses and progress over time.",
    },
    {
      id: 5,
      question: "Can Yoga help with flexibility?",
      answer: "Yes, regular Yoga practice can improve flexibility over time.",
    },
    {
      id: 6,
      question: "Do I need to be fit to start Yoga?",
      answer: "No, Yoga is for everyone regardless of fitness level.",
    },
    
  ];

  const toggleAnswer = (id) => {
    console.log("clicked")
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="mt-16 relative p-4 md:p-16 lg:p-8  flex flex-col justify-end  items-end sm:flex-row bg-[#5097D1] gap-8 border border-gray-1">
        <div className="absolute hidden sm:block  opacity-25  lg:opacity-100  left-20 bottom-28  sm:
      ">
          <img src={bgImage} alt="" className="w-[400px]  " />
        </div>
        

        <div className="space-y-8 w-full sm:w-2/3 lg:w-3/4 max-w-[700px] flex flex-col  ">
          <h1 className="text-3xl text-white mb-12">FAQ's</h1>
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border-none rounded-2xl  pb-0   flex flex-col "
            >
              <div
                className={`flex cursor-pointer justify-between items-center font-medium text-base leading-normal px-4 py-2 ${
                  openId === item.id
                    ? "rounded-tl-lg rounded-tr-lg "
                    : "rounded-lg"
                }  bg-white  text-black`}
                onClick={() => toggleAnswer(item.id)}
              >
                <p className="">{item.question}</p>
                <span>

                  <RiArrowDropDownLine size={30} />
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-1500 linear delay-200 ${
                  openId === item.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-md mt-0 px-4  text-[#349cf0] bg-blue-100 py-1 pr-4 rounded-b-2xl">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
          <div className="mb-8"><Registration/></div>
          
        </div>

      </div>
    </>
  );
};

export default FAQ;
