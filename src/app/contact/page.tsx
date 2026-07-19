import styles from './page.module.css'

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <h1 className={styles.contactHeader}>Contact Me</h1>
            <p className={styles.contactDescription}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below.
            </p>
            <div className={styles.contactLinks}>
                <a href="mailto:your-email@example.com">Email</a>
            </div>
        </div>
    )
}