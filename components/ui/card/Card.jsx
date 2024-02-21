import Image from "next/image"
import styles from "./card.module.css"
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Link from "next/link";


const Card = ({ info }) => {
  const { poster_path, title, vote_average, genre_ids, id, media_type } = info
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
  if (info === undefined) {
    return null
  }
  return (
    <div className={styles.container}>
      <div className={styles.coverimage}>
        <Image src={`https://image.tmdb.org/t/p/original/${poster_path}`} width={250} height={365} alt="image" className={styles.cardImage} />
        <div className={styles.gradient}></div>
      </div>

      <div className={styles.play}>
        <Link href={`/watch/${id}?media_type=${media_type || "movie"}`}>
          <FaCirclePlay />
          <div className={styles.background}></div>
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          <Link href={`/watch/${id}?media_type=${media_type || "movie"}`} style={{ all: 'inherit', textDecoration: 'none' }}>
            {title}
          </Link>
        </div>
        <div className={styles.movieinfo}>
          <span className={styles.rating}><FaStar /> {vote_average}</span>
          |
          <span className={styles.category} style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {genre_ids.slice(0, 2).map((id, index) => (
              <span key={index} style={{ display: 'flex', gap: '5px', alignItems: 'center' }} className={styles.genre}>{genres.find(genre => genre.id === id).name}
                {index !== 1 && "."}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card