import styles from "./page.module.scss";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import AboutUs from "@/components/about/AboutUs";
import Contacts from "@/components/contacts/Contacts";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Services />
      <AboutUs />
      <Contacts />
      <ScrollToTop />
    </div>
  );
}
