import React from "react";
import { RiBasketballLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import googlePlay from "../assets/img/app-store-google-4d63c31a3e.svg";
import appleStore from "../assets/img/app-store-apple-f1f919205b.svg";

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="flex flex-col gap-4">
    <h6 className="font-semibold text-lg mb-4">{title}</h6>
    {items.map((item, index) => (
      <p key={index} className="text-sm">
        {item}
      </p>
    ))}
  </div>
);

interface SocialMediaButtonProps {
  icon: React.ReactNode;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon }) => (
  <button className="btn btn-sm h-[2.2rem] border-none hover:bg-[#282828] text-white bg-transparent hover:rounded-md">
    {icon}
  </button>
);

const Footer: React.FC = () => {
  return (
    <footer className="text-white min-h-screen py-24 bg-[#000000]">
      <div className="max-w-[75rem] mx-7 md:mx-auto">
        <p className="text-xl py-6">Uber</p>
        <p className="text-lg py-6">Visit Help Center</p>
        <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12">
          <FooterSection
            title="Company"
            items={[
              "About us",
              "Our offerings",
              "Newsroom",
              "Investors",
              "Blog",
              "Careers",
              "Autonomous",
              "Uber AI",
              "Gift Cards",
            ]}
          />
          <FooterSection
            title="Products"
            items={["Ride", "Drive", "Eat", "Uber Freight"]}
          />
          <FooterSection
            title="Global Citizenship"
            items={["Safety", "Diversity and Inclusion", "Sustainability"]}
          />
          <FooterSection
            title="Travel"
            items={["Reserve", "Airports", "Cities"]}
          />
        </nav>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="social-media flex gap-7 md:gap-10">
            <SocialMediaButton icon={<ImFacebook2 className="text-lg" />} />
            <SocialMediaButton icon={<FaXTwitter className="text-lg" />} />
            <SocialMediaButton icon={<FaYoutube className="text-lg" />} />
            <SocialMediaButton icon={<FaLinkedin className="text-lg" />} />
            <SocialMediaButton icon={<FaInstagram className="text-lg" />} />
          </div>
          <div className="flex flex-col my-12 md:my-0 gap-6 md:flex-row md:gap-3">
            <button className="flex gap-2 text-white bg-transparent border-none">
              <RiBasketballLine className="text-lg my-auto" /> English
            </button>
            <button className="flex gap-2 text-white bg-transparent border-none">
              <MdLocationOn className="text-lg my-auto" /> Port Harcourt
            </button>
          </div>
        
        </div>
        <div className="flex flex-row gap-3 mt-5 justify-center md:justify-start">
            <img src={googlePlay} className=" w-32" alt="Google Play" />
            <img src={appleStore} className=" w-32" alt="Apple Store" />
          </div>
        <div className="flex flex-col md:flex-row justify-between text-sm pt-16 text-[#98A4A4] gap-7 md:gap-0">
          <p className="text-center">© 2024 Uber Technologies Inc.</p>
          <div className="flex justify-center lg:justify-end gap-7">
            <p>Privacy</p>
            <p>Accessibility</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
