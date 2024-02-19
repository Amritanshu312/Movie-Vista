import Link from "next/link"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.info}>{process.env.WEBSITE_NAME} - All Rights Reserved</span>

        <div className={styles.helpers}>
          <Link href={'/privacy'}>Privacy Policy</Link>
          <Link href={'/terms'}>Terms of Service</Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.links}>
          <Link href={'/'}>Home</Link> /
          <Link href={'/discover'}>Discover</Link> /
          <Link href={'/movies'}>Movies</Link> /
          <Link href={'/series'}>Series</Link>
        </div>

        <div className={styles.date}>
          &#169; 2023 - {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer