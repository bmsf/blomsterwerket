import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";

function App() {
  return (
    <div className="app">
      <Header />
      <SectionHeader
        title="Om oss"
        text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!"
      />
      <SectionHeader
        title="Tid & Sted"
        text="Torsdager 10 -18 fredager 10 -18 lørdager 10- 15 Ekornveien 4, 1640
        Råde (parker inne på gårdsplassen)"
      />
    </div>
  );
}

export default App;
