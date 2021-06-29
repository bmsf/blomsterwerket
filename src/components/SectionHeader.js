function ContentSections(props) {
  return (
    <div>
      <h2 className="titles">{props.title}</h2>
      <p className="paragraph-text-front-page">{props.text}</p>
    </div>
  );
}

export default ContentSections;
