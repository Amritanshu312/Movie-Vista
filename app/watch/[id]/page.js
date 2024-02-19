import MovieDetail from "@/content/Watch/detail/MovieDetail"
import Video from "@/content/Watch/video/Video"

const Page = ({ params }) => {
  const id = params.id
  return (
    <>
      <Video id={id} />
      <MovieDetail id={id} />
    </>
  )
}

export default Page