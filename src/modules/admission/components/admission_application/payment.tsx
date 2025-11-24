import { useState } from "react";
import { FileText } from "lucide-react";


interface AcademicHistoryProps {
  goToNext: () => void;
  goToPrev: () => void;
}

const ApplicationFeePayment = ({ goToNext, goToPrev }: AcademicHistoryProps) => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handleNext = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    console.log("Payment method selected:", selectedPayment);
    // Handle form submission
    goToNext();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Application Fee Payment
        </h1>

        {/* Application Fee Display */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#D4A34A]" />
              </div>
              <span className="text-gray-700 font-medium">Application Fee</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">₦100,000</span>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Select Payment Method
          </h2>

          <div className="space-y-3">
            {/* Debit/Credit Card */}
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="debit-card"
                checked={selectedPayment === "debit-card"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-5 h-5 text-[#D4A34A] focus:ring-[#D4A34A] focus:ring-2"
              />
              <span className="ml-3 text-gray-800">Debit/Credit Card</span>
            </label>

            {/* Bank Transfer */}
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="bank-transfer"
                checked={selectedPayment === "bank-transfer"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-5 h-5 text-[#D4A34A] focus:ring-[#D4A34A] focus:ring-2"
              />
              <span className="ml-3 text-gray-800">Bank Transfer</span>
            </label>

            {/* USSD */}
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="ussd"
                checked={selectedPayment === "ussd"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-5 h-5 text-[#D4A34A] focus:ring-[#D4A34A] focus:ring-2"
              />
              <span className="ml-3 text-gray-800">USSD</span>
            </label>

            {/* Direct Bank Deposit */}
            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type="radio"
                name="payment"
                value="direct-deposit"
                checked={selectedPayment === "direct-deposit"}
                onChange={(e) => setSelectedPayment(e.target.value)}
                className="w-5 h-5 text-[#D4A34A] focus:ring-[#D4A34A] focus:ring-2"
              />
              <span className="ml-3 text-gray-800">Direct Bank Deposit</span>
            </label>
          </div>
        </div>

        {/* ======================= BUTTONS ======================= */}
        <div className="flex justify-between mt-8">
          <button
            onClick={goToPrev}
            className="border border-[#D4A34A] text-[#D4A34A] px-6 py-2 rounded-xl cursor-pointer"
          >
            Back
          </button>

          <button
            onClick={handleNext}
            className="bg-[#D4A34A] px-6 py-2 rounded-xl text-[#0B2545] cursor-pointer font-inter"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFeePayment;
