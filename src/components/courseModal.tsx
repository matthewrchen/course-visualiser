
import {Course} from "./courseMap";

type Props = {
    modalOpen: boolean;
    courseDetails: null | (Course & { type: string });
    onClose: () => void;
}

export default function CourseModal({ modalOpen, courseDetails, onClose } : Props) {
    if (!modalOpen || !courseDetails) return null;

    return (
        <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] max-w-full bg-white shadow-2xl border-l border-gray-200 flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">{courseDetails.id} <span className="text-sm font-normal text-gray-500">({courseDetails.type})</span></h2>
                <button onClick={onClose} className="text-xl text-gray-400 hover:text-gray-600 focus:outline-none">×</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
                <h3 className="font-semibold mb-1">{courseDetails.name}</h3>
                <p className="mb-2 text-gray-700">{courseDetails.description}</p>
                <p className="mb-1 text-sm"><span className="font-semibold">Prerequisites:</span> {courseDetails.prereqsText}</p>
                <p className="mb-4 text-sm"><span className="font-semibold">Restrictions:</span> {courseDetails.restrictsText}</p>
                <a href={courseDetails.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Course Link</a>
            </div>
        </div>         
    );
}