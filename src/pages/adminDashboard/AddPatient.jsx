import React from "react";

const AddPatient = () => {
  return (
    <div className="pt-24 pb-12 flex flex-col gap-6 justify-center items-center font-inter">
      <p className="text-3xl font-bold text-center">Add Patient</p>
      <form className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-black py-1 px-2 w-[350px] bg-[#F1F1F1] text-black placeholder-gray-600 rounded-md outline-none"
          />
        </div>

        {/* Age */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="age"
            placeholder="Age"
            className="border border-black py-1 px-2 w-[350px] bg-[#F1F1F1] text-black placeholder-gray-600 rounded-md outline-none"
          />
        </div>

        {/* Problem */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="problem"
            placeholder="Problem"
            className="border border-black py-1 px-2 w-[350px] bg-[#F1F1F1] text-black placeholder-gray-600 rounded-md outline-none"
          />
        </div>

        {/* Select Program */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="program"
            placeholder="Select Program"
            className="border border-black py-1 px-2 w-[350px] bg-[#F1F1F1] text-black placeholder-gray-600 rounded-md outline-none"
          />
        </div>

        {/* Select Duration */}
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="duration"
            placeholder="Select Duration"
            className="border border-black py-1 px-2 w-[350px] bg-[#F1F1F1] text-black placeholder-gray-600 rounded-md outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-1/2 border text-white bg-blue-500 py-1 rounded-sm"
          >
            Add Patient
          </button>
          <button
            type="button"
            className="w-1/2 border border-black py-1 rounded-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
