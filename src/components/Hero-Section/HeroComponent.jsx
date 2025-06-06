import heroImage from "../../assets/images/hero-image.jpg";
import HeaderNav from "./HeaderNav";
import HeroCard from "./HeroCard";
import HeroText from "./HeroText";
import HeroCityGuides from "./HeroCityGuides";
export default function HeroComponent() {
  return (
    <div className="relative h-[1590px]">
      <HeaderNav />
      <HeroText />
      <HeroCard />
      <HeroCityGuides />

      <img
        src={heroImage}
        alt="bg-img here"
        className="h-[900px] w-full object-fill"
      ></img>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
}
