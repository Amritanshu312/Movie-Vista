"use client"

import { useState } from "react";
import Items from "./items/Items";
import styles from "./navbar.module.css"
import { AnimatePresence, motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineSegment as HamburgerIcon } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.logo}>MovieVista</Link>

      <div className={styles.items}><Items /></div>


      <div className={styles.right}>
        <IoIosSearch />
        <div className={styles.hamburger}>
          {isToggled ? <CgClose onClick={() => setIsToggled(prev => !prev)} /> :
            <HamburgerIcon onClick={() => setIsToggled(prev => !prev)} />}
        </div>


        <button className={styles.sign__up}>Sign up</button>
        <button className={styles.log__in}>Log in</button>

      </div>

      <AnimatePresence>
        {
          isToggled && (
            <motion.div
              className={styles.toggledItems}
              animate={{ x: [-400, 0] }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Items />
              <button >Sign up</button>
              <button >Log in</button>
            </motion.div>
          )
        }
      </AnimatePresence>

    </nav>
  )
}

export default Navbar