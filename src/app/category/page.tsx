import CategoryCard from "@/components/category/CategoryCard";
import PortalLayout from "@/components/PortalLayout";
import { courses } from "@/app/data/courses";

const categories = [...new Set(courses.map((course) => course.category))];

export default function CategoryPage() {
  return (
    <PortalLayout>
      <main className="category-page">
        <h1>Course Categories</h1>
        <div className="category-list">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              name={category}
              courseCount={
                courses.filter((course) => course.category === category).length
              }
            />
          ))}
        </div>
      </main>
    </PortalLayout>
  );
}