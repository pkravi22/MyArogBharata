import React from "react";
import youtube from "../../assets/webinarImages/youtube.png";

const feedbackData = [
  {
    id: 1,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
  {
    id: 2,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
  {
    id: 3,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
  {
    id: 4,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
  {
    id: 5,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
  {
    id: 6,
    title: "Listen to Vinita’s weight loss journey with help of ArogBharat",
    description:
      "Vinita took ArogBharat therapy sessions for 3 months and saw profound effects in her health and was able to reduce weight which she couldn’t do for last 3 years",
  },
];

const FeedbackCard = ({ title, description }) => {
  return (
    <div className="relative flex flex-col gap-2 z-0 rounded-[20px] border border-gray-500 bg-white p-4">
      <div className="opacity-100 rounded-[15px_15px_0px_0px] w-full h-[200px] bg-[#686868]"></div>
      <div className="text-md font-semibold leading-[normal] flex items-center py-2 tracking-normal text-black">
        {title}
      </div>
      <div className="text-sm leading-[normal] flex items-center py-2 tracking-normal text-black">
        {description}
      </div>
      <div className="absolute left-24 top-24">
        <img src={youtube} alt="YouTube" />
      </div>
    </div>
  );
};

const Feedback = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className=" text-xl sm:text-3xl py-4  w-full md:w-[65%] text-center text-white font-bold">
        HEAR FROM OUR HAPPY CUSTOMER’S WHICH ATTENDED THIS WEBINAR
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-16 pt-8 relative">
        {feedbackData.map((feedback) => (
          <FeedbackCard key={feedback.id} title={feedback.title} description={feedback.description} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;