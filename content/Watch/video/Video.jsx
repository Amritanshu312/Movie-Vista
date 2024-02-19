"use client"

import styles from "./video.module.css"
import { RxEnterFullScreen } from "react-icons/rx";
import { FaRegLightbulb } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";


const Video = ({ id }) => {
  const [expand, setExpand] = useState(false)
  const [light, setLight] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.iframe}>
        <iframe src={`https://vidsrc.to/embed/movie/${id}`} allowFullScreen frameBorder="0" style={{ maxWidth: expand ? "100%" : null }} className={light ? styles.lighton : null}></iframe>

        <div className={styles.option}>
          <div className={styles.left}>
            <button className={styles.expand} onClick={() => setExpand(prev => !prev)}><RxEnterFullScreen /> {expand ? "Collapse" : "Expand"}</button>
            <button className={styles.light} onClick={() => setLight(prev => !prev)}><FaRegLightbulb /> Light</button>
          </div>

          <div className={styles.right}>
            <button className={styles.addtolist}><IoBookmarkOutline /> Add to WatchList</button>
          </div>
        </div>

        {light ? <div className={styles.background} onClick={() => setLight(prev => !prev)}></div> : null}
      </div>
    </div>
  )
}

export default Video