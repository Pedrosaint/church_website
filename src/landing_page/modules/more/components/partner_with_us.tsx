import { Globe, Heart, Mail, Phone, User, Wrench } from "lucide-react";

const partnerOptions = [
  {
    icon: <Globe className="w-6 h-6 text-[#D4A34A]" />,
    title: "Adopt a Mission Field",
    description:
      "Pray consistently for God's move in a specific region.",
  },
  {
    icon: <User className="w-6 h-6 text-[#D4A34A]" />,
    title: "Adopt a Missionary",
    description:
      "Encourage, support, and pray for one of our missionaries.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#D4A34A]" />,
    title: "Become a Missionary",
    description: "Serve as a part-time or full-time missionary.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#D4A34A]" />,
    title: "Sponsor Mission Projects",
    description: "Support outreach programs and mission initiatives.",
  },
];

const PartnerWithUs = () => {
  return (
    <section className="py-20 px-4 bg-[#F6F7F9]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto">
            You can become part of this mission in several ways
          </p>
        </div>

        {/* Partner Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4A34A]/10 flex items-center justify-center mx-auto mb-4">
                {option.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#0B2545] mb-2">
                {option.title}
              </h3>
              <p className="text-gray-500 text-sm font-inter">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center font-inter">
          <p className="text-gray-600 mb-2">For more information:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#D4A34A]" />
              <span className="text-[#D4A34A] font-medium">
                missions@waggom.org
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#D4A34A]" />
              <span className="text-[#D4A34A] font-medium">
                +234 701 507 6974
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
