import React from "react";
import bgImage from "../../assets/aboutusBg.png";
import ArrowLine from "../arrow/ArrowLine";

const AboutUs = () => {
  return (
    <div className="bg-blue-50 relative min-h-screen flex flex-col items-center justify-center py-10 px-6">
      {/* Heading Section */}
      <div className="flex flex-col items-start px-8 py-4 w-full max-w-5xl">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-3xl font-bold text-gray-800  ">
            About Us
          </h1>
          <ArrowLine className="w-[150px] md:w-[140px]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 w-full max-w-5xl">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Our Mission */}
          <div className="bg-white relative  shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg absolute  -top-4 font-semibold text-gray-700 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To create a disease-free lifestyle using the secrets of ancient
              Himalayan Yogis and Tibetan Vaidyas, blending Yoga, Pranayama,
              Bandha, Kriya, Mudra, Detox, Shatkarma, Marma Therapy, Chakra
              Healing, and Therapeutic Diets.
            </p>
          </div>

          {/* Our Master's */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Our Master's
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Led by experts from SVYASA (founded by a NASA scientist), Bihar
              School of Yoga (awarded by the Prime Minister), Patanjali
              University, and Tibetan Vaidyas, our team ensures a science-backed,
              authentic approach to health and wellness.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            About Acharya Swami Ji
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A Limca Book of Records holder and an avid adventurer who completed
            10,000 km cycling across India, from Jammu to Kanyakumari and
            Arunachal Pradesh to Gujarat, Acharya Swayam is a master of holistic
            healing, detox, therapeutic diets, and Marma Chikitsa. Trained by
            Himalayan yogis and Tibetan healers, with over 150 days in deep
            meditation, he offers personalized solutions for women’s health,
            men’s wellness, chronic illnesses, and mental well-being.
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={bgImage}
          alt="Background"
          className="w-[500px] opacity-20 md:opacity-40"
        />
      </div>
    </div>
  );
};

export default AboutUs;
