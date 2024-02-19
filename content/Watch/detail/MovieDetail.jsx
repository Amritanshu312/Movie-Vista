"use client"
import Image from "next/image"
import styles from "./detail.module.css"
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

const MovieDetail = ({ id }) => {
  const [detail, setDetail] = useState({})
  const searchParams = useSearchParams()

  useEffect(() => {
    const getData = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_READ_API_KEY
        }
      };

      const res = await fetch(url, options, { cache: 'no-store' });
      const json = await res.json()
      setDetail(json);
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <h2 className={styles.name}>{detail?.original_title}</h2>
        <div className={styles.moviedetail}>

          <div className={styles.poster}>
            <Image src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`} alt="poster" width={250} height={365} className={styles.cardImage} />
          </div>

          <div className={styles.info}>
            <div className={styles.storyline}>{detail?.overview}</div>

            <div className={styles.smallsection}>
              <div className={styles.contentrating}>{detail?.original_language?.toUpperCase()}</div>
              <div className={styles.rating}><FaStar /> {detail.vote_average}</div>
              |
              <div className={styles.time}>{detail?.release_date?.replace("-", " ")}</div>
            </div>

            <div className={styles.infosection}>
              <div className={styles.type}>Type: <span>{searchParams.get('media_type')}</span></div>
              <div className={styles.country}>Country: <span>{detail?.production_countries?.map(country => country.name).join(", ")}</span></div>
              <div className={styles.genre}>Genre: <span>{detail?.genres?.map(genre => genre.name).join(", ")}</span></div>
              <div className={styles.director}>Status: <span>{detail?.status}</span></div>
              <div className={styles.production}>Production: <span>{detail?.production_companies?.map(company => company.name).join(", ").replace(", about:blank", "")}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail