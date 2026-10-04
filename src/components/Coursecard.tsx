"use client";
import { useState } from "react";
import Likes from "./Likebutton";
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

  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p className="category">{category}</p>
      <span className="level">{level}</span>
      <Likes/>
    </article>
  );
}
