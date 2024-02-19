"use client";
import { MdLocalMovies } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import Image from "next/image";

import 'swiper/css';
import styles from "./popular.module.css"
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";

const Popular = () => {
  const [popular, setPopular] = useState([])
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

  useEffect(() => {
    const getPopularMovies = async () => {
      const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.TMDB_READ_API_KEY
        }
      }, { cache: 'no-store' })

      setPopular(await res.json())
    }
    getPopularMovies()

  }, [])

  return popular.length === 0 ? <>
    <h2 className={styles.heading}>Popular</h2>

    <div className={styles.items} style={{ overflow: 'hidden' }}>

      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
      <div className={styles.loading}></div>
    </div>
  </> : (
    <>
      <h2 className={styles.heading}>Popular</h2>

      <div className={styles.items}>
        <Swiper
          spaceBetween={30}
          breakpoints={{
            430: {
              slidesPerView: 1
            },
            700: {
              slidesPerView: 2
            },
            1210: {
              slidesPerView: 3
            },
            1320: {
              slidesPerView: 4
            }
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >

          {popular?.results?.map((movie, index) =>
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <Image src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`} alt={movie.title} width={150} className={styles.coverImage} height={200} />

                <div className={styles.info}>
                  <div className={styles.releasedate}>{movie.release_date}</div>
                  <div className={styles.title}>{movie.title}</div>
                  <div className={styles.genres}><MdLocalMovies /> {genres.find(genre => genre.id === movie.genre_ids[0]).name} </div>
                  <div className={styles.rating}><FaStar /> {movie.vote_average.toString().slice(0, 3)} | <span>Movies</span></div>
                </div>
              </div>
            </SwiperSlide>
          )}


        </Swiper>

      </div>
    </>
  )
}

export default Popular