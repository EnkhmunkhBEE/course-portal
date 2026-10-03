import Link from "next/link";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <nav className="navbar">
      <div className="logo">{title}</div>

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
}