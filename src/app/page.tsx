"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Searchbox from "@/components/Searchbox";
import Courselist from "@/components/Courselist";
import CourseCard from "@/components/Coursecard";
import { useState } from "react";

export default function Main() {
    
  return (
    <main>
      <Header title="student portal" />

      <div className="layout">
        <Sidebar />

        <section className="content">
          <Courselist />
        </section>
      </div>

      <Footer />
    </main>
  );
}
