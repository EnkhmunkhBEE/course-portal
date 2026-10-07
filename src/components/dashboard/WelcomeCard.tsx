"use client";

import { User } from "firebase/auth";

type Props = {
  user: User | null;
};

export default function WelcomeCard({ user }: Props) {
  return (
    <div className="dashboard-card">
      <h2>
        Welcome{user?.email ? `, ${user.email}` : ""}!
      </h2>

      <p>
        Welcome to your Course Portal dashboard.
      </p>
    </div>
  );
}