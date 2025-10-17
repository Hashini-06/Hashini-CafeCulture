import Link from 'next/link';
import styles from './Navbar.module.css';
export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>Cafe Culture!!</h1>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/user">User</Link>
        <Link href="/menu">Menu</Link>
      </div>
    </nav>
  );
}
