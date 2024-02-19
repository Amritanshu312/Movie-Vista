import Image from "next/image"
import styles from "./banner.module.css"
import Link from "next/link"
import { FaCirclePlay as Play, FaRegBookmark as Bookmark } from "react-icons/fa6";

const Banner = ({ info, priority }) => {
  const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  const { backdrop_path, media_type, original_title, overview, id, release_date, genre_ids } = info
  return (
    <div className={styles.banner}>
      <div className={styles.cover_image}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          fill
          priority={priority}
          alt="banner" />
        <div className={styles.gradient}></div>
      </div>

      <div className={styles.info}>
        <div className={styles.type}>{media_type}</div>
        <div className={styles.title}>{original_title}</div>
        <div className={styles.movieinfo}>
          {release_date} <span className={styles.dot}></span>
          2022 <span className={styles.dot}></span>
          {genre_ids.slice(0, 3).map((id, index) => (
            <span key={index} style={{ display: 'flex', gap: '5px', alignItems: 'center' }} className={styles.genre}>{genres.find(genre => genre.id === id).name}
              {index !== 2 && <span className={styles.dot}></span>}
            </span>
          ))}
          {/* fantasy <span className={styles.dot}></span> Action */}
        </div>

        <p className={styles.description}>
          {overview}
        </p>

        <div className={styles.buttons}>
          <Link href={`/watch/${id}?media_type=${media_type}`} className={styles.watch}><Play /> Watch</Link>
          <Link href={'/whitelist'} className={styles.addtowhitelist}><Bookmark /> Add to Whitelist</Link>
        </div>
      </div>
    </div>
  )
}

export default Banner