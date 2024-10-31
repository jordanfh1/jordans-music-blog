import styles from "./header.module.css"; 
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Jordan&#39;s Music Blog</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Home</Link></li>
          <li className={styles.navItem}><Link href="/about">About</Link></li>
          <li className={styles.navItem}><Link href="/blog">Blog</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
