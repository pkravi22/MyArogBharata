import React, { useState } from "react";
import bgImage from "../../assets/bgImage.webp";

import { RiArrowDropDownLine } from "react-icons/ri";
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
    {
      id: 7,
      question: "Can I practice Yoga if I have an injury?",
      answer:
        "You can practice Yoga, but it's important to consult a doctor and inform your instructor about the injury.",
    },
    {
      id: 8,
      question: "Is Yoga spiritual?",
      answer:
        "Yoga has spiritual aspects, but it's also a physical and mental practice that can be enjoyed by everyone.",
    },
  ];

  const toggleAnswer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className=" relative p-4 md:p-16 lg:p-32  flex flex-col justify-end  items-end sm:flex-row bg-blue-50 gap-8 border border-gray-1">
        <div className="absolute  opacity-25 lg:opacity-100  left-20 bottom-0  sm:
      ">
          <img src={image} alt="" className="w-[500px]  " />
        </div>
        <div className="absolute   ">
          <img src={image} alt="" className="w-[450px] -z-20 opacity-0" />
        </div>

        <div className="space-y-4 w-full sm:w-2/3 lg:w-1/2 max-w-[500px] flex flex-col  ">
          <h1 className="text-3xl mb-12">FAQ's</h1>
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border-none rounded-2xl  pb-0 cursor-pointer  flex flex-col "
            >
              <div
                className={`flex  justify-between items-center font-medium text-base leading-normal px-4 py-2 ${
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
                <div className="text-md mt-0 px-4  text-[#4479A4] bg-white py-1 pr-4 rounded-b-2xl">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
