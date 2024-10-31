import styles from "./page.module.css";
import Link from "next/link";
import React from 'react';


export default function Home() {
  return (
    <div className={styles.page}>
      <h1>WELCOME!
      </h1>
      <h2>Most recent blog post:</h2>
      <div className={styles.recentBlog}>
      <Link className={styles.blogLink} href="/exploringcooljazz">Exploring Cool Jazz</Link>
      </div>
    </div>
  );
}
