"use client";

import { useEffect, useState } from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

import PortalLayout from "@/components/PortalLayout";
import ProfileCard from "@/components/Profile/ProfileCard";
import ProfileInfo from "@/components/Profile/ProfileInfo";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);

        if (!currentUser) {
          router.push("/auth/login");
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);

    router.push("/auth/login");
  }

  return (
    <PortalLayout>
      <main>
        <h1>User Profile</h1>

        <ProfileCard user={user} />

        <ProfileInfo user={user} />

        <button onClick={handleLogout}>
          Logout
        </button>
      </main>
    </PortalLayout>
  );
}