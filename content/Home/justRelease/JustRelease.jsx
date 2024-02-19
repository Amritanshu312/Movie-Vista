"use client"

import Card from "@/components/ui/card/Card"
import styles from "./justRelease.module.css"
import { useEffect, useState } from "react"

const JustRelease = () => {
  const [upcomming, setUpcomming] = useState([])

  useEffect(() => {
    const getUpcommingMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.TMDB_READ_API_KEY
        }
      }, { cache: 'no-store' })

      setUpcomming(await res.json())
    }
    getUpcommingMovies()

  }, [])

  return upcomming.length === 0 ?
    <>
      <h2 className={styles.heading}>Just Release</h2>

      <div className={styles.cards}>
        {Array.from({ length: 10 }, (_, i) =>
          <div className={styles.loading} key={i}></div>
        )}
      </div>
    </>
    : (
      <>
        <h2 className={styles.heading}>Just Release</h2>

        <div className={styles.cards}>
          {upcomming?.results?.slice(0, 12).map((movie, index) => (
            <Card info={movie} key={index} />
          ))}
        </div>
      </>
    )
}

export default JustRelease