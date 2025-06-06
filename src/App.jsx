import "./App.css";
import HeroComponent from "./components/Hero-Section/HeroComponent";

import PerformanceSpotlight from "./components/performance-spotlights/PerformanceSpotlight";
import ArtOrganizations from "./components/art-organizations/ArtOrganizations";
import LatestNewsComponent from "./components/LatestNews-Section/LatestNewsComponent";
import WinTicketsComponent from "./components/WinTickets-Section/WinTicketsComponent";
import FooterSection from "./components/footer-section/FooterSection";
import PopularEvents from "./components/popular-events-section/PopularEvents";

function App() {
  return (
    <main className="bg-black">
      <HeroComponent />
      <PopularEvents />
      <PerformanceSpotlight />
      <ArtOrganizations />
      <LatestNewsComponent />
      <WinTicketsComponent />
      <FooterSection />
    </main>
  );
}

export default App;
