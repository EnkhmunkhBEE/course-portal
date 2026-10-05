import Link from "next/link";
import DarkMode from "./DarkMode";

export interface HeaderProps {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <nav className="navbar">
      <div className="logo">{title}</div>

      <div className="nav-links">
        <Link href="/about">About</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Signup</Link>
        <DarkMode/>
      </div>
    </nav>
  );
}