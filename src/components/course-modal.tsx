
import {Course} from "./course-map";

type Props = {
    modalOpen: boolean;
    courseDetails: null | (Course & { type: string });
    onClose: () => void;
}

export default function CourseModal({ modalOpen, courseDetails, onClose } : Props) {
    return (
        <div className={`z-3 fixed top-0 right-0 h-full w-full sm:w-[400px] max-w-full flex flex-col bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ease-in-out ${modalOpen ? '' : 'translate-x-full'}`}>
            <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-lg font-bold">{courseDetails ? courseDetails.id : "Course ID"} <span className="text-sm font-normal text-gray-500">({courseDetails ? courseDetails.type : "Course Type"})</span></h2>
                <button onClick={onClose} className="text-3xl text-gray-400 hover:text-gray-600">×</button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto">
                <h3 className="font-semibold mb-1">{courseDetails ? courseDetails.name : "Course Name"}</h3>
                <p className="mb-2 text-gray-700">{courseDetails ? courseDetails.description : "Course Description"}</p>
                <p className="mb-1 text-sm"><span className="font-semibold">Prerequisites:</span> {courseDetails ? courseDetails.prereqsText : "course prerequisites"}</p>
                <p className="mb-4 text-sm"><span className="font-semibold">Restrictions:</span> {courseDetails ? courseDetails.restrictsText : "course restrictions"}</p>
                <a href={courseDetails ? courseDetails.link : "/"} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition">Course Link</a>
            </div>
        </div>         
    );
}