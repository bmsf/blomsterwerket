export default function Main() {
  return (
    <div className="mainContent">
      <div className="img-container">
        <div className="velg-blomst-knapp">
          <button type="button" className="utforsk">
            Se vårt utvalg
          </button>
        </div>
      </div>
      <div className="flex-container" id="utforsk" id="om-oss">
        <h2 className="titles">Om oss</h2>
        <div className="paragraph-text-front-page">
          <p>
            Blomster Werket er et lite blomster-verksted i Råde med fokus på det
            lille ekstra!
          </p>
        </div>
        <div className="paragraph-text-front-page">
          <p>
            Vi brenner for vakkert binderi, godt utvalg av tøffe planter,
            sesongens varer, bryllup og sorgbinderi!
          </p>
        </div>
      </div>
      <div className="flex-container" id="utforsk">
        <h2 className="titles">Tid & sted</h2>

        <div className="paragraph-text-front-page">
          <p>
            Torsdager 10 -18 fredager 10 -18 lørdager 10- 15 Ekornveien 4, 1640
            Råde (parker inne på gårdsplassen)
          </p>
        </div>
      </div>
    </div>
  );
}
