import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
    return (
      <div className={styles.page}>
        <h1 className={styles.h1}>About Me!</h1>
        <p className={styles.p}>I&#39;m a bass guitarist hailing from the south of England, with a passion for all things music. 
            My heart beats for jazz—although hardcore theory may not be my forte, the groove, feel, and soul of jazz have me hooked. 
            Right now, I&#39;m part of Lobster Pot and hold down the bassline in a Britney Spears tribute act, exploring a mix of tones 
            and vibes that keep things fresh.</p>
        <p className={styles.p}>
        While jazz holds a special place for me, my love for music spans across genres. My influences range from Yussef Dayes, 
        Tom Misch, Stan Getz, Bill Evans, and Khruangbin to The Clash, System of a Down, and Jungle. 
        These artists inspire me to constantly experiment with sounds and rhythms, and I&#39;m looking forward to kicking off a 
        jazz band soon to dive even deeper into this journey. 
        </p>
        <Image className={styles.image} src="https://ovationmusic.org.uk/wp-content/uploads/2019/09/Jordan-Houghton-300x300.jpg" alt="A picture of Jordan" width="250" height="250"/>
    
      </div>
    );
  }
  