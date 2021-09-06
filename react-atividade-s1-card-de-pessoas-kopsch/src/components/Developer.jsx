import "./styles.css";

const Developer = (prop) => {
  return (
    <div className="dev-card">
      <h2 className="dev-card__name">Dev: {prop.name}</h2>
      <h3 className="dev-card__age">Idade: {prop.age}</h3>
      <h3 className="dev-card__country">País: {prop.country}</h3>
    </div>
  );
};

export default Developer;
