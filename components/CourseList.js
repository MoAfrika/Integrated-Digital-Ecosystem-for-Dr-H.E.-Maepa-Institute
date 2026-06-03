import { courses } from "../data/siteData";
import CourseCard from "./CourseCard";

export default function CourseList() {
  return (
    <div className="grid three">
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}
