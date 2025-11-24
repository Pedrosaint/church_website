import { Check } from "lucide-react";

interface Step {
  num: number;
  label: string;
  completed: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="bg-[#0B2545] rounded-lg p-5 mb-8 font-inter">
      <div className="flex items-center justify-between">
        {steps.map((step, idx) => {
          const isActive = currentStep === step.num;
         const isCompleted = step.num === 1 || step.completed;


          return (
            <div
              key={step.num}
              className="flex flex-1 flex-col items-center relative"
            >
              {/* Circle */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                font-semibold transition-all duration-300
                ${
                  isCompleted || isActive
                    ? "bg-[#D4A34A] text-[#0A2342]"
                    : "bg-[#FFFFFF] text-[#0A2342]"
                }`}
              >
                {isCompleted || isActive ? <Check size={20} /> : step.num}
              </div>

              {/* Label */}
              {isCompleted || isActive ? <span className="text-[#D4A34A] text-xs mt-2">{step.label}</span> :
                <span className="text-gray-400 text-xs mt-2">{step.label}</span>
              }

              {/* Triangle */}
              {isActive && (
                <div
                  className="absolute -bottom-5 w-0 h-0 
                    border-l-8 border-r-8 border-b-8 
                    border-l-transparent border-r-transparent border-b-yellow-500"
                ></div>
              )}

              {/* Connector */}
              {idx < steps.length - 1 && (
                <div
                  className={`absolute top-5 right-[-55%] w-full h-1 
                  ${isCompleted || isActive ? "bg-[#D4A34A]" : "bg-white"}`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
