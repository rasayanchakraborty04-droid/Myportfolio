import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className={styles.homePage} id="homePageId">
      <HeroSection />
    </div>
  );
}
