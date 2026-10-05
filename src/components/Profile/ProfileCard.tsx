import { User } from "firebase/auth";

type Props = {
  user: User | null;
};

export default function ProfileCard({ user }: Props) {
  return (
    <div className="profile-card">
      <h2>Profile</h2>

      <div>
        <strong>
          {user?.email || "User"}
        </strong>
      </div>

      <p>
        Course Portal Student
      </p>
    </div>
  );
}