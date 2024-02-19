import BannerSwiper from "@/content/Home/bannerSwiper/BannerSwiper";
import DiscoverMovies from "@/content/Home/discoverMovies/DiscoverMovies";
import JustRelease from "@/content/Home/justRelease/JustRelease";
import Popular from "@/content/Home/popular/Popular";

export default function Home() {
  return (
    <main>
      <BannerSwiper />
      <JustRelease />
      <Popular />
      <DiscoverMovies />
    </main>
  );
}
