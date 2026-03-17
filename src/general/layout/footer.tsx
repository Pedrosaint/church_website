import {
  Mail,
  Phone,
  MapPin,
  Dot,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B2545] text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* LOGO + CONTACT */}
        <div>
          <figure className="font-bold text-xl">
            <img src={logo} alt="Church logo" className="h-12 w-auto" />
          </figure>
          <p className="text-sm mt-3 leading-relaxed text-gray-400 font-inter">
            The Way to God Gospel Ministry — reaching the unreached with the
            Gospel of Jesus Christ since 1981.
          </p>

          <div className="mt-4 space-y-4 text-sm font-inter">
            {/* ADDRESS */}
            <p className="flex items-start gap-3 text-gray-400">
              <MapPin size={22} className="text-[#D4A34A] shrink-0" />
              <span>
                3–5 Waggom Avenue, Off Agalaba Road, Osisioma Industrial Layout,
                Aba, Abia State, Nigeria
              </span>
            </p>

            {/* PHONE */}
            <p className="flex items-center gap-3 text-gray-400">
              <Phone size={18} className="text-[#D4A34A] shrink-0" />
              <span>+234 902 092 7872</span>
            </p>

            {/* EMAIL */}
            <p className="flex items-center gap-3 text-gray-400 break-all">
              <Mail size={18} className="text-[#D4A34A] shrink-0" />
              <span>info@waggom.org</span>
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-xl mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Who We Are</li>
            <li>Our Beliefs</li>
            <li>Our Activities</li>
            <li>Leadership</li>
          </ul>
        </div>

        {/* MINISTRY */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Ministry</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Missions</li>
            <li>Prayer Department</li>
            <li>Partner With Us</li>
            <li>Support the Ministry</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Education</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>Waggom Academy (WAAC)</li>
            <li>Waggom Model Seminary (WAMS)</li>
            <li>School of Missions</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="font-semibold text-xl mb-3">Connect</h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li>News & Updates</li>
            <li>Testimonies</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6 mt-10 border-t border-gray-600 pt-6" />

      {/* Bottom */}
      <div className="container mx-auto px-6 mt-10 text-sm text-gray-400 flex flex-wrap justify-between font-inter">
        <p>
          {new Date().getFullYear()} WAGGOM. All Rights Reserved
        </p>

        <div className="flex space-x-2">
          <p>Privacy Policy</p> <Dot />
          <p>Terms of Use</p> <Dot />
          <p>Accessibility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
