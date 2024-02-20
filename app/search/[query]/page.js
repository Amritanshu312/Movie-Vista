"use client"

import { useEffect, useState } from "react"
import styles from "./searchQuery.module.css"
import Card from "@/components/ui/card/Card"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from 'next/navigation'
import Loading from "@/components/draft/loading/Loading";
import { useSearchParams } from 'next/navigation'

export default function QuerySearch({ params }) {
  const { query } = params

  const router = useRouter()
  const searchParams = useSearchParams()

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(searchParams.get('page') || 1)
  const [searchquery, setSearchQuery] = useState(query)

  const [isLoaded, setIsLoaded] = useState(false)

  const handleSearch = () => {
    if (searchquery !== "") {
      router.push(`/search/${searchquery}`)
    }
  }

  const handlePageChange = (page) => {
    router.push(`/search/${query}?page=${page}`)
    setPage(page)
  }

  useEffect(() => {
    const getData = async () => {
      setIsLoaded(false)
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.TMDB_READ_API_KEY
        }
      };

      const res = await fetch(url, options, { cache: 'no-store' });

      if (res.ok) {
        const json = await res.json()
        setMovies(json);
        setIsLoaded(true)
      }
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return !isLoaded ? <Loading /> : (
    <div className={styles.container}>
      <div className={styles.input}>
        <input type="text" placeholder="Search..." value={searchquery} onKeyUp={e => e.key === "Enter" ? handleSearch() : null} onChange={(e) => setSearchQuery(e.target.value)} />
        <button onClick={handleSearch}><IoIosSearch /></button>
      </div>
      <h2>Search results for: <span>{query}</span></h2>

      <div className={styles.items}>
        {movies.results?.map((movie) => (
          <Card key={movie.id} info={movie} />
        ))}
      </div>
      {movies.total_pages !== 1 && (
        <div className={styles.pagitaioncontainer}>
          <div className={styles.pagination}>
            <span className={styles.prev}><FaAngleLeft /> prev</span>
            <span className={styles.active}>{page}</span>
            {movies.total_pages === parseInt(page) ? <span>...</span> : <span onClick={() => handlePageChange(movies.total_pages === parseInt(page) ? movies.total_pages : parseInt(page) + 1)}>{movies.total_pages === parseInt(page) ? movies.total_pages : parseInt(page) + 1}</span>}
            <span onClick={() => handlePageChange(movies.total_pages)}>{movies.total_pages}</span>
            <span className={styles.next}>next <FaAngleRight /></span>
          </div>
        </div>
      )}
    </div>
  )
}