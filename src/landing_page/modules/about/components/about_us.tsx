import { BookOpen } from "lucide-react";

const beliefs = [
  {
    title: "The Holy Scriptures",
    description:
      "We believe that the Bible is the infallible Word of God, eternally reliable in all matters concerning the Christian faith and life.",
    verse: "2 Timothy 3:16",
  },
  {
    title: "The Trinity",
    description:
      "We believe in the Divine Trinity, God the Father, God the Son, and God the Holy Spirit\u2014three distinct persons perfectly united as one God.",
    verse: "Matthew 3:16\u201317; Matthew 28:19",
  },
  {
    title: "Repentance",
    description:
      "We believe in true repentance, which involves godly sorrow for sin and a sincere turning away from it.",
    verse: "Romans 5:1; 1 Corinthians 6:11",
  },
  {
    title: "Justification by Grace",
    description:
      "We believe in justification and the remission of sins through God\u2019s grace, enabling believers to stand guiltless before Him.",
    verse: "Ephesians 2:5\u20138",
  },
  {
    title: "The Baptism of the Holy Spirit",
    description:
      "We believe in the baptism of the Holy Spirit, with speaking in tongues as one of its evidences.",
    verse: "Acts 1:8; Mark 16:17",
  },
  {
    title: "The Church",
    description:
      "We believe that the Church is the body of Christ, and all believers are united in Him.",
    verse: "Romans 12:5",
  },
  {
    title: "Water Baptism",
    description:
      "We believe in water baptism by immersion after repentance and full surrender to Jesus Christ.",
    verse: "Matthew 28:19; Acts 8:28\u201338",
  },
  {
    title: "Divine Healing",
    description:
      "We believe that divine healing is available to God\u2019s children through the finished work of Christ on the cross.",
    verse: "Isaiah 53:4\u20135; James 5:14\u201316",
  },
  {
    title: "Life After Death",
    description:
      "We believe in the immortality and consciousness of the spirit after physical death.",
    verse: "Ecclesiastes 12:7",
  },
  {
    title: "The Second Coming of Christ",
    description:
      "We believe in the second coming of our Lord Jesus Christ, the rapture of the Church, and the bodily resurrection of both the just and the unjust.",
    verse: "Acts 1:9\u201311; 1 Thessalonians 4:15\u201317",
  },
  {
    title: "Heaven and Hell",
    description:
      "We believe that Heaven is the eternal dwelling place for God\u2019s children, while Hell is the eternal destiny for those who reject Him.",
    verse: "Matthew 25:41\u201346; Luke 16:24",
  },
];

const OurBeliefs = () => {
  return (
    <section className="bg-[#F6F7F9] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Beliefs
          </h2>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto">
            Our faith is firmly rooted in the teachings of the Holy Scriptures
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#D4A34A]/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-[#D4A34A]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0B2545] mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {belief.description}
                  </p>
                  <p className="text-[#D4A34A] text-xs font-medium italic">
                    ({belief.verse})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBeliefs;
