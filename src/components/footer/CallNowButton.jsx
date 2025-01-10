const CallNowButton = () => {
    const phoneNumber = "+1234567890"; // Replace with your desired phone number
  
    return (
      <div className="flex flex-col  items-start gap-8 py-8">
      
        <div>
        <a
          href={`tel:${+917752810581}`}
          className="bg-[#FAAF40] text-black font-bold py-2 px-4  rounded-3xl shadow-lg hover:bg-[#FAAF45] transition duration-300"
        >
          Call Now
        </a>
        </div>
        <div>
        <a
          href={`tel:${+917752810581}`}
          className="bg-[#FAAF40] text-black font-bold py-2 px-4 ml-0 rounded-3xl shadow-lg hover:bg-[#FAAF45] transition duration-300"
        >
         Email us
        </a>
        </div>
        <div>
        <a
          href={`tel:${+917752810581}`}
          className="bg-[#FAAF40] text-black font-bold py-2 px-4 ml-0 rounded-3xl shadow-lg hover:bg-[#FAAF45] transition duration-300"
        >
          Whatsapp us
        </a>
        </div>
       
      </div>
    );
  };
  
  export default CallNowButton;