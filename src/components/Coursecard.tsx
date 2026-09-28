"use client";
import { useState } from "react";

type CourseCardProps = {
  title: string;
  category: string;
  level: string;
};

export default function CourseCard({
  title,
  category,
  level,
}: CourseCardProps) 

  
{
  const [likes ,setlikes] = useState(0)

  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p className="category">{category}</p>
      <span className="level">{level}</span>
      <button onClick={() => setlikes(likes + 1)}>
        likes :  {likes}
        </button>
    </article>
  );
}
