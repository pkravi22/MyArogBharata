import FooterLogo from "../../assets/footerLogo.webp";

import QuickLinks from "./Quicklinks";
import Services from "./Services";
import CallNowButton from "./CallNowButton";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";
import ArrowLine from "../arrow/ArrowLine";

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 text-center  lg:text-left pb-32">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center justify-center">
            <img
              src={FooterLogo}
              alt="Arog Bharat Logo"
              className="w-[300px] h-auto mb-4"
            />

            <div className="flex space-x-4 mt-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                <FaFacebookF className="text-black text-lg" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                <FaInstagram className="text-black text-lg" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition">
                <FaLinkedinIn className="text-black text-lg" />
              </div>
            </div>
          </div>

          <div className="flex justify-around lg:justify-between ">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Services</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Detox
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Meditation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Diet
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Men's Health
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Women's Health
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Explore</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Membership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 underline underline-offset-2"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start space-y-6">
            <button className="px-6 py-2 bg-[#FAAF40] text-black font-bold rounded-full shadow hover:bg-orange-500 transition">
              Call Us
            </button>
            <button className="px-6 py-2 bg-[#FAAF40] text-black font-bold rounded-full shadow hover:bg-orange-500 transition">
              Email Us
            </button>
            <button className="px-6 py-2 bg-[#FAAF40] text-black font-bold rounded-full shadow hover:bg-orange-500 transition">
              Whatsapp Us
            </button>
          </div>
        </div>

        <div className="mt-28">
          <ArrowLine className="w-screen px-16" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
