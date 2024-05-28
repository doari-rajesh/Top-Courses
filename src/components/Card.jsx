import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourse = props.setLikedCourse;

  const handleOnClick = (id) => {
    // phele se like hua pada hai
    if (likedCourses.includes(course.id)) {
      setLikedCourse((prev) => prev.filter((cid) => cid !== id));
      toast.warn("Liked removed");
    } else {
      setLikedCourse((prev) => [...prev, course.id]);
      toast.success("Liked successfully");
    }
  };
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 min-h-min rounded-md overflow-hidden">
      <div className="relative">
        <img src={course?.image?.url} alt="course-img" loading="lazy" />
        <div
          className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center  absolute right-2 bottom-[-12px]"
          onClick={() => handleOnClick(course.id)}
        >
          {likedCourses.includes(course.id) ? (
            <FcLike fontSize="1.75rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" />
          )}
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course?.title}
        </p>
        <p className="mt-2 text-white">
          {course?.description.length > 100
            ? course?.description.substring(0, 100) + "...."
            : course?.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
