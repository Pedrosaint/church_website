import { BookIcon, CertIcon, GraduationCapIcon } from "../../../../assets/icons/svg_icons";

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCapIcon,
      iconBg: "bg-blue-900",
      title: "Undergraduate Program",
      duration: "4 Years",
      durationColor: "text-[#1C82FF] border-blue-[#2785F9] bg-[#2785F91F]",
      courses: [
        "B.A. Religious & Cultural Studies",
        "B.A. Theology",
        "B.Th. Pastoral Ministry",
      ],
    },
    {
      icon: BookIcon,
      iconBg: "bg-blue-900",
      title: "Masters Program",
      duration: "2-4 Years",
      durationColor: "text-[#7D167E] border-[#730B88] bg-[#E549FD1F]",
      courses: [
        "M.A. Theology",
        "M.A. Biblical Studies",
        "M.A. Missions & Evangelism",
        "M.A. Christian Education",
        "M.A. Pastoral Counseling",
      ],
    },
    {
      icon: CertIcon,
      iconBg: "bg-blue-900",
      title: "Certificate Program",
      duration: "1-2 Years",
      durationColor: "text-[#1C9029] border-[#1C9029] bg-[#1C90290A]",
      courses: [
        "Certificate in Ministry Leadership",
        "Certificate in Missions & Church Planting",
        "Certificate in Biblical Studies",
        "Certificate in Pastoral Training",
        "Certificate in Christian Counseling",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        {/* Notice Banner */}
        <div className="bg-[#FCAF2314] border-2 border-[#D4A34A] rounded-2xl p-6 mb-16 font-inter text-lg">
          <p className="text-center text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">
              Application Deadline:
            </span>{" "}
            Rolling admissions throughout the year. Early application is
            encouraged. For specific intake dates, please contact the admissions
            office.
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programs to Choose From
          </h2>
          <p className="text-lg text-gray-600 font-inter">
            Select the program that aligns with your calling and educational
            goals
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#F6F7F9] rounded-2xl p-8 border border-[#E6E9EE]  hover:shadow-lg transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#0A2240] mb-4">
                  <program.icon />
                </div>

                {/* Duration Badge */}
                <span
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold border font-inter ${program.durationColor}`}
                >
                  {program.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {program.title}
              </h3>

              {/* Course List */}
              <ul className="space-y-3 list-disc pl-5">
                {program.courses.map((course, idx) => (
                  <li key={idx} className="text-gray-700">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
