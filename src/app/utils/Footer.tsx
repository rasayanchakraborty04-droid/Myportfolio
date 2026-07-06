import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeftContent}>
                    <h2 className={styles.footerLeftHeading}>rasayan</h2>
                    <p className={styles.footerLeftDescription}>Once I am editing videos and in other times I am programming</p>
                    <p className={styles.footerLeftCopyright1}>© rasayan 2026</p>
                    <p className={styles.footerLeftCopyright2}>all rights reserved</p>
                </div>

                <div className={styles.footerRightContent}>
                    <ul className={styles.socialList}>
                        <li className={styles.socialItem}>
                            <a className={styles.socialLink} href="https://instagram.com/rasayan" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a className={styles.socialLink} href="https://x.com/rasayan" target="_blank" rel="noopener noreferrer">Twitter (X)</a>
                        </li>
                        <li className={styles.socialItem}>
                            <a className={styles.socialLink} href="https://github.com/rasayan" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}