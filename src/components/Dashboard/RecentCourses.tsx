const courses = [
  "React & TypeScript",
  "Next.js",
  "Database",
];

export default function RecentCourses() {
  return (
    <div className="dashboard-card">
      <h2>Recent Courses</h2>

      {courses.map((course, index) => (
        <div key={index}>
          <p>{course}</p>
        </div>
      ))}
    </div>
  );
}