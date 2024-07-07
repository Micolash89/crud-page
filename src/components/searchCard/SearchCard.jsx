import "./searchCard.css";

function SearchCard() {
  return (
    <>
      <section className="searchCard">
        <section className="searchCard__section scProfile">
          <div className="searchCard__section--name"></div>
          <div className="searchCard__section--lastName"></div>
          <div className="searchCard__section--role"></div>
        </section>
        <section className="searchCard__section scInfo">
          <h4 className="searchCard__section---title"></h4>
          <div className="searchCard__section---scInfo sssci">
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
            <p>
              <span></span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default SearchCard;
