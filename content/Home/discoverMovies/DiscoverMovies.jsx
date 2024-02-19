
"use client"

import Widercard from "@/components/ui/widercard/Widercard"
import styles from "./discoverMovies.module.css"
import { useEffect, useState } from "react"

const DiscoverMovies = () => {
  const [discoverMovies, setDiscoverMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.TMDB_READ_API_KEY
        }
      }, { cache: 'no-store' })
      setDiscoverMovies(await res.json())
    }

    getMovies()
  }, [])

  return discoverMovies.length === 0 ? <>
    <h2 className={styles.heading}>Movies</h2>

    <div className={styles.items}>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
    </div>

  </> : (
    <>
      <h2 className={styles.heading}>Movies</h2>

      <div className={styles.items}>
        {discoverMovies?.results?.slice(0, 18).map((movie, index) => (
          <Widercard key={index} info={movie} />
        ))}
      </div>
    </>
  )
}

export default DiscoverMovies