"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";

import PortalLayout from "@/components/PortalLayout";
import AccountSettings from "@/components/settings/AccountSettings";
import PasswordSettings from "@/components/settings/PasswordSettings";

export default function Settings() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          router.push("/auth/login");
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  return (
    <PortalLayout>
      <main>
        <h1>Settings</h1>

        <AccountSettings />

        <PasswordSettings />
      </main>
    </PortalLayout>
  );
}