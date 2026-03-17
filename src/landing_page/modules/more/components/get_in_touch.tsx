import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { toast } from "sonner";
import { useContactUsMutation } from "../api/more.api";

// Custom Marker Icon
const redMarker = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactUs, { isLoading }] = useContactUsMutation();

const handleSubmit = async () => {
    if (!fullName || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const contactInfo = {
        fullName,
        email,
        message
      };

      await contactUs(contactInfo).unwrap();

      toast.success("Message sent successfully!");

      // clear form
      setFullName("");
      setEmail("");
      setMessage("");
    } catch (error: unknown) {
      toast.error((error as { data: { message: string } }).data.message);
    }
  };

  return (
    <div className="py-13 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-medium text-gray-900 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 font-inter">
            We are here to help and answer any questions you might have. We look
            forward to hearing from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 font-inter">
          {/* Left Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
            {/* Full Name and Email Address */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  placeholder="Enter your full name"
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-900 font-medium mb-2">
                Message
              </label>
              <textarea
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#D4A34A] hover:bg-[#D4A34A]/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-4 py-3 hover:scale-105 cursor-pointer rounded-xl transition-colors shadow-md"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Right Side - Contact Info and Map */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg shrink-0">
                  <MapPin className="w-6 h-6 text-[#D4A34A]" />
                </div>
                <div>
                  <p className="text-gray-800">
                    3–5 Waggom Avenue, Off Agalaba Road,
                    <br />
                    Osisioma Industrial Layout, Aba, Abia State, Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg shrink-0">
                  <Phone className="w-6 h-6 text-[#D4A34A]" />
                </div>
                <div>
                  <p className="text-gray-800">+234 902 092 7872</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg shrink-0">
                  <Mail className="w-6 h-6 text-[#D4A34A]" />
                </div>
                <div>
                  <p className="text-gray-800">info@waggom.org</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-64">
              <MapContainer
                center={[5.115, 7.372]} // Aba, Abia State
                zoom={16}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />

                {/* Marker */}
                <Marker position={[5.115, 7.372]} icon={redMarker} />
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Helpful Links Section */}
        <div className="mt-16 text-center font-inter">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Helpful Links
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-2 text-gray-700">
            <a
              href="/about#our-activities"
              className="hover:text-amber-600 transition-colors underline"
            >
              Fellowship Schedule
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/more#missions"
              className="hover:text-amber-600 transition-colors underline"
            >
              Our Missions
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/more#partner-with-us"
              className="hover:text-amber-600 transition-colors underline"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
