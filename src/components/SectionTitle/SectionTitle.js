function SectionTitle({ title, text }) {
  return (
    <div style={{ position: "absolute" }}>
      <h2 className="titles">{title}</h2>
      <p className="paragraph-text-front-page">{text}</p>
    </div>
  );
}

export default SectionTitle;
