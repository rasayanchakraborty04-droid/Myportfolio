"use client"

import React, { JSX } from "react"
import Link from "next/link"
import { FiGithub, FiInstagram } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6";

import styles from "./Navbar.module.css"

export default function Navbar(): JSX.Element {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}>RASAYAN</span>
        </div>

        <nav className={styles.center} aria-label="Main navigation">
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>

        <div className={styles.right}>
          <a
            className={styles.socialIcon}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            className={styles.socialIcon}
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>
          <a
            className={styles.socialIcon}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </header>
  )
}
