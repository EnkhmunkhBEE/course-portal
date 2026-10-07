type Props = {
  name: string;
  courseCount: number;
};

export default function CategoryCard({
  name,
  courseCount,
}: Props) {
  return (
    <div className="category-card">
      <h2>{name}</h2>

      <p>
        {courseCount} courses
      </p>

      <button>
        View Courses
      </button>
    </div>
  );
}