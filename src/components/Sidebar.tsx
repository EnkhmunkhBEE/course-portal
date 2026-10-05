import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
    

      <nav>
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/">
          Courses
        </Link>

        <Link href="/profile">
          Profile
        </Link>

        <Link href="/settings">
          Settings
        </Link>
      </nav>
    </aside>
  );
}