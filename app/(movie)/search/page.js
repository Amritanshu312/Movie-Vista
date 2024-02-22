"use client"
import { useState } from "react";
import styles from "./search.module.css"
import { IoIosSearch } from "react-icons/io";
import { useRouter } from 'next/navigation'

export default function Search() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (query !== "") {
      router.push(`/search/${query}`)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input type="text" placeholder="Search..." value={query} onKeyUp={e => e.key === "Enter" ? handleSearch() : null} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}><IoIosSearch /></button>
      </div>
    </div>
  )
}