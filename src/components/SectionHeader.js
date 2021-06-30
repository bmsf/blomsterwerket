function ContentSections({ title, text }) {
  return (
    <div>
      <h2 className="titles">{title}</h2>
      <p className="paragraph-text-front-page">{text}</p>
    </div>
  );
}

export default ContentSections;
