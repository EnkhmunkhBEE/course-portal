"use client";

import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

import PortalLayout from "@/components/PortalLayout";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentCourses from "@/components/dashboard/RecentCourses";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <PortalLayout>
      <main className="dashboard-page">
        <h1>Dashboard</h1>

        <WelcomeCard user={user} />

        <div className="dashboard-stats">
          <StatCard title="Courses" value="12" />
          <StatCard title="Completed" value="5" />
          <StatCard title="Progress" value="60%" />
        </div>

        <RecentCourses />
      </main>
    </PortalLayout>
  );
}
