"use client";

import { useState } from "react";
import Searchbox from "./Searchbox";
import CourseCard from "./Coursecard";
import { courses } from "@/app/data/courses";

export default function Courselist() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Student Course Portal</h1>

      <Searchbox
        value={search}
        onchange={setSearch}
      />

      <p>Results: {filteredCourses.length}</p>

      {filteredCourses.length > 0 ? (
        <div className="course-list">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              level={course.level}
            />
          ))}
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </main>
  );
}