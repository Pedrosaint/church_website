import { Mail, Phone } from "lucide-react";

const PrayerDepartment = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
            Prayer Department
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Prayer is the engine room of the ministry
          </p>
        </div>

        {/* Content */}
        <div className="bg-[#0B2545] rounded-2xl p-8 md:p-12 text-white text-center">
          <p className="text-lg leading-relaxed mb-6 text-gray-200 font-inter">
            We have devoted men and women committed to strategic prayer and
            prophetic intercession, believing that God still answers prayers and
            performs miracles today.
          </p>

          <div className="bg-white/10 border-l-4 border-[#D4A34A] p-4 rounded-r-lg max-w-xl mx-auto mb-8">
            <p className="italic font-medium text-white">
              "Jesus Christ is the same yesterday, today, and forever."
            </p>
            <p className="text-gray-400 text-sm mt-1">— Hebrews 13:8</p>
          </div>

          <p className="text-gray-200 text-lg font-inter mb-8">
            Whatever your need may be, we believe God can meet you at the point
            of your need. You can send your prayer requests or share testimonies
            with us.
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-inter">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#D4A34A]" />
              <span className="text-gray-200">+234 703 983 1056</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#D4A34A]" />
              <span className="text-gray-200">prayer@waggom.org</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerDepartment;
