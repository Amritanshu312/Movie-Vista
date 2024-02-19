import Link from "next/link"
import styles from "./items.module.css"

const Items = () => {
  const items = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Discover",
      link: "/discover"
    },
    {
      title: "Series",
      link: "/series"
    },
    {
      title: "Recent Releases",
      link: "/releases"
    },
    {
      title: "About",
      link: "/about"
    }
  ]
  return (
    items.map((item, index) => (
      <Link href={item.link} className={styles.item} key={index}>{item.title}</Link>
    ))
  )
}

export default Items