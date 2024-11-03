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
        image="https://splice-res.cloudinary.com/image/upload/f_auto,q_auto/v1548438313/app-assets/plugins/rent-to-own-plugins_2x.jpg"
        genre="Music Production"
        title="The Best DAW Plugins for Creating Music"
        author="Jordan Houghton"
        date="November 03, 2024"
        snippet="Each of these plugins brings a different flavour to the table"
        link="/thebestplugins"
      />
      </div>
      
    </div>
  );
}
