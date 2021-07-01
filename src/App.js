import { Navbar, Header, SectionTitle, Products } from "./components";


function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <SectionTitle
        title="Om oss"
        text="Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra! Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!"
      />
      <h2 className="titles">Bestselgere</h2>
      <Products />
      <SectionTitle
        title="Tid & Sted"
        text="Tid: Torsdager 10-18, Fredager 10-18, Lørdager 10-15 Adresse: Ekornveien 4, 1640
        Råde (parker inne på gårdsplassen)"
      />
    </div>
  );
}

export default App;
