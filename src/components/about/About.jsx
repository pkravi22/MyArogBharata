import React from "react";
import bgImage from "../../assets/aboutusBg.png";
import ArrowLine from "../arrow/ArrowLine";

const AboutUs = () => {
  return (
    <div className="bg-blue-50 relative min-h-screen flex flex-col items-center justify-center py-10 px-6">
      {/* Heading Section */}
      <div className="w-full max-w-5xl px-4 sm:px-8 py-4  rounded-lg">
        <div className="flex flex-col  gap-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About Us
          </h1>
          <ArrowLine className="w-[150px] md:w-[160px]  ml-8" />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid z-10 grid-cols-1 md:grid-cols-2 gap-8 py-24 w-full max-w-5xl">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Our Mission */}
          <fieldset className="bg-[#f8f7f7] shadow-lg rounded-lg p-6 border  border-orange-400">
            <legend className="text-lg font-semibold text-black mb-2 px-2">
              Our Mission
            </legend>
            <p className="text-black text-sm leading-relaxed">
              To create a disease-free lifestyle using the secrets of ancient
              Himalayan Yogis and Tibetan Vaidyas, blending Yoga, Pranayama,
              Bandha, Kriya, Mudra, Detox, Shatkarma, Marma Therapy, Chakra
              Healing, and Therapeutic Diets.
            </p>
          </fieldset>

          {/* Our Master's */}
          <fieldset className="bg-[#f8f7f7] shadow-lg rounded-lg p-6 border border-orange-400">
            <legend className="text-lg font-semibold text-black mb-2 px-2">
              Our Master's
            </legend>
            <p className="text-black text-sm leading-relaxed">
              Led by experts from SVYASA (founded by a NASA scientist), Bihar
              School of Yoga (awarded by the Prime Minister), Patanjali
              University, and Tibetan Vaidyas, our team ensures a
              science-backed, authentic approach to health and wellness.
            </p>
          </fieldset>
        </div>

        {/* Right Column */}
        <fieldset className="bg-[#f8f7f7] shadow-lg rounded-lg p-6 border border-[#FAAF40]">
          <legend className="text-lg font-semibold text-black mb-2 px-2">
            About Acharya Swami Ji
          </legend>
          <p className="text-black leading-relaxed">
            A Limca Book of Records holder and an avid adventurer who completed
            10,000 km cycling across India, from Jammu to Kanyakumari and
            Arunachal Pradesh to Gujarat, Acharya Swayam is a master of holistic
            healing, detox, therapeutic diets, and Marma Chikitsa. Trained by
            Himalayan yogis and Tibetan healers, with over 150 days in deep
            meditation, he offers personalized solutions for women’s health,
            men’s wellness, chronic illnesses, and mental well-being.
          </p>
        </fieldset>
      </div>

      {/* Background Image */}
      <div className="absolute top-20 inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={bgImage}
          alt="Background"
          className="w-[500px] opacity-80 md:opacity-90"
        />
      </div>
    </div>
  );
};

export default AboutUs;
