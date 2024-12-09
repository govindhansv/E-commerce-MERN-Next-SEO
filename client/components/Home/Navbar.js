import Link from 'next/link';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#f4f4f4' }}>
    <Link href="/">Home</Link> | <Link href="/login">Login</Link> | <Link href="/dashboard">Dashboard</Link>
  </nav>
);

export default Navbar;
