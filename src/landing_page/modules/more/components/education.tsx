import { GraduationCap, BookOpen, Mail } from "lucide-react";

const schools = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#D4A34A]" />,
    name: "Waggom Academy (WAAC)",
    description:
      "Our basic learning center, providing education from Cr\u00e8che to Primary School. With highly qualified teachers and a nurturing environment, we ensure that every child receives excellent academic training while developing a strong spiritual foundation.",
    note: "Next academic session begins in September.",
    email: "waac@waggom.org",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#D4A34A]" />,
    name: "Waggom Model Seminary (WAMS)",
    motto: "Righteousness and Knowledge",
    description:
      "Our secondary school program runs from Junior Secondary School (JS1) to Senior Secondary School (SS3). We are passionate about raising teenagers who will stand for righteousness and make positive impact in society. Our curriculum integrates academic excellence with character formation and spiritual development.",
    note: "Enroll your child today for the next academic session.",
    email: "wams@waggom.org",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-[#F6F7F9]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-4">
            Education
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto">
            WAGGOM is committed to raising godly leaders through quality
            education
          </p>
        </div>

        {/* Schools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schools.map((school, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-14 h-14 rounded-xl bg-[#D4A34A]/10 flex items-center justify-center mb-6">
                {school.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0B2545] mb-2">
                {school.name}
              </h3>

              {school.motto && (
                <p className="text-[#D4A34A] font-medium italic text-sm mb-4">
                  Motto: "{school.motto}"
                </p>
              )}

              <p className="text-gray-600 leading-relaxed font-inter mb-4">
                {school.description}
              </p>

              <p className="text-[#0B2545] font-medium text-sm mb-3">
                {school.note}
              </p>

              <div className="flex items-center gap-2 text-sm text-[#D4A34A]">
                <Mail className="w-4 h-4" />
                <span className="font-medium">{school.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
