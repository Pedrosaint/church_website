/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "lucide-react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";


interface TestimonyProps {
  selectedTestimony: any;
  handleApprove: (id: number) => void;
  setShowViewModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const ViewModal = ({
  selectedTestimony,
  handleApprove,
  setShowViewModal,
}: TestimonyProps) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {selectedTestimony.name}
              </h3>
              <p className="text-gray-600">{selectedTestimony.degree}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Testimony
            </h4>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {selectedTestimony.content}
            </p>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Submitted {selectedTestimony.submittedDate}
          </p>

          <div className="flex gap-3 w-1/2 ml-auto">
            <button
              onClick={() => {
                handleApprove(selectedTestimony.id);
                setShowViewModal(false);
              }}
              className="flex items-center justify-center cursor-pointer bg-green-600 text-white py-3 px-3 rounded-lg font-semibold hover:bg-green-700 w-full"
            >
              <IoCheckmarkSharp size={25} />
              <h1> Approve</h1>
            </button>

            <button
              onClick={() => setShowViewModal(false)}
              className="flex items-center justify-center border-2 border-red-600 text-red-700 py-3 px-3 rounded-lg font-semibold cursor-pointer w-full"
            >
              <RiDeleteBin6Line size={25} />
              <h1> Delete</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal
