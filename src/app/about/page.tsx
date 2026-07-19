import styles from './page.module.css'

export default function About() {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.aboutContent}>
                <h3>Something about me...</h3>

                <p>
                    Most people see an application. I like understanding everything behind it.
                    <br /><br />
                    From APIs and containers to cloud infrastructure and deployment pipelines,
                    I'm passionate about building the systems that keep software running reliably.
                    My focus is on <b>backend development</b>, <b>DevOps</b>, and <b>cloud engineering</b>, where code
                    meets infrastructure.
                    <br/><br/>
                    I enjoy breaking down complex systems, learning how they work, and rebuilding
                    them better. Whether it's automating deployments, containerizing applications,
                    or designing scalable services, I'm always chasing a deeper understanding of
                    modern software engineering.
                    <br/><br/>
                    I'm currently building projects with Python, Docker, Kubernetes, Linux, and
                    cloud technologies while continuously exploring system design, distributed
                    architectures, and platform engineering.
                    <br/><br/>
                    My goal is simple: build technology that's reliable, scalable, and engineered
                    to last.
                </p>
            </div>
        </div>
    )
}