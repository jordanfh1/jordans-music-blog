import styles from "./page.module.css";
import React from 'react';
import BlogPostCard from '../components/blogPostCard/blogPostCard';


export default function Home() {
  return (
    <div className={styles.page}>
<h1 className={styles.centerText}>Welcome to my Music Blog</h1>
<h2 className={styles.centerText}>Have a read of my most recent post:</h2>
      <div className={styles.card}>
      <BlogPostCard
        image="https://upload.wikimedia.org/wikipedia/en/3/3a/The_Sound_of_Sonny.jpg"
        genre="Jazz"
        title="Exploring Cool Jazz"
        author="Jordan Houghton"
        date="October 31, 2024"
        snippet="5 Records You Need to Hear."
        link="/exploringcooljazz"
      />
      </div>
      
    </div>
  );
}
