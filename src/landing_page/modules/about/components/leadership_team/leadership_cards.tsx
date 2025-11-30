interface ProgramCardProps {
  title: string;
  desc: string;
  duration: string;
  subTitle: string;
  image: string;
}

export const LeadershipTeamCard = ({
  title,
  desc,
  duration,
  subTitle,
  image,
}: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-[#FFFFFF]/10 backdrop-blur-md rounded-md text-sm font-medium text-white">
            {duration}
          </span>
        </div>
      </div>

      <div className="p-6 bg-[#f7f7fb] h-full ">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <div className="flex flex-col">
          <span className="text-[#D4A34A] text-lg leading-relaxed">
            {subTitle}
          </span>
          <p className="text-[#0B2545] text-lg leading-relaxed mb-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};


