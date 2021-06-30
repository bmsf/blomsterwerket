import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SectionHeader from "./components/SectionHeader";
import { Button } from "./components/Button";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <Navbar maintitle="Blomster Werket" />
      <Header />
      <SectionHeader
        title="Om oss"
        text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!"
      />
      <Products />
      <SectionHeader
        title="Tid & Sted"
        text="Tid: Torsdager 10-18, Fredager 10-18, Lørdager 10-15 Adresse: Ekornveien 4, 1640
        Råde (parker inne på gårdsplassen)"
      />
    </div>
  );
}

export default App;
