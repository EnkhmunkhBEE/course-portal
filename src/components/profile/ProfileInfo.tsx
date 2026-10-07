import { User } from "firebase/auth";

type Props = {
  user: User | null;
};

export default function ProfileInfo({ user }: Props) {
  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>User ID:</strong> {user.uid}
      </p>

      <p>
        <strong>Email verified:</strong>{" "}
        {user.emailVerified ? "Yes" : "No"}
      </p>
    </div>
  );
}