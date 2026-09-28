"use client";

import { useState } from "react";
import Searchbox from "./Searchbox";
import CourseCard from "./Coursecard";

type Course = {
  id: number;
  title: string;
  category: string;
  level: string;
};

const courses: Course[] = [
  { id: 1, title: "Next.js", category: "Web", level: "Beginner" },
  { id: 2, title: "Next.js Router", category: "Web", level: "Intermediate" },
  { id: 3, title: "React Native", category: "Mobile", level: "Intermediate" },
  { id: 4, title: "Python Programming", category: "Programming", level: "Beginner" },
  { id: 5, title: "JavaScript", category: "Programming", level: "Beginner" },
  { id: 6, title: "TypeScript", category: "Programming", level: "Intermediate" },
  { id: 7, title: "React.js", category: "Web", level: "Beginner" },
  { id: 8, title: "React Hooks", category: "Web", level: "Intermediate" },
  { id: 9, title: "HTML & CSS", category: "Web", level: "Beginner" },
  { id: 10, title: "Tailwind CSS", category: "Web", level: "Beginner" },
  { id: 11, title: "Node.js", category: "Backend", level: "Intermediate" },
  { id: 12, title: "Express.js", category: "Backend", level: "Intermediate" },
  { id: 13, title: "Django", category: "Backend", level: "Intermediate" },
  { id: 14, title: "Flask", category: "Backend", level: "Beginner" },
  { id: 15, title: "PHP", category: "Backend", level: "Beginner" },
  { id: 16, title: "MySQL", category: "Database", level: "Beginner" },
  { id: 17, title: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: 18, title: "MongoDB", category: "Database", level: "Intermediate" },
  { id: 19, title: "Neo4j", category: "Database", level: "Intermediate" },
  { id: 20, title: "SQL Fundamentals", category: "Database", level: "Beginner" },
];

export default function Courselist() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
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