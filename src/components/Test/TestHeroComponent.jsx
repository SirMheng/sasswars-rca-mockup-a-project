import heroImage from "../../assets/images/hero-image.jpg";
import HeaderNav from "./TestHeaderNav";
import HeroText from "./TestHeroText";

export default function HeroComponent() {
  return (
    <div class="relative h-[1590px] border-2 border-red-500 px-[120px]">
      {/* <HeaderNav /> */}
      <HeroText />
      <img
        src={heroImage}
        alt="bg-img here"
        className="h-[900px] w-full object-fill"
      ></img>
      <div className="absolute inset-0 bg-black/40 z-10"></div>
    </div>
  );
}
