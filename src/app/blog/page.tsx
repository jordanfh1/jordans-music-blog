import React from 'react';
import BlogPostCard from '../../components/blogPostCard/blogPostCard';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>

<div className={styles.projcardContainer}>

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
    
    <div className={styles.projcardContainer}>
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
};

export default HomePage;
