import "./App.css";
import HeroComponent from "./components/Hero-Section/HeroComponent";
import LatestNewsComponent from "./components/LatestNews-Section/LatestNewsComponent";
import WinTicketsComponent from "./components/WinTickets-Section/WinTicketsComponent";

function App() {
  return (
    <main className="bg-black">
      <HeroComponent />
      <LatestNewsComponent />
      <WinTicketsComponent />
    </main>
  );
}

export default App;
