import { Course } from './course-map';

import CloseIcon from './icons/close';

type Props = {
  modalOpen: boolean;
  courseDetails: null | (Course & { type: string });
  onClose: () => void;
};

export default function CourseModal({
  modalOpen,
  courseDetails,
  onClose,
}: Props) {
  return (
    <div
      className={`fixed top-0 right-0 z-3 flex h-full w-full max-w-full flex-col border-l border-gray-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-[400px] ${modalOpen ? '' : 'translate-x-full'}`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-bold">
          {courseDetails ? courseDetails.id : 'Course ID'}{' '}
          <span className="text-sm font-normal text-gray-500">
            ({courseDetails ? courseDetails.type : 'Course Type'})
          </span>
        </h2>
        <button
          onClick={onClose}
          className="text-3xl text-gray-400 hover:text-gray-600"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="mb-1 font-semibold">
          {courseDetails ? courseDetails.name : 'Course Name'}
        </h3>
        <p className="mb-2 text-gray-700">
          {courseDetails ? courseDetails.description : 'Course Description'}
        </p>
        <p className="mb-1 text-sm">
          <span className="font-semibold">Prerequisites:</span>{' '}
          {courseDetails ? courseDetails.prereqsText : 'course prerequisites'}
        </p>
        <p className="mb-4 text-sm">
          <span className="font-semibold">Restrictions:</span>{' '}
          {courseDetails ? courseDetails.restrictsText : 'course restrictions'}
        </p>
        <a
          href={courseDetails ? courseDetails.link : '/'}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block rounded border border-blue-600 px-3 py-1 text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Course Link
        </a>
      </div>
    </div>
  );
}
