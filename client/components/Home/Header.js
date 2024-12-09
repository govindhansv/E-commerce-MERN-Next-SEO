// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/user">User</Link>
        <Link href="/manager">Manager</Link>
      </nav>
    </header>
  );
}
