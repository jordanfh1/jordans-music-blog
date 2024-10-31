import styles from "./Header.module.css"; 
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Jordan's Music Blog</h1>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/">Home</a></li>
          <li className={styles.navItem}><a href="/about">About</a></li>
          <li className={styles.navItem}><a href="/blog">Blog</a></li>
          <li className={styles.navItem}><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
