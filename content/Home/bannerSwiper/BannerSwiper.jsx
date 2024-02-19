"use client"

import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from "./BannerSwiper.module.css"

import { Autoplay } from 'swiper/modules';
import Banner from '@/components/ui/banner/Banner';

const BannerSwiper = () => {
  const [trendingmovies, setTrendingmovies] = useState([])

  useEffect(() => {
    const getTrendingMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": process.env.TMDB_READ_API_KEY
        }
      }, { cache: 'no-store' })

      setTrendingmovies(await res.json())
    }
    getTrendingMovies()

  }, [])
  return trendingmovies.length === 0 ? <div className={styles.loading}></div> : (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {trendingmovies.results?.map((movie, index) => (
        <SwiperSlide key={index}><Banner info={movie} priority={index === 0} /></SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BannerSwiper