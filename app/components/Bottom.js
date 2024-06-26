"use client"
import React from 'react'
import styles from "@/app/components/styles.module.css";

const Bottom = () => {
  return (
    <div>
        <div className={styles.bottom}>
             <div className={styles.bottom_subdiv}>
                <img src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="" />
             </div>
             <div className={styles.bottom_subdiv}>
                <h3>THE BASICS</h3>
                <p>About TMDB <br />
                 Contact Us <br />
                 Support Forums <br />
                 API <br />
                 System Status</p>
             </div>
             <div className={styles.bottom_subdiv}>
                <h3>GET INVOLVED</h3>
                <p>Contribution Bible <br />Add New Movie <br />Add New TV Show</p>
             </div>
             <div className={styles.bottom_subdiv}>
                <h3>COMMUNITY</h3>
                <p>Guidelines <br />Discussions <br />Leaderboard <br />Twitter</p>
             </div>
             <div className={styles.bottom_subdiv}>
                <h3>LEGAL</h3>
                <p>Terms of Use <br />API Terms of Use <br />Privacy Policy <br />DMCA Takedown Request</p>
             </div>
        </div>
    </div>
  )
}

export default Bottom