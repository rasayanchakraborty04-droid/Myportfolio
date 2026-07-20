import styles from './page.module.css'

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            
            <div className={styles.contactPage_content}>
                <h2>Contact Me</h2>

                <div className={styles.contact_options}>
                    <div className={styles.contact_address}>
                        <p>
                            Bangalore, India
                            <br/>
                            Karnataka - 560059
                        </p>

                        <p>
                            My work hours:
                            <br/>
                            Monday - Friday: 9:00 AM - 6:00 PM (IST)
                            <br/>
                        </p>
                    </div>

                    <div className={styles.contact_email}>
                        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
                            <label htmlFor="name">Name (required)</label>
                            <input type="text" id="name" name="name" placeholder='First Name + Last Name' required />

                            <label htmlFor="email">Email (required)</label>
                            <input type="email" id="email" name="email" placeholder='Your E-Mail' required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required></textarea>

                            <button type="submit">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}