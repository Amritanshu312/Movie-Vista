
import Image from "next/image"
import styles from "./widercard.module.css"
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";
const Widercard = ({ info }) => {
  const { id, genre_ids, backdrop_path, title, vote_average, media_type } = info
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
  return (
    <div className={styles.card}>
      <Link href={`/watch/${id}?media_type=${media_type || "movie"}`} className={styles.image}>
        <Image src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="poster" width={355} height={190}></Image>

        <div className={styles.play}>
          <FaCirclePlay />
          <div className={styles.background}></div>
        </div>

      </Link>

      <div className={styles.info}>
        <Link href={`/watch/${id}?media_type=${media_type || "movie"}`} className={styles.title}>{title}</Link>

        <div className={styles.movieinfo}>
          <div className={styles.rating}><FaStar /> {vote_average.toString().slice(0, 3)}</div>
          |
          <div className={styles.genres}>
            {genre_ids.slice(0, 2).map((id, index) => (
              <span key={index} style={{ display: 'flex', gap: '3px', alignItems: 'center' }} className={styles.genre}>{genres.find(genre => genre.id === id).name}
                {index !== 1 && <span className={styles.dot}></span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widercard