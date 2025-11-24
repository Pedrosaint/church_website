import { useState } from "react";
import { Clock } from "lucide-react";

interface PersonalInfoProps {
  goToNext: () => void;
}

export default function PersonalInfo({ goToNext }: PersonalInfoProps) {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
  });

  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleNext = () => {
    // later you will submit API here
    setLastSaved(new Date());
    goToNext();
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        Admissions Application - Personal Information
      </h1>

      <div className="mb-6 font-inter">
        <label className="font-semibold text-sm">Full Name</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded-xl outline-none"
          />
          <input
            name="middleName"
            placeholder="Middle Name"
            value={form.middleName}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded-xl outline-none"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="border border-gray-200 p-2 rounded-xl outline-none"
          />
        </div>
      </div>

      <div className="mb-6 font-inter">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Date of Birth
        </label>
        <input
          name="dateOfBirth"
          placeholder="MM/DD/YYYY"
          value={form.dateOfBirth}
          onChange={handleChange}
          className="border border-gray-200 p-2 rounded-xl w-full md:w-1/3 outline-none"
        />
      </div>

      {/* Contact information */}
      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        Contact Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-inter">
        <div>
          <label className="text-sm font-semibold">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            placeholder="08012345678"
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
              setForm((p) => ({ ...p, phone: digits }));
            }}
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">State</label>
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="FCT"
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="No 5 onyenwaku street"
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Kubwa"
            className="border border-gray-200 p-2 rounded-xl w-full outline-none"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8 font-inter">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock size={16} className="text-[#D4A34A]" />
          Last saved: {lastSaved ? lastSaved.toLocaleTimeString() : "Not saved"}
        </div>

        <button
          onClick={handleNext}
          className="bg-[#D4A34A] px-6 py-2 rounded-xl text-[#0B2545] font-semibold cursor-pointer"
        >
          Save & Continue
        </button>
      </div>
    </>
  );
}
