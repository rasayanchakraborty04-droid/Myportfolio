import Image from "next/image"
import { FiDownload, FiMail } from "react-icons/fi"

import styles from "./HeroSection.module.css"

export default function HeroSection() {
    return (
        <div className={styles.HeroSection}>

            <div className={styles.HeroSectionImage}>
                <Image
                    className={styles.HeroSectionLeftIcon}
                    src="/docker_rbg.png"
                    alt="DaVinci Resolve logo"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 480px) 120px, (max-width: 900px) 150px, 180px"
                    quality={75}
                />

                <Image
                    className={styles.HeroSectionProfileImage}
                    src="/profile_pic_1.jpeg"
                    alt="Profile picture of Rasayan"
                    width={260}
                    height={260}
                    priority
                    sizes="(max-width: 480px) 160px, (max-width: 900px) 220px, 260px"
                    quality={80}
                />

                <Image
                    className={styles.HeroSectionRightIcon}
                    src="/kube_rbg.svg.webp"
                    alt="VS Code logo"
                    width={220}
                    height={220}
                    loading="lazy"
                    sizes="(max-width: 480px) 120px, (max-width: 900px) 150px, 180px"
                    quality={75}
                />
            </div>


            <div className={styles.HeroSectionText}>
                <h5 className={styles.HeroSectionHeader}>
                    Hi, it is <span className={styles.HeroSectionName}>Rasayan</span>
                </h5>

                <p className={styles.HeroSectionPara}>
                        "merging creativity with code to craft immersive digital experiences" - me.
                </p>
                    <div className={styles.HeroButtons}>
                        <a className={styles.ButtonPrimary} href="#" aria-label="Download resume">
                            <FiDownload className={styles.ButtonIcon} />
                            <span className={styles.ButtonLabel}>Resume</span>
                        </a>
                        <a className={styles.ButtonOutline} href="#" aria-label="Hire me">
                            <FiMail className={styles.ButtonIcon} />
                            <span className={styles.ButtonLabel}>Hire me</span>
                        </a>
                    </div>
            </div>

        </div>
    )
}