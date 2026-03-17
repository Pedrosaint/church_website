import { Globe, Heart, Users, MapPin } from "lucide-react";

const Missions = () => {
  return (
    <section className="py-20 px-4 bg-white mt-10 md:mt-18">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
            WAGGOM Missions
          </h2>
          <div className="bg-[#0B2545]/5 border-l-4 border-[#D4A34A] p-4 rounded-r-lg max-w-2xl mx-auto mb-6">
            <p className="text-[#0B2545] italic font-medium">
              "You shall be my witnesses in Jerusalem, and in all Judea and
              Samaria, and to the ends of the earth."
            </p>
            <p className="text-gray-500 text-sm mt-1">— Acts 1:8</p>
          </div>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto leading-relaxed">
            Every believer is called to be a witness of Jesus Christ, beginning
            from their immediate environment and extending to the farthest parts
            of the world. At WAGGOM, missions is at the heart of what we do.
          </p>
        </div>

        {/* Mission Description */}
        <div className="bg-[#F6F7F9] rounded-2xl p-8 md:p-12 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed font-inter mb-6">
            We believe that having received the free gift of salvation, we must
            also share the good news of hope and redemption with others. Our
            approach to missions is holistic, combining the preaching of the
            Gospel with compassionate outreach — bringing hope to the poor,
            healing to the brokenhearted, deliverance to the captives, sight to
            the blind, and freedom to the oppressed.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-inter mb-6">
            With active missionaries serving in mission fields across interior
            regions of Nigeria, we are committed to fulfilling Christ's mandate
            of taking the Gospel to the ends of the earth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-inter">
            In partnership with Waggom Theological Seminary (WATHS), we operate a
            School of Missions, where individuals are trained and equipped for
            the work of end-time missions. Students participate in annual
            outreach missions to the hinterlands, gaining practical experience
            and developing a passion for souls.
          </p>
        </div>

        {/* Mission Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#D4A34A]" />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2545] mb-2">
              Gospel Outreach
            </h3>
            <p className="text-gray-500 text-sm">
              Preaching the Gospel to the unreached in interior regions of
              Nigeria and beyond.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#D4A34A]" />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2545] mb-2">
              Compassionate Ministry
            </h3>
            <p className="text-gray-500 text-sm">
              Bringing hope, healing, and freedom through holistic outreach to
              the marginalized.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#D4A34A]" />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2545] mb-2">
              School of Missions
            </h3>
            <p className="text-gray-500 text-sm">
              Training and equipping individuals for the work of end-time
              missions through WATHS.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#D4A34A]" />
            </div>
            <h3 className="font-semibold text-lg text-[#0B2545] mb-2">
              Field Missions
            </h3>
            <p className="text-gray-500 text-sm">
              Annual outreach missions to the hinterlands with signs, miracles,
              and powerful testimonies.
            </p>
          </div>
        </div>

        {/* Contact for Missions */}
        <div className="mt-12 text-center font-inter">
          <p className="text-gray-600">
            For more information about missions:{" "}
            <span className="text-[#D4A34A] font-medium">
              missions@waggom.org
            </span>{" "}
            |{" "}
            <span className="text-[#D4A34A] font-medium">
              +234 701 507 6974
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
